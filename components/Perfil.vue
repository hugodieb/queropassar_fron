<script>
import Vuex from 'vuex';

export default {
  data () {
    return {
      valid: true,
    };
  },
}

</script>

<template>
<main>
    <v-layout justify-center>
        <v-flex xs12 sm10 md8 lg6>
          <v-toolbar color="green">
            <v-toolbar-title class="white--text"
                              >Editar meu perfil
                              </v-toolbar-title>            
          </v-toolbar>
          <v-card ref="form" lazy-validation>
            <v-card-text>
              <v-text-field label="Nome" placeholder="Carlos"
                            required ref="name">
                            </v-text-field>
              <v-text-field label="Sobrenome" placeholder="da Silva Neto"
                            required ref="name">
                            </v-text-field>
              <v-text-field label="Cpf" placeholder="11 digitos">
                            </v-text-field>
              <v-text-field label="Telefone" placeholder="(xx)xxxxx-xxxx">
                            </v-text-field>
              <v-text-field label="Endereço"
                            placeholder="R. Jucupimba dos Arapes, 620, Caramurus"
                            ></v-text-field>
              <v-text-field label="Cidade" placeholder="Belo Horizonte, MG">
                            </v-text-field>
              <v-text-field label="Cep" placeholder="xxxxx-xxx">
                            </v-text-field>
            </v-card-text>
            <v-card-actions>
                 <v-btn block round  color="green" :dark="valid"
                        :disabled="!valid">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
</main>
</template>

<style scoped>
.blue-grey.darken-3 {
  background-color: #4caf50;
}
</style>
