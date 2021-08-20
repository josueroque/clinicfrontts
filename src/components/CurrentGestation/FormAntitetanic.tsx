import React from 'react';
import { Container, FormControl, TextField, RadioGroup, Radio, FormControlLabel, FormLabel } from '@material-ui/core';
import { antitetanicProps as iFormAntitetanicProps } from '../../interfaces/currentGestations';

const FormAntitetanic = (props: iFormAntitetanicProps) : JSX.Element => {
  return (
    <div>
            <Container className='StepContent'>
              <FormControl > 
              <FormLabel className="RadioLabel" component="legend">Current?</FormLabel>
                <RadioGroup 
                  className="RadioCondition"
                  aria-label="socialSec" 
                  name="plannedPregnancy"
                  value={props.current}
                  onChange={e=>{props.updateCurrent(e.target.value)}}
                >
                  <FormControlLabel   control={<Radio />} value = 'true'  label="Yes" />
                  <FormControlLabel  control={<Radio />} value = 'false'  label="No" />
                 </RadioGroup>
              </FormControl>
              <FormControl > 
                  <TextField 
                    type="number" 
                    className="FormTextGeneral"
                    id="size"
                    label="Size"
                    variant="outlined"
                    size="small"
                    value={props.dose1}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                        props.updateDose1(parseInt(e.target.value));
                    }}
                  />
              </FormControl>         
              <FormControl > 
                  <TextField 
                    type="number" 
                    className="FormTextGeneral"
                    id="previousWeiht"
                    label="Previous Weight"
                    variant="outlined"
                    size="small"
                    value={props.dose2}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                      props.updateDose2(parseInt(e.target.value))
                    }}
                  />
              </FormControl>         
            </Container>
    </div>
  );
};

export default FormAntitetanic;