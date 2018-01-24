<script>
import AppApi from '~apijs'
import Events from '~/components/Events.js'
import Perfil from '~/components/Perfil'
import LoginSocialFake from '~/components/LoginSocialFake'
import Vuex from 'vuex'
export default {
  components: {LoginSocialFake},
  computed: Object.assign(
    {}, Vuex.mapGetters([
      'logged_user'
    ])
  ),
  data() {
    return {
      dialog: false,
      drawer: false,
      toasts_model: {
        visible: false,
        text: '',
        timeout: 1000,
        icon: '',
      },
      items: [        
        {
         icon: 'chrome_reader_mode',
         title: 'Disciplinas',
         active: true,
         items: [
          { id: 'math', title: 'Matemática' },
          { id: 'physical', title: 'Física'},
          { id: 'chemistry', title: 'Química'},
          { id: 'science', title: 'Ciênicas'}
         ]
        },        
        {
          id: 'assignments',
          icon: 'assignment',
          title: 'Tire uma dúvida',
        },
        {
          id: 'notifications',
          icon: 'notifications',
          title: 'Notificações',
        },        
      ],
      perfils: [
        {icon: 'person_outline', text: 'Aluno'},
      ],
    }
  },
  mounted(){
    Events.subscribe('toast', (data)=>{
      this.show_toast(data);
    });
    Events.subscribe('needlogin', (data)=>{
      this.open_login_dialog();
    });
  },
  props: {
    source: String
  },
  methods: {
    open_login_social_fake(evt){
      if(process.env.API_MOCK == '1'){
        this.$refs.login_social_fake.open();
      }
      if(evt){
        evt.stopPropagation();
      }
    },
    logoff() {
      AppApi.logout().then((result)=>{
        if(!result.data){
          this.$store.commit('SET_LOGGED_USER', null);
          this.$router.push({name: 'index'});
        }
      });
    },
    show_toast(data){
      this.toasts_model.text = data.text;
      this.toasts_model.timeout = data.timeout;
      this.toasts_model.visible = true;
      this.toasts_model.icon = data.icon
    },
    loadGuide(type){
      switch (type){
        case 'math':
          this.$router.push({name: 'guides-courses-matematica'});
          break;
        case 'physical':
          this.$router.push({name: 'guides-courses-fisica'});
          break;
        case 'chemistry':
          this.$router.push({name: 'guides-courses-quimica'});
          break;
        case 'science':
          this.$router.push({name: 'guides-courses-ciencias'});
          break;        
        case 'assignments':
          this.$router.push({name: 'guides-assignments'});
          break;        
        case 'notifications':
          this.$router.push({name: 'guides-notifications'});
          break;
      }
    },
  }
}
</script>

<template>
  <v-app>
    <v-navigation-drawer      
      temporary
      v-model="drawer"
      light
      absolute
      :disabled="!logged_user"
    >
      <v-layout row>
        <v-flex>                 
            <v-list>
              <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
                <v-list-tile slot="item" @click.stop="loadGuide(item.id)">
                  <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action v-if="item.active">
                    <v-icon>keyboard_arrow_down</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" @click.stop="loadGuide(subItem.id)">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon>{{ subItem.icon }}</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list-group>
            </v-list>        
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-toolbar
      id="mainmenu"      
      app
      color="light-green darken-1"
      clipped-left     
      xs6
    >
      <v-toolbar-side-icon color="white" :disabled="!logged_user" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <router-link :to="{name: 'index'}">
          <img src="images/logo7.png" height="50em" class="toolbar-title">
        </router-link>
      </v-toolbar-title> 
      <v-spacer></v-spacer>           
        <div>
          <v-btn fab flat class="ma-1"
                  v-if="!logged_user" @click="open_login_social_fake($event)"
                  >
                  <v-icon color="white" large>account_circle</v-icon></v-btn>
        </div>
        <div>
          <v-menu v-if="logged_user" transition="slide-y-transition" bottom>          
              <v-avatar slot="activator" class="ma-2">
                <img :src="logged_user.avatar" alt="userAvatar">
              </v-avatar>          
            <v-list>
              <v-list-tile :router="true" :to="{name: 'perfil'}">
                <v-list-tile-action>
                  <v-icon>exit_to_app</v-icon>
                </v-list-tile-action>
                <v-list-tile-title v-text="'Editar Perfil'"></v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="logoff()">
                <v-list-tile-action>
                  <v-icon>exit_to_app</v-icon>
                </v-list-tile-action>
                <v-list-tile-title v-text="'Sair'"></v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>      
    </v-toolbar>
    <main>
      <v-content>
        <slot></slot>
      </v-content>
    </main>

    <LoginSocialFake ref="login_social_fake"></LoginSocialFake>
    <v-snackbar color="success" bottom right v-model="toasts_model.visible"
                       :timeout="toasts_model.timeout"
                       >
                         <v-avatar>
                          <v-icon>{{toasts_model.icon}}</v-icon>
                         </v-avatar>
                         {{toasts_model.text}}
                       </v-snackbar>

    <!--<v-footer class="pa-3">
      <div>Rua Jonas Balbuena, 254, Jd. Katraca, Sp</div>
      <v-spacer></v-spacer>
      <div>Tel (12)3999-0000 / (12)9999-0987</div>
      <v-spacer></v-spacer>
      <div>Tamandaré © {{ new Date().getFullYear() }}</div>
    </v-footer>-->
  </v-app>
</template>

<style scoped>
toolbar-title {
  max-height: 67px;
}
.headline {
  color: black;
}
a {
  text-decoration: none;
}
.footer {
  background-color: green;
}
#logomain {
  width: 7em;
  height: 7em;
}
#mainmenu {
  opacity: 0.8;
}
</style>