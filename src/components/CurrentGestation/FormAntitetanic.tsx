import React from "react";
import {
  FormControl,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Grid,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setEditedGestation } from "../../store/actions/gestation";

const FormAntitetanic = (): JSX.Element => {
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
          <FormLabel className='RadioLabel' component='legend'>
            Current?
          </FormLabel>
          <RadioGroup
            className='RadioCondition'
            aria-label='socialSec'
            name='plannedPregnancy'
            value={editedGestation?.current}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  current: e.target.value,
                })
              );
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
            id='dose1'
            label='Dose 1'
            variant='outlined'
            size='small'
            value={editedGestation?.dose1}
            style={{ width: 300 }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  dose1: parseInt(e.target.value),
                })
              );
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            type='number'
            className='FormTextGeneral'
            id='dose2'
            label='Dose 2'
            variant='outlined'
            size='small'
            style={{ width: 300 }}
            value={editedGestation?.dose2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  dose2: parseInt(e.target.value),
                })
              );
            }}
          />
        </FormControl>
      </Grid>
    </div>
  );
};

export default FormAntitetanic;
