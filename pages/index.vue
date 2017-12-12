<script>
import AppApi from '~apijs'
import Home from '~/components/home.vue'
export default {
  components: {Home},
  asyncData() {
    return AppApi.list_academys().then((response) => {
      return {academys: response.data}
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
  <Home :academys="academys"></Home>
</template>

<style>

</style>
