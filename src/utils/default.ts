type StateMap = {
  [key: string]: string;
};

const stateMap: StateMap = {
  "ABIA": "ABI",
  "ADAMAWA": "ADA",
  "AKWA IBOM": "AKW",
  "ANAMBRA": "ANA",
  "BAUCHI": "BAU",
  "BAYELSA": "BAY",
  "BENUE": "BEN",
  "BORNO": "BOR",
  "CROSS RIVER": "CRO",
  "DELTA": "DEL",
  "EBONYI": "EBO",
  "EDO": "EDO",
  "EKITI": "EKI",
  "ENUGU": "ENU",
  "GOMBE": "GOM",
  "IMO": "IMO",
  "JIGAWA": "JIG",
  "KADUNA": "KAD",
  "KANO": "KAN",
  "KATSINA": "KAT",
  "KEBBI": "KEB",
  "KOGI": "KOG",
  "KWARA": "KWA",
  "LAGOS": "LAG",
  "NASSARAWA": "NAS",
  "NIGER": "NIG",
  "OGUN": "OGU",
  "ONDO": "OND",
  "OSUN": "OSU",
  "OYO": "OYO",
  "PLATEAU": "PLA",
  "RIVERS": "RIV",
  "SOKOTO": "SOK",
  "TARABA": "TAR",
  "YOBE": "YOB",
  "ZAMFARA": "ZAM",
  "ABUJA": "ABJ",
};

export function getShortState(stateName: string) {
  stateName = stateName.trim().toUpperCase();
  return stateMap[stateName] || stateName.slice(0, 3);
}