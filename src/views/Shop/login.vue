<template>
  <div class="login d-flex">
    <div class="left">
      <div>
        <img class="logo" src="../../assets/icon_logo.png" alt="" />
      </div>
      <div class="message">
        <div class="message11" style="margin-buttom : 48px;">来到 Circle</div>
        <div class="message22">分享你的二手</div>
      </div>

      <div class="icon_div">
        <img class="icon" src="../../assets/signup_illustation.png" alt="" />
      </div>
    </div>
    <div class="right">
      <div class="logo2">
        <img src="../../assets/signup_logo_circlebg.png" alt="" />
      </div>
      <div class="message1">欢迎来到 Circle !</div>
      <div>
        <ul class="message2" type="disc">
          <li>可信度高的校内交易</li>
          <li>专人审核商品内容</li>
          <li>利用闲置赚外快</li>
          <li>省去物流烦恼</li>
        </ul>
      </div>
      <div style="font-size: 16px; line-height: 24px; margin-top: 2%">
        电子邮箱
      </div>
      <input
        type="text"
        placeholder="请输入您的电子邮箱"
        v-model="email"
        onfocus="this.placeholder=''"
        onblur="this.placeholder='请输入您的电子邮箱'"
      />
      <div style="font-size: 16px; line-height: 24px; margin-top: 2%">密码</div>
      <input
        type="text"
        placeholder="请输入您的密码"
        v-model="password"
        onfocus="this.placeholder=''"
        onblur="this.placeholder='请输入您的密码'"
      />
      <div
        class="d-flex"
        style="margin-top: 7%; text-align: center; width: 100%"
      >
        <div class="forget_password" @click="handleForgetPassword">忘记密码？</div>
        <div class="login_button">
          <button @click="handlerLogin">登录</button>
        </div>
      </div>
      <div class="register d-flex">
        <div>未注册账号？</div>
        <div class="click_register" @click="handleregister">点击注册</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Login } from "@/api/api";
export default {
  data( ){
    return {
        email: "",
        password: ""
    }
  },
  methods: {
    handlerLogin() {
      // if (this.username ==="admin" && this.password === "123") {
      //   let username = "admin"
      //   window.localStorage.setItem("user", username)
      //   this.$router.push({
      //     path: "/"
      //   })
      // }
      let dataRequest = {
        email:  this.email,
        password: this.password,
      };
      Login(dataRequest).then((response) => {
        console.log(response);
        let email= this.email
        let id = response.data.id
        let username = response.data.username
        if(response.code === '200')
        {
          window.localStorage.setItem("email",email)
          window.localStorage.setItem("userid", id)
           window.localStorage.setItem("username",username)
          this.$router.push({
            path: "/",
          })
        }
        else{
          window.alert(response.msg);
        }
       
      });
    },
      handleregister(){
       this.$router.push({
          path: "/register"
        })
    },
    handleForgetPassword(){
        this.$router.push({
          path: "/forgetPassword"
        })
    }
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 900px;
}
.left {
  width: 67%;
  background-color: #fff2f2;
}
.message {
  position: relative;
  top: 21%;
  left: 14%;
  width: 343px;
  height: 144px;
  font-family: SourceHanSansSC-Bold;
  font-size: 48px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 48px;
  letter-spacing: 0px;
  color: #444444;
  text-shadow: 2px 4px 0px rgba(191, 177, 177, 0.25);
}

.right {
  width: 33%;
  background-color: #ffffff;
  box-shadow: -5px 2px 30px 0px rgba(158, 92, 92, 0.1);
  border-radius: 40px 0px 0px 40px;
  > div {
    margin-left: 10%;
  }
  > input {
    margin-left: 10%;
  }
}
.logo {
  width: 7.5%;
  height: 3%;
  margin-top: 3%;
  margin-left: 3%;
}
.icon {
  width: 62%;
  height: 68%;
  margin-top: 10%;
  margin-left: 23%;
}
.logo2 {
  width: 1.5%;
  height: 10%;
  margin-left: 11%;
  margin-top: 8%;
}
.message1 {
  height: 5%;
  font-family: SourceHanSansSC-Bold;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 48px;
  margin-top: 9%;
  color: #000000;
}
.message2 {
  margin-top: 2%;
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 32px;
  letter-spacing: 0px;
  color: #bebebe;
}
input {
  width: 81%;
  height: 6%;
  border-radius: 10px;
  border: solid 1px #b0b0b0;
  margin-top: 3%;
  cursor: pointer;
  outline: none;
}
input:focus {
  border: solid 1px #e2aaaa;
}
.forget_password {
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 45px;
  height: 45px;
  color: #ff6465;
  margin-right: 44.4%;
}
button {
  width: 126px;
  height: 45px;
  background-color: #ff6465;
  border-radius: 39px;
  border: none;
  cursor: pointer;
}
.register {
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 21px;
  margin-top: 12%;
  margin-left: 39% !important;
}
.click_register {
  color: #ff6465 !important;
   cursor: pointer;
}
input::placeholder {
  padding-left: 24px;
}
</style>