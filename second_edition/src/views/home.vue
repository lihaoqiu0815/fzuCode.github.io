<template>
  <div class="home1" id="home">
    <van-icon name="arrow-left" id="left_icon" color="lightgray" @click="click_icon" size='0.7rem'/>
    <div class="logo"><van-image class="img" width="100%" height="100%" fit="fill" :src="require('../assets/imges/logo@2x.png')" /></div>
    <div class="header">
      <div class="name">姓名：{{ Name }}</div>
      <div class="partment">部门：{{ College }}</div>
    </div>
    <div class="main">
      <div class="zebra1">
        <van-image width="100%" height="100%" fit="fill" :src="require('../assets/imges/条形二维码@2x.png')" />
      </div>
      <div class="time"></div>
      <div class="zebra2">
        <van-image width="100%" height="100%" fit="fill" :src="require('../assets/imges/方形二维码@2x.png')" />
      </div>
      <div class="scroller">{{ scroller_item }}</div>
      <div class="caption">未见异常，允许出行，请主动出示，配合检测，并<br/>做好自我防护，出行前请确认。</div>
      <div class="card">
        <div class="img">
          <van-image class="img" width="100%" height="100%" fit="fill" :src="require('../assets/imges/图层3@2x.png')" />
        </div>
        <div>
          <div style="opacity:0.8;margin-bottom:12px">一卡通</div>
          <!-- <div>适用所有场景</div> -->
        </div>
      </div>
    </div>
    <div class="footer">每日健康填报</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form_show: true
    }
  },
  props: ['Name', 'College', 'scroller_item'],
  mounted() {
    clearInterval(timer1)
    clearInterval(timer2)
    const timer1 = setInterval(this.setTime, 1000)
    const timer2 = setInterval(this.move, 50)
  },
  methods: {
    setTime() {
      var date = new Date()
      var month = date.getMonth()
      month = month + 1
      month = month < 10 ? '0' + month : month
      var datas = date.getDate()
      datas = datas < 10 ? '0' + datas : datas
      var h = date.getHours()
      h = h < 10 ? '0' + h : h
      var m = date.getMinutes()
      m = m < 10 ? '0' + m : m
      var s = date.getSeconds()
      s = s < 10 ? '0' + s : s
      var time = document.querySelector('.time')
      time.innerHTML = month + '月' + datas + '日 ' + '<span style="font-size:0.9rem";>' + s + '</span>' + ' ' + h + ':' + m
    },
    move() {
      const moveItem = document.querySelector('.scroller')
      moveItem.style.left = moveItem.offsetLeft - 2.5 + 'px'
      const mainWidth = document.querySelector('.main')
      if (moveItem.offsetLeft < -80) moveItem.style.left = mainWidth.offsetWidth + 'px'
    },
    click_icon() {
      const home = document.querySelector('#home')
      if (home.className === 'home2') home.className = 'home1'
      else home.className = 'home2'
      this.$emit('delieverFather', this.form_show)
    }
  }
}
</script>
<style>
.home1 {
  height: 120vh;
  width: 100vw;
  position: absolute;
  background-color: #3b81b7;
  top: 0;
  left: 100vw;
}
</style>

<style scoped lang="less">
#left_icon {
  position: absolute;
  height: 90px;
  width: 90px;
  top: 20px;
  left: 20px;
  opacity: 0.18;
}
.logo {
  position: absolute;
  top: 16px;
  right: 26px;
  width: 190px;
  height: 190x;
}
.header {  
  
  width: 654px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 46px;
  div {
    font-size: 34px;
    color: whitesmoke;
  }
  div:nth-child(1) {
    margin-bottom: 28px;
  }
}
.main {
  overflow: hidden;
  width: 650px;
  height: 830px;
  background-color: #fefefe;
  margin: 0 auto;
  border-radius: 20px;
  padding-top: 40px;
  position: relative;
  .zebra1 {
    width: 550px;
    height: 130px;
    background-color: black;
    margin: 0 auto;
  }
  .time {
    width: 380px;
    height: 40px;
    margin: 0 auto;
    font-size: 40px;
    color: green;
       white-space: nowrap
  }
  .zebra2 {
    height: 280px;
    width: 280px;
    margin: 0 auto;
    margin-top: 65px;
  }
  .scroller {
    margin-top: 10px;
    width: 170px;
    height: 78px;
    font-size: 75px;
    color: green;
    position: absolute;
    white-space: nowrap
  }
  .caption {
    width: 580px;
    height: 10px;
    margin: 0 auto;
    color: green;
    font-size: 24px;
    margin-top: 105px;
    line-height: 34px;
    margin-left: 50px;
  }
  .card {
    position: absolute;
    margin-left: 35px;
    bottom: 32px;
    .img {
      position: absolute;
      bottom: 2px;
      left: -30px;
      height: 50px;
      width: 50px;
    }
    & > div {
      margin-left: 5px;
      float: left;
      div:nth-child(1) {
        margin-left: 65px;
        margin-bottom: 10px;
        font-size: 24px;
      }
      div:nth-child(2) {
        margin-left: 65px;
        margin-bottom: 10px;
        font-size: 19px;
        color: #544a4a;
      }
    }
  }
}
.footer {
  width: 250px;
  height: 50px;
  line-height: 48px;
  border: 3px solid #fdfcfc;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 10px;
  color: #fdfcfc;
  font-size: 36px;
  text-align: center;
}
</style>
