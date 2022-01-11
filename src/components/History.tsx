import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Button,
  FormControl,
  TextField,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  ButtonGroup,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import SideBar from "./Sidebar";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { PatientsContext } from "../context/PatientsContext";
import Loader from "./Loader";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import requireAuth from "./requireAuth";
import { Patient } from "../interfaces/patient";
import { History as IHistory } from "../interfaces/history";

function Alert(props: AlertProps): JSX.Element {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

function History(props: any) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [buttonLabel, updateBottonLabel] = useState("Save");
  const [updating, updateUpdating] = useState(false);
  const [name, updateName] = useState("");
  const [history, updateHistory] = useState<IHistory | null>(null);
  const [patient, updatePatient] = useState<Patient | null>(null);
  const [_id, update_Id] = useState<string>("");
  const [idNumber, updateIdNumber] = useState<string>("");
  const [familyTcb, updateFamilyTcb] = useState<boolean>(false);
  const [familyDiabetes, updateFamilyDiabetes] = useState<boolean>(false);
  const [familyHypertension, updateFamilyHypertension] =
    useState<boolean>(false);
  const [familyPreeclampsia, updateFamilyPreeclampsia] =
    useState<boolean>(false);
  const [familyEeclampssia, updateFamilyEeclampsia] = useState<boolean>(false);
  const [personalTcb, updatePersonalTcb] = useState<boolean>(false);
  const [personalDiabetes, updatePersonalDiabetes] = useState<boolean>(false);
  const [personalHypertension, updatePersonalHypertension] =
    useState<boolean>(false);
  const [personalPreeclampsia, updatePersonalPreeclampsia] =
    useState<boolean>(false);
  const [personalEeclampssia, updatePersonalEeclampsia] =
    useState<boolean>(false);
  const [surgery, updateSurgery] = useState<boolean>(false);
  const [infertility, updateInfertility] = useState<boolean>(false);
  const [heartDicease, updateHeartDicease] = useState<boolean>(false);
  const [kidneyDicease, updateKidneyDicease] = useState<boolean>(false);
  const [violence, updateViolence] = useState<boolean>(false);
  //Obstetrics
  const [previousGestation, updatePreviousGestation] = useState<number>(0);
  const [abortions, updateAbortions] = useState<number>(0);
  const [spontaneousConsecutive, updateSpontaneousConsecutive] =
    useState<string>("");
  const [deliveries, updateDeliveries] = useState<number>(0);
  const [vaginal, updateVaginal] = useState<number>(0);
  const [cesareans, updateCesareans] = useState<number>(0);
  const [bornAlive, updateBornAlive] = useState<number>(0);
  const [bornDead, updateBornDead] = useState<number>(0);
  const [deadFirstWeek, updateDeadFirstWeek] = useState<number>(0);
  const [deadAfterFirstWeek, updateDeadAfterFirstWeek] = useState<number>(0);
  const [stillAlive, updateStillAlive] = useState<number>(0);
  const [previousWeight, updatePreviousWeight] = useState<number>(0);
  const [twinsHistory, updateTwinsHistory] = useState<string>("");
  //Previous pregnancy
  const [endDate, updateEndDate] = useState<Date | null>(new Date());
  const [terminationCondition, updateTerminationCondition] =
    useState<string>("");
  const [plannedPregnancy, updatePlannedPregnancy] = useState<string>("");
  const [contraceptiveMethod, updateContraceptiveMethod] =
    useState<string>("none");
  //state
  const [loading, updateLoading] = useState<boolean>(false);
  const [errorStatus, updateErrorStatus] = useState<boolean>(false);
  const [savedStatus, updateSavedStatus] = useState<boolean>(false);

  const {
    saveHistoryFunction,
    getHistoryIdFunction,
    getPatientIdFunction,
    updateHistoryFunction,
  } = useContext(PatientsContext);

  useEffect(() => {
    if (props.match.params.id) {
      updateUpdating(true);
      update_Id(props.match.params.id);
      updateBottonLabel("Update");
      fetchPatient(props.match.params.id);
    } else {
      props.history.push("/search");
    }
  }, []);

  useEffect(() => {
    if (patient?._id && history) {
      update_Id(patient._id);
      updateIdNumber(patient.idNumber);
      updateFamilyTcb(history.familyTcb);
      updateFamilyDiabetes(history.familyDiabetes);
      updateFamilyHypertension(history.familyHypertension);
      updateFamilyPreeclampsia(history.familyPreeclampsia);
      updateFamilyEeclampsia(history.familyEeclampssia);
      updatePersonalTcb(history.personalTcb);
      updatePersonalDiabetes(history.personalDiabetes);
      updatePersonalHypertension(history.personalHypertension);
      updatePersonalPreeclampsia(history.personalPreeclampsia);
      updatePersonalEeclampsia(history.personalEeclampssia);
      updateSurgery(history.surgery);
      updateInfertility(history.infertility);
      updateHeartDicease(history.heartDicease);
      updateKidneyDicease(history.kidneyDicease);
      updateViolence(history.violence);
      updatePreviousGestation(history.previousGestation);
      updateAbortions(history.abortions);
      updateSpontaneousConsecutive(history.spontaneousConsecutive.toString());
      updateDeliveries(history.deliveries);
      updateVaginal(history.vaginal);
      updateCesareans(history.cesareans);
      updateBornAlive(history.bornAlive);
      updateBornDead(history.bornDead);
      updateDeadFirstWeek(history.deadAfterFirstWeek);
      updateDeadAfterFirstWeek(history.deadAfterFirstWeek);
      updateStillAlive(history.stillAlive);
      updatePreviousWeight(history.previousWeight);
      updateTwinsHistory(history.twinsHistory.toString());
      if (history.endDate) updateEndDate(history.endDate);
      updateTerminationCondition(history.terminationCondition);
      updatePlannedPregnancy(history.plannedPregnancy.toString());
      updateContraceptiveMethod(history.contraceptiveMethod);
      updateUpdating(true);
      updateBottonLabel("Update");
    } else {
      updateUpdating(false);
      update_Id(props.match.params.id);
      updateBottonLabel("Save");
    }
  }, [patient, history]);

  const fetchPatient = async (_idFetch: string) => {
    let fetchedPatient = await getHistoryIdFunction({ _id: _idFetch });
    let patientGeneral = await getPatientIdFunction({ id: _idFetch });
    updateName(patientGeneral.name + " " + patientGeneral.lastName);
    updateIdNumber(patientGeneral.idNumber);
    if (fetchedPatient) {
      updatePatient(fetchedPatient);
      updateHistory(fetchedPatient);
    }
    return;
  };

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const save = async (history: any) => {
    try {
      updateLoading(true);
      updateErrorStatus(true);
      updateSavedStatus(false);
      await wait(1000);
      updateLoading(false);
      updateSavedStatus(true);

      let response;
      if (updating !== true) {
        history._id = _id;
        response = await saveHistoryFunction(history);
      } else {
        history._id = _id;
        response = await updateHistoryFunction(history);
      }

      if (response.statusText === "OK") {
        updateErrorStatus(false);
      }
      await wait(1000);
    } catch (error) {
      console.log(error);
      updateSavedStatus(true);
      updateErrorStatus(true);
    }
  };

  const wait = async (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  return (
    <Fragment>
      <SideBar></SideBar>
      <Typography variant='h3' align='center' className='HistoryTitle'>
        {"History " + name}
      </Typography>
      <div className='CenteredDiv'>
        <FormControl>
          {savedStatus === true ? (
            <Alert severity={errorStatus === true ? "error" : "success"}>
              {errorStatus === true
                ? "An error occured, please check your data"
                : "History Information has been saved succefully!"}
            </Alert>
          ) : (
            ""
          )}
        </FormControl>
      </div>
      <Container className='Container-History'>
        <div className={classes.root}>
          {loading === true ? (
            <Loader></Loader>
          ) : (
            <form
              className={classes.root}
              noValidate
              autoComplete='off'
              onSubmit={(e) => {
                e.preventDefault();

                const history = {
                  idNumber,
                  familyTcb,
                  familyDiabetes,
                  familyHypertension,
                  familyPreeclampsia,
                  familyEeclampssia,
                  personalTcb,
                  personalDiabetes,
                  personalHypertension,
                  personalPreeclampsia,
                  personalEeclampssia,
                  surgery,
                  infertility,
                  heartDicease,
                  kidneyDicease,
                  violence,
                  previousGestation,
                  abortions,
                  spontaneousConsecutive,
                  deliveries,
                  vaginal,
                  cesareans,
                  bornAlive,
                  bornDead,
                  deadFirstWeek,
                  deadAfterFirstWeek,
                  stillAlive,
                  previousWeight,
                  twinsHistory,
                  endDate,
                  terminationCondition,
                  plannedPregnancy,
                  contraceptiveMethod,
                };

                save(history);
              }}
            >
              <AppBar className='AppBar' position='static' color='default'>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant='scrollable'
                  scrollButtons='on'
                  indicatorColor='primary'
                  textColor='primary'
                  aria-label='scrollable force tabs example'
                >
                  <Tab
                    label='Personal Family'
                    icon={<PhoneIcon />}
                    {...a11yProps(0)}
                  />
                  <Tab
                    label='Obstetrics'
                    icon={<FavoriteIcon />}
                    {...a11yProps(1)}
                  />
                  <Tab
                    label='Previous Pregnancy'
                    icon={<PersonPinIcon />}
                    {...a11yProps(2)}
                  />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <Container className='ContainerHistory'>
                  <Container>
                    <h3>Family</h3>
                    <FormGroup>
                      <FormControlLabel
                        key='familyTCB'
                        control={
                          <Checkbox
                            checked={familyTcb}
                            onChange={(e) => {
                              updateFamilyTcb(e.target.checked);
                            }}
                          />
                        }
                        label='TBC'
                        labelPlacement='start'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={familyDiabetes}
                            onChange={(e) => {
                              updateFamilyDiabetes(e.target.checked);
                            }}
                          />
                        }
                        label='Diabetes'
                        labelPlacement='start'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={familyHypertension}
                            onChange={(e) => {
                              updateFamilyHypertension(e.target.checked);
                            }}
                          />
                        }
                        label='Hypertension'
                        labelPlacement='start'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={familyPreeclampsia}
                            onChange={(e) => {
                              updateFamilyPreeclampsia(e.target.checked);
                            }}
                          />
                        }
                        label='Preeclampsia'
                        labelPlacement='start'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={familyEeclampssia}
                            onChange={(e) => {
                              updateFamilyEeclampsia(e.target.checked);
                            }}
                          />
                        }
                        label='Eeclampsia'
                        labelPlacement='start'
                      />
                    </FormGroup>
                  </Container>
                  <Container>
                    <h3>Personal</h3>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={personalTcb}
                            onChange={(e) => {
                              updatePersonalTcb(e.target.checked);
                            }}
                          />
                        }
                        label='TBC'
                        labelPlacement='start'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={personalDiabetes}
                            onChange={(e) => {
                              updatePersonalDiabetes(e.target.checked);
                            }}
                          />
                        }
                        label='Diabetes'
                        labelPlacement='start'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={personalHypertension}
                            onChange={(e) => {
                              updatePersonalHypertension(e.target.checked);
                            }}
                          />
                        }
                        label='Hypertension'
                        labelPlacement='start'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={personalPreeclampsia}
                            onChange={(e) => {
                              updatePersonalPreeclampsia(e.target.checked);
                            }}
                          />
                        }
                        label='Preeclampsia'
                        labelPlacement='start'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={personalEeclampssia}
                            onChange={(e) => {
                              updatePersonalEeclampsia(e.target.checked);
                            }}
                          />
                        }
                        label='Eeclampsia'
                        labelPlacement='start'
                      />
                    </FormGroup>
                  </Container>
                  <Container>
                    <br></br>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={surgery}
                            onChange={(e) => {
                              updateSurgery(e.target.checked);
                            }}
                          />
                        }
                        label='Surgery'
                        labelPlacement='start'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={infertility}
                            onChange={(e) => {
                              updateInfertility(e.target.checked);
                            }}
                          />
                        }
                        label='Infertility'
                        labelPlacement='start'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={heartDicease}
                            onChange={(e) => {
                              updateHeartDicease(e.target.checked);
                            }}
                          />
                        }
                        label='Heart disease'
                        labelPlacement='start'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={kidneyDicease}
                            onChange={(e) => {
                              updateKidneyDicease(e.target.checked);
                            }}
                          />
                        }
                        label='Kidney disease'
                        labelPlacement='start'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={violence}
                            onChange={(e) => {
                              updateViolence(e.target.checked);
                            }}
                          />
                        }
                        label='Violence'
                        labelPlacement='start'
                      />
                    </FormGroup>
                  </Container>
                </Container>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <FormGroup>
                  <Container className='Obstetrics'>
                    <FormControl className='Form-Obstetrics'>
                      <TextField
                        type='number'
                        className='FormNumber'
                        label='Previous Gestations'
                        variant='outlined'
                        size='small'
                        value={previousGestation}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          updatePreviousGestation(parseInt(e.target.value));
                        }}
                      />
                    </FormControl>

                    <FormControl className='Form-Obstetrics'>
                      <TextField
                        type='number'
                        className='FormNumber'
                        label='abortions'
                        variant='outlined'
                        size='small'
                        value={abortions}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          updateAbortions(parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormControl className='Form-Obstetrics Form-Obstetrics-Spontaneous'>
                      <FormLabel className='RadioLabel' component='legend'>
                        Spontaneous Consecutive
                      </FormLabel>
                      <RadioGroup
                        className='RadioCondition'
                        aria-label='socialSec'
                        name='spontaneousConsecutive'
                        value={spontaneousConsecutive}
                        onChange={(e) => {
                          updateSpontaneousConsecutive(e.target.value);
                        }}
                      >
                        <FormControlLabel
                          control={<Radio />}
                          value='true'
                          label='Yes'
                        />
                        <FormControlLabel
                          control={<Radio />}
                          value='false'
                          label='No'
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl className='Form-Obstetrics'>
                      <FormLabel className='RadioLabel' component='legend'>
                        Twins History
                      </FormLabel>
                      <RadioGroup
                        className='RadioCondition'
                        aria-label='socialSec'
                        name='twinsHistory'
                        value={twinsHistory}
                        onChange={(e) => {
                          updateTwinsHistory(e.target.value);
                        }}
                      >
                        <FormControlLabel
                          control={<Radio value='true' />}
                          label='Yes'
                        />
                        <FormControlLabel
                          control={<Radio value='false' />}
                          label='No'
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl className='Form-Obstetrics'>
                      <TextField
                        type='number'
                        className='FormNumber'
                        label='Deliveries'
                        variant='outlined'
                        size='small'
                        value={deliveries}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          updateDeliveries(parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormControl className='Form-Obstetrics'>
                      <TextField
                        type='number'
                        className='FormNumber'
                        label='Last Previous Weight(g)'
                        variant='outlined'
                        size='small'
                        value={previousWeight}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          updatePreviousWeight(parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormControl className='Form-Obstetrics'>
                      <TextField
                        type='number'
                        className='FormNumber'
                        label='Vaginal Deliveries'
                        variant='outlined'
                        size='small'
                        value={vaginal}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          updateVaginal(parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormControl className='Form-Obstetrics'>
                      <TextField
                        type='number'
                        className='FormNumber'
                        label='Cesareans'
                        variant='outlined'
                        size='small'
                        value={cesareans}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          updateCesareans(parseInt(e.target.value));
                        }}
                      />
                    </FormControl>

                    <FormControl className='Form-Obstetrics'>
                      <TextField
                        type='number'
                        className='FormNumber'
                        label='Born Dead'
                        variant='outlined'
                        size='small'
                        value={bornDead}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          updateBornDead(parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormControl className='Form-Obstetrics'>
                      <TextField
                        type='number'
                        className='FormNumber'
                        label='Dead First Week'
                        variant='outlined'
                        size='small'
                        value={deadFirstWeek}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          updateDeadFirstWeek(parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormControl className='Form-Obstetrics'>
                      <TextField
                        type='number'
                        className='FormNumber'
                        label='Dead After First Week'
                        variant='outlined'
                        size='small'
                        value={deadAfterFirstWeek}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          updateDeadAfterFirstWeek(parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormControl className='Form-Obstetrics'>
                      <TextField
                        type='number'
                        className='FormNumber'
                        label='Born Alive'
                        variant='outlined'
                        size='small'
                        value={bornAlive}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          updateBornDead(parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormControl className='Form-Obstetrics'>
                      <TextField
                        type='number'
                        className='FormNumber'
                        label='Still alive'
                        variant='outlined'
                        size='small'
                        value={stillAlive}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          updateStillAlive(parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                  </Container>
                </FormGroup>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Container className='Container-History'>
                  <FormGroup className='Form Previous-Pregnancy'>
                    <FormControl>
                      <FormLabel className='RadioLabel' component='legend'>
                        Termination Condition
                      </FormLabel>
                      <RadioGroup
                        className='RadioCondition'
                        aria-label='socialSec'
                        name='socialSec'
                        value={terminationCondition}
                        onChange={(e) => {
                          updateTerminationCondition(e.target.value);
                        }}
                      >
                        <FormControlLabel
                          control={<Radio value='normal' />}
                          label='Normal'
                        />
                        <FormControlLabel
                          control={<Radio value='cesarean' />}
                          label='Cesarean'
                        />
                        <FormControlLabel
                          control={<Radio value='abortion' />}
                          label='Abortion'
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container>
                          <KeyboardDatePicker
                            margin='normal'
                            id='date-picker-dialog'
                            label='Previous Pregnancy End Date'
                            format='MM/dd/yyyy'
                            value={endDate}
                            // onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateEndDate(new Date(e.target.value))}}
                            onChange={updateEndDate}
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                          />
                        </Grid>
                      </MuiPickersUtilsProvider>
                    </FormControl>
                    <FormControl>
                      <FormLabel className='RadioLabel' component='legend'>
                        Planned Pregnancy?
                      </FormLabel>
                      <RadioGroup
                        className='RadioCondition'
                        aria-label='socialSec'
                        name='plannedPregnancy'
                        value={plannedPregnancy}
                        onChange={(e) => {
                          updatePlannedPregnancy(e.target.value);
                        }}
                      >
                        <FormControlLabel
                          control={<Radio />}
                          value='true'
                          label='Yes'
                        />
                        <FormControlLabel
                          control={<Radio />}
                          value='false'
                          label='No'
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl>
                      <InputLabel id='demo-simple-select-label'>
                        Contraceptive Method{" "}
                      </InputLabel>
                      <Select
                        name='contraceptiveMethod'
                        value={contraceptiveMethod}
                        onChange={(e: any) => {
                          updateContraceptiveMethod(e.target.value);
                        }}
                      >
                        <MenuItem value='none'>None</MenuItem>
                        <MenuItem value='barrier'>Barrier</MenuItem>
                        <MenuItem value='diu'>DIU</MenuItem>
                        <MenuItem value='hormonal'>Hormonal</MenuItem>
                        <MenuItem value='emergency'>Emergency</MenuItem>
                        <MenuItem value='natural'>natural</MenuItem>
                      </Select>
                    </FormControl>
                  </FormGroup>
                </Container>
              </TabPanel>
              <Grid container justify='center' className='Button-Container'>
                <ButtonGroup>
                  <Link to={{ pathname: `/general/` + _id }} className='Link'>
                    <Button
                      className='HistoryButton'
                      type='submit'
                      variant='contained'
                      color='primary'
                    >
                      {" "}
                      History
                    </Button>
                  </Link>
                  <Button
                    className='HistoryButton'
                    type='submit'
                    variant='contained'
                    color='primary'
                  >
                    {" "}
                    {buttonLabel}{" "}
                  </Button>
                  <Link
                    to={{ pathname: `/currentgestation/` + _id }}
                    className='Link'
                  >
                    <Button
                      className='HistoryButton'
                      type='submit'
                      variant='contained'
                      color='primary'
                    >
                      {" "}
                      Current Gestation
                    </Button>
                  </Link>
                </ButtonGroup>
              </Grid>
            </form>
          )}
        </div>
      </Container>
    </Fragment>
  );
}
export default requireAuth(History);
//export default  History;
