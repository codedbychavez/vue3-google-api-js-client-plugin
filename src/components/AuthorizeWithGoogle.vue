<script>
export default {
  setup() {},
  methods: {
    async handleAuthorizeButtonClick() {
      console.log("click");
      await this.$google.api.auth2.getAuthInstance().signIn();
    },
  },
};
</script>

<template>
  <button
    @click="handleAuthorizeButtonClick"
    class="bg-blue-600 py-2 px-4 rounded-md text-white"
  >
    Authorize with google
  </button>
</template>
