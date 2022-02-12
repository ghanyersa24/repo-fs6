export const state = () => {
  return {
    title: "Daftar Kelas",
    classes: [],
    class: {
      id: "",
      name: "",
      description: "",
      startDate: "",
      endDate: "",
    },
  };
};

export const actions = {
  SET_CLASSES({ commit }, classes) {
    debugger;
    commit("SET_CLASSES_MUTATION", classes);
  },
  SET_CLASS({ commit }, myclass) {
    commit("SET_CLASS_MUTATION", myclass);
  },
};

export const mutations = {
  SET_CLASSES_MUTATION(state, classes) {
    debugger;
    state.classes = classes;
  },
  SET_CLASS_MUTATION(state, myclass) {
    state.class = myclass;
  },
};
