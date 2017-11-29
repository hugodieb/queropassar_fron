<script>
import AppApi from '~apijs'
import PerfilHelper from '~/components/PerfilHelper'

export default {
  data () {
    return {
      visible: false,
    }
  },
  methods: {
    loginFake(username) {
      AppApi.login(username, 'fakepassword').then((result) => {
        var user = result.data;
        if(user){
          this.$store.commit('SET_LOGGED_USER', user);
          this.visible = false;
          if(!PerfilHelper.is_profile_complete(this.$store)){
            this.$router.push({name: 'perfil'});
          }
        }
      });
    },
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    }
  },
}

</script>

<template>
  <v-layout row justify-center>
    <v-dialog v-model="visible" max-width="450">
      <v-card justify-center>
        <v-card-media src="/images/social.jpg" height="400px"></v-card-media>
        <v-card-title class="headline">Bem Vindo!</v-card-title>
        <v-card-text>Entre com a sua rede social preferida para acesso ao Tamandare</v-card-text>
        <v-card-actions justify-center>
          <div class="text-xs-center">
            <v-btn round color="error" dark @click="loginFake('Leonardo')">Google</v-btn>
          </div>
          <div class="text-xs-center">
            <v-btn round color="primary" dark @click="loginFake('Ze')">FaceBook</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<style scoped>
img {
  width: 350px;
}

</style>
