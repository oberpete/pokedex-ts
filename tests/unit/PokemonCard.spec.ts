// Imports
import Vuetify from "vuetify";
import VueRouter from "vue-router";

// Utilities
import { createLocalVue, mount, Wrapper } from "@vue/test-utils";

// Components
import PokemonCard from "@/components/overview/PokemonCard.vue";

describe("PokemonCard.spec.ts", () => {
  let vuetify;
  let router;
  let cmp: Wrapper<PokemonCard, Element>;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.filter("capitalize", function (value: string) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    });

    vuetify = new Vuetify();
    router = new VueRouter();
    localVue.use(VueRouter);
    cmp = mount(PokemonCard, {
      localVue,
      router,
      vuetify,
      propsData: {
        name: "poketest",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
    });
  });
  // https://github.com/vuejs/vue-test-utils/issues/255
  it("correctly extracts the pokemon id from the url", () => {
    expect((cmp.vm as any).pokeId).toBe("1");
  });
  it("correctly displays pokemon name", () => {
    const title = cmp.find("#name");
    // expect capitalized pokemon name
    expect(title.text()).toBe("Poketest");
  });
});
