<template>  
      <v-card id="cardinfo" dark>
        <v-layout row>
          <v-flex xs12>
            <v-card-media contain><iframe height="300" :src="demo.demoVideo" frameborder="0" allowfullscreen></iframe></v-card-media>
          </v-flex>                    
        </v-layout>       
        <v-card>          
          <v-list class="green">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon >subtitles</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title primary>{{demo.title}}</v-list-tile-title>
              </v-list-tile-content>              
            </v-list-tile>
            <v-list-tile avatar >
              <v-list-tile-action>
                <v-icon>school</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title >{{demo.professor}}</v-list-tile-title>
              </v-list-tile-content>              
            </v-list-tile>            
          </v-list>
        </v-card>
      </v-card>    
</template>

<script>
import AppApi from '~apijs'
import Vuex from 'vuex'

export default {
  props: ['demo'],
  data() {
    return{};
  },  
}

</script>

<style scoped>
.cardinfo .hover {
  font-size: 24px;
}
</style>