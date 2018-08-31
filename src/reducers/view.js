export const WORD_SELECTED = "WORD_SELECTED";
export const TYPE_UPDATED = "TYPE_UPDATED";
export const WORD_IN_SENTENCE_CLICKED = "WORD_IN_SENTENCE_CLICKED";
export const SENTENCE_RESET = "SENTENCE_RESET";

export const selectWord = (word, index) => ({
  type: WORD_SELECTED,
  word,
  index
});

export const updateType = newType => {
  return {
    type: TYPE_UPDATED,
    newType
  };
};

export const clickWordInSentence = wordIndex => ({
  type: WORD_IN_SENTENCE_CLICKED,
  wordIndex
});

export const resetSentence = () => ({
  type: SENTENCE_RESET
});

const initialState = {
  selectedType: "generell",
  selectedWordIndices: [-1, -1, -1, -1, -1, -1, -1],
  setning: ["", "", "", "", "", "", ""],
  currentLocation: 0
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case WORD_SELECTED:
      let newSelectedWordIndices = [...state.selectedWordIndices];
      newSelectedWordIndices[state.currentLocation] = action.index;

      let newSetning = [...state.setning];
      newSetning[state.currentLocation] = action.word;

      let newCurrentLocation = newSelectedWordIndices.findIndex(
        index => index === -1
      );

      return {
        ...state,
        selectedWordIndices: newSelectedWordIndices,
        setning: newSetning,
        currentLocation: newCurrentLocation === -1 ? 7 : newCurrentLocation
      };

    case TYPE_UPDATED:
      return {
        ...initialState,
        selectedType: action.newType
      };

    case WORD_IN_SENTENCE_CLICKED:
      return {
        ...state,
        currentLocation: action.wordIndex
      };

    case SENTENCE_RESET:
      return {
        ...initialState,
        currentType: state.selectedType
      };

    default:
      return state;
  }
};

export default viewReducer;
