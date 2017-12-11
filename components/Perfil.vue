<script>
import axios from 'axios'
import Vuex from 'vuex';
import AppApi from '~apijs'
import Toasts from '~/components/Toasts.js'
import ValidateCPF from '~/components/isValidateCpf.js'
import PerfilHelper from '~/components/PerfilHelper.js'

export default {
  data () {
    return {
      user : {
        firtsName: '',
        lastName: '',
        birthDate: '',
        cpf: '',
        email: '',
        cell_phone: '',
      },
      birthMask: '##/##/####',
      cpfMask: '#########-##',
      cellMask: '(##)#####-####',
      saving: false,

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
  methods: {
    savePerfil(){
      if(this.$refs.form.validate()){
        var userCurrent = {
          firtsName: this.user.firtsName,
          lastName: this.user.lastName,
          birthDate: this.user.birthDate,
          cpf: this.user.cpf,
          email: this.user.email,
          cellPhone: this.user.cellPhone
        };
        this.saving = true;
        AppApi.savePerfilUserCurrent(userCurrent).then((result)=>{
          var user = result.data;
          if(user){
            this.$store.commit('SET_LOGGED_USER', user);
          }
          this.saving = false;
          Toasts.show('Perfil salvo com sucesso!!', {timeout: 1000, icon: "check_circle"});
          debugger
          if(PerfilHelper.is_profile_complete(this.$store)){
            setTimeout( () => this.$router.push({name: 'index'}), 1000);        
          }
        });
      }
    }
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
                                required
                                v-model="user.firtsName"
                                :rules="firstNameRules">
                                </v-text-field>
                  <v-text-field label="Sobrenome" placeholder="da Silva Neto"
                                required
                                v-model="user.lastName"
                                :rules="lastNameRules">
                                </v-text-field>
                  <v-text-field label="Data Nasimento"
                                single-line
                                prepend-icon="date_range"
                                required
                                v-model="user.birthDate"
                                :rules="birthDateRules"
                                :mask="birthMask">
                                </v-text-field>
                  <v-text-field label="Cpf"
                                single-line
                                prepend-icon="fingerprint"
                                required
                                v-model="user.cpf"
                                :rules="cpfRules"
                                :mask="cpfMask">
                                </v-text-field>
                  <v-text-field label="Email"
                                single-line
                                prepend-icon="mail"
                                required
                                v-model="user.email"
                                :rules="emailRules">
                                </v-text-field>
                  <v-text-field label="Celular"
                                 single-line
                                 prepend-icon="phone"
                                 type="tel"
                                 :mask="cellMask"
                                 required
                                 v-model="user.cellPhone"
                                 :rules="cellRules"/>
                </v-form>
                <v-btn block round  color="green"
                             :disabled="!valid"
                             :loading="saving"
                             @click="savePerfil()"
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
#meu {



}
</style>
