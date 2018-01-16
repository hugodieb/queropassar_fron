<template>
  <main sm12>
    <div class="hero-cover">
      <div class="hero">
        <v-container grid-list-md text-xs-center>
          <div class="hero-content ma-5">
            <h2>SOU FERA</h2>
            <h3 class="headline mb-0">AJUDANDO VOÇÊ A ENCARAR DESAFIOS.</h3>
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
                <v-flex d-flex xs12 sm6 md3
                        v-for="academy in academys"
                        :key="academy.id" @click="openInfoDialog($event, academy)">
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
          <v-divider></v-divider><br /><br />
          <div class="blue-grey darken-3 pa-3 white--text">
            <v-layout row wrap>
              <v-flex xs12>
                <div class="title">RESOLVA UMA QUESTÃO</div>
              </v-flex>
            </v-layout>
          </div>
          <v-card dark color="white">
            <v-tabs v-model="active">
              <v-tabs-bar class="white" dark>
                <v-tabs-slider class="black"></v-tabs-slider>
                <v-tabs-item
                  v-for="tab in tabs"
                  :key="tab"
                  :href="'#tab-' + tab"                  
                >
                  {{tabTitle[tabs.indexOf(tab)]}}<v-icon >navigate_next</v-icon>
                </v-tabs-item>
              </v-tabs-bar>
              <v-tabs-items>
                <v-tabs-content
                  v-for="tab in tabs"
                  :key="tab"
                  :id="'tab-' + tab"
                >
                  <v-flex xs12 sm12 offset-sm0 v-if="active == 'tab-tab-1'">
                    <v-card color="grey">
                      <v-card-title primary-title>
                        Questão: <v-chip>Q3234</v-chip> - Direito Processual Penal / Ação Penal / Denuncia e Queixa {{active}}
                      </v-card-title>
                    </v-card>
                    <v-card>
                      <v-card-title >
                        <strong>Ano:</strong> <span class="ml-1">2016</span> <span class="ml-5"><strong class="ml-1">Prova:</strong> FADESP - 2016 - PM-PA - Aspirante da Polícia Militar</span>
                      </v-card-title>
                      <v-divider light></v-divider>
                      <v-card-title>
                        <v-layout row wrap>
                          <v-flex xs12 md12>
                            <v-subheader class="text-xs-left">A ação penal, que constitui poder político constitucional de acudir aos tribunais para formular a pretensão acusatória, pode ser de vários tipos.<br> Sobre o assunto é correto afirmar que</v-subheader>
                            <v-card flat>
                              <v-card-text>
                                <v-radio-group v-model="question" column>
                                  <v-radio label="A) a ação penal pública é regida pelos princípios da oportunidade, da obrigatoriedade e da indisponibilidade.
                                  "
                                  value="q1" 
                                  >                                    
                                  </v-radio>
                                  <v-radio label="B) a ação penal privada concorrente ocorre em casos de crimes contra a presidência da república.
                                  "
                                  value="q2" 
                                  >                                    
                                  </v-radio>
                                  <v-radio label="C)a ação privada subsidiária da pública ocorre com a desídia do Ministério Público, sendo que este ainda pode repudiar a queixa.
                                  "
                                  value="q3" 
                                  >                                    
                                  </v-radio>
                                  <v-radio label="D) na ação pública condicionada, diante da requisição do Ministro da Justiça, o Ministério Público deve denunciar.
                                  "
                                  value="q4" 
                                  >                                    
                                  </v-radio>
                                </v-radio-group>
                                <v-chip color="teal" text-color="white" v-if="question == 'q3'">
                                  <v-avatar>
                                    <v-icon>check_circle</v-icon>
                                  </v-avatar>
                                  Acertou!
                                </v-chip>
                                <v-chip color="red" text-color="white"
                                        v-if="question == 'q1' || question == 'q2' || question == 'q4'"
                                >
                                  <v-avatar>
                                    <v-icon>highlight_off</v-icon>
                                  </v-avatar>
                                  Errou!
                                </v-chip>                                
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-card-title>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 sm12 offset-sm0 v-if="active == 'tab-tab-2'">
                    <v-card>                      
                      <v-flex xs12 sm12 offset-sm2>                      
                        <v-card-media><iframe width="800" height="435" :src="tabVideoUrl" frameborder="0" allowfullscreen></iframe></v-card-media>
                      </v-flex>                       
                    </v-card>
                  </v-flex>
                  <v-flex xs12 sm12 offset-sm0 v-if="active == 'tab-tab-3'">
                    <v-card>                      
                      <v-flex xs12 sm12 offset-sm0>
                        <p><strong>Alternativas mais respondidas(alternativa correta (C))</strong></p>           
                        <line-chart></line-chart>
                      </v-flex>                       
                    </v-card>
                  </v-flex>                                  
                </v-tabs-content>
              </v-tabs-items>
            </v-tabs>
          </v-card>          
        </v-flex>
      </v-layout>
    </v-container>
    <div>
        <v-layout row justify-center>
          <v-dialog
            v-model="dialog"
            fullscreen
            transition="dialog-bottom-transition"
            :overlay=false
            scrollable
          >
            <v-card>
              <v-toolbar style="flex: 0 0 auto;" dark class="brown lighten-1">
                <v-btn icon @click.native="dialog = false" dark>
                  <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Informações</v-toolbar-title>                        
              </v-toolbar>
              <InfoDialog :infoacademy='infoacademy'></InfoDialog>                      
            </v-card>            
          </v-dialog>
        </v-layout>
      </div>
  </main>
</template>

<script>
import AppApi from '~apijs'
import Vuex from 'vuex'
import Academys from '~/components/SchoolAcademys.vue'
import DemoVideos from '~/components/DemoVideos.vue'
import InfoDialog from '~/components/InfoDialog.vue'

export default {
  components: {Academys, DemoVideos, InfoDialog},
  props: ['academys',],
  data () {
    return {
      freevideos: [],
      infoacademy: [],
      tabs: ['tab-1', 'tab-2', 'tab-3'],
      tabTitle: ['1 - Questão', '2 - Comentário do Professor', '3 - Estatísticas'],
      inset: false,
      active: null,
      question: null,
      row: null,
      tabVideoUrl: 'https://www.youtube.com/embed/xSdpzqerRHQ',
      dialog: false,      
    };
  },
  methods: {
    openInfoDialog(evt, value){
      this.dialog = true;
      this.infoacademy = value;            
    },
  },
  mounted() {
    AppApi.list_freeVideos().then((result)=>{
      this.freevideos = result.data;
    });    
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
