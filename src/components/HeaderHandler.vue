<template>
  <div class="nav">
    <div class="d-flex">
      <div class="padding-left"></div>
      <div class="align-items-center">
        <img  @click="handleReturnHome" class="logo mx-4" src="../assets/icon_logo.png" />
      </div>
      <div class="flex-sm-grow-1"></div>
      <div class="align-items-center" v-if="isLogin">
        <span v-for="item in headerList" :key="item.lable" >
          <router-link :to="{ name: item.routerLink }">
            <template v-if="item.typeoficon === true">
              <a class="a-style cursor-point">
                <i :class="item.lable" class="font-s22"></i>
              </a>
            </template>
            <template v-else>
              <a class="a-style cursor-point"> {{ item.lable }}</a>
            </template>
          </router-link>
        </span>
      </div>
       <div class="align-items-center" v-else>
        <span v-for="item in headerListLogin" :key="item.lable" >
          <router-link :to="{ name: item.routerLink }">
            <template v-if="item.typeoficon === true">
              <a class="a-style cursor-point">
                <i :class="item.lable" class="font-s22"></i>
              </a>
            </template>
            <template v-else>
              <a class="a-style cursor-point"> {{ item.lable }}</a>
            </template>
          </router-link>
        </span>
      </div>
      <div class="width-half"></div>
      <div class="align-items-center username1" @click="handleMy">{{username}}</div>
      <div class="align-items-center header-icon" v-if="isLogin">
        <img
          class="mx-4"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F17%2F20190517211730_kurtr.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652281535&t=d2d288f89f783b3f1adccd25a791b88b"
        />
      </div>
    </div>
    <div class="biglogo text-center">Circle</div>
    <div class="text-center mt-4">
      <span> 让你的二手闲置 再次</span>
      <span style="color: #444444">发光</span>
      <span style="color: #444444">发热</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin:false,
      headerList: [
        { lable: "我卖的", routerLink: "MySeller" },
        { lable: "我买的", routerLink: "MyBuy" },
        { lable: "my-iconfont icon-email", routerLink: "Message", typeoficon: true },
        { lable: "管理中心", routerLink: "Manager" },
      ],
       headerListLogin: [
        { lable: "登录", routerLink: "Login"},
        { lable: "注册", routerLink: "Register" },
      ],
      username:"",
      userid:"",
    };
  },
  created() {
    let isLoginStatus = window.localStorage.getItem("email")
    if (isLoginStatus) {
      this.isLogin = true
    }
  },
 mounted(){
   console.log(window.localStorage.getItem('username'))
    const name = window.localStorage.getItem('username')
    this.username = name;
    console.log(this.username)
 },
  methods:{
    handleMy(){
          this.$router.push({
            path: "/my"
          })
    },
     handleReturnHome(){
              this.$router.push({
              path: "/"
            })
    },
  },
};
</script>

<style lang="scss" scoped>
 @font-face {
  /* 我自己命名为 mFont */
 font-family: "mFont";  
src: url("../styles/JosefinSans-SemiBold-8.ttf") format("truetype");
}
.nav {
  width: 100%;
  min-width: 800px;
  background-image: url("../assets/background.png");
  .header-icon {
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
  .width-half {
    width: 50px;
  }
}
.biglogo {
  font-family: mFont;
  font-size: 67px;
  color: #444444;
}
.username1{
  font-size: 18px;
  cursor: pointer;
}
</style>