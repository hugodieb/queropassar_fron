<script>
import Perfil from '~/components/Perfil.vue'
export default {
  asyncData(ctx) {
    var q = ctx.route.query
    if(q.next){
      ctx.store.commit('SET_NEXT_ROUTE', JSON.parse(decodeURIComponent(q.next)));
    }
  },
  components: {Perfil},
  data: {

  },
}
</script>

<template>
  <Perfil></Perfil>
</template>
