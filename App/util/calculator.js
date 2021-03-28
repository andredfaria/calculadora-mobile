export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
  memorie: '',
};

export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { currentValue: `${value}` };
  }

  return {
    currentValue: `${state.currentValue}${value}`
  };
};

export const handleEqual = state => {
  console.log(state);
  const { currentValue, previousValue, operator, memorie } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null
  };

  if (operator === "/") {
    return {
      memorie: `${current} ${operator} ${previousValue} = ${previous / current}`,
      currentValue: previous / current,
      ...resetState
    };
  }

  if (operator === "*") {
    return {
      memorie: `${current} ${operator} ${previousValue} = ${previous * current}`,
      currentValue: previous * current,
      ...resetState
    };
  }

  if (operator === "+") {
    return {
      memorie: `${current} ${operator} ${previousValue} = ${previous + current}`,
      currentValue: previous + current,
      ...resetState
    };
  }

  if (operator === "-") {
    return {
      memorie: `${current} ${operator} ${previousValue} = ${previous - current}`,
      currentValue: previous - current,
      ...resetState
    };
  }

  if (operator === "^") {
    return {
      memorie: `${current} ${operator} ${previousValue} = ${Math.pow(previous, current)}`,
      currentValue: Math.pow(previous, current),
      ...resetState
    };
  }

  return state;
};

const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0"
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`
      };
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      };
    case "sqrt":
      return {
        currentValue: `${Math.sqrt(parseFloat(state.currentValue))}`
      };
    case "log":
      return {
        currentValue: `${Math.log(parseFloat(state.currentValue))}`
      };
    case "potencia":
      return {
        currentValue: `${Math.pow(parseFloat(state.currentValue), 2)}`
      };
    default:
      return state;
  }
};

export default calculator;
