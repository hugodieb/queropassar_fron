<script>
import Vuex from 'vuex';

export default {
  data () {
    return {
      user : {
        first_name: '',
        last_name: '',
        birth_date: '',
        cpf: '',
        email: '',
        cell_phone: '',
      },
      valid: true,
    };
  },
  mounted () {
    var logged_user = this.$store.getters.logged_user;
    this.user = Object.assign({}, logged_user);
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
          <v-card>
            <v-card-text>
              <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field label="Nome" placeholder="Carlos"
                                v-model="user.first_name"
                                required ref="name">
                                </v-text-field>
                  <v-text-field label="Sobrenome" placeholder="da Silva Neto"
                                v-model="user.last_name"
                                required ref="name">
                                </v-text-field>
                  <v-text-field label="Data Nasimento" placeholder="dd/mm/YYYY"
                                v-model="user.birth_date"
                                required ref="name">
                                </v-text-field>
                  <v-text-field label="Cpf" placeholder="11 digitos"
                                v-model="user.cpf">
                                </v-text-field>
                  <v-text-field label="Email" placeholder="exemplo@net.com"
                                v-model="user.email">
                                </v-text-field>
                  <v-text-field label="Telefone" placeholder="(xx)xxxxx-xxxx"
                                v-model="user.cell_phone">
                                </v-text-field>
                </v-form>
                <v-btn block round  color="green"
                             :disabled="valid"
                             >Salvar
               </v-btn>
              </v-card-text>            
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
