<template>
  <div class="issue">
    <div class="issue__breadcrumb">
      <router-link :to="{ path: '/issues', query: {　page: currentIssuesPageNumber } }">
      ISSUES
      </router-link>/{{ issue.title }}
    </div>
    <div class="issue-content" v-if="issue">
      <h3 class="issue-content__title">{{ issue.title }}</h3>
      <p class="issue-content__number">#{{ issue.number }}</p>
      <p class="issue-content__body">{{ issue.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted() {
    this.renderIssue(this.$route.params.number);
  },
  computed: {
    ...mapState(["issue", "currentIssuesPageNumber"])
  },
  methods: {
    renderIssue(issue_number) {
      this.$store.dispatch("fetchIssue", issue_number )
    }
  }
};
</script>

<style lang="scss" scope>
.issue{
  max-width: 680px;
  margin: 0 auto;
  &__breadcrumb{
    margin: 4rem 0 0;
    font-size: 0.825rem;
    color: #333;
    a {
      color: blue;
    }
  }
}
 .issue-content {
   margin: 2rem 0 0;
  &__title {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.5;
    margin: 0;
   }
  &__number {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0.25rem 0 0;
  }
  &__body {
    line-height: 1.5;
    margin: 4rem 0 0;
    font-size: 1.25rem;
  }
 }
</style>