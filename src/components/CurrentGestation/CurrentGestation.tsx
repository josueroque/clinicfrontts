import React, {
  Fragment,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGestationAction } from "../../store/actions/gestation";
import { Link } from "react-router-dom";
import { Grid, Button, ButtonGroup, AppBar } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Loader from "../Loader";
import Sidebar from "../Sidebar";
import Typography from "@material-ui/core/Typography";
import { Patient } from "../../interfaces/patient";
import FormGeneral from "./FormGeneral";
import FormAntitetanic from "./FormAntitetanic";
import FormNormalExam from "./FormNormalExam";
import FormCervix from "./FormCervix";
import FormGroup from "./FormGroup";
import FormToxoplasmosis from "./FormToxoplasmosis";
import FormVIH from "./FormVIH";
import FormHemoglobin from "./FormHemoglobin";
import FormSyphilis from "./FormSyphilis";
import FormBacteriuria from "./FormBacteriuria";
import FormBloodGlucose from "./FormBloodGlucose";
import GestationButtonGroup from "./GestationBottonGroup/GestationButtonGroup";

import requireAuth from "../requireAuth";
import swal from "sweetalert";

import { PatientsContext } from "../../context/PatientsContext";

import { auth } from "../../context/UsersContext";

import useFormValues from "../../hooks/useFormGeneral";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const CurrentGestation = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  /*   const editedGestation = useSelector(
    (state: any) => state?.gestation?.editedGestation
  ); */
  const [_id, update_Id] = useState<string>("");
  const [buttonLabel, updateBottonLabel] = useState("Save");
  const [patient, updatePatient] = useState<Patient | null>(null);
  const currentGestation = useSelector(
    (state: any) => state?.gestation?.gestation
  );

  const [loading, updateLoading] = useState(false);
  const [errorStatus, updateErrorStatus] = useState(false);
  const [savedStatus, updateSavedStatus] = useState(false);
  const [updating, updateUpdating] = useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const classes = useStyles();

  const ScrollableTabsButtonAuto = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position='static' color='default'>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='scrollable'
            scrollButtons='auto'
            aria-label='scrollable auto tabs example'
          >
            <Tab label='General' {...a11yProps(0)} />
            <Tab label='Antitetanic' {...a11yProps(1)} />
            <Tab label='Visual Inspeccion' {...a11yProps(2)} />
            <Tab label='Cervix' {...a11yProps(3)} />
            <Tab label='Group' {...a11yProps(4)} />
            <Tab label='Toxoplasmosis' {...a11yProps(5)} />
            <Tab label='VIH' {...a11yProps(6)} />
            <Tab label='Hemoglobin' {...a11yProps(7)} />
            <Tab label='Syphilis' {...a11yProps(8)} />
            <Tab label='Bacteriruria' {...a11yProps(9)} />
            <Tab label='Blood Glocose' {...a11yProps(10)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <FormGeneral />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FormAntitetanic />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FormNormalExam />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <FormCervix />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <FormGroup />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <FormToxoplasmosis />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <FormVIH />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <FormHemoglobin />
        </TabPanel>
        <TabPanel value={value} index={8}>
          <FormSyphilis />
        </TabPanel>
        <TabPanel value={value} index={9}>
          <FormBacteriuria />
        </TabPanel>
        <TabPanel value={value} index={10}>
          <FormBloodGlucose />
        </TabPanel>
      </div>
    );
  };

  const {
    getPatientIdFunction,
    updateCurrentGestationFunction,
    saveCurrentGestationFunction,
  } = useContext(PatientsContext);

  useEffect(() => {
    if (props.match?.params?.id) {
      getPatient(props.match?.params?.id);
    }
  }, []);

  useEffect(() => {
    dispatch(getGestationAction({ _id: props.match?.params?.id }));
  }, [props.match?.params?.id, dispatch]);

  useEffect(() => {
    if (patient) update_Id(patient._id);
  }, [patient]);

  useEffect(() => {
    console.log(currentGestation);
  }, [currentGestation]);

  const getPatient: any = async () => {
    const patient = await getPatientIdFunction({ id: _id });
    updatePatient(patient);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: any) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
  }

  return (
    <Fragment>
      <Sidebar></Sidebar>
      <Typography variant='h4' align='center' className='GestationTitle'>
        {`Current Gestation ${patient?.name} ${patient?.lastName} `}
      </Typography>
      <div>
        <form
          className={classes.root}
          key='mainForm'
          noValidate
          autoComplete='off'
          /*           onSubmit={(e) => {
            e.preventDefault();
          }} */
        >
          <div style={{ marginTop: "20vh !important" }}>
            <ScrollableTabsButtonAuto key='ScrollableTabsButtonAutoForm' />
          </div>
          <Grid container justify='center' className='Button-Container'>
            <GestationButtonGroup
              updateLoading={updateLoading}
              updateErrorStatus={updateErrorStatus}
              updateSavedStatus={updateSavedStatus}
              _id={_id}
              buttonLabel={buttonLabel}
            ></GestationButtonGroup>
          </Grid>
        </form>
      </div>
    </Fragment>
  );
};

export default requireAuth(CurrentGestation);
