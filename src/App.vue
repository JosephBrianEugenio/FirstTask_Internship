<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-4"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title class="title">Axios</v-toolbar-title>

        <v-spacer></v-spacer>
        <div class="searchbar">
          <v-text-field
            v-model="searchData"
            @submit.prevent="getData"
            label="Search Here ! "
            placeholder="hindi pa gumagana HAHAHAHAHa"
            filled
            dense
            prepend-inner-icon="mdi-magnify"
          >
            <v-btn depressed type="submit"> go </v-btn></v-text-field
          >
          {{ searchData }}
        </div>

        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="yellow" v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <!-- <v-list>
            <v-list-item>
              <v-list-item-title>Click Me 1</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Click Me 2</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Click Me 3</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Click Me 4</v-list-item-title>
            </v-list-item>
          </v-list> -->
        </v-menu>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>
              <router-link class="routerTabHP" to="/home">HomePage</router-link>
            </v-tab>
            <!--  <v-tab
              >
			  <router-link class="routerTabPP" to="/post1"
                >PostPage</router-link
              ></v-tab
            >
            <v-tab
              ><router-link class="routerTabPP" to="/comms"
                >Comments</router-link
              ></v-tab
            >-->
          </v-tabs>
        </template>
      </v-app-bar>

      <v-sheet
        id="scrolling-techniques-4"
        class="overflow-y-auto"
        max-height="auto"
      >
        <v-container style="height: 220px"></v-container>
      </v-sheet>
    </v-card>
    <div>
      <v-content><router-view /></v-content>
    </div>
    <myTable />
  </div>
</template>
<script>
import myTable from "./components/myTable.vue";
export default {
  name: "App",
  myTable,
  data() {
    return {
      searchData: null,
      data: [],
    };
  },
  methods: {
    async getData() {
      await this.$axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.searchData}`)
        .then((response) => {
          this.Searchdata = response.data.item;
          console.log(this.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.routerTabHP {
  font-size: 15px;
  text-decoration: none;
  color: white;
}
.routerTabPP {
  font-size: 15px;
  text-decoration: none;
  color: white;
}
.title {
  font-size: 50px;
}
.searchbar {
  margin-left: 200px;
  padding: 20px;
}
</style>
