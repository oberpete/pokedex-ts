<template>
  <v-data-table
    class="teal lighten-5"
    hide-default-header
    hide-default-footer
    :headers="headers"
    :items="movesTransformed"
  >
    <template v-slot:top="{ pagination, options, updateOptions }">
      <v-data-footer
        :pagination="pagination"
        :options="options"
        @update:options="updateOptions"
        items-per-page-text="$vuetify.dataTable.itemsPerPageText"
      />
    </template>
  </v-data-table>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import Moves from "@/types/Moves";
@Component
export default class MovesList extends Vue {
  public loading = true;
  public headers = [{ text: "Name", value: "name" }];
  public moves: Array<Record<string, string>> = [];

  get movesTransformed(): Array<unknown> {
    return this.moves.map((val) => val.move);
  }
  getPokemonMoves(id: string): void {
    this.loading = true;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        response.json().then((json) => {
          this.moves = json.moves;
          this.loading = false;
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  mounted(): void {
    this.getPokemonMoves(this.$route.params.id);
  }
}
</script>
