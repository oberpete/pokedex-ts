<template>
  <v-app id="inspire">
    <v-system-bar app color="teal darken-3" class="white--text">
      <v-spacer></v-spacer>
      <span class="overline pr-1 font-weight-bold">POKEDEX</span>
      <span class="caption"> by Peter Oberhauser </span>
    </v-system-bar>

    <PokemonDetailsDrawer />

    <v-main><PokemonList /> </v-main>

    <v-footer app color="transparent" height="72" inset> </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PokemonList from "@/components/PokemonList.vue";
import PokemonDetailsDrawer from "@/components/PokemonDetailsDrawer.vue";
@Component({
  components: {
    PokemonList,
    PokemonDetailsDrawer,
  },
})
export default class App extends Vue {}
</script>
