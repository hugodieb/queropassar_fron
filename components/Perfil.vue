<script>
import Vuex from 'vuex';
import ValidateCPF from '~/components/isValidateCpf.js'

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
      firstNameRules: [
        (v) => !!v || 'Nome não pode ficar em branco',
        (v) => v && v.length >= 2 || ''
      ],
      lastNameRules: [
        (v) => !!v || 'Sobrenome não pode ficar em branco',
        (v) => v && v.length >= 2 || ''
      ],
      birthDateRules: [
        (v) => !!v || 'Data nascimento não pode ficar em branco',
        (v) => v && v.length == 8 || 'dd/mm/yyyy'
      ],
      cpfRules: [
        (v) => !!v || 'Cpf não pode ficar em branco',
        (v) => v && v.length == 11 || 'Deve conter 11 dígitos',
        (v) => v && ValidateCPF.isCPFValid(v) || 'Digite um CPF válido'
      ],
      emailRules: [
        (v) => !!v || 'E-mail não pode ficar em branco',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Por favor colocar E-mail válido'
      ],
      cellRules: [
        (v) => !!v || 'Telefone não pode ficar em branco',
        (v) => v && v.length == 11 || 'Digite seu telefone com DDD'
      ],
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
                                required
                                :rules="firstNameRules">
                                </v-text-field>
                  <v-text-field label="Sobrenome" placeholder="da Silva Neto"
                                v-model="user.last_name"
                                required
                                :rules="lastNameRules">
                                </v-text-field>
                  <v-text-field label="Data Nasimento" placeholder="dd/mm/YYYY"
                                v-model="user.birth_date"
                                required
                                :rules="birthDateRules">
                                </v-text-field>
                  <v-text-field label="Cpf" placeholder="11 digitos"
                                v-model="user.cpf"
                                :rules="cpfRules">
                                </v-text-field>
                  <v-text-field label="Email" placeholder="exemplo@net.com"
                                v-model="user.email"
                                :rules="emailRules">
                                </v-text-field>
                  <v-text-field label="Telefone" placeholder="(xx)xxxxx-xxxx"
                                v-model="user.cell_phone"
                                :rules="cellRules">
                                </v-text-field>
                </v-form>
                <v-btn block round  color="green"
                             :disabled="!valid"
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
