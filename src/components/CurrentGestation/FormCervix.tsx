import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Grid,
} from "@material-ui/core";
import { cervixProps as iCervixProps } from "../../interfaces/currentGestations";

const FormCervix = (props: iCervixProps) => {
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
            Visual Inspection
          </FormLabel>
          <RadioGroup
            className='RadioCondition'
            aria-label='visualInspection'
            name='visualInspection'
            value={props.visualInspection}
            onChange={(e) => {
              props.updateVisualInspection(e.target.value);
            }}
          >
            <FormControlLabel
              className='CervixLabel'
              control={<Radio />}
              value='normal'
              label='Normal'
            />
            <FormControlLabel
              className='CervixLabel'
              control={<Radio />}
              value='abnormal'
              label='Abnormal'
            />
            <FormControlLabel
              className='CervixLabel'
              control={<Radio />}
              value='notDone'
              label='Not done'
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel className='RadioLabel' component='legend'>
            Papanicolao
          </FormLabel>
          <RadioGroup
            className='RadioCondition'
            aria-label='papanicolao'
            name='papanicolao'
            value={props.papanicolao}
            onChange={(e) => {
              props.updatePapanicolao(e.target.value);
            }}
          >
            <FormControlLabel
              className='CervixLabel'
              control={<Radio />}
              value='normal'
              label='Normal'
            />
            <FormControlLabel
              className='CervixLabel'
              control={<Radio />}
              value='abnormal'
              label='Abnormal'
            />
            <FormControlLabel
              className='CervixLabel'
              control={<Radio />}
              value='notDone'
              label='Not done'
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel className='RadioLabel' component='legend'>
            Colposcopy
          </FormLabel>
          <RadioGroup
            className='RadioCondition'
            aria-label='colposcopy'
            name='colposcopy'
            value={props.colposcopy}
            onChange={(e) => {
              props.updateColposcopy(e.target.value);
            }}
          >
            <FormControlLabel
              className='CervixLabel'
              control={<Radio />}
              value='normal'
              label='Normal'
            />
            <FormControlLabel
              className='CervixLabel'
              control={<Radio />}
              value='abnormal'
              label='Abnormal'
            />
            <FormControlLabel
              className='CervixLabel'
              control={<Radio />}
              value='notDone'
              label='Not done'
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </div>
  );
};

export default FormCervix;
