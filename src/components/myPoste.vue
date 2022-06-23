<template>
  <div>
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
            {{
              post
            }}
            <tr v-for="item in post" v-bind:key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.userId }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.body }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
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
        console.log("SINGLE DATA", this.post);
      });
  },
};
</script>

<style></style>
