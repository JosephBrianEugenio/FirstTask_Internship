<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col :cols="15">
        <v-card class="mx-auto" max-width="auto" outlined>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>Comments{{ post }}</v-card-title>
            </v-list-item-content>

            <v-list-item-avatar tile size="0" color="grey"></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "myComments",
  data() {
    return {
      post: [],
    };
  },
  mounted() {
    this.$axios
      .get(`https://jsonplaceholder.typicode.com/posts/comments/`)
      .then((response) => {
        this.post = response.data;
        console.log(this.post);
      });
  },
};
</script>

<style></style>
