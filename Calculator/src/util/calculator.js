//calculator logic


export const initState = {
  currValue: "0",
  operator: null,
  prevValue: null,
};

export const numberCase = (value, state) => {
  if (state.currValue === "0"){
    return { currValue: '${value}' };
  }
  return {currValue: '${state.currValue}${value}',
  };
};

const opCase = (state) => {
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

    default:
      return state;
  }
};

const calculator = (type, value, state) => {
  switch(type){
    case "number":
      return numberCase(value, state);
    case "clear":
      return initState;
    case "pn":
      return {
        currentValue: '${parseFloat(state.currValue) * -1}',
      };
    case "percentage":
      return {
        currentValue: '${parseFloat(state.currValue) * .01}',
      };
    case "operator":
      return {
        operator: value,
        prevValue: state.currValue,
        currValue: "0"
      };
    case "equal":
      return opCase(state);
    default:
      return state;
  }
};

export default calculator;