import { useEffect, useState, useReducer } from "react";

import {
  getCurrentGestationFunction,
  contextGestation,
  currentGestationReducer,
  setCurrentGestationFunction,
} from "../context/CurrentsGestationContext";

const useFormValues = () => {
  const [size, updateSize] = useState<number>(0);
  const [previousWeight, updatePreviousWeight] = useState<number | null>(0);

  useEffect(() => {}, [size]);
  return { size, updateSize, previousWeight, updatePreviousWeight };
};

export default useFormValues;
