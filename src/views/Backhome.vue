<template>
  <div class="back">
    <backHeader />
    <router-view class="back-wrap"></router-view>
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
