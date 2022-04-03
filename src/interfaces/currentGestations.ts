import { SetStateAction, Dispatch } from "react";
export interface formGeneralProps {
  currentGestation?: any;
  likelyDeliveryDate: Date | null;
  lastMenstruationDate: Date | null;
  size?: number;
  previousGestation?: any;
  updateSize?: Dispatch<SetStateAction<number>>;
  updateLikelyDeliveryDate: Dispatch<SetStateAction<Date | null>>;
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

export interface hemoglobinProps {
  hemoglobinLessThanTwenty: number;
  hemoglobinGreaterThanTwenty: number;
  updateHemoglobinLessThanTwenty: Dispatch<SetStateAction<number>>;
  updateHemoglobinGreaterThanTwenty: Dispatch<SetStateAction<number>>;
}

export interface siphilysProps {
  syphilisVDRLLessThanTwenty: string;
  syphilisVDRLLessThanTwentyWeeks: number | null;
  syphilisVDRLGreaterThanTwenty: string;
  syphilisVDRLGreaterThanTwentyWeeks: number | null;
  syphilisFTALessThanTwenty: string;
  syphilisFTALessThanTwentyWeeks: number | null;
  syphilisFTAGreaterThanTwenty: string;
  syphilisFTAGreaterThanTwentyWeeks: number | null;
  syphilisTreatmentLessThanTwenty: string;
  syphilisTreatmentLessThanTwentyWeeks: number | null;
  syphilisTreatmentGreaterThanTwenty: string;
  syphilisTreatmentGreaterThanTwentyWeeks: number | null;
  syphilisPartnerTreatmentLessThanTwenty: string;
  syphilisPartnerTreatmentGreaterThanTwenty: string;
  updateSyphilisVDRLLessThanTwenty: Dispatch<SetStateAction<string>>;
  updateSyphilisVDRLLessThanTwentyWeeks: Dispatch<
    SetStateAction<number | null>
  >;
  updateSyphilisVDRLGreaterThanTwenty: Dispatch<SetStateAction<string>>;
  updateSyphilisVDRLGreaterThanTwentyWeeks: Dispatch<
    SetStateAction<number | null>
  >;
  updateSyphilisFTALessThanTwenty: Dispatch<SetStateAction<string>>;
  updateSyphilisFTALessThanTwentyWeeks: Dispatch<SetStateAction<number | null>>;
  updateSyphilisFTAGreaterThanTwenty: Dispatch<SetStateAction<string>>;
  updateSyphilisFTAGreaterThanTwentyWeeks: Dispatch<
    SetStateAction<number | null>
  >;
  updateSyphilisTreatmentLessThanTwenty: Dispatch<SetStateAction<string>>;
  updateSyphilisTreatmentLessThanTwentyWeeks: Dispatch<
    SetStateAction<number | null>
  >;
  updateSyphilisTreatmentGreaterThanTwenty: Dispatch<SetStateAction<string>>;
  updateSyphilisTreatmentGreaterThanTwentyWeeks: Dispatch<
    SetStateAction<number | null>
  >;
  updateSyphilisPartnerTreatmentLessThanTwenty: Dispatch<
    SetStateAction<string>
  >;
  updateSyphilisPartnerTreatmentGreaterThanTwenty: Dispatch<
    SetStateAction<string>
  >;
}

export interface bateriuriaProps {
  bateriuriaLessThatTwenty: string;
  bacteriuriaGreaterThanTwenty: string;
  updateBateriuriaLessThatTwenty: Dispatch<SetStateAction<string>>;
  updateBacteriuriaGreaterThanTwenty: Dispatch<SetStateAction<string>>;
}

export interface bloodGlucoseProps {
  bloodGlucoseLessThanTwenty: number;
  bloodGlucoseGreaterThanTwenty: number;
  updateBloodGlucoseLessThanTwenty: Dispatch<SetStateAction<number>>;
  updateBloodGlucoseGreaterThanTwenty: Dispatch<SetStateAction<number>>;
}
