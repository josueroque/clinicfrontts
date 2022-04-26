import React from "react";
import { Grid, FormControl, TextField } from "@material-ui/core";

import { setEditedGestation } from "../../store/actions/gestation";
import { useDispatch, useSelector } from "react-redux";

const FormHemoglobin = () => {
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
          <TextField
            type='number'
            className='FormTextHemoglobin'
            id='hemoglobinLess'
            label='Less than 20 weeks'
            variant='outlined'
            size='small'
            value={editedGestation?.hemoglobinLessThanTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  hemoglobinLessThanTwenty: parseFloat(e.target.value),
                })
              );
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            type='number'
            className='FormTextHemoglobin'
            id='hemoglobinGreater'
            label='Greater than 20 weeks'
            variant='outlined'
            size='small'
            value={editedGestation?.hemoglobinGreaterThanTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  hemoglobinGreaterThanTwenty: parseFloat(e.target.value),
                })
              );
            }}
          />
        </FormControl>
      </Grid>
    </div>
  );
};

export default FormHemoglobin;
