<template>
	<v-card-text>           
	  <v-list three-line subheader>
	    <v-subheader>
	      <v-chip>
            <v-avatar class="teal">@</v-avatar>
            <a :href="infoacademy.url" target="_blank"> {{infoacademy.titulo}} </a>
          </v-chip>
        </v-subheader>
	    
	    <v-list-tile avatar>
	      <v-list-tile-content>
	        <v-list-tile-title>Pré-requisitos</v-list-tile-title>
	        <v-list-tile-sub-title>{{infoacademy.requisitos}}</v-list-tile-sub-title>
	      </v-list-tile-content>
	    </v-list-tile>
	    <v-list-tile avatar>
	      <v-list-tile-content>
	        <v-list-tile-title>Idade</v-list-tile-title>
	        <v-list-tile-sub-title>{{infoacademy.idade}}</v-list-tile-sub-title>
	      </v-list-tile-content>
	    </v-list-tile>
	    <v-list-tile avatar>
	      <v-list-tile-content>
	        <v-list-tile-title>Sexo</v-list-tile-title>
	        <v-list-tile-sub-title>{{infoacademy.sexo}}</v-list-tile-sub-title>
	      </v-list-tile-content>
	    </v-list-tile>
	    <v-list-tile avatar>
	      <v-list-tile-content>
	        <v-list-tile-title>Disciplinas</v-list-tile-title>
	        <v-list-tile-sub-title>{{infoacademy.disciplinas}}</v-list-tile-sub-title>
	      </v-list-tile-content>
	    </v-list-tile>
	  </v-list>
	  <v-divider></v-divider><br><br>	  
      <v-list-tile-content>	        
        <v-list-tile-sub-title>*As informações sobre os concursos são apenas para sua referência,
        					 sendo os dados oficiais, divulgados pelos editais de cada concurso. Ver link do site.
        </v-list-tile-sub-title>
      </v-list-tile-content>	    	   
	</v-card-text>	  
</template>

<script>
import AppApi from '~apijs'
import Vuex from 'vuex'

export default {	
    props: ['infoacademy'],
}

</script>

<style scoped>
	a {
		text-decoration:none;
		color: #008000;		
	}
</style>