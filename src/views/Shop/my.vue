<template>
    <div class="all">
      <Head/>
      <div class="user">
      <img class="background" src="../../assets/bg_user.png" alt="">
        <img
          class="userphoto"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F17%2F20190517211730_kurtr.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652281535&t=d2d288f89f783b3f1adccd25a791b88b"
        />
       <button class="modifyphoto">修改头像</button>
       <div class="message">
       <!-- 昵称 -->
         <div class="name1 d-flex">
           <div class="name">昵称</div>
              <input
                type="text"
                placeholder="username"
                v-model="username"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='小熊吹奶盖'"
            />
            <div class="beizhu">注：昵称限 2 ~ 11 个字符</div>
         </div>
         <!-- 性别 -->
         <div class="sex1 d-flex">
          <div class="sex">性别</div>
           <template>
            <el-radio-group v-model="radio" class="sextype">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="2">女</el-radio>
            </el-radio-group>
           </template>
         </div>
        <!-- 电话 -->
         <div class="name1 d-flex" style="margin-top:40px;">
           <div class="name">电话</div>
              <input
                type="text"
                placeholder="请输入您的常用电话"
                v-model="userphone"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='请输入您的常用电话'"
            />
         </div>
         <!-- 地址 -->
        <div class="name1 d-flex" style="margin-top:40px;">
           <div class="name">地址</div>
              <input
                type="text"
                style="width:65%!important;"
                placeholder="请输入您的地址"
                v-model="useraddress"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='请输入您的地址'"
            />
         </div>
         <!-- 简介 -->
        <div class="name1 d-flex" style="margin-top:40px;">
           <div class="name" style="width:80px!important">一句话简介</div>
              <input
                type="text"
                style="width:65%!important;margin-left:42px!important;"
                placeholder="展示你的风采吧 ~"
                v-model="userintro"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='展示你的风采吧 ~'"
            />
         </div>
        <!-- 邮箱 -->
          <div class="name1 d-flex" style="margin-top:40px;">
           <div class="name" style="width:80px!important">邮箱</div>
             <div class="email">{{email}}</div>
             <div class="changeEmail" @click="handleEmail">更换邮箱</div>
         </div>
          <!-- 密码 -->
          <div class="name1 d-flex" style="margin-top:40px;">
           <div class="name" style="width:80px!important">密码</div>
             <div class="changePassword" @click="handleModifPassword">修改密码</div>
         </div>
         <button class="store" @click="change">保存</button>
       </div>
      </div>
    </div>
</template>

<script>
 import { getUserInfo} from "@/api/api";
import { changeUser} from "@/api/api";
import Head from "../../components/Head.vue";
    export default {
         name: "My",
          components: {
                Head,
            },
        data(){
            return{
                username:"",
                radio: 1,
                userphone:"",
                useraddress:"",
                email:"",
                userintro:"",
                userid:"",
            }
        },
         mounted(){
                this.username = window.localStorage.getItem('username');
                this.email = window.localStorage.getItem('email');
                this.userid = window.localStorage.getItem('userid');
                        let dataRequest1 = {
                        id:this.userid,
                    }
                       getUserInfo(dataRequest1).then((res)=>{
                        console.log(res)
                        // this.radio = res.data.gender === '男'? 1:2
                        this.userphone =  res.data.tel
                        this.useraddress = res.data.address
                        this.userintro = res.data.intro
                        if(res.data.gender === '男')
                        this.radio = 1
                        else if(res.data.gender === '女')
                        this.radio = 2
                        else 
                        this.radio = 0
                    })
            },
            methods:{
                handleModifPassword(){
                       this.$router.push({
                    path: "/forgetPassword"
                    })
                },
                change(){
                    let dataRequest = {
                        address:this.useraddress,
                        intro:this.userintro,
                        gender:this.radio,
                        nickname:this.username,
                        tel:this.userphone,
                        userId:this.userid,
                    }
                    changeUser(dataRequest).then((res)=>{
                        console.log(res)
                        window.alert('修改成功')
                    })
                },
                handleEmail(){
                      this.$router.push({
                    path: "/changeEmail"
                    })
                }
            }
        
    }
</script>

<style lang="scss" scoped>
.all{
    width: 100%;
    height: 100%;
}
.user{
    width: 58%;
    
    margin-left: 21%;
    margin-top: 18px;
    box-shadow: 0px 1px 9px 0px 
		rgba(230, 230, 230, 0.6);
}
.background{
    width:100%;
    height: 18.2%;
}
.userphoto{
    width:100px;
	height: 100px;
    position: relative;
   top:-50px;
    margin-left: 5%;
    border-radius: 50%;
}
.modifyphoto{
    width: 80px;
	height: 30px;
	border-radius: 8px;
	border: solid 1px #efefef;
    position: relative;
   top:-20px;
   left: -90px;
	font-size: 14px;
	line-height: 14px;
	letter-spacing: 0px;
	color: #7e7e7e;
}
.message{
    margin-left: 21%;
    position: relative;
     top:-70px;
}
.name{
    width: 32px;
	height: 16px;
	font-size: 16px;
	line-height: 300%;
	color: #000000;
}
.name1 input{
    width: 216px;
	height: 48px;
	border-radius: 10px;
	border: solid 1px #efefef;
     margin-left: 13%;
     outline: none;
}
.sex{
    width: 32px;
	height: 16px;
	font-size: 16px;
	color: #000000;
}
.sex1{
    margin-top: 38px;
}
.sextype{
      margin-left: 13%;
}
.beizhu{
	height: 14px;
	font-size: 14px;
	line-height: 320%;
    margin-left: 32px;
	color: #b0b0b0;
}
.email{
    margin-left: 38px;
    margin-top: 15px;
	height: 16px;
	font-size: 16px;
	line-height: 16px;
	color: #444444;
}
.changeEmail{
    margin-left: 250px;
    margin-top: 15px;
	height: 16px;
	font-size: 16px;
	color: #5ab7e3;
    cursor: pointer
}
.changePassword{
    margin-left: 210px;
    margin-top: 15px;
	height: 16px;
	font-size: 16px;
	color: #5ab7e3;
    cursor: pointer
}
.store{
    width: 104px;
	height: 52px;
    margin-top: 5%;
    margin-left: 72%;
	background-color: #ff6465;
	border-radius: 62px;
    border: none;
    cursor: pointer;
	font-size: 20px;
	line-height: 20px;
	color: #ffffff;
}
</style>