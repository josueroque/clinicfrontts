import React from "react";
import { bateriuriaProps as iBacteriuriaProps } from "../../interfaces/currentGestations";
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Grid,
} from "@material-ui/core";

const FormToxoplasmosis = (props: iBacteriuriaProps) => {
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
        <FormControl>
          <FormLabel component='legend'>Less than 20 weeks</FormLabel>
          <RadioGroup
            className='RadioCondition '
            aria-label='toxoplasmosisLessThanTwenty'
            name='toxoplasmosisLessThanTwenty'
            value={props.bateriuriaLessThatTwenty}
            onChange={(e) => {
              props.updateBateriuriaLessThatTwenty(e.target.value);
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
            value={props.bacteriuriaGreaterThanTwenty}
            onChange={(e) => {
              props.updateBacteriuriaGreaterThanTwenty(e.target.value);
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
    </>
  );
};

export default FormToxoplasmosis;
