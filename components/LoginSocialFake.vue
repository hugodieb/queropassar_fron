<script>
export default {
  data () {
    return {
      visible: false,
    }
  },
  methods: {
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
      <v-card>
        <v-card-media src="/images/social.jpg" height="400px"></v-card-media>
        <v-card-title class="headline">Bem Vindo!</v-card-title>
        <v-card-text>Entre com a sua rede social preferida para acesso ao Tamandare</v-card-text>
        <v-card-actions justify-center>
          <div class="text-xs-center">
            <v-btn round color="error" dark @click.native="visible = !visible">Google</v-btn>
          </div>
          <div class="text-xs-center">
            <v-btn round color="primary" dark>FaceBook</v-btn>
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
