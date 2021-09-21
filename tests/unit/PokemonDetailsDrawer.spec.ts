// Imports
import Vuetify from "vuetify";
import VueRouter from "vue-router";

// Utilities
import { createLocalVue, mount, Wrapper } from "@vue/test-utils";

// Components
import PokemonCard from "@/components/PokemonDetailsDrawer.vue";
import { VueConstructor } from "vue";

describe("PokemonDetailsDrawer.spec.ts", () => {
  let localVue: VueConstructor<PokemonCard>;
  let vuetify;
  let router;
  let cmp: Wrapper<PokemonCard, Element>;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.filter("capitalize", function (value: string) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    });

    vuetify = new Vuetify();
    router = new VueRouter({
      routes: [
        {
          path: "/detail/:id",
          name: "DetailView",
          component: () => import(/* webpackChunkName: "home" */ "@/App.vue"), //dynamic import of component and dependency
        },
      ],
    });
    localVue.use(VueRouter);
    cmp = mount(PokemonCard, {
      localVue,
      router,
      vuetify,
    });
  });

  it("pokemon details drawer is closed by default", () => {
    expect((cmp.vm as any).drawer).toBe(false);
  });
});
