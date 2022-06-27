<template>
  <v-container class="grey lighten-5">
    <!-- <v-card height="500px" elevation="14">
      <v-card-title> This is the tile</v-card-title>
      <v-card-text> This is the text</v-card-text>
    </v-card> -->
    <div class="searchbar">
      <v-text-field
        v-model.trim="searchData"
        @submit.prevent="getData"
        label="Search Here ! "
        placeholder="hindi pa gumagana"
        filled
        dense
        prepend-inner-icon="mdi-magnify"
        @keyup="getApiData"
      >
        {{ getApiData }}
        <li v-for="item in post" :key="item.id">{{ item.id }}</li>
      </v-text-field>
      <!-- {{ getApiData() }} -->
    </div>

    <v-row no-gutters v-for="item in post" v-bind:key="item.id">
      <v-col :cols="30">
        <v-card class="mx-auto" max-width="auto" outlined elevation="14" shaped>
          <v-toolbar color="rgb(106, 118, 171)" dark dense flat>
            <v-toolbar-title class="text-body-2"></v-toolbar-title>
          </v-toolbar>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>ID#:{{ item.id }}</v-card-title>
              <v-list-item-title>UserID: {{ item.userId }} </v-list-item-title>
              <v-list-item-title>Title: {{ item.title }} </v-list-item-title>
              <v-list-item-title>Body: {{ item.body }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="0"
              color="grey"
              img
              src="Animals\1p3xrubluf_Kangaroo_08.15.2012_Find_Your_Inner_Animal.jpg"
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn @click="Data(item.id)" outlined rounded text> Post </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "myTable",
  data() {
    return {
      post: [],
      searchData: "",
    };
  },
  mounted() {
    this.$axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _limit: 15,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.post = response.data;
      });
  },
  created() {
    this.post = this.$route.params.data;
    // this.SearchData();
    this.GetApiData();
  },
  methods: {
    Data(id) {
      this.$router.push(`post/${id}`);
    },
    getApiData() {
      this.$axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
          if (this.searchData) {
            this.post = response.data.filter((item) =>
              item.title.toLowerCase().includes(this.searchData.toLowerCase())
            );
          } else {
            this.post = response.data;
          }
        });
    },
    computed: {
      filteredData: function () {
        return this.post.filter((post) => {
          return post.title.match(this.searchData);
        });
      },
    },
  },
};
</script>
<style></style>
