<script>
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
  data: () => ({
    dialog: false,
    drawer: false,
    items: [
      { icon: 'contacts', text: 'Contatos' },
      { icon: 'chrome_reader_mode', text: 'Disciplinas' },
      { icon: 'new_releases', text: 'Próximos Concursos' },
      { icon: 'assignment', text: 'Marcações do Aluno' },
      { icon: 'movie', text: 'Vídeo Aulas' },
      { icon: 'feedback', text: 'Dúvidas do Aluno' },
      { icon: 'notifications', text: 'Notificações' },
    ],
    perfils: [
      {icon: 'person_outline', text: 'Aluno'},
    ],
  }),
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
    }
  }

}
</script>

<template>
  <v-app>
    <v-navigation-drawer
      persistent
      clipped
      app
      v-model="drawer"
      class="nav-drawer"
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
        <v-flex xs6 class="text-xs-center">
          <a href="#!" class="body-2 black--text">EDIT</a>
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
      <v-list-tile v-else @click="">
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
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title><router-link :to="{ name: 'index'}">
                          <img id="logomain" src="/images/logo3.png"/>
                        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn color="primary" dark slot="activator" class="green"
                v-if=!logged_user @click="open_login_social_fake($event)"
                >
                Entrar</v-btn>
        <v-menu transition="slide-y-transition" bottom>
        <v-list class="green">
          <v-list-tile v-for="perfil in perfils" :key="perfil.title" @click="">
            <v-icon>{{ perfil.icon }}</v-icon>
            <v-list-tile-title>{{ perfil.text }}</v-list-tile-title>
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

    <v-footer class="pa-3">
      <div>Rua Jonas Balbuena, 254, Jd. Katraca, Sp</div>
      <v-spacer></v-spacer>
      <div>Tel (12)3999-0000 / (12)9999-0987</div>
      <v-spacer></v-spacer>
      <div>Tamandaré © {{ new Date().getFullYear() }}</div>
    </v-footer>
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
