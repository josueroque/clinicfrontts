import React from "react";
import {
  Grid,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setEditedGestation } from "../../store/actions/gestation";

const FormToxoplasmosis = () => {
  const dispatch = useDispatch();
  const editedGestation = useSelector(
    (state: any) => state?.gestation?.editedGestation
  );
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
            value={editedGestation?.toxoplasmosisLessThanTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  toxoplasmosisLessThanTwenty: e.target.value,
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
            aria-label='toxoplasmosisGreaterThanTwenty'
            name='toxoplasmosisGreaterThanTwenty'
            value={editedGestation?.toxoplasmosisGreaterThanTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  toxoplasmosisGreaterThanTwenty: e.target.value,
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
          <FormLabel component='legend'>First consultation</FormLabel>
          <RadioGroup
            className='RadioCondition'
            aria-label='toxoplasmosisFirst'
            name='toxoplasmosisFirst'
            value={editedGestation?.toxoplasmosisFirst}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  toxoplasmosisFirst: e.target.value,
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
    </div>
  );
};

export default FormToxoplasmosis;
