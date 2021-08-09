<template>
  <div>
    <frontHeader />
    <router-view />
    <frontFooter />
  </div>
</template>
<script>
import frontHeader from '../components/Header.vue';
import frontFooter from '../components/Footer.vue';

export default {
  components: {
    frontHeader,
    frontFooter,
  },
};
</script>
