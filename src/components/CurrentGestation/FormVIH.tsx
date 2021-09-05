import React from "react";
import { VIHProps as iVIHProps } from "../../interfaces/currentGestations";
import {
  Container,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";

const FormVIH = (props: iVIHProps) => {
  return (
    <div>
      <Container>
        <FormControl className='VihRadioGroup'>
          <FormLabel component='legend'>Requested less than 20 weeks</FormLabel>
          <RadioGroup
            className='RadioCondition '
            aria-label='VIH'
            name='vihRequestedLess'
            value={props.vihRequestedLessThanTwenty}
            onChange={(e) => {
              props.updateVihRequestedLessThanTwenty(e.target.value);
            }}
          >
            <FormControlLabel
              className='VihLabel'
              control={<Radio />}
              value='true'
              label='yes'
            />
            <FormControlLabel
              className='VihLabel'
              control={<Radio />}
              value='false'
              label='no'
            />
          </RadioGroup>
        </FormControl>
        <FormControl className='VihRadioGroup'>
          <FormLabel component='legend'>
            Requested greater than 20 weeks
          </FormLabel>
          <RadioGroup
            className='RadioCondition '
            aria-label='VIH'
            name='vihRequestedGreater'
            value={props.vihRequestedGreaterThanTwenty}
            onChange={(e) => {
              props.updateVihRequestedGreaterThanTwenty(e.target.value);
            }}
          >
            <FormControlLabel
              className='VihLabel'
              control={<Radio />}
              value='true'
              label='yes'
            />
            <FormControlLabel
              className='VihLabel'
              control={<Radio />}
              value='false'
              label='no'
            />
          </RadioGroup>
        </FormControl>
        <FormControl className='VihRadioGroup'>
          <FormLabel component='legend'>Done less than 20 weeks</FormLabel>
          <RadioGroup
            className='RadioCondition '
            aria-label='VIH'
            name='vihDoneLess'
            value={props.vihDoneLessThanTwenty}
            onChange={(e) => {
              props.updateVihDoneLessThanTwenty(e.target.value);
            }}
          >
            <FormControlLabel
              className='VihLabel'
              control={<Radio />}
              value='true'
              label='yes'
            />
            <FormControlLabel
              className='VihLabel'
              control={<Radio />}
              value='false'
              label='no'
            />
          </RadioGroup>
        </FormControl>
        <FormControl className='VihRadioGroup'>
          <FormLabel component='legend'>Done greater than 20 weeks</FormLabel>
          <RadioGroup
            className='RadioCondition '
            aria-label='VIH'
            name='vihDoneGreater'
            value={props.vihDoneGreaterThanTwenty}
            onChange={(e) => {
              props.updateVihDoneGreaterThanTwenty(e.target.value);
            }}
          >
            <FormControlLabel
              className='VihLabel'
              control={<Radio />}
              value='true'
              label='yes'
            />
            <FormControlLabel
              className='VihLabel'
              control={<Radio />}
              value='false'
              label='no'
            />
          </RadioGroup>
        </FormControl>
      </Container>
    </div>
  );
};

export default FormVIH;
