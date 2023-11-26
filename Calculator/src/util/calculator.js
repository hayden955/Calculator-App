//calculator logic


export const clearCase = {
  currValue: "0",
  operator: null,
  prevValue: null,
};

export const numberCase = (value, state) => {
  if (state.currValue === "0"){
    return {currValue: '${value}'};
  }
  return {currValue: '${state.currValue}${value}'};
};

const answerCase = (state) => {
  const {currValue, prevValue, operator} = state;

  const curr = parseFloat(currValue);
  const prev = parseFloat(prevValue);
  const resetState = {operator: null, prevValue: null};

  //operatation cases
  switch(operator){
    case "+":
      return {
        currValue: '${prev + curr}',
        ...resetState,
      };
      case "-":
        return {
          currValue: '${prev - curr}',
          ...resetState,
        };
    case "*":
      return {
        currValue: '${prev * curr}',
        ...resetState,
      };
    case "/":
      return {
        currValue: '${prev / curr}',
        ...resetState,
      };
  }
  
}