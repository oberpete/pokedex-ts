<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    width="500"
    right
    disable-resize-watcher
  >
    <!-- show skeleton loader as long as response is being awaited -->
    <div v-if="!error && loading">
      <v-btn rounded text icon to="/" class="ma-4" id="close">
        <v-icon> mdi-close </v-icon>
      </v-btn>
      <v-skeleton-loader type="card"></v-skeleton-loader>
    </div>
    <div v-if="error">
      <v-sheet color="red lighten-5" class="pa-4 text-center">
        <v-icon size="100" color="red">mdi-alert-circle</v-icon>
        <div class="pt-4 text-h4" id="errorMsg">Oops..</div>
        <div class="text-body-1">it seems an error occured!</div>
      </v-sheet>
      <v-divider></v-divider>
      <div class="text-center mt-5 caption font-italic">
        Are you sure the ID you queried exists?
      </div>
    </div>
    <!-- show pokemon details -->
    <div v-if="!error && !loading">
      <v-sheet color="teal lighten-5" class="pa-4">
        <v-btn rounded text icon to="/" id="close">
          <v-icon> mdi-close </v-icon>
        </v-btn>
        <v-row>
          <img
            class="mx-auto"
            height="100"
            :src="pokemon.sprites.other.dream_world.front_default"
          />
        </v-row>
        <v-row class="text-center align-center">
          <v-spacer></v-spacer>

          <v-col cols="auto">
            <v-tooltip left transition="slide-x-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-chip icon outlined v-bind="attrs" v-on="on">
                  {{ pokemon.order }}
                </v-chip>
              </template>
              <span>order number</span>
            </v-tooltip>
          </v-col>
          <v-col cols="auto" class="text-h3">
            {{ pokemon.name | capitalize }}
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <div></div>
      </v-sheet>

      <v-divider class="mb-4"></v-divider>
      <v-row class="no-gutters align-center">
        <v-col cols="4" class="overline text-right pr-2"> Species </v-col>
        <v-col cols="8">
          <span class="font-weight-bold text-left">{{
            pokemon.species.name | capitalize
          }}</span>
        </v-col>

        <v-col cols="4" class="overline text-right pr-2"> Type </v-col>
        <v-col cols="8" class="text-left font-weight-bold">
          {{ pokemon.types[0].type.name | capitalize }}
        </v-col>
      </v-row>
      <!-- ABILITIES -->
      <v-divider class="mt-4"></v-divider>
      <v-row class="no-gutters text-center">
        <v-col cols="12" class="overline"> Abilities </v-col>
        <v-col class="caption">
          <v-chip
            v-for="item in pokemon.abilities"
            v-bind:key="item.ability.url"
            class="mx-1"
          >
            {{ item.ability.name }}
          </v-chip>
        </v-col>
      </v-row>
      <!-- STATS -->
      <v-divider class="mt-4"></v-divider>
      <v-row class="no-gutters text-center">
        <v-col cols="12" class="overline"> Stats </v-col>
        <v-col class="caption">
          <v-chip
            v-for="item in pokemon.stats"
            v-bind:key="item.stat.name"
            class="ma-1"
          >
            <span>{{ item.stat.name }}:</span>
            <span class="font-weight-bold ml-1">{{ item.base_stat }} </span>
          </v-chip>
        </v-col>
      </v-row>
      <!-- EVOLUTION CHAIN -->
      <v-divider class="mt-4"></v-divider>
      <v-row class="no-gutters text-center">
        <v-col cols="12" class="overline"> evolves to </v-col>
        <EvolutionChain />
      </v-row>
      <!-- MOVES -->
      <v-divider class="mt-4"></v-divider>
      <v-sheet color="teal lighten-5 pb-5">
        <v-row class="no-gutters text-center">
          <v-col cols="12" class="overline"> moves </v-col>
          <MovesList :moves.sync="pokemon.moves" />
        </v-row>
      </v-sheet>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import EvolutionChain from "@/components/details/EvolutionChain.vue";
import MovesList from "@/components/details/MovesList.vue";
@Component({
  components: {
    EvolutionChain,
    MovesList,
  },
})
export default class PokemonDetailsDrawer extends Vue {
  public loading = true;
  public drawer = false;
  public error = false;
  public pokemon: Record<string, unknown> = {};

  @Watch("$route", { immediate: true, deep: true })
  onUrlChange(): void {
    if (this.$route.params.id) {
      this.getPokemonDetails(this.$route.params.id);
      this.drawer = true;
    } else {
      this.drawer = false;
    }
  }
  @Watch("drawer")
  drawerStateChanged(newVal: boolean): void {
    if (newVal === false && this.$route.name === "DetailView") {
      this.$router.push("/");
    }
  }
  getPokemonDetails(id: string): void {
    this.loading = true;
    this.error = false;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((json) => {
        this.pokemon = json;
        this.loading = false;
      })
      .catch((error) => {
        // Handle the error
        console.log(error);
        this.error = true;
      });
  }
  mounted(): void {
    if (this.drawer) {
      this.getPokemonDetails(this.$route.params.id);
    }
  }
}
</script>
