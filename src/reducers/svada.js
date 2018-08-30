const SVADA_LOADED = "SVADA_LOADED";

export const setSvada = svada => ({
  type: SVADA_LOADED,
  svada
});

const initialState = {
  generell: [],
  arkiv: [],
  bistand: [],
  forsikring: [],
  forsvar: [],
  helse: [],
  klima: [],
  bygg: [],
  mat: [],
  universitet: []
};

const svadaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SVADA_LOADED:
      return formatSvada(action.svada);

    default:
      return state;
  }
};

const formatSvada = svada => {
  const newSvada = {
    generell: svada.slice(1, 25),
    arkiv: svada.slice(28, 46),
    bistand: svada.slice(49, 64),
    forsikring: svada.slice(67, 91),
    forsvar: svada.slice(94, 115),
    helse: svada.slice(118, 142),
    klima: svada.slice(145, 163),
    bygg: svada.slice(166, 195),
    mat: svada.slice(198, 211),
    universitet: svada.slice(214, 230)
  };

  let newSvada2 = {
    generell: [],
    arkiv: [],
    bistand: [],
    forsikring: [],
    forsvar: [],
    helse: [],
    klima: [],
    bygg: [],
    mat: [],
    universitet: []
  };

  Object.entries(newSvada).forEach(([svadaKategori]) => {
    for (let index = 0; index < 7; index++) {
      newSvada2[svadaKategori][index] = [];
      newSvada[svadaKategori].forEach(sentence => {
        newSvada2[svadaKategori][index].push(sentence[index]);
      });
    }
  });

  return newSvada2;
};

export default svadaReducer;
