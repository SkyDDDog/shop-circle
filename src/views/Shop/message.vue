<template>
    <div>
    <Head/>
    <div class="box">
     <el-tabs :tab-position="tabPosition" style="height: 200px">
        <el-tab-pane label="系统通知"><Notice/></el-tab-pane>
        <el-tab-pane label="我的私信"><Msg/></el-tab-pane>
      </el-tabs>
    </div>
    </div>
</template>

<script>
 import { getMsg } from "../../api/api";
import { sendMsg } from "../../api/api";
import Head from "../../components/Head.vue";
import Notice from "../../components/Notice.vue";
import Msg from "../../components/Msg.vue";
    export default {
          name: "Message",
           components: {
                Head,
               Notice,
               Msg,
            },
            data(){
                return{
                     tabPosition: "top",
                }
            },
            created(){
                window.setInterval(function () {
                

                }, 3000);
            }
    }
</script>

<style lang="scss" scoped>
.box{
    width: 58%;
    height: 100%;
    margin-left: 20%;
}
</style>