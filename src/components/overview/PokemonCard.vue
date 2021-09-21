<template>
  <v-card outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h4 font-weight-bold" id="name">
          {{ name | capitalize }}
        </v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="white">
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`"
        />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions> </v-card-actions>
    <v-card-actions class="grey lighten-3">
      <v-btn
        color="teal darken-4"
        class="font-weight-bold"
        text
        block
        dark
        :to="`/detail/${pokeId}`"
      >
        <v-icon small class="mr-2">mdi-arrow-right</v-icon>
        VIEW DETAILS
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class PokemonCard extends Vue {
  @Prop({ default: "Pokemon" }) readonly name!: string;
  @Prop({ default: "Pokemon" }) readonly url!: string;
  get pokeId(): string {
    const re = /\/pokemon\/([\d]+)\/?/;
    const res = this.url.match(re);
    if (res && res[1]) {
      return res[1];
    } else {
      return "1";
    }
  }
}
</script>
