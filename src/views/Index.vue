<template>
  <div>
    <frontHeader />
    <router-view />
  </div>
</template>
<script>
import frontHeader from '../components/Header.vue';

export default {
  components: {
    frontHeader,
  },
};
</script>
