import React from "react";
import { bloodGlucoseProps as iBloodGlucoseProps } from "../../interfaces/currentGestations";
import { Container, FormControl, TextField } from "@material-ui/core";
const FormBloodGlucose = (props: iBloodGlucoseProps) => {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
};

export default FormBloodGlucose;
