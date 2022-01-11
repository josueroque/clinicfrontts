import { groupProps as iFormGroupProps } from "../../interfaces/currentGestations";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Grid,
} from "@material-ui/core";
const FormGroup = (props: iFormGroupProps) => {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction='row'
        alignItems='center'
        justify='center'
      >
        <FormControl className='Select-Group'>
          <InputLabel>Group</InputLabel>
          <Select>
            <MenuItem key='default' value='default'>
              --Select Group--
            </MenuItem>
            <MenuItem key='A' value='A'>
              A
            </MenuItem>
            <MenuItem key='B' value='B'>
              B
            </MenuItem>
            <MenuItem key='AB' value='AB'>
              AB
            </MenuItem>
            <MenuItem key='O' value='O'>
              O
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <RadioGroup
            className='RadioCondition Group'
            aria-label='group'
            name='group'
            value={props.group}
            onChange={(e) => {
              props.updateGroup(e.target.value);
            }}
          >
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='true'
              label=' + '
            />
            <FormControlLabel
              className='GroupLabel'
              control={<Radio />}
              value='false'
              label=' - '
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel component='legend'>Anti D Globulin</FormLabel>
          <RadioGroup
            className='RadioCondition '
            aria-label='antiDGlobulin'
            name='antiDGlobulin'
            value={props.antiDGlobulin}
            onChange={(e) => {
              props.updateAntiDGlobulin(e.target.value);
            }}
          >
            <FormControlLabel
              className='AntiDLabel'
              control={<Radio />}
              value='true'
              label='yes'
            />
            <FormControlLabel
              className='AntiDLabel'
              control={<Radio />}
              value='false'
              label='no'
            />
            <FormControlLabel
              className='AntiDLabel'
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

export default FormGroup;
