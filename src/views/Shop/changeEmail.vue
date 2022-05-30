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
            <div class="message1">更换邮箱</div>
                <div style="font-size: 16px; line-height: 24px; margin-top: 2%">
               新的电子邮箱
            </div>
            <input
            class="youxiang"
                type="text"
                placeholder="请输入你的新的电子邮箱"
                @blur="getUserEmail"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='请输入你的新的电子邮箱'"
            />
            <button class="yanzhengma" @click="handleEmail">发送验证码</button>
            <div style="font-size: 16px; line-height: 24px; margin-top: 2%">
                邮箱验证码
            </div>
            <input
                type="text"
                @blur="getVercode"
                placeholder="请输入发送至邮箱的验证码"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='请输入发送至邮箱的验证码'"
            />
            <div class="d-flex" style="margin-top: 7%">
                <div class="register_button">
                <button style=" cursor: pointer; color: #ffffff;" @click="handlerChangeEmail">确认更换</button>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
import { changeUser} from "@/api/api";
import { sendEmail } from "@/api/api";
import { testEmail } from "@/api/api";
    export default {
          name: "ChangeEmail",
          data(){
              return{
                email:"",
                Vercode:"",
                userid:""
              };
          },
            methods: {
                // @blur 获取value
                getUserEmail(event) {
                this.email = event.target.value;
                console.log(this.email);
                },
                getVercode(event){
                this.Vercode= event.target.value;
                console.log(this.Vercode);
                },
                handleEmail(){
                let dataRequest1 = {
                    email: this.email,
                    };
                sendEmail(dataRequest1).then((response)=>{
                    console.log('1')
                    console.log(response);
                })
                },

                // v-model 获取value值 二选一
                handlerChangeEmail() {
                 let dataRequest2 = {
                        email: this.email,
                        Vercode:this.Vercode,
                    }
                    console.log(dataRequest2)
                    testEmail(dataRequest2).then((res)=>{
                        console.log(res)
                        if(res.code === '200')
                        {
                            this.userid = window.localStorage.getItem('userid');
                            let dataRequest3 = {
                                userId:this.userid,
                                email:this.email
                            }
                            changeUser(dataRequest3).then((res=>{
                                  console.log(res)
                                   let email= this.email
                                window.localStorage.setItem("email",email)
                                     this.$router.push({
                                        path: "/my"
                                        })
                            }))
                            
                        }
                    })
                }
            },
    }
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
.message1{
  height: 5%;
  font-family: SourceHanSansSC-Bold;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 48px;
  margin-top: 9%;
  color: #000000;
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
.youxiang{
    width: 51%;
}
.yanzhengma{
  position: relative;
  left: -5px;
  	width: 161px;
 height: 6.7%;
	background-color: #ff6465;
	border-radius: 10px;
    	color: #ffffff;
        cursor: pointer
}
.login11 {
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 45px;
  height: 45px;
  margin-right: 33%;
}
button {
  width: 126px;
  height: 45px;
  background-color: #ff6465;
  border-radius: 39px;
  border: none;
  cursor: pointer;
}
.m2 {
  color: #ff6465 !important;
}
input::placeholder {
  padding-left: 24px;
}
</style>