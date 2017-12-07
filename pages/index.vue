<script>
import AppApi from '~apijs'
import Home from '~/components/home.vue'
export default {
  components: {Home},
  asyncData() {
    return AppApi.list_courses().then((response) => {
      return {courses: response.data}
    });
  },
  data(){
    return {
      rapazes: null,
    };
  }
}
</script>

<template>
  <Home :courses="courses" :videos="videos"></Home>
</template>

<style>

</style>
