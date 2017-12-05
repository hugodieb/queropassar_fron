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
      <h4 class="mb-4 mt-5">Metodologia no Tamandaré</h4>
      <p>Os alunos estudam a teoria e praticam muitos exercícios.<br>
        Os professores dão suporte aos alunos na solução dos exercícios.
        São feitas também os simulados que são<br>
        questões que caem nas provas reais dos colégios militares.
        Os alunos estão sempre praticando o que aprendem na teoria.<br>
        Quando o aluno tiver dúvida só postar na guia dúvida do aluno que<br/>
        um de nossos profesores irá ajudá-lo.<br>
      </p>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="white">
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex d-flex xs12 sm6 md3 v-for="course in courses" :key="course.id">
                  <Courses :course='course'></Courses>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
          <v-divider></v-divider><br /><br />
          <h4 class="mb-4 mt-5">Nossos Professores</h4>
          <v-card dark color="white">
            <v-container grid-list-md text-xs-center>
              <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-flex d-flex xs12 sm6 md2 v-for="professor in professores" :key="professor.id">
                  <v-card color="green" dark>
                    <v-card-text>
                      <v-flex xs12>
                        <div>
                          <img :src="professor.avatar" alt="">
                        </div>
                      </v-flex>
                      <v-card-text class="px-0">{{professor.nome}}<p>{{professor.disciplina}}</p></v-card-text>
                    </v-card-text>
                  </v-card>
                </v-flex><v-spacer></v-spacer>
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
import Courses from '~/components/Courses.vue'

export default {
  components: {Courses},
  props: ['courses'],
  data () {
    return {
      
    }
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
