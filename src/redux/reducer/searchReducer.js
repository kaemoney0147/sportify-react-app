import { INPUT_SEARCH } from "../action";
const initialState = {
  input: false,
};

const InputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_SEARCH:
      return {
        ...state,
        input: !state.input,
      };
    default:
      return state;
  }
};

export default InputReducer;
