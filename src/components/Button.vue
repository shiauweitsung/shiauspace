<template>
  <div :class="['button', className]">
    <button @click="click()">{{ title }}</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    className: String,
    methods: {
      type: Function,
    },
  },
  methods: {
    click() {
      this.$emit('onClick');
    },
  },
};
</script>

<style lang="scss">
@import '~@/assets/all.scss';
.button {
  &>button {
    border: 1px solid map-get($color,primary);
    padding: 6px 12px;
    border-radius: 4px;
    color: map-get($color, white);
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    position: relative;
    transition: all ease-in-out .4s;
  }
  &:hover {
    &>button {
      color: map-get($color, main);
      background-color: map-get($color,primary);
      // &::after {
      //   content: '';
      //   position: absolute;
      //   bottom: 0px;
      //   left: 0;
      //   width: 100%;
      //   height: 1px;
      //   background-color: map-get($color,primary);
      // }
    }
  }
}

</style>
