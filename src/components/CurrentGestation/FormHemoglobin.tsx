import React from "react";
import { hemoglobinProps as iHemoglobinProps } from "../../interfaces/currentGestations";
import { Grid, FormControl, TextField } from "@material-ui/core";
const FormHemoglobin = (props: iHemoglobinProps) => {
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
          <TextField
            type='number'
            className='FormTextHemoglobin'
            id='hemoglobinLess'
            label='Less than 20 weeks'
            variant='outlined'
            size='small'
            value={props.hemoglobinLessThanTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.updateHemoglobinLessThanTwenty(parseFloat(e.target.value));
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            type='number'
            className='FormTextHemoglobin'
            id='hemoglobinGreater'
            label='Greater than 20 weeks'
            variant='outlined'
            size='small'
            value={props.hemoglobinGreaterThanTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.updateHemoglobinGreaterThanTwenty(
                parseFloat(e.target.value)
              );
            }}
          />
        </FormControl>
      </Grid>
    </div>
  );
};

export default FormHemoglobin;
