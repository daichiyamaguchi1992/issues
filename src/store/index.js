import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    issues: null,
    issue: null,
    currentIssuesPageNumber: null,
    lastIssuesPageNumber: null,
    perPage: 10
  },
  mutations: {
    fetchIssues(state, params) {
      state.issues = params.issues
      state.currentIssuesPageNumber = params.pageNumber
    },
    fetchIssue(state, issue) {
      state.issue = issue
    },
    lastIssuesPageNumber(state, last_issues_page_number) {
      state.lastIssuesPageNumber = last_issues_page_number
    }
  },
  actions: {
   async fetchIssues({commit}, page_number = 1) {
     const issues = (await axios
     .get(`https://api.github.com/repos/facebook/react/issues?page=${ page_number }&amp;per_page=${ this.state.perPage }`)).data
     const params = {
      issues: issues,
      pageNumber: page_number
     }
     commit("fetchIssues", params)
    },
   async fetchIssue({commit}, issue_number) {
     const issue = (await axios
     .get(`https://api.github.com/repos/facebook/react/issues/${ issue_number }`)).data
     commit("fetchIssue", issue)
    },
    async fetchIssuesLastPageNumber({commit}) {
      const openIssues = (await axios.get(`https://api.github.com/repos/facebook/react`)).data.open_issues
      // NOTE: 切り上げでページ数を算出
      const lastIssuesPageNumber = Math.ceil(openIssues / this.state.perPage)
      commit("lastIssuesPageNumber", lastIssuesPageNumber)
    }
  },
  modules: {}
});
