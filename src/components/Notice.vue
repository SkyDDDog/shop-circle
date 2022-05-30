<template>
    <div>
    <div
        v-for="item in dataInfoList"
        :key="item.id"
        class="show d-flex"
        >
        <div class="msg">
        {{item.msg}}
          <div class="modify" @click="modify"> >>点击跳转修改</div>
        </div>
      
    </div>
    </div>
</template>

<script>
 import { getNotice } from "../api/api";
    export default {
        data(){
            return {
                userid:"",
                dataInfoList:[]
            }
        },
        mounted(){
            this.userid = window.localStorage.getItem('userid')
            let dataRequest = {
                id:this.userid
            };
            getNotice(dataRequest).then((res=>{
                    console.log(res,2)
                    this.dataInfoList = res.data;
                    console.log(this.dataInfoList)
                 }))
        },
        methods:{
            modify(){
                 this.$router.push({
                    path: "/myseller"
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
.el-tabs__item {
    padding: 0 50px!important;

}
.show{
    width: 100%;
}
.msg{
    width: 100%;
	height: 120px;
    line-height: 96px;
	background-image: linear-gradient(
		rgba(255, 255, 255, 0.2), 
		rgba(255, 255, 255, 0.2)), 
	linear-gradient(
		#fdfdfd, 
		#fdfdfd);
	background-blend-mode: normal, 
		normal;
	box-shadow: 0px 1px 9px 0px 
		rgba(230, 230, 230, 0.6);
	border-radius: 20px;
   text-align: center;
}
.modify{
	height: 14px;
	font-size: 16px;
	line-height: 14px;
	color: #67c4f0;
    cursor: pointer;
}
</style>