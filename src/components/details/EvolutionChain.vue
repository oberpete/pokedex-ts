<template>
  <v-container pa-0>
    <v-row v-if="loading">
      <v-col cols="12">
        <v-progress-linear
          color="teal darken-2"
          class="mx-2"
          indeterminate
          v-if="loading"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <v-row v-if="!loading" class="no-gutters text-center">
      <v-col>
        <v-chip
          v-for="evolution in pokemonEvolutionChain.chain.evolves_to"
          v-bind:key="evolution.species.url"
          class="ma-1"
          >{{ evolution.species.name | capitalize }}</v-chip
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class EvolutionChain extends Vue {
  public loading = true;

  public pokemonEvolutionChain: unknown = {};
  @Watch("$route", { immediate: true, deep: true })
  onUrlChange(): void {
    if (this.$route.params.id) {
      this.getPokemonEvolutionChain(this.$route.params.id);
    }
  }

  getPokemonEvolutionChain(id: string): void {
    this.loading = true;
    fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
      .then((response) => {
        response.json().then((json) => {
          this.pokemonEvolutionChain = json;
          this.loading = false;
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  mounted(): void {
    this.getPokemonEvolutionChain(this.$route.params.id);
  }
}
</script>
