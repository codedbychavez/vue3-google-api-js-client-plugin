<script>
import StoreIcon from "../icons/StoreIcon.vue";
export default {
  components: {
    StoreIcon,
  },
};
</script>

<template>
  <nav class="bg-gray-900 border-gray-200 px-2 sm:px-4 py-4">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <router-link to="/" class="flex items-center text-white">
        <StoreIcon />
        <span class="self-center text-xl font-semibold whitespace-nowrap ml-2"
          >Example</span
        >
      </router-link>
    </div>
  </nav>
</template>
