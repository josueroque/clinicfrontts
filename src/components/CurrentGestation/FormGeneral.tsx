import React, { useReducer } from "react";
import { Grid, FormControl, TextField } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { formGeneralProps as iFormGeneralProps } from "../../interfaces/currentGestations";
import useFormValues from "../../hooks/useFormGeneral";
import {
  getCurrentGestationFunction,
  contextGestation,
  previousGestation,
  setCurrentGestationFunction,
  currentGestationReducer,
  useValues,
} from "../../context/CurrentsGestationContext";
console.log(contextGestation);
console.log(previousGestation);
const Size = (props: any) => {
  const { size, updateSize } = useFormValues();
  const [currentGestation, dispatchCurrent] = useReducer(
    currentGestationReducer,
    Object.keys(contextGestation).length === 0
      ? previousGestation
      : contextGestation
  );

  const handleChange = (value: number): void => {
    updateSize(value);
    setCurrentGestationFunction("size", value, dispatchCurrent);
  };
  console.log(contextGestation);
  console.log(previousGestation);
  console.log(currentGestation);

  return (
    <FormControl key='formSizeContainer'>
      <TextField
        type='number'
        className='FormTextGeneral'
        id='size'
        label='Size'
        variant='outlined'
        size='small'
        key='sizeGeneral'
        value={size}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(parseFloat(e.target.value));
        }}
        style={{ width: 300 }}
      />
    </FormControl>
  );
};

const PreviousWeight = () => {
  const { previousWeight, updatePreviousWeight } = useFormValues();
  return (
    <FormControl>
      <TextField
        type='number'
        className='FormTextGeneral'
        id='previousWeiht'
        label='Previous Weight'
        variant='outlined'
        size='small'
        key='previousWeihtGeneral'
        value={previousWeight}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          updatePreviousWeight(parseFloat(e.target.value));
        }}
        style={{ width: 300 }}
      />
    </FormControl>
  );
};

const FormGeneral = (props: iFormGeneralProps) => {
  return (
    <Grid
      container
      spacing={0}
      direction='row'
      alignItems='center'
      justify='center'
      key='formGrid'
    >
      <FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify='flex-start'>
            <KeyboardDatePicker
              className='FormTextGeneral'
              margin='normal'
              id='date-picker-dialog'
              label='Last menstruation date'
              format='dd/MM/yyyy'
              value={props.lastMenstruationDate}
              onChange={props.updateLastMenstruationDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              style={{ width: 300 }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </FormControl>
      <FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify='flex-start'>
            <KeyboardDatePicker
              className='FormTextGeneral'
              margin='normal'
              id='date-picker-dialog'
              label='Likely delivery date'
              format='dd/MM/yyyy'
              value={props.likelyDeliveryDate}
              onChange={props.updateLikelyDeliveryDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              style={{ width: 300 }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </FormControl>
      <Size currentGestation={props.currentGestation} />
      <PreviousWeight />
    </Grid>
  );
};

export default FormGeneral;
