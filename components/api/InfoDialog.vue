<template>
	<v-card-text>           
	  <v-list three-line subheader>
	    <v-subheader>Concurso</v-subheader>
	    <v-list-tile avatar>
	      <v-list-tile-content>
	        <v-list-tile-title>Pré-requisitos</v-list-tile-title>
	        <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
	      </v-list-tile-content>
	    </v-list-tile>
	    <v-list-tile avatar>
	      <v-list-tile-content>
	        <v-list-tile-title>Password</v-list-tile-title>
	        <v-list-tile-sub-title>Requisitos: {{infoacademy.requisitos}}</v-list-tile-sub-title>
	      </v-list-tile-content>
	    </v-list-tile>
	  </v-list>
	  <v-divider></v-divider>
	  <v-list three-line subheader>
	    <v-subheader>General</v-subheader>           
	  </v-list>
	</v-card-text>  
</template>

<script>
import AppApi from '~apijs'
import Vuex from 'vuex'

export default {
	props: ['infoacademy'],
  data() {
    return{};
  },  
}

</script>