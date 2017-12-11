<template>	
      <v-card id="cardinfo" dark>
        <v-layout row>
          <v-flex xs4>
            <v-card-media
              :src="getIconAcademy(course.avatar)"
              height="80px"
              contain
            ></v-card-media>
          </v-flex>                                  
        	<v-card-title primary class="title">{{course.titulo}}</v-card-title>          
        </v-layout>                    
        <v-card-text
          v-text="course.descricao">
        </v-card-text>
        <v-card>          
          <v-list class="green">
            <v-list-tile avatar >
              <v-list-tile-action>
                <v-icon >date_range</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title primary>Incrição até {{course.date}}</v-list-tile-title>
              </v-list-tile-content>              
            </v-list-tile>
            <v-list-tile avatar >
              <v-list-tile-action>
                <v-icon>group</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title >{{course.vagas}} vagas</v-list-tile-title>
              </v-list-tile-content>              
            </v-list-tile>
            <v-list-tile avatar >              
              <v-list-tile-content>
                <v-list-tile-title >Mais informações<v-icon>get_app</v-icon></v-list-tile-title>
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
	props: ['course'],
	data() {
		return {			
		};
	},
	methods: {
    getIconAcademy (icon) {      
      return require('@/static/images/' + icon)      
    },
  },
}

</script>

<style scoped>
.cardinfo .hover {
	font-size: 24px;
}
</style>