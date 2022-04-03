export type setCurrentGestationAction = {
  type: "set";
  payload: { key: string; value: any };
};

export type setPreviousGestationAction = {
  type: "set";
  payload: { key: string; value: any };
};

export const doReset = (): any => ({
  type: "reset",
});

// export const doIncreaseBy = (value: number): CounterAction => ({
//   type: "increaseBy",
//   payload: { value },
// });
