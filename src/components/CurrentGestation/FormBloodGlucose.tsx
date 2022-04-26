import React from "react";
import { Grid, FormControl, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setEditedGestation } from "../../store/actions/gestation";
const FormBloodGlucose = () => {
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
          <TextField
            type='number'
            className='FormTextBloodGlucose'
            id='bloodGlucoseLess'
            label='Less than 20 weeks'
            variant='outlined'
            size='small'
            value={editedGestation?.bloodGlucoseLessThanTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  bloodGlucoseLessThanTwenty: parseFloat(e.target.value),
                })
              );
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            type='number'
            className='FormTextBloodGlucose'
            id='bloodGlucoseGreater'
            label='Greater than 20 weeks'
            variant='outlined'
            size='small'
            value={editedGestation?.bloodGlucoseGreaterThanTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  bloodGlucoseGreaterThanTwenty: parseFloat(e.target.value),
                })
              );
            }}
          />
        </FormControl>
      </Grid>
    </>
  );
};

export default FormBloodGlucose;
