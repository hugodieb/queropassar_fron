<template>	
      <v-card color="green" dark>
        <v-layout row>
          <v-flex xs6>
            <v-card-media
              :src="getIconAcademy(course.avatar)"
              height="125px"
              contain
            ></v-card-media>
          </v-flex>
          <v-flex xs1>                        
        	<v-card-title primary class="title">{{course.titulo}}</v-card-title>
          </v-flex>
        </v-layout>                    
        <v-card-text
          v-text="course.descricao">
        </v-card-text>
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
      debugger
      return require('@/static/images/' + icon)      
    },
  },
}

</script>