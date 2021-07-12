export interface History{

  familyTcb: boolean;
  familyDiabetes :boolean;
  familyHypertension: boolean ;
  familyPreeclampsia: boolean;
  familyEeclampssia :boolean;
  personalTcb: boolean;
  personalDiabetes: boolean;
  personalHypertension:boolean;
  personalPreeclampsia: boolean ;
  personalEeclampssia:boolean ;
  surgery: boolean;
  infertility: boolean;
  heartDicease: boolean;
  kidneyDicease: boolean;
  violence: boolean;
  previousGestation: number;
  abortions: number;
  spontaneousConsecutive: boolean;
  deliveries: number;
  vaginal: number;
  cesareans: number;
  bornAlive: number;
  bornDead: number;
  deadAfterFirstWeek: number;
  stillAlive: number;
  previousWeight: number;
  twinsHistory: boolean; 
  endDate: Date|null;
  terminationCondition: string ;
  plannedPregnancy: boolean;
  contraceptiveMethod: string;
}
