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
                <v-flex d-flex xs12 sm6 md3 v-for="academia in academias" :key="academia">
                  <v-card color="green" dark>
                    <v-card-title primary class="title">{{academia.titulo}}</v-card-title>
                    <v-card-text
                      v-text="academia.descricao">
                    </v-card-text>
                  </v-card>
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
                <v-flex d-flex xs12 sm6 md2 v-for="professor in professores">
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
export default {
  props: ['professores'],
  data () {
    return {
      academias : [
        {titulo: "EPCAR", descricao: "A Epcar possui o Curso Preparatório de Cadetes do Ar (CPCAr),\
                     que tem como uma de suas finalidades a preparação de alunos,\
                     sob o regime de internato, para ingressar no Curso de Formação de Oficiais Aviadores\
                     (CFOAV) da Academia da Força Aérea (AFA)."
        },
        {titulo: "EEAR/AFA", descricao: "A Academia da Força Aérea (AFA), situada na cidade de Pirassununga-SP,\
                            é um estabelecimento de ensino superior, que integra o Sistema de Formação e\
                            Aperfeiçoamento do Comando da Aeronáutica. Sua finalidade é formar Oficiais Aviadores,\
                            Intendentes e de Infantaria da Força Aérea Brasileira, incentivando e aprimorando em cada\
                            Cadete os atributos intelectuais, morais e físicos, essenciais ao Oficial da Aeronáutica."
        },
        {titulo: "COLÉGIO NAVAL", descricao: "Situado num recanto de invejável beleza do litoral do Estado do Rio de Janeiro,\
                                 na Enseada Batista das Neves, cidade de Angra dos Reis, e localizado a poucas horas\
                                 dos dois maiores centros urbanos brasileiros – Rio de Janeiro e São Paulo – encontra-se\
                                 o Colégio Naval, incrustado entre montanhas e o mar. Preparar seus alunos para a Escola Naval,\
                                 onde são formados os Oficiais da Marinha, despertando-lhe o interesse pela carreira naval é a sua finalidade. "
        },
        {titulo: "APMBB", descricao: "A Academia de Polícia Militar do Barro Branco tem como objetivo formar,\
                                  por meio do Curso de Formação de Oficiais (CFO), com embasamento teórico e prático,\
                                  o profissional, cujo posto inicial é o de aspirante a oficial, a fim de que o mesmo\
                                  esteja capacitado à comandar, instruir, capacitar e especializar os membros das\
                                  fileiras da Polícia Militar do Estado de São Paulo."
        },
      ],
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
