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

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;

  if (date.toDateString() === today.toDateString()) {
    return `Today at ${formattedHours}:${minutes} ${ampm}`;
  } else if (date.toDateString() === yesterday.toDateString()) {
    return `Yesterday at ${formattedHours}:${minutes} ${ampm}`;
  } else {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} - ${formattedHours}:${minutes}${ampm}`;

    return formattedDate;
  }
}