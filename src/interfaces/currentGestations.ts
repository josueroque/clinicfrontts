import { SetStateAction, Dispatch } from "react";
export interface formGeneralProps {
  likelyDeliveryDate: Date | null;
  size: number;
  previousWeight: number;
  lastMenstruationDate: Date | null;
  updateLikelyDeliveryDate: Dispatch<SetStateAction<Date | null>>;
  updateSize: Function;
  updatePreviousWeight: Function;
  updateLastMenstruationDate: Dispatch<SetStateAction<Date | null>>;
}

export interface antitetanicProps {
  current: string;
  dose1: number | null;
  dose2: number | null;
  updateCurrent: Dispatch<SetStateAction<string>>;
  updateDose1: Dispatch<SetStateAction<number | null>>;
  updateDose2: Dispatch<SetStateAction<number | null>>;
}

export interface normalExamProps {
  dental: string;
  mammary: string;
  updateDental: Dispatch<SetStateAction<string>>;
  updateMammary: Dispatch<SetStateAction<string>>;
}

export interface cervixProps {
  visualInspection: string;
  papanicolao: string;
  colposcopy: string;
  updateVisualInspection: Dispatch<SetStateAction<string>>;
  updatePapanicolao: Dispatch<SetStateAction<string>>;
  updateColposcopy: Dispatch<SetStateAction<string>>;
}

export interface groupProps {
  group: string;
  positive: string;
  antiDGlobulin: string | null;
  updateGroup: Dispatch<SetStateAction<string>>;
  updatePositive: Dispatch<SetStateAction<string>>;
  updateAntiDGlobulin: Dispatch<SetStateAction<string | null>>;
}

export interface toxoplasmosisProps {
  toxoplasmosisLessThanTwenty: string | null;
  toxoplasmosisGreaterThanTwenty: string | null;
  toxoplasmosisFirst: string | null;
  updateToxoplasmosisLessThanTwenty: Dispatch<SetStateAction<string | null>>;
  updateToxoplasmosisGreaterThanTwenty: Dispatch<SetStateAction<string | null>>;
  updateToxoplasmosisFirst: Dispatch<SetStateAction<string | null>>;
}

export interface VIHProps {
  vihRequestedLessThanTwenty: string;
  vihDoneLessThanTwenty: string;
  vihRequestedGreaterThanTwenty: string;
  vihDoneGreaterThanTwenty: string;
  updateVihRequestedLessThanTwenty: Dispatch<SetStateAction<string>>;
  updateVihDoneLessThanTwenty: Dispatch<SetStateAction<string>>;
  updateVihRequestedGreaterThanTwenty: Dispatch<SetStateAction<string>>;
  updateVihDoneGreaterThanTwenty: Dispatch<SetStateAction<string>>;
}
