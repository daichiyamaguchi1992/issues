<template>
  <ul class="pagination">
    <li class="pagination__item" @click="pageTransitionTo(1)">First</li>
    <li class="pagination__item" @click="pageTransitionTo(Number(currentIssuesPageNumber) - 1)">Prev</li>
    <li class="pagination__item" @click="pageTransitionTo(Number(currentIssuesPageNumber) + 1)">Next</li>
    <li class="pagination__item" @click="pageTransitionTo(lastIssuesPageNumber)">Last</li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(["currentIssuesPageNumber", "lastIssuesPageNumber"])
  },
  methods: {
    pageTransitionTo(page_number) {
    console.log(page_number, "page_number");
    this.$router.push({ path: 'issues', query: { page: page_number } })
    this.$store.dispatch("fetchIssues", page_number)
    }
  }
};
</script>

<style scoped lang="scss">
.pagination {
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 2rem 0 0;
  padding: 0;
  &__item {
    cursor: pointer;
    height: 3rem;
    width: 4rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #707070;
    border-right: 1px solid #707070;
    border-bottom: 1px solid #707070;
  }
  &__item:first-child {
    border-left: 1px solid #707070;
  }
  &__item:hover {
    background-color: #707070;
    color: #fff;
  }
}
</style>
