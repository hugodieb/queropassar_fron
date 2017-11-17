<template>
  <Home :professores=professores></Home>
</template>

<script>
import AppApi from '~apijs'
import Home from '~/components/home.vue'
import Professores from '~/components/Professores.js'
export default {
  components: {Home},
  asyncData() {
    return AppApi.list_professores().then((response) => {
      return {professores: response.data}
    });
  },
  data(){
    return {
      rapazes: null,
    };
  }
}
</script>

<style>

</style>
