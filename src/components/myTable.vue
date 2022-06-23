<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters v-for="item in post" v-bind:key="item.id">
      <v-col :cols="15">
        <v-card class="mx-auto" max-width="auto" outlined>
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
            <v-btn @click="Data(item.id)" outlined rounded text>
              Comments
            </v-btn>
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
      //   this.$router.push({
      //     name: "post1",
      //     path: "/post1",
      //     params: { data: this.post },
      //   });
    },
  },
};
</script>
<!-- <script>
export default {
  name: "myTable",
  data: () => ({
    post: [],
    cards: [
      { title: "ID#1" },
      { title: "ID#2" },
      { title: "ID#3" },
      { title: "ID#4" },
      { title: "ID#5" },
      { title: "ID#6" },
      { title: "ID#7" },
      { title: "ID#8" },
      { title: "ID#9" },
      { title: "ID#10" },
      { title: "ID#11" },
      { title: "ID#12" },
      { title: "ID#13" },
      { title: "ID#14" },
      { title: "ID#15" },
    ],

    mounted() {
      this.$axios
        .get("https://jsonplaceholder.typicode.com/posts/", {
          params: {
            _limit: 15,
          },
        })
        .then((response) => {
          this.list = response.data;
        });
    },
  }),
  methods: {
    Data() {
      this.$router.push({
        name: "post1",
        path: "/post1",
        params: { data: this.post },
      });
    },
  },
};
</script> -->
<style></style>
