<template>
    <div>
       <Head/>
         <div class="Mybuy d-flex">
            <el-tabs :tab-position="tabPosition" style="height: 200px">
                <el-tab-pane label="全部"><All/></el-tab-pane>
                <el-tab-pane label="待收货"><Wait/></el-tab-pane>
                <el-tab-pane label="已完成"><Finish/></el-tab-pane>
            </el-tabs>
            </div>
      </div>
</template>

<script>
import { getMyBuy } from "../../api/api";
import All from "../../components/All.vue";
import Wait from "../../components/Wait.vue";
import Head from "../../components/Head.vue";
import Finish from "../../components/Finish.vue";
    export default {
          name: "MyBuy",
          components: {
                Head,
                All,
                Wait,
                Finish,
            },
            data(){
                return{
                      dataInfoList: [],
                      userid:"",
                      tabPosition: "top",
                      sort:2,
                      pageNum:0,
                      pageSize:6,
                }
            },
            created(){
                console.log('1')
                this.userid = window.localStorage.getItem('userid')
                let dataRequest={
                    userId:this.userid,
                    sort:this.sort,
                    pageNum:this.pageNum,
                    pageSize:this.pageSize,
                }
                getMyBuy(dataRequest).then((res=>{
                    console.log(res,4)
                    this.dataInfoList = res.data;
                 }))
            },
    }
</script>

<style lang="scss" scoped>
.Mybuy{
    width: 58%;
    margin-left: 21%;
    box-shadow: 0px 1px 9px 0px 
		rgba(230, 230, 230, 0.6);
}
.el-tabs el-tabs--top{
    width: 100%;
    height: 100%;
}
.el-tabs__nav-scroll {
    overflow: hidden;
    width: 898px;
    display: flex;
    justify-items: center;
    align-items: center;
    height: 100px!important;
}
.el-tabs__nav-wrap .is-top{
     width: 898vh;
    display: flex;
    justify-items: center;
    align-items: center;
    height: 100vh!important;
}
</style>