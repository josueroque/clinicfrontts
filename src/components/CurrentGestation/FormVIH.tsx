import React from "react";
import {
  Container,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setEditedGestation } from "../../store/actions/gestation";

const FormVIH = () => {
  const dispatch = useDispatch();
  const editedGestation = useSelector(
    (state: any) => state?.gestation?.editedGestation
  );
  return (
    <div>
      <Container>
        <FormControl className='VihRadioGroup'>
          <FormLabel component='legend'>Requested less than 20 weeks</FormLabel>
          <RadioGroup
            className='RadioCondition '
            aria-label='VIH'
            name='vihRequestedLess'
            value={editedGestation?.vihRequestedLessThanTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  vihRequestedLessThanTwenty: e.target.value,
                })
              );
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
            value={editedGestation.vihRequestedGreaterThanTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  vihRequestedGreaterThanTwenty: e.target.value,
                })
              );
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
            value={editedGestation?.vihDoneLessThanTwenty}
            onChange={(e) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  vihDoneLessThanTwenty: e.target.value,
                })
              );
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
            value={editedGestation?.vihDoneGreaterThanTwenty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  vihDoneGreaterThanTwenty: e.target.value,
                })
              );
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
