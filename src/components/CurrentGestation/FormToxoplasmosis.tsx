import React from "react";
import { toxoplasmosisProps as iToxoplasmosisProps } from "../../interfaces/currentGestations";
import {
  Grid,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";

const FormToxoplasmosis = (props: iToxoplasmosisProps) => {
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
          <FormLabel component='legend'>Less than 20 weeks</FormLabel>
          <RadioGroup
            className='RadioCondition '
            aria-label='toxoplasmosisLessThanTwenty'
            name='toxoplasmosisLessThanTwenty'
            value={props.toxoplasmosisLessThanTwenty}
            onChange={(e) => {
              props.updateToxoplasmosisLessThanTwenty(e.target.value);
            }}
          >
            <FormControlLabel
              className='ToxoLabel'
              control={<Radio />}
              value='true'
              label='yes'
            />
            <FormControlLabel
              className='ToxoLabel'
              control={<Radio />}
              value='false'
              label='no'
            />
            <FormControlLabel
              className='ToxoLabel'
              control={<Radio />}
              value='null'
              label='N/A'
            />
          </RadioGroup>
        </FormControl>

        <FormControl className='ToxoRadioGroup'>
          <FormLabel component='legend'>
            Equal or greater than 20 weeks
          </FormLabel>
          <RadioGroup
            className='RadioCondition'
            aria-label='toxoplasmosisGreaterThanTwenty'
            name='toxoplasmosisGreaterThanTwenty'
            value={props.toxoplasmosisGreaterThanTwenty}
            onChange={(e) => {
              props.updateToxoplasmosisGreaterThanTwenty(e.target.value);
            }}
          >
            <FormControlLabel
              className='ToxoLabel'
              control={<Radio />}
              value='true'
              label='yes'
            />
            <FormControlLabel
              className='ToxoLabel'
              control={<Radio />}
              value='false'
              label='no'
            />
            <FormControlLabel
              className='ToxoLabel'
              control={<Radio />}
              value='null'
              label='N/A'
            />
          </RadioGroup>
        </FormControl>

        <FormControl className='ToxoRadioGroup'>
          <FormLabel component='legend'>First consultation</FormLabel>
          <RadioGroup
            className='RadioCondition'
            aria-label='toxoplasmosisFirst'
            name='toxoplasmosisFirst'
            value={props.toxoplasmosisFirst}
            onChange={(e) => {
              props.updateToxoplasmosisFirst(e.target.value);
            }}
          >
            <FormControlLabel
              className='ToxoLabel'
              control={<Radio />}
              value='true'
              label='yes'
            />
            <FormControlLabel
              className='ToxoLabel'
              control={<Radio />}
              value='false'
              label='no'
            />
            <FormControlLabel
              className='ToxoLabel'
              control={<Radio />}
              value='null'
              label='N/A'
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </div>
  );
};

export default FormToxoplasmosis;
