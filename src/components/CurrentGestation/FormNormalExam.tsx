import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Grid,
} from "@material-ui/core";
import { normalExamProps as iFormNormalExamProps } from "../../interfaces/currentGestations";

const FormNormalExam = (props: iFormNormalExamProps) => {
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
            value={props.dental}
            onChange={(e) => {
              props.updateDental(e.target.value);
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
            value={props.mammary}
            onChange={(e) => {
              props.updateMammary(e.target.value);
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
