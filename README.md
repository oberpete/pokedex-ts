# pokedex-ts
A minimalistic web-app to visualize data provided by [POKEAPI](http://pokeapi.co).
Developed with VueJs, Typescript, Vuetify, Vue Router, Jest. 

[VIEW APP](https://oberpete.github.io/pokedex-ts/)

## Limitations
### General
Even though I was a collector of pokemon cards when I was a child, I only have faint memories of it. That is, I could not entirely empathize with what a real pokemon fan expects from a pokedex application. In real life, I would depend on input from a pokemon enthusiast to improve my application.

### Technical
Please keep in mind: this is my very first Typescript application, so my use of Typescript's innate functionalities and strengths can definitely be improved in the future. Some other limitations I am aware of: 
- When scaling the application I would strongly recommend using a container to hold the application state, i.e. Vuex store.
- API calls could be moved to a central place (i.e. Vuex actions) and a more sophisticated HTTP client could be used.
- Test coverage could be improved. (This was also my first time writing Jest unit tests)
- Host the application somewhere other than GH pages in order to being able to create a catch-all fallback to index.html. Then you can refresh URLs other than the base URL without getting a 404 error.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
