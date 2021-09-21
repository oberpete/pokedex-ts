<template>
  <v-container>
    <v-row>
      <v-col v-for="(pokemon, i) in pokemons" :key="i" cols="12" md="4">
        <PokemonCard :name="pokemon.name" :url="pokemon.url" />
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn
          x-large
          :color="loading ? 'grey lighten-2' : 'teal darken-3'"
          dark
          depressed
          rounded
          @click="showMorePokemons()"
        >
          <v-progress-circular
            v-if="loading"
            class="mr-2"
            color="white"
            indeterminate
          ></v-progress-circular>
          <v-icon v-if="!loading" class="mr-2">mdi-dots-horizontal</v-icon>
          show more pokemons
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PokemonCard from "@/components/overview/PokemonCard.vue";

@Component({
  components: { PokemonCard },
})
export default class PokemonList extends Vue {
  public loading = true;
  public limit = 100;
  pokemons: Array<unknown> = [];

  getPokemons(): void {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${this.limit}`)
      .then((response) => {
        response.json().then((json) => {
          this.pokemons = [];
          this.pokemons = json.results;
          this.loading = false;
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  // toDo: add some kind of actual pagination or filter options
  showMorePokemons(): void {
    this.loading = true;
    this.limit = this.limit + 100;
    this.getPokemons();
  }
  created(): void {
    this.getPokemons();
  }
}
</script>
