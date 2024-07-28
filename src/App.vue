<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="authStore.isAuthenticated" @click="logout" icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav>
        <v-list-item-group v-if="authStore.isAuthenticated">
          <v-list-item to="/home" exact>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about" exact>
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-list-item to="/" exact>
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-bottom-navigation v-if="authStore.isAuthenticated" app>
      <v-btn to="/home" exact>
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn to="/about" exact>
        <span>About</span>
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { authStore } from './components/authStore';

export default {
  name: 'App',
  setup() {
    return { authStore };
  },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    logout() {
      this.authStore.logout();
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}

.v-list-item {
  transition: background-color 0.3s ease;
}

.v-list-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.v-list-item--active {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

.v-btn--active {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

.v-bottom-navigation .v-btn {
  transition: background-color 0.3s ease;
}

.v-bottom-navigation .v-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.v-bottom-navigation .v-btn--active {
  background-color: rgba(0, 0, 0, 0.1) !important;
}
</style>