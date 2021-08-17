import  {SetStateAction, Dispatch}   from 'react';
export interface formGeneralProps {
  likelyDeliveryDate: Date|null,
  size : number,
  previousWeight : number,
  lastMenstruationDate : Date|null
  updateLikelyDeliveryDate : Dispatch<SetStateAction <Date|null>>,
  updateSize : Function,
  updatePreviousWeight : Function,
  updateLastMenstruationDate :  Dispatch<SetStateAction <Date|null>>
}

export interface formAntitetanicProps {
    current: string;
    dose1 : number|null;
    dose2 : number|null;
    updateCurrent: Dispatch<SetStateAction <string>>;
    updateDose1: Dispatch<SetStateAction <number|null>>;
    updateDose2: Dispatch<SetStateAction <number|null>>;

}