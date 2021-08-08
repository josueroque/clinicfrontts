import React, { Fragment, useState,useContext,useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Container,Grid,Button,FormControl,TextField,FormLabel,FormGroup,
       RadioGroup,Radio,InputLabel,Select,MenuItem, ButtonGroup } 
       from '@material-ui/core';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import {PatientsContext} from '../context/PatientsContext';
import Loader from './Loader';
import Sidebar from './Sidebar';
import Typography from '@material-ui/core/Typography';
import {Patient} from '../interfaces/patient';
import {History as IHistory} from '../interfaces/history';
  
const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}),
);

function getSteps() {
  return ['General Data', 'Antitetanic', 'Visual Inspeccion','Cervix', 'Group'];
}


const ActualGestation = (props:any)=>{
  const [_id,update_Id] = useState<string>(''); 
  const [buttonLabel,updateBottonLabel] = useState('Save');
  const [patient,updatePatient] = useState<Patient|null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [likelyDeliveryDate, updateLikelyDeliveryDate] = useState<Date|null>(new Date());
  const [lastMenstruationDate, updateLastMenstruationDate] = useState<Date|null>(new Date());
  const [size, updateSize] = useState<number>(0);
  const [previousWeight, updatePreviousWeight] = useState<number>(0);
  
  const classes = useStyles();
  const steps = getSteps();

  const{saveHistoryFunction,
    getHistoryIdFunction,
    getPatientIdFunction,
    updateHistoryFunction}=useContext(PatientsContext);

    useEffect(() => {
        if (props.match?.params?.id){
          getPatient(props.match?.params?.id); 
        }
    },[])

    useEffect(()=>{
      console.log(patient)  
      if(patient){
         update_Id(patient._id);
      }
      
    },[patient])

    function getStepContent(step: number) {
      switch (step) {
        case 0:
          return (
            <Container>
              <FormControl > 
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify ="flex-start">
                    <KeyboardDatePicker 
                      className="FormTextGeneral"
                      margin="normal"
                      id="date-picker-dialog"
                      label="Last menstruation date"
                      format="dd/MM/yyyy"
                      value={lastMenstruationDate}
                      onChange={updateLastMenstruationDate}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                  />
                  </Grid>
                </MuiPickersUtilsProvider>
              </FormControl>
              <FormControl > 
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify ="flex-start">
                    <KeyboardDatePicker 
                      className="FormTextGeneral"
                      margin="normal"
                      id="date-picker-dialog"
                      label="Likely delivery date"
                      format="dd/MM/yyyy"
                      value={likelyDeliveryDate}
                      onChange={updateLikelyDeliveryDate}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                  />
                  </Grid>
                </MuiPickersUtilsProvider>
              </FormControl>
              <FormControl > 
                  <TextField 
                    type="text" 
                    className="FormTextGeneral"
                    id="idNumber"
                    label="Size"
                    variant="outlined"
                    size="small"
                    value={size}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{updateSize(parseFloat(e.target.value))}}
                  />
              </FormControl>         
              <FormControl > 
                  <TextField 
                    type="text" 
                    className="FormTextGeneral"
                    id="idNumber"
                    label="Previous Weight"
                    variant="outlined"
                    size="small"
                    value={previousWeight}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{updatePreviousWeight(parseFloat(e.target.value))}}
                  />
              </FormControl>         
            </Container>
          )
          ;
        case 1:
          return 'An ad group contains one or more ads which target a shared set of keywords.';
        case 2:
          return `Try out different ad text to see what brings in the most customers,
                  and learn how to enhance your ads using features like ad extensions.
                  If you run into any problems with your ads, find out how to tell if
                  they're running and how to resolve approval issues.`;
        default:
          return 'Unknown step';
      }
    }
    

    const getPatient:any = async(id:string) => {
        const patient = await getPatientIdFunction({id:_id});
        console.log(patient);
        updatePatient(patient); 
    }  

  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  

  return ( 
    <Fragment>
      <Sidebar></Sidebar>
      <h1 className="HistoryTitle"> 
          {`Current Gestation ${patient?.name} ${patient?.lastName}`  }
      </h1>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
      <Grid container justify="center"  className= "Button-Container">
        <ButtonGroup>
            <Link to={{pathname:`/general/`+_id}} className="Link" >
              <Button  className="HistoryButton" type="submit" variant="contained" color="primary"> History</Button>
            </Link>
            <Button className="HistoryButton" type="submit" variant="contained" color="primary">    {buttonLabel}   </Button>
          </ButtonGroup>                
        </Grid>
  </Fragment>
  );
};

export default ActualGestation;