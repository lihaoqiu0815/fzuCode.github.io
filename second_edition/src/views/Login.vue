<template>
  <div class="login" id="form" ref="backGroundColor">
    <Home id="home" @delieverFather="delieverData" :Name="name" :College="college" :scroller_item="move_item"></Home>
    <div class="weather">
      <div class="city">福州</div>
      <div class="temp1">{{ nowtemperature }}'</div>
      <div class="temp2">{{ temperature.text_day }} —— {{ temperature.text_night }}</div>
    </div>

    <div class="login_form" v-if="form_show">
      <van-field v-model="name" left-icon="user-o" placeholder="Name" label-width="36px" />
      <van-field v-model="college" left-icon="home-o" placeholder="College" label-width="36px" />
      <div class="scroll">
        <span @click="alert_picker" class="span1"><van-icon name="guide-o" /> 选择滚动——</span> <span class="move_item">{{ info }}</span>
      </div>
      <van-button color="linear-gradient(to right, #df83cd, #6d76ea)" @click="login_move"> Login </van-button>
    </div>
    <div @click="showPopup" class="text"  :style="{opacity: bottom_txt? 0:1}">使 用 须 知</div>
    <van-popup v-model:show="show">
      <div>
       <span style="font-size: 18px">github Link</span> ：<a  href="https://github.com/qirong77/TS.github.io">GitHub</a>
        <div><span style="font-size: 12px">-机检无反应</span></div>
          <div><span  style="font-size: 12px">-不会收集任何个人信息</span></div>
        <div><span style="font-size: 12px" >-不再更新</span></div>
      </div>
    </van-popup>
    <van-picker id="scroller" ref="dom" title="" :columns="columns" @confirm="onScrollerConfirm" @cancel="alert_picker" @change="onChange" />
  </div>
</template>
<script>
import { getWeather, getWeatherNow } from '../utils/weather'
import { setItem, getItem } from '../utils/storage.js'
import { ref } from '@vue/reactivity'
import Home from './home.vue'
export default {
  components: {
    Home
  },
  data() {
    return {
      name: '',
      college: '',
      move_item: '民主',
      temperature: {},
      nowtemperature: 0,
      form_show: true,
      bottom_text :  true
    }
  },
  mounted() {
    this.getTemperature(), (this.name = getItem('Name'))
    this.college = getItem('College')
  },
  methods: {
    fullClose(n, m) {
      var result = Math.random() * (m + 1 - n) + n
      while (result > m) {
        result = Math.random() * (m + 1 - n) + n
      }
      return result
    },
    async getTemperature() {
      const { data: res } = await getWeather()
      this.temperature = res.results[0].daily[0]
      const { data: res2 } = await getWeatherNow()
      this.nowtemperature = res2.results[0].now.temperature
    },
    alert_picker() {
      let picker = document.querySelector('#scroller')
      if (picker.className === 'picker3') picker.className = 'picker2'
      else picker.className = 'picker3'
    },
    onScrollerConfirm() {
      let picker = document.querySelector('#scroller')
      if (picker.className === 'picker3') picker.className = 'picker2'
      else picker.className = 'picker3'
      let item = document.querySelector('.move_item')
      let x = item.innerHTML
      this.move_item = x
    },
    login_move() {
      const home = document.querySelector('#home')
      if (home.className === 'home2') home.className = 'home1'
      else home.className = 'home2'
      this.form_show = !this.form_show
      setItem('Name', this.name)
      setItem('College', this.college)
      this.bottom_text = !this.bottom_text
    },
    delieverData(x) {
      this.form_show = x
    }
  },
  setup() {
    const show = ref(false)
    const showPopup = () => {
      show.value = true
    }
    let info = ref('')
    info.value = '民主'
    const columns = ['富强', '民主', '文明', '和谐', '自强', '诚信', '敬业', '友善', '平等', '公正', '法治', '爱国', '友善', '志诚', '远志', '博学']
    const onConfirm = () => {}
    const onChange = value => {
      info.value = value
    }
    const setBackground = x => {
      var main = document.querySelector('.login')
      main.style.background = x
    }
    const onCancel = () => {}
    return {
      columns,
      onChange,
      onCancel,
      onConfirm,
      info,
      show,
      showPopup,
      setBackground
    }
  }
}
</script>
<style>
.temp3 {
  margin: 10px;
  margin-left: 145px;
  font-size: 30px;
  opacity: 0.6;
}
.text {
  margin-left: 40vw;
  margin-top: 300px;
  font-size: 30px;
  color: gray;
  text-decoration: underline;
}
.van-popup {
  height: 30vh;
  width: 50vw;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.van-popup div {
  font-size: 40px;
}
.home1 {
  height: 120vh;
  width: 100vw;
  position: absolute;
  background-color: #3b81b7;
  top: 0;
  left: 100vw;
  transition: 0.4s;
}
.home2 {
  height: 120vh;
  width: 100vw;
  position: absolute;
  background-color: #3b81b7;
  top: 0;
  left: 0vw;
  transition: 0.4s;
}
.picker2 {
  position: absolute;
  top: 130vh;
  width: 100vw;
  height: 50vh;
  transition: 0.3s;
  background-color: white;
}
.picker3 {
  position: absolute;
  background-color: white;
  top: 60vh;
  width: 100vw;
  height: 50vh;
  transition: 0.3s;
}
</style>
<style scoped lang="less">
.desc {
  position: absolute;
  color: #23d5ab;
  font-size: 20px;
  top: 20px;
  opacity: 0.5;
}
.login {
  overflow: hidden;
  padding-top: 100px;
  position: relative;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(-45deg, rgb(233, 231, 105), pink, rgb(105, 187, 228), rgb(97, 158, 219));
  background-size: 380% 380%;
  animation: change 8s ease-in-out infinite;
  @keyframes change {
    0% {
      background-position: 0 50%;
    }
    25% {
      background-position: 25% 25%;
    }
    50% {
      background-position: 80% 50%;
    }
    75% {
      background-position: 100% 75%;
    }
    100% {
      background-position: 0 50%;
    }
  }
}
.weather {
  div {
    margin-top: 10px;
    text-align: center;
    color: #352a2a;
  }
  .city {
    font-size: 50px;
  }
  .temp1 {
    font-size: 80px;
  }
}
.login_form {
  position: relative;
  .van-field {
    margin: 0 auto;
    margin-top: 50px;
    width: 70%;
    padding-top: 25px;
    font-size: 40px;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.4);
    height: 100px;
  }
  .van-button {
    padding-bottom: 10px;
    width: 40%;
    border-radius: 20px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 50px;
    opacity: 0.7;
    color: black;
  }
  .scroll {
    width: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 40px;

    span {
      font-size: 40px;
      color: black;
      opacity: 0.7;
      display: inline-block;
    }
    .span1 {
      height: 60px;
      width: 240px;
      padding-left: 10px;
      line-height: 60px;
      margin-right: 10px;
      font-size: 30px;
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
}

.van-picker {
  position: absolute;
  top: 130vh;
  width: 100vw;
  height: 50vh;
  background-color: white;
}
</style>
