<script>
import AppLayout from './views/layout/AppLayout.vue';
export default {
  components: {
    AppLayout,
  }
}
</script>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>
