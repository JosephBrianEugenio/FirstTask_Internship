<!--<template>
  <v-card class="mx-auto" max-width="344">
    <v-img src="Animals\guineapig.jpg" height="200px"></v-img>

    <v-card-title>Guinea Pig</v-card-title>

    <v-card-subtitle> Cute </v-card-subtitle>

    <v-card-actions>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          Maecenas auctor augue nec velit volutpat, non lobortis quam posuere.
          Phasellus id tortor eu ante mollis convallis tempus id mauris. Donec
          augue leo, eleifend non sagittis in, ultrices in nunc. Maecenas
          malesuada orci eget ligula feugiat suscipit. Phasellus eu faucibus
          massa. estibulum sed ante ut massa malesuada lobortis ac in arcu.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template> 
<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Animals</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    <v-card class="mx-auto" max-width="344">
      <v-img
        src="https://ih1.redbubble.net/image.1288646969.7420/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
        height="auto"
      ></v-img>

      <v-card-title>Guinea Pig</v-card-title>

      <v-card-subtitle> Cute </v-card-subtitle>

      <v-card-actions>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            Maecenas auctor augue nec velit volutpat, non lobortis quam posuere.
            Phasellus id tortor eu ante mollis convallis tempus id mauris. Donec
            augue leo, eleifend non sagittis in, ultrices in nunc. Maecenas
            malesuada orci eget ligula feugiat suscipit. Phasellus eu faucibus
            massa. estibulum sed ante ut massa malesuada lobortis ac in arcu.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

    <v-card class="d-flex flex-row mb-2" max-width="344">
      <v-img
        src="https://i.pinimg.com/736x/76/d7/ec/76d7ec255e5ef1082580e118c1a2520a.jpg"
        height="auto"
      ></v-img>

      <v-card-title>Guinea Pig</v-card-title>

      <v-card-subtitle> Cute </v-card-subtitle>

      <v-card-actions>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            Maecenas auctor augue nec velit volutpat, non lobortis quam posuere.
            Phasellus id tortor eu ante mollis convallis tempus id mauris. Donec
            augue leo, eleifend non sagittis in, ultrices in nunc. Maecenas
            malesuada orci eget ligula feugiat suscipit. Phasellus eu faucibus
            massa. estibulum sed ante ut massa malesuada lobortis ac in arcu.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

    <v-card class="mx-auto" max-width="344">
      <v-img
        src="https://i.pinimg.com/originals/c8/9d/a9/c89da9b1ceac036dc0ba9193ac116f72.jpg"
        height="auto"
      ></v-img>

      <v-card-title>Guinea Pig</v-card-title>

      <v-card-subtitle> Cute </v-card-subtitle>

      <v-card-actions>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            Maecenas auctor augue nec velit volutpat, non lobortis quam posuere.
            Phasellus id tortor eu ante mollis convallis tempus id mauris. Donec
            augue leo, eleifend non sagittis in, ultrices in nunc. Maecenas
            malesuada orci eget ligula feugiat suscipit. Phasellus eu faucibus
            massa. estibulum sed ante ut massa malesuada lobortis ac in arcu.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <v-card class="mx-auto" max-width="344">
      <v-img
        src="https://cf.ltkcdn.net/small-pets/images/orig/291508-1600x1066-cute-guinea-pig.jpg"
        height="auto"
      ></v-img>

      <v-card-title>Guinea Pig</v-card-title>

      <v-card-subtitle> Cute </v-card-subtitle>

      <v-card-actions>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            Maecenas auctor augue nec velit volutpat, non lobortis quam posuere.
            Phasellus id tortor eu ante mollis convallis tempus id mauris. Donec
            augue leo, eleifend non sagittis in, ultrices in nunc. Maecenas
            malesuada orci eget ligula feugiat suscipit. Phasellus eu faucibus
            massa. estibulum sed ante ut massa malesuada lobortis ac in arcu.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template> -->
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
            v-model="search"
            label="Search Here ! "
            placeholder="hindi pa gumagana HAHAHAHAHa"
            filled
            dense
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
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
