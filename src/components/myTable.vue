<template>
  <div class="tableko">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">ID #:</th>
            <th class="text-left">User ID</th>
            <th class="text-left">Title</th>
            <th class="text-left">Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredPost" v-bind:key="item.id" limit:15>
            <td>{{ item.id }}</td>
            <td>{{ item.userId }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "myTable",
  data() {
    return {
      post: [],
      limit: 15,
    };
  },

  created: function () {
    this.$axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.post = res.data;
      });
  },
  computed: {
    filteredPost() {
      return this.post.filter((el, item) => item);
    },
  },
};
</script>

<style>
.tableko {
  margin-top: -760px;
  font-size: 100px;
}
</style>
