<template>
  <nav>
    <!--    toolbar-->
    <v-toolbar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="toggleDrawer"/>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>Todo</span>
        <span class="font-weight-bold">Ninja</span>
      </v-toolbar-title>
      <v-spacer/>

      <!--      dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="grey"
              dark
              plain
              v-bind="attrs"
              v-on="on"
          >
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn color="grey" dark plain>
        <span>Sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <!--    drawer menu-->
    <v-navigation-drawer temporary app v-model="drawer" class="purple accent-3" width="300">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img
                src="https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-1.png">
          </v-avatar>
          <p class="subtitle-1 white--text mt-1">The Net Ninja</p>
        </v-flex>
<!--        Popup add project -->
        <v-flex class="mt-4 mb-3">
          <Popup />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "@/components/Popup";

export default {
  components: {
    Popup
  },
  data: () => ({
    drawer: false,
    links: [
      {icon: 'dashboard', text: 'Dashboard', route: '/'},
      {icon: 'folder', text: 'My Projects', route: '/projects'},
      {icon: 'person', text: 'Team', route: '/team'},
    ]
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style scoped>

</style>