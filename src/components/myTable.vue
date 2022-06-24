<template>
  <v-container class="grey lighten-5">
    <v-card height="500px" elevation="14">
      <v-card-title> This is the tile</v-card-title>
      <v-card-text> This is the text</v-card-text>
    </v-card>

    <v-row no-gutters v-for="item in post" v-bind:key="item.id">
      <v-col :cols="15">
        <v-card class="mx-auto" max-width="auto" outlined>
          <v-toolbar color="	#FFC0CB" dark dense flat>
            <v-toolbar-title class="text-body-2"
              >{{ item.id }}
            </v-toolbar-title>
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
  },
  methods: {
    Data(id) {
      this.$router.push(`post/${id}`);
    },
  },
};
</script>
<style></style>
