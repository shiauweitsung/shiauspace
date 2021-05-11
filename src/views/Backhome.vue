<template>
  <div class="back">
    <backHeader />
    <router-view></router-view>
  </div>
</template>
<script>
import backHeader from '../components/backHeader.vue';

export default {
  components: {
    backHeader,
  },
};
</script>
