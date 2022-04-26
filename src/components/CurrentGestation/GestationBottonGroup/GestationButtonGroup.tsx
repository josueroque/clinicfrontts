import { Button, ButtonGroup } from "@material-ui/core";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { PatientsContext } from "../../../context/PatientsContext";
const GestationButtonGroup = (props: any) => {
  const { updateCurrentGestationFunction, saveCurrentGestationFunction } =
    useContext(PatientsContext);
  const dispatch = useDispatch();
  const editedGestation = useSelector(
    (state: any) => state?.gestation?.editedGestation
  );
  const wait = async (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };
  const saveCurrentGestation = async (gestation: any) => {
    try {
      props.updateLoading(true);
      props.updateErrorStatus(false);
      props.updateSavedStatus(false);
      await wait(1000);
      props.updateLoading(false);
      props.updateSavedStatus(true);
      let response;
      if (editedGestation) {
        response = await updateCurrentGestationFunction(gestation);
      } else response = await saveCurrentGestationFunction(gestation);

      if (response.statusText === "OK") {
        props.updateErrorStatus(false);
      }
      await wait(1000);
      swal("Changes has been saved!", "", "success");
    } catch (error: any) {
      swal("Something has failed!", error.toString(), "error");
      props.updateSavedStatus(true);
      props.updateErrorStatus(true);
      props.updateLoading(false);
    }
  };

  return (
    <ButtonGroup>
      <Link to={{ pathname: `/general/` + props._id }} className='Link'>
        <Button
          className='HistoryButton'
          type='submit'
          variant='contained'
          color='primary'
        >
          History
        </Button>
      </Link>
      <Button
        className='HistoryButton'
        type='submit'
        variant='contained'
        color='primary'
        onClick={saveCurrentGestation}
      >
        {props.buttonLabel}
      </Button>
    </ButtonGroup>
  );
};

export default GestationButtonGroup;
