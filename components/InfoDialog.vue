<template>
	<v-card-text>           
	  <v-list three-line subheader>
	    <v-subheader>User Controls</v-subheader>
	    <v-list-tile avatar>
	      <v-list-tile-content>
	        <v-list-tile-title>Content filtering</v-list-tile-title>
	        <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
	      </v-list-tile-content>
	    </v-list-tile>
	    <v-list-tile avatar>
	      <v-list-tile-content>
	        <v-list-tile-title>Password</v-list-tile-title>
	        <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
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
  data() {
    return{};
  },  
}

</script>