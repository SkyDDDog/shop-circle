<template>
    <div class="d-flex">
    <div class="left">
    <div class="friend d-flex">
       <div><img class="photo1" :src="toHead" alt=""></div>
       <div>{{toName}}</div>
    </div>
    </div>
    <div class="right">
    <div class="showmsg"></div>
    <div class="xian"></div>
    <input
                type="text"
                style="width:65%!important;margin-left:42px!important;"
                placeholder="输入您要发送的信息"
                v-model="msg"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='输入您要发送的信息"
                class="inputmsg"
            />
    </div>
    
    </div>
</template>

<script>
 import { getUserInfo} from "../api/api";
 import { getMsg } from "../api/api";
import { sendMsg } from "../api/api";
    export default {
        data(){
            return{
                userid:"",
                toid:"",
                dataInfoList:[],
                toHead:"",
                toName:"",
            }
        },
        created(){
             this.userid = window.localStorage.getItem('userid')
             let dataRequest = {
                 fromId:this.userid,
                 toId:this.userid
             }
                getMsg(dataRequest).then((res=>{
                    console.log(res,2)
                    this.dataInfoList = res.data;
                    console.log( this.dataInfoList)
                 }))
                  const id = this.$route.params.ID;
                  this.toid = id
                  console.log(this.toid)
                  if(this.userid !== undefined)
                  {
                      let dataRequest1 = {
                        id:this.toid,
                    }
                       getUserInfo(dataRequest1).then((res)=>{
                        console.log(res,'卖家')
                        this.toHead = res.data.head
                        this.toName = res.data.nickName
                        console.log(this.toHead )
                    })
                  }
                    
            },
           
    }
</script>

<style lang="scss" scoped>
.showmsg{
    height: 13%;
}
.xian{
    width: 824px;
	height: 1px;
	background-color: #e2e2e2;
    margin-top: 386px;
}
.inputmsg{
    height: 303px;
    width: 824px!important;
    outline: none;
    border: none;
    margin-left: 0px!important;
}
.left{
    width:290px;
    background-color: #ffffff;
}
.right{
    width: 821px;
    height:686px;
	background-color: #f8f8f8;
}
.friend{
    width: 290px;
	height: 112px;
    line-height: 112px;
	background-color: #ffffff;
}
.photo1{
    width: 48px;
	height: 48px;
    border-radius: 50%;
    margin-top: 30px;
    margin-right: 24px;
    margin-left: 27px;
}
</style>