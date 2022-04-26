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
const FormNormalExam = () => {
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
            Dental?
          </FormLabel>
          <RadioGroup
            className='RadioCondition'
            aria-label='dental'
            name='dental'
            value={editedGestation.dental}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  dental: e.target.value,
                })
              );
            }}
          >
            <FormControlLabel control={<Radio />} value='true' label='Yes' />
            <FormControlLabel control={<Radio />} value='false' label='No' />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel className='RadioLabel' component='legend'>
            Mammary?
          </FormLabel>
          <RadioGroup
            className='RadioCondition'
            aria-label='mammary'
            name='mammary'
            value={editedGestation?.mammary}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  mammary: e.target.value,
                })
              );
            }}
          >
            <FormControlLabel control={<Radio />} value='true' label='Yes' />
            <FormControlLabel control={<Radio />} value='false' label='No' />
          </RadioGroup>
        </FormControl>
      </Grid>
    </div>
  );
};

export default FormNormalExam;
