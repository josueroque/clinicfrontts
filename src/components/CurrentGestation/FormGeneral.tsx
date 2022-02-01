import React from "react";
import { Container, Grid, FormControl, TextField } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { formGeneralProps as iFormGeneralProps } from "../../interfaces/currentGestations";

const FormGeneral = (props: iFormGeneralProps) => {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction='row'
        alignItems='center'
        justify='center'
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
        <FormControl>
          <TextField
            type='number'
            className='FormTextGeneral'
            id='size'
            label='Size'
            variant='outlined'
            size='small'
            key='sizeGeneral'
            value={props.size}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.updateSize(parseFloat(e.target.value));
            }}
            style={{ width: 300 }}
          />
        </FormControl>
        <FormControl>
          <TextField
            type='number'
            className='FormTextGeneral'
            id='previousWeiht'
            label='Previous Weight'
            variant='outlined'
            size='small'
            key='previousWeihtGeneral'
            value={props.previousWeight}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.updatePreviousWeight(parseFloat(e.target.value));
            }}
            style={{ width: 300 }}
          />
        </FormControl>
      </Grid>
    </div>
  );
};

export default FormGeneral;
