import React, { Fragment, useState,useContext,useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Container,Grid,Button,FormControl,TextField,FormLabel,FormGroup,
       RadioGroup,Radio,InputLabel,Select,MenuItem, ButtonGroup } 
       from '@material-ui/core';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import StepButton from '@material-ui/core/StepButton';
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
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
}),
);

function getSteps() {
  return ['General Data', 'Antitetanic', 'Visual Inspeccion','Cervix', 'Group'
          ,'Toxoplasmosis', 'VIH', 'Hemoglobin', 'Syphilis',  'Bacteriruria', 'Blood Glocose' ];
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
  const [completed, setCompleted] = React.useState(new Set<number>());
  const [skipped, setSkipped] = React.useState(new Set<number>());
  
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
            <Container className='StepContent'>
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

  
    const totalSteps = () => {
      return steps.length;
    };
  
    const completedSteps = () => {
      return Object.keys(completed).length;
    };

    const isLastStep = () => {
      return activeStep === totalSteps() - 1;
    };
  
    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };

    const handleStep = (step: number) => () => {
      setActiveStep(step);
    };

    const skippedSteps = () => {
      return skipped.size;
    };

    const handleNext = () => {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
    };
  
    const handleComplete = () => {
      const newCompleted = new Set(completed);
      newCompleted.add(activeStep);
      setCompleted(newCompleted);
  
      /**
       * Sigh... it would be much nicer to replace the following if conditional with
       * `if (!this.allStepsComplete())` however state is not set when we do this,
       * thus we have to resort to not being very DRY.
       */
      if (completed.size !== totalSteps() - skippedSteps()) {
        handleNext();
      }
    };    
  
    const handleReset = () => {
      setActiveStep(0);
    };
    
    const isStepOptional = (step: number) => {
      return step === 1;
    };

    const isStepSkipped = (step: number) => {
      return skipped.has(step);
    };

  return ( 
        <Fragment>
          <Sidebar></Sidebar>
          <h1 className="HistoryTitle"> 
              {`Current Gestation ${patient?.name} ${patient?.lastName}`  }
          </h1>
          <div className={classes.root}>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical"  >
          {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const buttonProps: { optional?: React.ReactNode } = {};
          if (isStepOptional(index)) {
            buttonProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          function isStepComplete(step: number) {
            return completed.has(step);
          }

          return (
            <Step key={label}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
              <StepContent>
                <Typography>{getStepContent(activeStep)}</Typography>
              </StepContent>
            </Step>
          );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.instructions}>
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