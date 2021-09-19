import React, { ChangeEvent } from "react";
import {
  Container,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  TextField,
} from "@material-ui/core";
import { siphilysProps as iSyphilisProps } from "../../interfaces/currentGestations";
const FormSyphilis = (props: iSyphilisProps) => {
  return (
    <div>
      <Container className='SyphilisContainer'>
        <FormControl>
          <FormLabel>{`VLDR < 20 weeks`}</FormLabel>
          <RadioGroup
            className='RadioCondition'
            aria-label='syphilis'
            name='syphilis'
            value={props.syphilisVDRLLessThanTwenty}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              props.updateSyphilisVDRLLessThanTwenty(e.target.value);
            }}
          >
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='true'
              label=' + '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='false'
              label=' - '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='null'
              label='Unknown'
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <TextField
            type='number'
            className='FormTextSyphilis'
            id='syphilisLess'
            label='Week number'
            variant='outlined'
            size='small'
            value={props.syphilisVDRLLessThanTwentyWeeks}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.updateSyphilisVDRLLessThanTwentyWeeks(
                parseFloat(e.target.value)
              );
            }}
          />
        </FormControl>
      </Container>
      <Container className='SyphilisContainer'>
        <FormControl>
          <FormLabel>{`VLDR >= 20 weeks`}</FormLabel>
          <RadioGroup
            className='RadioConditionSyphillisFTA'
            aria-label='syphilis'
            name='syphilis'
            value={props.syphilisVDRLGreaterThanTwenty}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              props.updateSyphilisVDRLGreaterThanTwenty(e.target.value);
            }}
          >
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='true'
              label=' + '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='false'
              label=' - '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='null'
              label='Unknown'
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='NA'
              label='N/A'
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <TextField
            type='number'
            className='FormTextSyphilisGreater'
            id='syphilisLess'
            label='Week number'
            variant='outlined'
            size='small'
            value={props.syphilisVDRLGreaterThanTwentyWeeks}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.updateSyphilisVDRLGreaterThanTwentyWeeks(
                parseFloat(e.target.value)
              );
            }}
          />
        </FormControl>
      </Container>

      <Container className='SyphilisContainer'>
        <FormControl>
          <FormLabel>{`FTA confirmed? < 20 weeks`}</FormLabel>
          <RadioGroup
            className='RadioCondition'
            aria-label='syphilis'
            name='syphilis'
            value={props.syphilisFTALessThanTwenty}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              props.updateSyphilisFTALessThanTwenty(e.target.value);
            }}
          >
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='true'
              label=' + '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='false'
              label=' - '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='null'
              label='Unknown'
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <TextField
            type='number'
            className='FormTextSyphilis'
            id='syphilisLess'
            label='Week number'
            variant='outlined'
            size='small'
            value={props.syphilisFTALessThanTwentyWeeks}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.updateSyphilisFTALessThanTwentyWeeks(
                parseFloat(e.target.value)
              );
            }}
          />
        </FormControl>
      </Container>
      <Container className='SyphilisContainer'>
        <FormControl>
          <FormLabel>{`FTA confirmed? >= 20 weeks`}</FormLabel>
          <RadioGroup
            className='RadioConditionSyphillisFTA'
            aria-label='syphilis'
            name='syphilis'
            value={props.syphilisFTAGreaterThanTwenty}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              props.updateSyphilisFTAGreaterThanTwenty(e.target.value);
            }}
          >
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='true'
              label=' + '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='false'
              label=' - '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='null'
              label='Unknown'
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='NA'
              label='N/A'
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <TextField
            type='number'
            className='FormTextSyphilisGreater'
            id='syphilisLess'
            label='Week number'
            variant='outlined'
            size='small'
            value={props.syphilisFTAGreaterThanTwentyWeeks}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.updateSyphilisFTAGreaterThanTwentyWeeks(
                parseFloat(e.target.value)
              );
            }}
          />
        </FormControl>
      </Container>

      <Container className='SyphilisContainer'>
        <FormControl>
          <FormLabel>{`Treatment < 20 weeks`}</FormLabel>
          <RadioGroup
            className='RadioCondition'
            aria-label='syphilis'
            name='syphilis'
            value={props.syphilisTreatmentLessThanTwenty}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              props.updateSyphilisTreatmentLessThanTwenty(e.target.value);
            }}
          >
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='true'
              label=' + '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='false'
              label=' - '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='null'
              label='Unknown'
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <TextField
            type='number'
            className='FormTextSyphilis'
            id='syphilisLess'
            label='Week number'
            variant='outlined'
            size='small'
            value={props.syphilisTreatmentLessThanTwentyWeeks}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.updateSyphilisTreatmentLessThanTwentyWeeks(
                parseFloat(e.target.value)
              );
            }}
          />
        </FormControl>
      </Container>
      <Container className='SyphilisContainer'>
        <FormControl>
          <FormLabel>{`Treatment >= 20 weeks`}</FormLabel>
          <RadioGroup
            className='RadioConditionSyphillisFTA'
            aria-label='syphilis'
            name='syphilis'
            value={props.syphilisTreatmentGreaterThanTwenty}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              props.updateSyphilisTreatmentGreaterThanTwenty(e.target.value);
            }}
          >
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='true'
              label=' + '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='false'
              label=' - '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='null'
              label='Unknown'
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='NA'
              label='N/A'
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <TextField
            type='number'
            className='FormTextSyphilisGreater'
            id='syphilisLess'
            label='Week number'
            variant='outlined'
            size='small'
            value={props.syphilisTreatmentGreaterThanTwentyWeeks}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.updateSyphilisTreatmentGreaterThanTwentyWeeks(
                parseFloat(e.target.value)
              );
            }}
          />
        </FormControl>
      </Container>

      <Container className='SyphilisContainer'>
        <FormControl>
          <FormLabel>{`Partner treatment < 20 weeks`}</FormLabel>
          <RadioGroup
            className='RadioConditionSyphillisFTA'
            aria-label='syphilis'
            name='syphilis'
            value={props.syphilisPartnerTreatmentLessThanTwenty}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              props.updateSyphilisPartnerTreatmentLessThanTwenty(
                e.target.value
              );
            }}
          >
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='true'
              label=' + '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='false'
              label=' - '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='null'
              label='Unknown'
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='NA'
              label='N/A'
            />
          </RadioGroup>
        </FormControl>
      </Container>
      <Container className='SyphilisContainer'>
        <FormControl>
          <FormLabel>{`Partner treatment >= 20 weeks`}</FormLabel>
          <RadioGroup
            className='RadioConditionSyphillisFTA'
            aria-label='syphilis'
            name='syphilis'
            value={props.syphilisPartnerTreatmentGreaterThanTwenty}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              props.updateSyphilisPartnerTreatmentGreaterThanTwenty(
                e.target.value
              );
            }}
          >
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='true'
              label=' + '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='false'
              label=' - '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='null'
              label='Unknown'
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='NA'
              label='N/A'
            />
          </RadioGroup>
        </FormControl>
      </Container>
    </div>
  );
};

export default FormSyphilis;
