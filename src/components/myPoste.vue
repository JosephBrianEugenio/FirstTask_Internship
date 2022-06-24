<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col :cols="15">
        <v-card class="mx-auto" max-width="auto" outlined>
          <v-toolbar color="rgb(106, 118, 171)" dark dense flat>
            <v-toolbar-title class="text-body-2"> Post </v-toolbar-title>
          </v-toolbar>
          <v-list-item>
            <v-list-item-content>
              <v-card-title> {{ post }}</v-card-title>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="0"
              color="grey"
              img
              src="Animals\1p3xrubluf_Kangaroo_08.15.2012_Find_Your_Inner_Animal.jpg"
            ></v-list-item-avatar>
          </v-list-item>

          <!-- <v-card-actions>
            <v-btn @click="Data(comment)" outlined rounded text>
              Comments
            </v-btn>
          </v-card-actions> -->
        </v-card>
        <v-card
          class="mx-auto"
          max-width="auto"
          outlined
          v-for="item in postComments"
          v-bind:key="item.id"
        >
          <v-toolbar color="rgb(106, 118, 171)" dark dense flat>
            <v-toolbar-title class="text-body-2"> Comments </v-toolbar-title>
          </v-toolbar>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>ID#:{{ item.id }}</v-card-title>
              <v-list-item-title
                >Post ID#: {{ item.postId }}
              </v-list-item-title>
              <v-list-item-title>Email: {{ item.email }} </v-list-item-title>
              <v-list-item-title>Body: {{ item.body }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar tile size="0" color="grey"></v-list-item-avatar>
          </v-list-item>

          <!-- <v-card-actions>
            <v-btn @click="Data(comment)" outlined rounded text>
              Comments
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "myPoste",
  data() {
    return {
      post: [],
    };
  },
  mounted() {
    this.$axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      )
      .then((response) => {
        this.post = response.data;
        console.log("Single Data", this.post);
      });
    this.$axios
      .get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
      .then((response) => {
        this.postComments = response.data;
        console.log(response.data);
      });
  },
  // route para kay comments //
  created() {
    this.post = this.$route.params.data;
  },
  //   methods: {
  //     data(id) {
  //       this.$router.push(`comments/${id}`);
  //     },
  //   },
};
</script>

<style></style>
