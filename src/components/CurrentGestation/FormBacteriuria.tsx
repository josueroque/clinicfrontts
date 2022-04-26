import React from "react";
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Grid,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setEditedGestation } from "../../store/actions/gestation";
const FormToxoplasmosis = () => {
  const dispatch = useDispatch();
  const editedGestation = useSelector(
    (state: any) => state?.gestation?.editedGestation
  );
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
            aria-label='bateriuriaLessThatTwenty'
            name='bateriuriaLessThatTwenty'
            value={editedGestation?.bateriuriaLessThatTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  bateriuriaLessThatTwenty: e.target.value,
                })
              );
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
            aria-label='bacteriuriaGreaterThanTwenty'
            name='bacteriuriaGreaterThanTwenty'
            value={editedGestation?.bacteriuriaGreaterThanTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  bacteriuriaGreaterThanTwenty: e.target.value,
                })
              );
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
