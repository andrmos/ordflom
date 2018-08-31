export const WORD_SELECTED = "WORD_SELECTED";
export const TYPE_UPDATED = "TYPE_UPDATED";
export const WORD_IN_SENTENCE_CLICKED = "WORD_IN_SENTENCE_CLICKED";

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

      return {
        ...state,
        selectedWordIndices: newSelectedWordIndices,
        setning: newSetning,
        currentLocation: state.currentLocation + 1
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

    default:
      return state;
  }
};

export default viewReducer;
