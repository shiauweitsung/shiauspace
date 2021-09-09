<template>
  <div class="about">
    <div class="about-banner"></div>
    <div class="about-cont">
      <input type="radio" name="about-item-input" id="about-item-input1" />
      <input type="radio" name="about-item-input" id="about-item-input2" />
      <input type="radio" name="about-item-input" id="about-item-input3" />
      <input type="radio" name="about-item-input" id="about-item-input4" />
      <input type="radio" name="about-item-input" id="about-item-input5" />
      <input type="radio" name="about-item-input" id="about-item-input6" />
      <div class="about-cont-select">
        <label for="about-item-input1" class="about-cont-select-1">icon1</label>
        <label for="about-item-input2" class="about-cont-select-2">icon2</label>
        <label for="about-item-input3" class="about-cont-select-3">icon3</label>
        <label for="about-item-input4" class="about-cont-select-4">icon4</label>
        <label for="about-item-input5" class="about-cont-select-5">icon5</label>
        <label for="about-item-input6" class="about-cont-select-6">icon6</label>
      </div>
      <div class="about-cont-item">
        <p class="about-cont-item-info-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
          reprehenderit blanditiis obcaecati veritatis ducimus recusandae
          aspernatur quam omnis tempora error delectus tempore facilis, est
        </p>
        <p class="about-cont-item-info-2">ergegregregeg</p>
        <p class="about-cont-item-info-3">ggvdfbegeg</p>
        <p class="about-cont-item-info-4">gehbfgbfgb</p>
        <p class="about-cont-item-info-5">hrthrthbrhrthrth</p>
        <p class="about-cont-item-info-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
          reprehenderit blanditiis obcaecati veritatis ducimus recusandae
          aspernatur quam omnis tempora error delectus tempore facilis, est
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '~@/assets/all.scss';

.about {
  margin-top: 65px;
  &-banner {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(~@/assets/images/banner/banner.png);
    padding: 12% 0px;
  }
  &-cont {
    @include container;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      margin: 60px auto 30px auto;
    }
    & > input {
      display: none;
    }
    & #about-item-input1:checked ~ &-select > .about-cont-select-1,
    & #about-item-input2:checked ~ &-select > .about-cont-select-2,
    & #about-item-input3:checked ~ &-select > .about-cont-select-3,
    & #about-item-input4:checked ~ &-select > .about-cont-select-4,
    & #about-item-input5:checked ~ &-select > .about-cont-select-5,
    & #about-item-input6:checked ~ &-select > .about-cont-select-6 {
      background-color: map-get($color, second);
    }
    & #about-item-input1:checked ~ &-item > .about-cont-item-info-1,
    & #about-item-input2:checked ~ &-item > .about-cont-item-info-2,
    & #about-item-input3:checked ~ &-item > .about-cont-item-info-3,
    & #about-item-input4:checked ~ &-item > .about-cont-item-info-4,
    & #about-item-input5:checked ~ &-item > .about-cont-item-info-5,
    & #about-item-input6:checked ~ &-item > .about-cont-item-info-6 {
      opacity: 1;
      transform: translateX(-50%);
    }
    &-select {
      min-width: 375px;
      max-width: 375px;
      width: 100%;
      display: flex;
      align-content: flex-start;
      flex-wrap: wrap;
      & > label {
        width: 125px;
        height: 100px;
        text-align: center;
        border: 1px solid grey;
        margin-bottom: 0;
        cursor: pointer;
        transition: ease-in-out 0.5s;
        &:hover {
          background-color: map-get($color, second);
        }
      }
    }
    &-item {
      margin: 0px 30px;
      flex-grow: 1;
      position: relative;
      overflow: hidden;
      min-height: 300px;
      @media (max-width: 1000px) {
        margin-top: 30px;
        width: 90%;
      }
      & > p {
        position: absolute;
        top: 30px;
        left: 50%;
        background-color: map-get($color, main);
        width: 90%;
        box-shadow: 0px 0px 5px 5px rgba(77, 77, 77, 0.3);
        // border: 1px solid white;
        padding: 15px 30px 30px 30px;
        transition: ease-in-out 0.5s;
        transform: translateX(-102%);
        opacity: 0;
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid rgb(77, 77, 77);
          background-color: black;
          top: -8px;
          left: -8px;
          z-index: -1;
        }
      }
    }
  }
}
</style>
