export default {
  namespaced: true,
  state: {
    works: []
  },
  mutations: {
    SET_WORK(state, work) {
      state.works = work;
    },
    ADD_WORK(state, work) {
      state.works.push(work);
    },
    REMOVE_WORK(state, removedWorkId) {
      state.works = state.works.filter(
        work => work.id !== removedWorkId
      );
    },
    EDIT_WORK(state, editWorkId) {
      state.works = state.works.map(work =>
        work.id === editWorkId.id ? editWorkId : work
      )
    }
  },
  actions: {
    async addWork({commit}, work) {
      const formWorkData = new FormData();

      formWorkData.append('title', work.title);
      formWorkData.append('techs', work.techs);
      formWorkData.append('photo', work.photo);
      formWorkData.append('link', work.link);
      formWorkData.append('description', work.description);

      try {
        const {data} = await this.$axios.post("/works", formWorkData);
        commit("ADD_WORK", data)
      } catch (error) {
        
      }
    },
    async fethWork({commit},) {
      const {data} = await this.$axios.get("/works/220");
      commit("SET_WORK", data);
    },
    async deleteWork({commit}, workId) {
      try {
        const response = await this.$axios.delete(`/works/${workId}`);
        commit("REMOVE_WORK", workId)
      } catch (error) {
        
      }
    },
    async editWork({commit}, editedWork) {
      const formDataWork = new FormData();

      formDataWork.append('title', editedWork.title);
      formDataWork.append('techs', editedWork.techs);
      formDataWork.append('photo', editedWork.photo);
      formDataWork.append('link', editedWork.link);
      formDataWork.append('description', editedWork.description);

      try {
        const {data} = await this.$axios.post(`/works/${editedWork.id}`, formDataWork)
        commit("EDIT_WORK", data.work)
      } catch (error) {
        
      }
    }
  }

}