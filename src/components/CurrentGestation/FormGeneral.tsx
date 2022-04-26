import React from "react";
import { Grid, FormControl, TextField } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { setEditedGestation } from "../../store/actions/gestation";
import { useDispatch, useSelector } from "react-redux";

const Size = () => {
  const dispatch = useDispatch();
  const editedGestation = useSelector(
    (state: any) => state?.gestation?.editedGestation
  );

  return (
    <FormControl key='formSizeContainer'>
      <TextField
        type='number'
        className='FormTextGeneral'
        name='size'
        id='size'
        label='Size'
        variant='outlined'
        size='small'
        key='sizeGeneral'
        value={editedGestation?.size}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(
            setEditedGestation({
              ...editedGestation,
              size: parseFloat(e.target.value),
            })
          );
        }}
        style={{ width: 300 }}
      />
    </FormControl>
  );
};

const PreviousWeight = () => {
  const dispatch = useDispatch();
  const editedGestation = useSelector(
    (state: any) => state?.gestation?.editedGestation
  );
  return (
    <TextField
      type='number'
      className='FormTextGeneral'
      id='previousWeight'
      label='Previous Weight'
      variant='outlined'
      size='small'
      key='previousWeightGeneral'
      value={editedGestation?.previousWeight}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
          setEditedGestation({
            ...editedGestation,
            previousWeight: parseFloat(e.target.value),
          })
        );
      }}
      style={{ width: 300 }}
    />
  );
};

const FormGeneral = () => {
  const dispatch = useDispatch();
  const editedGestation = useSelector(
    (state: any) => state?.gestation?.editedGestation
  );
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
              value={editedGestation?.lastMenstruationDate}
              onChange={(e: any) => {
                console.log(e);
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    lastMenstruationDate: e,
                  })
                );
              }}
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
              value={editedGestation?.likelyDeliveryDate}
              onChange={(e: any) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    likelyDeliveryDate: e,
                  })
                );
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              style={{ width: 300 }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </FormControl>
      <Size />
      <PreviousWeight />
    </Grid>
  );
};

export default FormGeneral;
