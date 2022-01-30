<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app dark>
      <v-list-item>
        <!-- Icone Logo -->
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <!-- Titulo e Subtitulo -->
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Vue.Js </v-list-item-title>
          <v-list-item-subtitle> Lista de Rarefas </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <!-- Linha para dividor -->
      <v-divider></v-divider>

      <!-- Lista de Opcoes do Menu -->
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    -->
    <v-app-bar app prominent color="#fcb69f" dark src="./assets/bg.jpg">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Tarefas", icon: "mdi-view-dashboard", to: "/" },
      { title: "Sobre", icon: "mdi-image", to: "/Sobre" },
      { title: "Clientes", icon: "mdi-account-multiple", to: "" },
      { title: "Sobre", icon: "mdi-star", to: "" },
      { title: "Dashboard", icon: "mdi-folder", to: "" },
],
  }),
};
</script>
