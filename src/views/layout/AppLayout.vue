<script>
import Navbar from '../../components/shared/Navbar.vue';
export default {
  components: {
    Navbar
}
}
</script>

<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main class="p-4">
      <aside></aside>
      <div>
        <slot />
      </div>
    </main>
  </div>
</template>