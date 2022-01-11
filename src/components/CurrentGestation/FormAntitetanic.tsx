import React from "react";
import {
  Container,
  FormControl,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Grid,
} from "@material-ui/core";
import { antitetanicProps as iFormAntitetanicProps } from "../../interfaces/currentGestations";

const FormAntitetanic = (props: iFormAntitetanicProps): JSX.Element => {
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
          <FormLabel className='RadioLabel' component='legend'>
            Current?
          </FormLabel>
          <RadioGroup
            className='RadioCondition'
            aria-label='socialSec'
            name='plannedPregnancy'
            value={props.current}
            onChange={(e) => {
              props.updateCurrent(e.target.value);
            }}
          >
            <FormControlLabel control={<Radio />} value='true' label='Yes' />
            <FormControlLabel control={<Radio />} value='false' label='No' />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <TextField
            type='number'
            className='FormTextGeneral'
            id='size'
            label='Size'
            variant='outlined'
            size='small'
            value={props.dose1}
            style={{ width: 300 }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.updateDose1(parseInt(e.target.value));
            }}
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
            style={{ width: 300 }}
            value={props.dose2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.updateDose2(parseInt(e.target.value));
            }}
          />
        </FormControl>
      </Grid>
    </div>
  );
};

export default FormAntitetanic;
