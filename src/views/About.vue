<template>
  <div class="about">
    <div class="about-banner"></div>
    <div class="about-cont">
      <input
        type="radio"
        name="about-item-input"
        id="about-item-input1"
        checked
      />
      <input type="radio" name="about-item-input" id="about-item-input2" />
      <input type="radio" name="about-item-input" id="about-item-input3" />
      <input type="radio" name="about-item-input" id="about-item-input4" />
      <input type="radio" name="about-item-input" id="about-item-input5" />
      <input type="radio" name="about-item-input" id="about-item-input6" />
      <div class="about-cont-select">
        <label for="about-item-input1" class="about-cont-select-1">
          <i class="fab fa-grav"></i>
          <span>關於我們</span>
        </label>
        <label for="about-item-input2" class="about-cont-select-2">
          <i class="fas fa-phone"></i>
          <span>連絡我們</span>
        </label>
        <label for="about-item-input3" class="about-cont-select-3">
          <i class="fas fa-comments-dollar"></i>
          <span>贊助資訊</span>
        </label>
        <label for="about-item-input4" class="about-cont-select-4">
          <i class="far fa-handshake"></i>
          <span>合作廠商</span>
        </label>
        <label for="about-item-input5" class="about-cont-select-5">
          <i class="far fa-comments"></i>
          <span>官方社群</span>
        </label>
        <label for="about-item-input6" class="about-cont-select-6">
          <i class="fas fa-users"></i>
          <span>開發團隊</span>
        </label>
      </div>
      <div class="about-cont-item">
        <p class="about-cont-item-info-1">
          我們是一群史上最年輕的宇宙研究團隊，對未知的宇宙充滿天馬行空的想像，用盡一切可能探討，尋找未知的真相，經過NASAA協助指導合作，穩固了團隊的基礎與知識，研究上萬本理論，致力於全球讓全世界的人知道未來的發展性。
        </p>
        <p class="about-cont-item-info-2">
          公司名稱:Space X <br />
          負責人:Shiau <br />
          公司電話:02-1234-5678 <br />
          公司地址:台北市內湖區科技園區(太空部) <br />
          營業時間:週一-週五 早上9:00-晚上6:00
        </p>
        <p class="about-cont-item-info-3">
          line: <br />
          支付寶: <br />
        </p>
        <p class="about-cont-item-info-4">
          NASAA、SPACEXX、台灣宇宙科學研究、南港太空研究部、台北市政府科學部
        </p>
        <p class="about-cont-item-info-5">
          <span>FB: <a href="">123</a> </span> <br />
          <span>IG:</span> <br />
          <span>Twitter:</span>
        </p>
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
      // background-color: map-get($color, second);
      color: map-get($color, hover);
      & > span {
        font-size: 16px;
      }
      & > svg {
        font-size: 22px;
      }
    }
    & #about-item-input1:checked ~ &-item > .about-cont-item-info-1,
    & #about-item-input2:checked ~ &-item > .about-cont-item-info-2,
    & #about-item-input3:checked ~ &-item > .about-cont-item-info-3,
    & #about-item-input4:checked ~ &-item > .about-cont-item-info-4,
    & #about-item-input5:checked ~ &-item > .about-cont-item-info-5,
    & #about-item-input6:checked ~ &-item > .about-cont-item-info-6 {
      opacity: 1;
      transform: translateX(-50%);
      z-index: 9;
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
        transition: ease-in-out 0.1s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:hover {
          // background-color: map-get($color, second);
          color: map-get($color, hover);
          & > span {
            font-size: 16px;
          }
          & > svg {
            font-size: 22px;
          }
        }
        & > span {
          display: block;
          margin-top: 10px;
          transition: ease-in-out 0.5s;
        }
        & > svg {
          font-size: 20px;
          transition: ease-in-out 0.5s;
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
