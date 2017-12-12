<template>
  <main sm12>
    <div class="hero-cover">
      <div class="hero">
        <v-container grid-list-md text-xs-center>
          <div class="hero-content">
            <h2>Curso preparatório Tamandaré</h2>
            <h3 class="headline mb-0">A Tamandaré prepara voçê para ingressar nos melhores colégios militares do Brasil.</h3>
          </div>
        </v-container>
      </div>
    </div>
    <v-container grid-list-md text-xs-center>      
      <h4 color="orange" class="mb-4 mt-5">CONCURSOS EM DESTAQUE</h4>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="white">
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex d-flex xs12 sm6 md3 v-for="academy in academys" :key="academy.id">
                  <Academys :academy='academy'></Academys>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>          
          <v-divider></v-divider><br /><br />
          <div class="blue-grey darken-3 pa-3 white--text">
            <v-layout row wrap>
              <v-flex xs12>
                <div class="title">DEMONSTRAÇÃO DE AULAS</div>
              </v-flex>
            </v-layout>
          </div>          
          <v-card dark color="white">
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex d-flex xs12 sm6 md3 v-for="demo in freevideos" :key="demo.id">
                  <DemoVideos :demo="demo"></DemoVideos>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>          
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
import AppApi from '~apijs'
import Vuex from 'vuex'
import Academys from '~/components/SchoolAcademys.vue'
import DemoVideos from '~/components/DemoVideos.vue'

export default {
  components: {Academys, DemoVideos},
  props: ['academys'],
  data () {
    return {
      freevideos: [
        {demoVideo: "https://www.youtube.com/embed/XySESQb3TWE",
         title: "Matematica - Polinômios", professor: "Jairo Luis da Silva"
        },
        {demoVideo: "https://www.youtube.com/embed/MBRmFHUi-ak",
         title: "Fisica - Cinematica", professor: "Rodrigo Buchfink"
        },
        {demoVideo: "https://www.youtube.com/embed/YZpQqZ14GI8",
         title: "Português - Ortografia", professor: "Aline Ferraz"
        },
        {demoVideo: "https://www.youtube.com/embed/NxTVJwxsdU8",
         title: "Geografia - Vegetação", professor: "Giordano Bombardelli"
        },

      ]
    };
  },  
}
</script>

<style scoped>
.hero-cover {
  background: url(/static/images/aluno4.png) no-repeat center center fixed;
  background-size: cover;
  height: 500px;
}
.hero {
  max-width: 100%;
  margin: 0 auto;
  position: relative;
}
.hero-content {
  padding-top: 20%;
}
.hero-content h2, h3{
  color: #393c16;
}
img {    
    width: 8em;
    height: 8em;
    border-radius: 50%;
}
</style>
