import React, { Fragment, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Button, ButtonGroup } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import StepButton from "@material-ui/core/StepButton";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Paper from "@material-ui/core/Paper";
import { PatientsContext } from "../../context/PatientsContext";
import Loader from "../Loader";
import Sidebar from "../Sidebar";
import Typography from "@material-ui/core/Typography";
import { Patient } from "../../interfaces/patient";
import FormGeneral from "./FormGeneral";
import { History as IHistory } from "../../interfaces/history";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
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
      display: "inline-block",
    },
  })
);

function getSteps() {
  return [
    "General Data",
    "Antitetanic",
    "Visual Inspeccion",
    "Cervix",
    "Group",
    "Toxoplasmosis",
    "VIH",
    "Hemoglobin",
    "Syphilis",
    "Bacteriruria",
    "Blood Glocose",
  ];
}

const ActualGestation = (props: any): JSX.Element => {
  const [_id, update_Id] = useState<string>("");
  const [buttonLabel, updateBottonLabel] = useState("Save");
  const [patient, updatePatient] = useState<Patient | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [likelyDeliveryDate, updateLikelyDeliveryDate] = useState<Date | null>(
    new Date()
  );
  const [lastMenstruationDate, updateLastMenstruationDate] =
    useState<Date | null>(new Date());
  const [size, updateSize] = useState<number>(0);
  const [previousWeight, updatePreviousWeight] = useState<number>(0);
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

  const [completed, setCompleted] = React.useState(new Set<number>());
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const classes = useStyles();
  const steps = getSteps();

  const {
    getHistoryIdFunction,
    getPatientIdFunction,
    updateHistoryFunction,
    updateCurrentGestationFunction,
  } = useContext(PatientsContext);

  const wait = async (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const saveCurrentGestation = async () => {
    try {
      updateLoading(true);
      updateErrorStatus(true);
      updateSavedStatus(false);
      await wait(1000);
      updateLoading(false);
      updateSavedStatus(true);
      let response;
      let gestation = {
        idNumber: patient?._id,
        lastMenstruationDate,
        size,
        previousWeight,
        current,
        dose1,
        dose2,
        dental,
        mammary,
        visualInspection,
        papanicolao,
        colposcopy,
        group,
        positive,
        antiDGlobulin,
        toxoplasmosisLessThanTwenty,
        toxoplasmosisGreaterThanTwenty,
        toxoplasmosisFirst,
        vihRequestedLessThanTwenty,
        vihRequestedGreaterThanTwenty,
        vihDoneLessThanTwenty,
        vihDoneGreaterThanTwenty,
        hemoglobinlessThanTwenty,
        hemoglobinGreaterThanTwenty,
        syphilisVDRLLessThanTwenty,
        syphilisVDRLLessThanTwentyWeeks,
        syphilisVDRLGreaterThanTwenty,
        syphilisVDRLGreaterThanTwentyWeeks,
        syphilisFTALessThanTwenty,
        syphilisFTALessThanTwentyWeeks,
        syphilisFTAGreaterThanTwenty,
        syphilisFTAGreaterThanTwentyWeeks,
        syphilisTreatmentLessThanTwenty,
        syphilisTreatmentLessThanTwentyWeeks,
        syphilisTreatmentGreaterThanTwenty,
        syphilisTreatmentGreaterThanTwentyWeeks,
        syphilisPartnerTreatmentLessThanTwenty,
        syphilisPartnerTreatmentGreaterThanTwenty,
        bacteriuriaLessThanTwenty,
        bacteriuriaGreaterThanTwenty,
        bloodGlucoseLessThanTwenty,
        bloodGlucoseGreaterThanTwenty,
      };
      response = await updateCurrentGestationFunction(gestation);
      if (response.statusText === "OK") {
        updateErrorStatus(false);
      }
      await wait(1000);
    } catch (error: any) {
      swal("Something has failed!", error.toString(), "error");
      updateSavedStatus(true);
      updateErrorStatus(true);
    }
  };

  useEffect(() => {
    if (props.match?.params?.id) getPatient(props.match?.params?.id);
  }, []);

  useEffect(() => {
    if (patient) update_Id(patient._id);
  }, [patient]);

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <FormGeneral
            likelyDeliveryDate={likelyDeliveryDate}
            size={size}
            previousWeight={previousWeight}
            lastMenstruationDate={lastMenstruationDate}
            updateLikelyDeliveryDate={updateLikelyDeliveryDate}
            updateSize={updateSize}
            updatePreviousWeight={updatePreviousWeight}
            updateLastMenstruationDate={updateLastMenstruationDate}
          />
        );
      case 1:
        return (
          <FormAntitetanic
            current={current}
            dose1={dose1}
            dose2={dose2}
            updateCurrent={updateCurrent}
            updateDose1={updateDose1}
            updateDose2={updateDose2}
          />
        );
      case 2:
        return (
          <FormNormalExam
            dental={dental}
            mammary={mammary}
            updateDental={updateDental}
            updateMammary={updateMammary}
          />
        );
      case 3:
        return (
          <FormCervix
            visualInspection={visualInspection}
            papanicolao={papanicolao}
            colposcopy={colposcopy}
            updateVisualInspection={updateVisualInspection}
            updatePapanicolao={updatePapanicolao}
            updateColposcopy={updateColposcopy}
          />
        );
      case 4:
        return (
          <FormGroup
            group={group}
            positive={positive}
            antiDGlobulin={antiDGlobulin}
            updateGroup={updateGroup}
            updatePositive={updatePositive}
            updateAntiDGlobulin={updateAntiDGlobulin}
          />
        );
      case 5:
        return (
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
        );
      case 6:
        return (
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
        );
      case 7:
        return (
          <FormHemoglobin
            hemoglobinLessThanTwenty={hemoglobinlessThanTwenty}
            hemoglobinGreaterThanTwenty={hemoglobinGreaterThanTwenty}
            updateHemoglobinLessThanTwenty={updateHemoglobinLessThanTwenty}
            updateHemoglobinGreaterThanTwenty={
              updateHemoglobinGreaterThanTwenty
            }
          />
        );
      case 8:
        return (
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
        );
      case 9:
        return (
          <FormBacteriuria
            bateriuriaLessThatTwenty={bacteriuriaLessThanTwenty}
            bacteriuriaGreaterThanTwenty={bacteriuriaGreaterThanTwenty}
            updateBateriuriaLessThatTwenty={updateBacteriuriaLessThanTwenty}
            updateBacteriuriaGreaterThanTwenty={
              updateBacteriuriaGreaterThanTwenty
            }
          />
        );
      case 10:
        return (
          <FormBloodGlucose
            bloodGlucoseLessThanTwenty={bloodGlucoseLessThanTwenty}
            bloodGlucoseGreaterThanTwenty={bloodGlucoseGreaterThanTwenty}
            updateBloodGlucoseLessThanTwenty={updateBloodGlucoseLessThanTwenty}
            updateBloodGlucoseGreaterThanTwenty={
              updateBloodGlucoseGreaterThanTwenty
            }
          />
        );
      default:
        return "Unknown step";
    }
  }

  const getPatient: any = async (id: string) => {
    const patient = await getPatientIdFunction({ id: _id });
    console.log(patient);
    updatePatient(patient);
  };

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
    return null;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  return (
    <Fragment>
      <Sidebar></Sidebar>
      <Typography variant='h3' align='center' className='GestationTitle'>
        {`Current Gestation ${patient?.name} ${patient?.lastName}`}
      </Typography>
      <div className={classes.root}>
        <Stepper nonLinear activeStep={activeStep} orientation='vertical'>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const buttonProps: { optional?: React.ReactNode } = {};
            if (isStepOptional(index)) {
              buttonProps.optional = (
                <Typography variant='caption'>Optional</Typography>
              );
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
    </Fragment>
  );
};

export default requireAuth(ActualGestation);
