<!-- <template>
  <h1></h1>
</template>

<script>
export default {
  name: "oper",
  data() {
    return {
      post: [],
    };
  },

  async mounted() {
    let result = await this.$axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: 15,
        },
      }
    );
    console.log(result.data);
    this.post = result.objects;
  },
};
</script>

<style></style> -->
