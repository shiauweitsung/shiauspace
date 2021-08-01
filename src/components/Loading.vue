<template>
  <div>
    <load :active.sync="isLoading">
      <img src="~@/assets/images/icon/loading.gif" alt="" />
    </load>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoading']),
  },
};
</script>
