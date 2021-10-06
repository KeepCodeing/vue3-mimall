<template>
  <div class="item-video">
    <h2>60帧超慢动作摄影<br />慢慢回味每一瞬间的精彩</h2>
    <p>
      后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br />更能AI
      精准分析视频内容，15个场景智能匹配背景音效。
    </p>
    <div class="video-bg"></div>
    <div class="video-box" style="display: none">
      <div class="overlay"></div>
      <div class="video">
        <span class="icon-close"></span
        ><video
          src="/imgs/product/video.mp4"
          muted="muted"
          autoplay="autoplay"
          controls="controls"
          __idm_id__="718664706"
        ></video>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped>
.item-video {
  height: 1044px;
  background-color: #070708;
  margin-bottom: 76px;
  color: #ffffff;
  text-align: center;
}
.video-bg {
  background: url(/imgs/product/gallery-1.png) no-repeat center;
  background-size: cover;
  width: 1226px;
  height: 540px;
  margin: 0 auto 120px;
  cursor: pointer;
}
.video {
  position: fixed;
  top: -50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 1000px;
  height: 536px;
  opacity: 1;
}
h2 {
  font-size: 60px;
  padding-top: 82px;
  margin-bottom: 47px;
}
p {
  font-size: 24px;
  margin-bottom: 58px;
}
</style>
