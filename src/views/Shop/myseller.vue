<template>
    <div>
       <Head/>
         <div class="MySeller d-flex">
            <el-tabs :tab-position="tabPosition" style="height: 200px">
                <el-tab-pane label="全部"><AllSeller/></el-tab-pane>
                <el-tab-pane label="未出售"><WaitSeller/></el-tab-pane>
                <el-tab-pane label="已出售"><FinishSeller/></el-tab-pane>
            </el-tabs>
            </div>
      </div>
</template>

<script>
import { getMyBuy } from "../../api/api";
import AllSeller from "../../components/AllSeller.vue";
import WaitSeller from "../../components/WaitSeller.vue";
import Head from "../../components/Head.vue";
import FinishSeller from "../../components/FinishSeller.vue";
    export default {
          name: "MyBuy",
          components: {
                Head,
                AllSeller,
                WaitSeller,
                FinishSeller,
            },
            data(){
                return{
                      dataInfoList: [],
                      userid:"",
                      tabPosition: "top",
                }
            },
            created(){
                console.log('1')
                this.userid = window.localStorage.getItem('userid')
                 let dataRequest={
                    userId:this.userid,
                    sort:2,
                    pageNum:0,
                    pageSize:10,
                }
                getMyBuy(dataRequest).then((res=>{
                    console.log(res)
                    this.dataInfoList = res.data;
                 }))
            }
    }
</script>

<style lang="scss" scoped>
.MySeller{
        width: 58%;
    margin-left: 21%;
    box-shadow: 0px 1px 9px 0px 
		rgba(230, 230, 230, 0.6);
}
</style>