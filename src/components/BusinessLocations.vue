<script>
export default {
  props: {
    userId: String,
  },
  data() {
    return {
      locations: [],
    };
  },
  methods: {
    async handleGetLocations() {
      console.log("Getting locations");
      await this.$google.api.auth2.getAuthInstance();

      const rawData =
        await this.$google.api.client.mybusinessbusinessinformation.accounts.locations.list(
          {
            parent: `accounts/${this.userId}`,
            readMask: "name,title,categories",
          }
        );

      this.locations = rawData.result.locations;
      console.log(this.locations)
    },
  },
};
</script>

<template>
  <div>
    <button @click="handleGetLocations" class="underline text-blue-600">
      Click to get locations
    </button>
    <ul class="mt-4">
      <li v-for="(location, index) in locations" :key="location.name">
        {{ index + 1 }}. {{ location.title }}
      </li>
    </ul>
  </div>
</template>
