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
        { icon: 'chrome_reader_mode', text: 'Disciplinas', id: 'discipline' },
        { icon: 'movie', text: 'Vídeo Aulas', id: 'videos' },        
        { icon: 'assignment', text: 'Anotaçṍes do Aluno', id: 'assignment' },        
        { icon: 'feedback', text: 'Dúvidas do Aluno', id: 'feedback' },
        { icon: 'notifications', text: 'Notificações', id: 'notifications' },
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
        case 'discipline':
          this.$router.push({name: 'guides-disciplines'});
          break;
        case 'videos':
          this.$router.push({name: 'guides-lessonsVideo'});
          break;
        case 'assignment':
          this.$router.push({name: 'guides-assignments'});
          break;
        case 'feedback':
          this.$router.push({name: 'guides-feedbacks'});
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
    >
    <v-list dense>
    <template v-for="(item, i) in items">
      <v-layout
        row
        v-if="item.heading"
        align-center
        :key="i"
      >
        <v-flex xs6>
          <v-subheader v-if="item.heading">
            {{ item.heading }}
          </v-subheader>
        </v-flex>        
      </v-layout>
      <v-list-group v-else-if="item.children" v-model="item.model" no-action>
        <v-list-tile slot="item" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-for="(child, i) in item.children"
          :key="i"
          @click=""          
        >
        <v-list-tile-action v-if="child.icon">
          <v-icon>{{ child.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ child.text }}
          </v-list-tile-title>
        </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
      <v-list-tile v-else @click.stop="loadGuide(item.id)">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.text }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
</v-list>
</v-navigation-drawer>
    <v-toolbar
      light
      app
      color="green"
      clipped-left
      fixed
    >
      <v-toolbar-side-icon :disabled="!logged_user" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title><router-link :to="{ name: 'index'}">
                          <img id="logomain" src="/images/logo3.png" class="toolbar-title" />
                        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn color="primary" dark slot="activator" class="green"
                v-if="!logged_user" @click="open_login_social_fake($event)"
                >
                Entrar</v-btn>
        <v-menu v-if="logged_user" transition="slide-y-transition" bottom>
          <v-btn color="primary" dark slot="activator" class="green">
            {{logged_user.firtsName}}
          </v-btn>
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
      </v-toolbar-items>
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
</style>
