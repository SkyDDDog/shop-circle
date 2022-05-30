<template>
  <div>
    <Head />
    <div class="Big_examine d-flex">
      <el-tabs :tab-position="tabPosition" style="height: 200px">
        <el-tab-pane label="商品列表"><ShopManager/></el-tab-pane>
        <el-tab-pane label="用户管理"><UserManager/></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { Manager } from "@/api/api";
import Head from "../../components/Head.vue";
import ShopManager from "../../components/ShopManager.vue";
import UserManager from "../../components/UserManager.vue";
export default {
  name: "Manager",
  components: {
    Head,
    ShopManager,
    UserManager,
  },
  data() {
    return {
      tabPosition: "left",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
<style>
.Big_examine {
  margin-top: 3.8%;
}
.el-tabs.el-tabs--left {
  height: 120vh !important;
}
.el-tabs--left .el-tabs__nav-wrap.is-left {
  	width: 250px!important;
	height: 780px!important;
	background-color: #ffffff!important;
	box-shadow: 1px 0px 0px 0px 
		#efefef!important;
}
.el-tabs--left .el-tabs__item.is-left{
  	width: 250px;
	height: 57px;
	box-shadow: inset 0px -1px 0px 0px 
		#e6e6e6;
	font-size: 18px;
	line-height: 32px;
	letter-spacing: 2px;
	color: #e27475;
  border: none;
  text-align: center;
  padding-top: 14px;
}
.el-tabs--left .el-tabs__active-bar.is-left{
  	width: 4px;
  height: 57px;
  	background-color: #ff6465;
}
.el-tabs--left .el-tabs__item.is-left:focus{
  	background-color: #ffecec!important;
}
</style>