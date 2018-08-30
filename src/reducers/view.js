export const WORD_SELECTED = "WORD_SELECTED";
export const TYPE_UPDATED = "TYPE_UPDATED";
export const WORD_IN_SENTENCE_CLICKED = "WORD_IN_SENTENCE_CLICKED";
export const SVADA_WORD_COORDINATES_SET = "SVADA_WORD_COORDINATES_SET";

export const selectWord = (word, index, locationInSentence) => ({
  type: WORD_SELECTED,
  word,
  index,
  locationInSentence
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

export const setSvadaWordCoordinates = (offsetWidth, offsetLeft) => ({
  type: SVADA_WORD_COORDINATES_SET,
  offsetWidth,
  offsetLeft
});

const initialState = {
  selectedType: "generell",
  selectedWordIndices: [-1, -1, -1, -1, -1, -1, -1],
  setning: ["", "", "", "", "", "", ""],
  displayableSetning: "",
  currentLocation: 0,
  currentWordOffset: {
    width: -1,
    left: -1
  }
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case WORD_SELECTED:
      let newSelectedWordIndices = [...state.selectedWordIndices];
      newSelectedWordIndices[action.locationInSentence] = action.index;

      let newSetning = [...state.setning];
      newSetning[action.locationInSentence] = action.word;

      let newDisplayableSetning = newSetning.join(" ");
      if (newSetning.length === 7) {
        newDisplayableSetning += ".";
      }

      return {
        ...state,
        selectedWordIndices: newSelectedWordIndices,
        setning: newSetning,
        // Rmove displayableSetning
        displayableSetning: newDisplayableSetning,
        currentLocation: state.currentLocation + 1
      };

    case TYPE_UPDATED:
      return {
        ...initialState,
        currentWordOffset: state.currentWordOffset,
        selectedType: action.newType
      };

    case WORD_IN_SENTENCE_CLICKED:
      return {
        ...state,
        currentLocation: action.wordIndex
      };

    case SVADA_WORD_COORDINATES_SET:
      return {
        ...state,
        currentWordOffset: {
          width: action.offsetWidth,
          left: action.offsetLeft
        }
      };

    default:
      return state;
  }
};

export default viewReducer;
