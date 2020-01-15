<template>
  <div class="issues">
    <h1 class="issues__heading">ISSUES</h1>
      <ul class="issue-list">
        <li class="issue-list__item" v-for="(item, index) in issues" :key="index">
          <router-link class="issue-list__item-link" :to="{ path: '/issues/' + item.number }">
            <h2 class="issue-list__item-title">{{ item.title }}</h2>
            <p class="issue-list__item-number">#{{ item.number }}</p>
          </router-link>
        </li>
      </ul>
      <Pagination/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Pagination from '../components/issues/Pagination'
// import axios from "axios";
export default {
  components: {
    Pagination
  },
  mounted() {
    this.renderInitialIssues();
  },
  computed: {
    ...mapState(["issues", "currentIssuesPageNumber", "lastIssuesPageNumber"])
  },
  methods: {
    renderInitialIssues() {
      this.$store.dispatch("fetchIssues", this.$route.query.page)
      this.$store.dispatch("fetchIssuesLastPageNumber")
    }
  }
};
</script>

<style lang="scss" scope>
.issues{
  max-width: 680px;
  margin: 0 auto;
  &__heading{
    font-size: 1.25rem;
    line-height: 1;
    margin: 2rem 0 0;
  }
}
.issue-list {
  list-style: none;
  margin: 2rem 0 0;
  padding: 0;
  // &__item:nth-of-type(odd){
  //   background-color: #fafafa;
  // }
  &__item {
    border-right: 1px solid #aaa;
    border-left: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
  }
  &__item:first-child {
    border-top: 1px solid #aaa;
  }
  &__item-link {
    display: block;
    color: #333;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
  &__item-title {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    margin: 0;
  }
  &__item-number {
    font-size: 0.825rem;
    line-height: 1.5;
    margin: 0.25rem 0 0;
  }
}
</style>
