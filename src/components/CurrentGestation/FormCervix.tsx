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
const FormCervix = () => {
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
            Visual Inspection
          </FormLabel>
          <RadioGroup
            className='RadioCondition'
            aria-label='visualInspection'
            name='visualInspection'
            value={editedGestation?.visualInspection}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  visualInspection: e.target.value,
                })
              );
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
            value={editedGestation?.papanicolao}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  papanicolao: e.target.value,
                })
              );
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
            value={editedGestation?.colposcopy}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setEditedGestation({
                  ...editedGestation,
                  colposcopy: e.target.value,
                })
              );
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
