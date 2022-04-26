import { SetStateAction, Dispatch } from "react";

export interface ICurrentGestation {
  idNumber?: string;
  _id: string;
  size?: number;
  previousWeight?: number;
  lastMenstruationDate?: Date | null;               
  likelyDeliveryDate?: Date | null;
  current?: string;
  dose1?: number | null;
  dose2?: number | null;
  dentalv: string;
  mammary?: string;
  visualInspection?: string;
  papanicolao?: string;
  colposcopy?: string;
  group?: string;
  positive?: string;
  antiDGlobulin?: string | null;
  toxoplasmosisLessThanTwenty?: string | null;
  toxoplasmosisGreaterThanTwenty?: string | null;
  toxoplasmosisFirst?: string | null;
  vihRequestedLessThanTwenty?: string;
  vihDoneLessThanTwenty?: string;
  vihRequestedGreaterThanTwenty?: string;
  vihDoneGreaterThanTwenty?: string;
  hemoglobinLessThanTwenty?: number;
  hemoglobinGreaterThanTwenty?: number;
  syphilisVDRLLessThanTwenty?: string;
  syphilisVDRLLessThanTwentyWeeks?: number | null;
  syphilisVDRLGreaterThanTwenty?: string;
  syphilisVDRLGreaterThanTwentyWeeks?: number | null;
  syphilisFTALessThanTwenty?: string;
  syphilisFTALessThanTwentyWeeks?: number | null;
  syphilisFTAGreaterThanTwenty?: string;
  syphilisFTAGreaterThanTwentyWeeks?: number | null;
  syphilisTreatmentLessThanTwenty?: string;
  syphilisTreatmentLessThanTwentyWeeks?: number | null;
  syphilisTreatmentGreaterThanTwenty?: string;
  syphilisTreatmentGreaterThanTwentyWeeks?: number | null;
  syphilisPartnerTreatmentLessThanTwenty?: string;
  syphilisPartnerTreatmentGreaterThanTwenty?: string;
  bateriuriaLessThatTwenty?: string;
  bacteriuriaGreaterThanTwenty?: string;
  bloodGlucoseLessThanTwenty?: number;
  bloodGlucoseGreaterThanTwenty?: number;
}












}



