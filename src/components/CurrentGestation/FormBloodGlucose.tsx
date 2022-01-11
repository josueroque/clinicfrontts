import React from "react";
import { bloodGlucoseProps as iBloodGlucoseProps } from "../../interfaces/currentGestations";
import { Grid, FormControl, TextField } from "@material-ui/core";
const FormBloodGlucose = (props: iBloodGlucoseProps) => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction='row'
        alignItems='center'
        justify='center'
        className='SyphilisContainer'
      >
        {" "}
        <FormControl>
          <TextField
            type='number'
            className='FormTextBloodGlucose'
            id='bloodGlucoseLess'
            label='Less than 20 weeks'
            variant='outlined'
            size='small'
            value={props.bloodGlucoseLessThanTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.updateBloodGlucoseLessThanTwenty(
                parseFloat(e.target.value)
              );
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            type='number'
            className='FormTextBloodGlucose'
            id='bloodGlucoseGreater'
            label='Greater than 20 weeks'
            variant='outlined'
            size='small'
            value={props.bloodGlucoseGreaterThanTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.updateBloodGlucoseGreaterThanTwenty(
                parseFloat(e.target.value)
              );
            }}
          />
        </FormControl>
      </Grid>
    </>
  );
};

export default FormBloodGlucose;
