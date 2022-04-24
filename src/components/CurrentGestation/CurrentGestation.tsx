import React, {
  Fragment,
  useState,
  useContext,
  useEffect,
  useCallback,
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

import requireAuth from "../requireAuth";
import swal from "sweetalert";

import { PatientsContext } from "../../context/PatientsContext";

import {
  getCurrentGestationFunction,
  contextGestation,
  previousGestation,
  setCurrentGestationFunction,
  setPreviousGestationFunction,
  previousGestationReducer,
} from "../../context/CurrentsGestationContext";

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

  const [localPreviousGestation, dispatchPrevious] = useReducer(
    previousGestationReducer,
    previousGestation
  );

  // const [previousGestation, setPreviousGestation] = useState<any>({});

  const [_id, update_Id] = useState<string>("");
  const [buttonLabel, updateBottonLabel] = useState("Save");
  const [patient, updatePatient] = useState<Patient | null>(null);
  //  const [currentGestation, updateCurrentGestation] = useState<any | null>(null);

  const [likelyDeliveryDate, updateLikelyDeliveryDate] = useState<Date | null>(
    new Date()
  );
  const [lastMenstruationDate, updateLastMenstruationDate] =
    useState<Date | null>(new Date());
  //const [size, updateSize] = useState<number>(0);

  const [current, updateCurrent] = useState<string>("");
  const [dose1, updateDose1] = useState<number | null>(0);
  const [dose2, updateDose2] = useState<number | null>(0);
  const [dental, updateDental] = useState<string>("");
  const [mammary, updateMammary] = useState<string>("");
  const [visualInspection, updateVisualInspection] = useState<string>("");
  const [papanicolao, updatePapanicolao] = useState<string>("");
  const [colposcopy, updateColposcopy] = useState<string>("");
  const [group, updateGroup] = useState<string>("");
  const [positive, updatePositive] = useState<string>("");
  const [antiDGlobulin, updateAntiDGlobulin] = useState<string | null>("");
  const [toxoplasmosisLessThanTwenty, updateToxoplasmosisLessThanTwenty] =
    useState<string | null>("");
  const [toxoplasmosisGreaterThanTwenty, updateToxoplasmosisGreaterThanTwenty] =
    useState<string | null>("");
  const [toxoplasmosisFirst, updateToxoplasmosisFirst] = useState<
    string | null
  >("");
  const [vihRequestedLessThanTwenty, updateVihRequestedLessThanTwenty] =
    useState("");
  const [vihRequestedGreaterThanTwenty, updateVihRequestedGreaterThanTwenty] =
    useState("");
  const [vihDoneLessThanTwenty, updateVihDoneLessThanTwenty] = useState("");
  const [vihDoneGreaterThanTwenty, updateVihDoneGreaterThanTwenty] =
    useState("");
  const [hemoglobinlessThanTwenty, updateHemoglobinLessThanTwenty] =
    useState(0);
  const [hemoglobinGreaterThanTwenty, updateHemoglobinGreaterThanTwenty] =
    useState(0);
  // Syphilis
  const [syphilisVDRLLessThanTwenty, updateSyphilisVDRLLessThanTwenty] =
    useState<string>("");
  const [
    syphilisVDRLLessThanTwentyWeeks,
    updateSyphilisVDRLLessThanTwentyWeeks,
  ] = useState<number | null>(null);
  const [syphilisVDRLGreaterThanTwenty, updateSyphilisVDRLGreaterThanTwenty] =
    useState<string>("");
  const [
    syphilisVDRLGreaterThanTwentyWeeks,
    updateSyphilisVDRLGreaterThanTwentyWeeks,
  ] = useState<number | null>(null);
  const [syphilisFTALessThanTwenty, updateSyphilisFTALessThanTwenty] =
    useState<string>("");
  const [syphilisFTALessThanTwentyWeeks, updateSyphilisFTALessThanTwentyWeeks] =
    useState<number | null>(null);
  const [syphilisFTAGreaterThanTwenty, updateSyphilisFTAGreaterThanTwenty] =
    useState<string>("");
  const [
    syphilisFTAGreaterThanTwentyWeeks,
    updateSyphilisFTAGreaterThanTwentyWeeks,
  ] = useState<number | null>(null);
  const [
    syphilisTreatmentLessThanTwenty,
    updateSyphilisTreatmentLessThanTwenty,
  ] = useState<string>("");
  const [
    syphilisTreatmentLessThanTwentyWeeks,
    updateSyphilisTreatmentLessThanTwentyWeeks,
  ] = useState<number | null>(null);
  const [
    syphilisTreatmentGreaterThanTwenty,
    updateSyphilisTreatmentGreaterThanTwenty,
  ] = useState<string>("");
  const [
    syphilisTreatmentGreaterThanTwentyWeeks,
    updateSyphilisTreatmentGreaterThanTwentyWeeks,
  ] = useState<number | null>(null);
  const [
    syphilisPartnerTreatmentLessThanTwenty,
    updateSyphilisPartnerTreatmentLessThanTwenty,
  ] = useState<string>("");
  const [
    syphilisPartnerTreatmentGreaterThanTwenty,
    updateSyphilisPartnerTreatmentGreaterThanTwenty,
  ] = useState<string>("");
  const [bacteriuriaLessThanTwenty, updateBacteriuriaLessThanTwenty] =
    useState<string>("");
  const [bacteriuriaGreaterThanTwenty, updateBacteriuriaGreaterThanTwenty] =
    useState<string>("");
  const [bloodGlucoseLessThanTwenty, updateBloodGlucoseLessThanTwenty] =
    useState(0);
  const [bloodGlucoseGreaterThanTwenty, updateBloodGlucoseGreaterThanTwenty] =
    useState(0);

  const [loading, updateLoading] = useState(false);
  const [errorStatus, updateErrorStatus] = useState(false);
  const [savedStatus, updateSavedStatus] = useState(false);
  const [updating, updateUpdating] = useState(false);

  const [value, setValue] = React.useState(0);

  const { updatePreviousWeight, updateSize, size, previousWeight } =
    useFormValues();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const classes = useStyles();

  const ScrollableTabsButtonAuto = () => {
    const classes = useStyles();
    // console.log(contextGestation);
    console.log(previousGestation);
    console.log(localPreviousGestation);
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
          <FormGeneral
            previousGestation={previousGestation}
            size={size}
            updateSize={updateSize}
            currentGestation={contextGestation}
            likelyDeliveryDate={likelyDeliveryDate}
            lastMenstruationDate={lastMenstruationDate}
            updateLikelyDeliveryDate={updateLikelyDeliveryDate}
            updateLastMenstruationDate={updateLastMenstruationDate}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FormAntitetanic
            current={current}
            dose1={dose1}
            dose2={dose2}
            updateCurrent={updateCurrent}
            updateDose1={updateDose1}
            updateDose2={updateDose2}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FormNormalExam
            dental={dental}
            mammary={mammary}
            updateDental={updateDental}
            updateMammary={updateMammary}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <FormCervix
            visualInspection={visualInspection}
            papanicolao={papanicolao}
            colposcopy={colposcopy}
            updateVisualInspection={updateVisualInspection}
            updatePapanicolao={updatePapanicolao}
            updateColposcopy={updateColposcopy}
          />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <FormGroup
            group={group}
            positive={positive}
            antiDGlobulin={antiDGlobulin}
            updateGroup={updateGroup}
            updatePositive={updatePositive}
            updateAntiDGlobulin={updateAntiDGlobulin}
          />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <FormToxoplasmosis
            toxoplasmosisLessThanTwenty={toxoplasmosisLessThanTwenty}
            toxoplasmosisGreaterThanTwenty={toxoplasmosisGreaterThanTwenty}
            toxoplasmosisFirst={toxoplasmosisFirst}
            updateToxoplasmosisLessThanTwenty={
              updateToxoplasmosisLessThanTwenty
            }
            updateToxoplasmosisGreaterThanTwenty={
              updateToxoplasmosisGreaterThanTwenty
            }
            updateToxoplasmosisFirst={updateToxoplasmosisFirst}
          />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <FormVIH
            vihRequestedLessThanTwenty={vihRequestedLessThanTwenty}
            vihRequestedGreaterThanTwenty={vihRequestedGreaterThanTwenty}
            vihDoneLessThanTwenty={vihDoneLessThanTwenty}
            vihDoneGreaterThanTwenty={vihDoneGreaterThanTwenty}
            updateVihRequestedLessThanTwenty={updateVihRequestedLessThanTwenty}
            updateVihRequestedGreaterThanTwenty={
              updateVihRequestedGreaterThanTwenty
            }
            updateVihDoneLessThanTwenty={updateVihDoneLessThanTwenty}
            updateVihDoneGreaterThanTwenty={updateVihDoneGreaterThanTwenty}
          />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <FormHemoglobin
            hemoglobinLessThanTwenty={hemoglobinlessThanTwenty}
            hemoglobinGreaterThanTwenty={hemoglobinGreaterThanTwenty}
            updateHemoglobinLessThanTwenty={updateHemoglobinLessThanTwenty}
            updateHemoglobinGreaterThanTwenty={
              updateHemoglobinGreaterThanTwenty
            }
          />
        </TabPanel>
        <TabPanel value={value} index={8}>
          <FormSyphilis
            syphilisVDRLLessThanTwenty={syphilisVDRLLessThanTwenty}
            syphilisVDRLLessThanTwentyWeeks={syphilisVDRLLessThanTwentyWeeks}
            syphilisVDRLGreaterThanTwenty={syphilisVDRLGreaterThanTwenty}
            syphilisVDRLGreaterThanTwentyWeeks={
              syphilisVDRLGreaterThanTwentyWeeks
            }
            syphilisFTALessThanTwenty={syphilisFTALessThanTwenty}
            syphilisFTALessThanTwentyWeeks={syphilisFTALessThanTwentyWeeks}
            syphilisFTAGreaterThanTwenty={syphilisFTAGreaterThanTwenty}
            syphilisFTAGreaterThanTwentyWeeks={
              syphilisFTAGreaterThanTwentyWeeks
            }
            syphilisTreatmentLessThanTwenty={syphilisTreatmentLessThanTwenty}
            syphilisTreatmentLessThanTwentyWeeks={
              syphilisTreatmentLessThanTwentyWeeks
            }
            syphilisTreatmentGreaterThanTwenty={
              syphilisTreatmentGreaterThanTwenty
            }
            syphilisTreatmentGreaterThanTwentyWeeks={
              syphilisTreatmentGreaterThanTwentyWeeks
            }
            syphilisPartnerTreatmentLessThanTwenty={
              syphilisPartnerTreatmentLessThanTwenty
            }
            syphilisPartnerTreatmentGreaterThanTwenty={
              syphilisPartnerTreatmentGreaterThanTwenty
            }
            updateSyphilisVDRLLessThanTwenty={updateSyphilisVDRLLessThanTwenty}
            updateSyphilisVDRLLessThanTwentyWeeks={
              updateSyphilisVDRLLessThanTwentyWeeks
            }
            updateSyphilisVDRLGreaterThanTwenty={
              updateSyphilisVDRLGreaterThanTwenty
            }
            updateSyphilisVDRLGreaterThanTwentyWeeks={
              updateSyphilisVDRLGreaterThanTwentyWeeks
            }
            updateSyphilisFTALessThanTwenty={updateSyphilisFTALessThanTwenty}
            updateSyphilisFTALessThanTwentyWeeks={
              updateSyphilisFTALessThanTwentyWeeks
            }
            updateSyphilisFTAGreaterThanTwenty={
              updateSyphilisFTAGreaterThanTwenty
            }
            updateSyphilisFTAGreaterThanTwentyWeeks={
              updateSyphilisFTAGreaterThanTwentyWeeks
            }
            updateSyphilisTreatmentLessThanTwenty={
              updateSyphilisTreatmentLessThanTwenty
            }
            updateSyphilisTreatmentLessThanTwentyWeeks={
              updateSyphilisTreatmentLessThanTwentyWeeks
            }
            updateSyphilisTreatmentGreaterThanTwenty={
              updateSyphilisTreatmentGreaterThanTwenty
            }
            updateSyphilisTreatmentGreaterThanTwentyWeeks={
              updateSyphilisTreatmentGreaterThanTwentyWeeks
            }
            updateSyphilisPartnerTreatmentLessThanTwenty={
              updateSyphilisPartnerTreatmentLessThanTwenty
            }
            updateSyphilisPartnerTreatmentGreaterThanTwenty={
              updateSyphilisPartnerTreatmentGreaterThanTwenty
            }
          />
        </TabPanel>
        <TabPanel value={value} index={9}>
          <FormBacteriuria
            bateriuriaLessThatTwenty={bacteriuriaLessThanTwenty}
            bacteriuriaGreaterThanTwenty={bacteriuriaGreaterThanTwenty}
            updateBateriuriaLessThatTwenty={updateBacteriuriaLessThanTwenty}
            updateBacteriuriaGreaterThanTwenty={
              updateBacteriuriaGreaterThanTwenty
            }
          />
        </TabPanel>
        <TabPanel value={value} index={10}>
          <FormBloodGlucose
            bloodGlucoseLessThanTwenty={bloodGlucoseLessThanTwenty}
            bloodGlucoseGreaterThanTwenty={bloodGlucoseGreaterThanTwenty}
            updateBloodGlucoseLessThanTwenty={updateBloodGlucoseLessThanTwenty}
            updateBloodGlucoseGreaterThanTwenty={
              updateBloodGlucoseGreaterThanTwenty
            }
          />
        </TabPanel>
      </div>
    );
  };

  const {
    getHistoryIdFunction,
    getPatientIdFunction,
    updateHistoryFunction,
    updateCurrentGestationFunction,
    saveCurrentGestationFunction,
  } = useContext(PatientsContext);

  const wait = async (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const saveCurrentGestation = async (gestation: any) => {
    try {
      updateLoading(true);
      updateErrorStatus(true);
      updateSavedStatus(false);
      await wait(1000);
      updateLoading(false);
      updateSavedStatus(true);
      let response;
      if (contextGestation) {
        response = await updateCurrentGestationFunction(gestation);
      } else response = await saveCurrentGestationFunction(gestation);

      if (response.statusText === "OK") {
        updateErrorStatus(false);
      }
      await wait(1000);
      swal("Changes has been saved!", "", "success");
    } catch (error: any) {
      swal("Something has failed!", error.toString(), "error");
      updateSavedStatus(true);
      updateErrorStatus(true);
    }
  };

  useEffect(() => {
    if (props.match?.params?.id) {
      getPatient(props.match?.params?.id);
    }
  }, []);

  useEffect(() => {
    console.log("hola");
    dispatch(getGestationAction({ _id: props.match?.params?.id }));
    //  getCurrentGestation({ id: props.match?.params?.id });
  }, [props.match?.params?.id]);

  useEffect(() => {
    if (patient) update_Id(patient._id);
  }, [patient]);

  const getPatient: any = async () => {
    const patient = await getPatientIdFunction({ id: _id });
    updatePatient(patient);
  };

  const getCurrentGestation: any = async () => {
    const gestation = await getCurrentGestationFunction({
      _id: props.match?.params?.id,
    });
    console.log(gestation);
    if (gestation) {
      //   await setCurrentGestationFunction('size',value);
      setPreviousGestationFunction(gestation, dispatchPrevious);
      //      setPreviousGestation(gestation);
      updateBottonLabel("UPDATE");
    }
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

  const toBoolean = (value: string | null): boolean | null | undefined => {
    if (value === "" || value === null) return null;
    if (value.toUpperCase() === "true") return true;
    if (value.toLowerCase() === "false") return false;
    return undefined;
  };

  console.log("hola");
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
          onSubmit={(e) => {
            e.preventDefault();
            let gestation = {
              _id: patient?._id,
              idNumber: patient?.idNumber,
              lastMenstruationDate,
              size,
              previousWeight,
              current,
              dose1,
              dose2,
              dental: toBoolean(dental),
              mammary: toBoolean(mammary),
              visualInspection: toBoolean(visualInspection),
              papanicolao: toBoolean(papanicolao),
              colposcopy: toBoolean(colposcopy),
              group,
              positive: toBoolean(positive),
              antiDGlobulin,
              toxoplasmosisLessThanTwenty: toBoolean(
                toxoplasmosisLessThanTwenty
              ),
              toxoplasmosisGreaterThanTwenty: toBoolean(
                toxoplasmosisGreaterThanTwenty
              ),
              toxoplasmosisFirst: toBoolean(toxoplasmosisFirst),
              vihRequestedLessThanTwenty: toBoolean(vihRequestedLessThanTwenty),
              vihRequestedGreaterThanTwenty: toBoolean(
                vihRequestedGreaterThanTwenty
              ),
              vihDoneLessThanTwenty: toBoolean(vihDoneLessThanTwenty),
              vihDoneGreaterThanTwenty: toBoolean(vihDoneGreaterThanTwenty),
              hemoglobinlessThanTwenty,
              hemoglobinGreaterThanTwenty,
              syphilisVDRLLessThanTwenty: toBoolean(syphilisVDRLLessThanTwenty),
              syphilisVDRLLessThanTwentyWeeks,
              syphilisVDRLGreaterThanTwenty: toBoolean(
                syphilisVDRLGreaterThanTwenty
              ),
              syphilisVDRLGreaterThanTwentyWeeks,
              syphilisFTALessThanTwenty: toBoolean(syphilisFTALessThanTwenty),
              syphilisFTALessThanTwentyWeeks,
              syphilisFTAGreaterThanTwenty: toBoolean(
                syphilisFTAGreaterThanTwenty
              ),
              syphilisFTAGreaterThanTwentyWeeks,
              syphilisTreatmentLessThanTwenty: toBoolean(
                syphilisTreatmentLessThanTwenty
              ),
              syphilisTreatmentLessThanTwentyWeeks,
              syphilisTreatmentGreaterThanTwenty: toBoolean(
                syphilisTreatmentGreaterThanTwenty
              ),
              syphilisTreatmentGreaterThanTwentyWeeks,
              syphilisPartnerTreatmentLessThanTwenty: toBoolean(
                syphilisPartnerTreatmentLessThanTwenty
              ),
              syphilisPartnerTreatmentGreaterThanTwenty: toBoolean(
                syphilisPartnerTreatmentGreaterThanTwenty
              ),
              bacteriuriaLessThanTwenty: toBoolean(bacteriuriaLessThanTwenty),
              bacteriuriaGreaterThanTwenty: toBoolean(
                bacteriuriaGreaterThanTwenty
              ),
              bloodGlucoseLessThanTwenty,
              bloodGlucoseGreaterThanTwenty,
            };

            saveCurrentGestation(gestation);
          }}
        >
          <div style={{ marginTop: "20vh !important" }}>
            <ScrollableTabsButtonAuto key='ScrollableTabsButtonAutoForm' />
          </div>
          <Grid container justify='center' className='Button-Container'>
            <ButtonGroup>
              <Link to={{ pathname: `/general/` + _id }} className='Link'>
                <Button
                  className='HistoryButton'
                  type='submit'
                  variant='contained'
                  color='primary'
                >
                  History
                </Button>
              </Link>
              <Button
                className='HistoryButton'
                type='submit'
                variant='contained'
                color='primary'
                onClick={saveCurrentGestation}
              >
                {buttonLabel}
              </Button>
            </ButtonGroup>
          </Grid>
        </form>
      </div>
    </Fragment>
  );
};

export default requireAuth(CurrentGestation);