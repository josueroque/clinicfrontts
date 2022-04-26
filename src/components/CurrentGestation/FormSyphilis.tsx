import React, { ChangeEvent } from "react";
import {
  Container,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  TextField,
  Grid,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setEditedGestation } from "../../store/actions/gestation";

const FormSyphilis = () => {
  const dispatch = useDispatch();
  const editedGestation = useSelector(
    (state: any) => state?.gestation?.editedGestation
  );
  return (
    <>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
      >
        <Grid
          container
          spacing={0}
          direction='row'
          alignItems='center'
          justify='center'
          className='SyphilisContainer'
        >
          <FormControl>
            <FormLabel>{`VLDR < 20 weeks`}</FormLabel>
            <RadioGroup
              className='RadioCondition'
              aria-label='syphilis'
              name='syphilis'
              value={editedGestation?.syphilisVDRLLessThanTwenty}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    syphilisVDRLLessThanTwenty: e.target.value,
                  })
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
              value={editedGestation?.syphilisVDRLLessThanTwentyWeeks}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    syphilisVDRLLessThanTwentyWeeks: parseFloat(e.target.value),
                  })
                );
              }}
            />
          </FormControl>
        </Grid>
        <Grid
          container
          spacing={0}
          direction='row'
          alignItems='center'
          justify='center'
          className='SyphilisContainer'
        >
          <FormControl>
            <FormLabel>{`VLDR >= 20 weeks`}</FormLabel>
            <RadioGroup
              className='RadioConditionSyphillisFTA'
              aria-label='syphilis'
              name='syphilis'
              value={editedGestation?.syphilisVDRLGreaterThanTwenty}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    syphilisVDRLGreaterThanTwenty: e.target.value,
                  })
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
          <FormControl>
            <TextField
              type='number'
              className='FormTextSyphilisGreater'
              id='syphilisLess'
              label='Week number'
              variant='outlined'
              size='small'
              value={editedGestation?.syphilisVDRLGreaterThanTwentyWeeks}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    syphilisVDRLGreaterThanTwentyWeeks: parseFloat(
                      e.target.value
                    ),
                  })
                );
              }}
            />
          </FormControl>
        </Grid>

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
            <FormLabel>{`FTA confirmed? < 20 weeks`}</FormLabel>
            <RadioGroup
              className='RadioCondition'
              aria-label='syphilis'
              name='syphilis'
              value={editedGestation?.syphilisFTALessThanTwenty}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    syphilisFTALessThanTwenty: e.target.value,
                  })
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
              value={editedGestation?.syphilisFTALessThanTwentyWeeks}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    syphilisFTALessThanTwentyWeeks: parseFloat(e.target.value),
                  })
                );
              }}
            />
          </FormControl>
        </Grid>
        <Grid
          container
          spacing={0}
          direction='row'
          alignItems='center'
          justify='center'
          className='SyphilisContainer'
        >
          <FormControl>
            <FormLabel>{`FTA confirmed? >= 20 weeks`}</FormLabel>
            <RadioGroup
              className='RadioConditionSyphillisFTA'
              aria-label='syphilis'
              name='syphilis'
              value={editedGestation?.syphilisFTAGreaterThanTwenty}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    syphilisFTAGreaterThanTwenty: e.target.value,
                  })
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
          <FormControl>
            <TextField
              type='number'
              className='FormTextSyphilisGreater'
              id='syphilisLess'
              label='Week number'
              variant='outlined'
              size='small'
              value={editedGestation?.syphilisFTAGreaterThanTwentyWeeks}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    syphilisFTAGreaterThanTwentyWeeks: parseFloat(
                      e.target.value
                    ),
                  })
                );
              }}
            />
          </FormControl>
        </Grid>

        <Grid
          container
          spacing={0}
          direction='row'
          alignItems='center'
          justify='center'
          className='SyphilisContainer'
        >
          <FormControl>
            <FormLabel>{`Treatment < 20 weeks`}</FormLabel>
            <RadioGroup
              className='RadioCondition'
              aria-label='syphilis'
              name='syphilis'
              value={editedGestation?.syphilisTreatmentLessThanTwenty}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    syphilisTreatmentLessThanTwenty: e.target.value,
                  })
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
              value={editedGestation?.syphilisTreatmentLessThanTwentyWeeks}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    syphilisTreatmentLessThanTwentyWeeks: parseFloat(
                      e.target.value
                    ),
                  })
                );
              }}
            />
          </FormControl>
        </Grid>
        <Grid
          container
          spacing={0}
          direction='row'
          alignItems='center'
          justify='center'
          className='SyphilisContainer'
        >
          <FormControl>
            <FormLabel>{`Treatment >= 20 weeks`}</FormLabel>
            <RadioGroup
              className='RadioConditionSyphillisFTA'
              aria-label='syphilis'
              name='syphilis'
              value={editedGestation?.syphilisTreatmentGreaterThanTwenty}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    syphilisTreatmentGreaterThanTwenty: e.target.value,
                  })
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
          <FormControl>
            <TextField
              type='number'
              className='FormTextSyphilisGreater'
              id='syphilisLess'
              label='Week number'
              variant='outlined'
              size='small'
              value={editedGestation?.syphilisTreatmentGreaterThanTwentyWeeks}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    syphilisTreatmentGreaterThanTwentyWeeks: parseFloat(
                      e.target.value
                    ),
                  })
                );
              }}
            />
          </FormControl>
        </Grid>

        <Grid
          container
          spacing={0}
          direction='row'
          alignItems='center'
          justify='center'
          className='SyphilisContainer'
        >
          <FormControl>
            <FormLabel>{`Partner treatment < 20 weeks`}</FormLabel>
            <RadioGroup
              className='RadioConditionSyphillisFTA'
              aria-label='syphilis'
              name='syphilis'
              value={editedGestation?.syphilisPartnerTreatmentLessThanTwenty}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    syphilisPartnerTreatmentLessThanTwenty: e.target.value,
                  })
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
        </Grid>
        <Grid
          container
          spacing={0}
          direction='row'
          alignItems='center'
          justify='center'
          className='SyphilisContainer'
        >
          <FormControl>
            <FormLabel>{`Partner treatment >= 20 weeks`}</FormLabel>
            <RadioGroup
              className='RadioConditionSyphillisFTA'
              aria-label='syphilis'
              name='syphilis'
              value={editedGestation?.syphilisPartnerTreatmentGreaterThanTwenty}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditedGestation({
                    ...editedGestation,
                    syphilisPartnerTreatmentGreaterThanTwenty: e.target.value,
                  })
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
        </Grid>
      </Grid>
    </>
  );
};

export default FormSyphilis;
