import React from "react";
import { hemoglobinProps as iHemoglobinProps } from "../../interfaces/currentGestations";
import { Container, FormControl, TextField } from "@material-ui/core";
const FormHemoglobin = (props: iHemoglobinProps) => {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
};

export default FormHemoglobin;
