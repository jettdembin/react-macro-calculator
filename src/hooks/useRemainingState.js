import useLocalStorageState from "./useLocalStorageState";

export default (initialRemaining) => {
  const [remaining, setRemaining] = useLocalStorageState("remaining", initialRemaining);
  return {
    remaining,
    handleMacro: (totalRemaining, macro) => {
      if (remaining.hasOwnProperty(macro)) {
        console.log(macro);
        remaining[`${macro}`] = totalRemaining;
        setRemaining(remaining);
      }
    }
  };
};

// handleCarb: (props, totalNow, val, macro) => {
//   let currentMacro = `${macro}`;
//   if (remaining.hasOwnProperty(macro)) {
//     remaining[currentMacro] = Number(props.totals[0][currentMacro]) - (totalNow + Number(val));
//   }
//   setRemaining(remaining);
// },
// handleProtein: (props, totalNow, val, macro) => {
//   let currentMacro = `${macro}`;
//   if (remaining.hasOwnProperty(macro)) {
//     remaining[currentMacro] = Number(props.totals[0][currentMacro]) - (totalNow - Number(val));
//   }
//   setRemaining(remaining);
// },
// handleFat: (props, totalNow, val, macro) => {
//   let currentMacro = `${macro}`;
//   if (remaining.hasOwnProperty(macro)) {
//     remaining[currentMacro] = Number(props.totals[0][currentMacro]) - (totalNow - Number(val));
//   }
//   setRemaining(remaining);
// }
