<template>
  <div class="service-bar">
    <div class="container">
      <ul>
          <li><span class="icon-setting"></span>预约维修服务</li>
          <li><span class="icon-7day"></span>7天无理由退货</li>
          <li><span class="icon-15day"></span>15天免费换货</li>
          <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "service-bar"
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";
.service-bar {
  padding: 33px 0; //内边距上下为33px 左右为0
  color: #666666;
  font-size: 16px;
    li {
      width: 24.9%;
      text-align: center;
      display: inline-block;
      border-right: 1px solid #E5E5E5;
      height: 20px;
      span{
          width: 20px;
          height: 20px;
          display: inline-block;
          margin-right: 10px;
          vertical-align: middle;   //使图片和文字居中
      }
    }
    .icon-setting{
        @include bgImg(16px,16px,'/imgs/icon-setting.png');
    }
    .icon-7day{
        @include bgImg(16px,16px,'/imgs/icon-7day.png')
    }
    .icon-15day{
        @include bgImg(16px,16px,'/imgs/icon-15day.png')
    }
    .icon-post{
        @include bgImg(16px,16px,'/imgs/icon-post.png')
    }
}
</style>