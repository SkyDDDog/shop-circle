<template>
    <div>
     <div>
        <input
        class="search"
        type="text"
        placeholder="输入要查询的用户名"
        v-model="searchUsername"
        onfocus="this.placeholder=''"
        onblur="this.placeholder='输入要查询的用户名'"
      />
      <div class="icon">
         <img @click="search" src="../assets/icon_searchbar.png" alt="">
      </div>
   
     </div>
     <div class="box">
       <div class="head d-flex">
       <div class="name">用户名</div>
       <div class="email">邮箱</div>
       <div class="release">
       已发布数量
       <img class="up" @click="change0" src="../assets/icon_arrowup_off.png" alt="">
       <img class="down" @click="change1" src="../assets/icon_arrowdown_off.png" alt="">
       </div>
       <div class="pass">
       不合格数量
        <img class="up" @click="change2" src="../assets/icon_arrowup_off.png" alt="">
       <img class="down" @click="change3" src="../assets/icon_arrowdown_off.png" alt="">
       </div>
       <div class="do">操作</div>
       </div>
          <div class="box1">
            <div
              v-for="item in dataInfoList"
              :key="item.userId"
              class="show d-flex"
            >
            <img class="photo cursor-point" :src="item.head"/>
            <div class="username">{{item.username}}</div>
            <div class="email1">{{item.email}}</div>
            <div class="relea">{{item.releasedNum}}条</div>
            <div class="unpass">{{item.unpassedNum}}条</div>
            <div v-if="item.status === '正常'" class="delete" @click="deleteUser(item.userId)">封禁</div>
             </div>
          </div>
     </div>
         <el-pagination
          background
          layout="prev, pager, next, total"
          :total="total"
          @current-change="changePage"
        class="fenye"
        >
        </el-pagination>
    </div>
</template>

<script>
import{searchUser} from "../api/api";
import{deleteUser} from "../api/api";
import{ManagerUser} from "../api/api";
    export default {
      data(){
        return{
          searchUsername:"",
            dataInfoListLoading: false,
           pageNum:0,
           pageSize:10,
           dataInfoList:[],
           total:0,
           
        }
      },
      created(){
       let dataRequest = {
         pageNum:0,
         pageSize:10,
         sort:""
       }
         ManagerUser(dataRequest).then((response) => {
              console.log(response);
              this.dataInfoList = response.data;
              this.total = parseInt(response.total);
              this.dataInfoListLoading = false;
            });
      },
        methods:{
          	changePage(e){
              let requestData5 = {
                pageNum: e-1,
                pageSize: 10,
                sort:""
              };
              ManagerUser(requestData5).then((response) => {
                console.log(requestData5.pageNum);
              console.log(response);
              this.dataInfoList = response.data;
              this.dataInfoListLoading = false;
            });
            },
            change0(){
                let requestData5 = {
                  pageNum: 0,
                  pageSize: 10,
                  sort:0
                };
                ManagerUser(requestData5).then((response) => {
                console.log(response);
                this.dataInfoList = response.data;
                this.dataInfoListLoading = false;
              });
            },
            change1(){
                let requestData5 = {
                  pageNum: 0,
                  pageSize: 10,
                  sort:1
                  };
                ManagerUser(requestData5).then((response) => {
                console.log(response);
                this.dataInfoList = response.data;
                this.dataInfoListLoading = false;
              });
            },
            change2(){
                let requestData5 = {
                  pageNum: 0,
                  pageSize: 10,
                  sort:2
                };
                ManagerUser(requestData5).then((response) => {
                console.log(response);
                this.dataInfoList = response.data;
                this.dataInfoListLoading = false;
              });
            },
             change3(){
                let requestData5 = {
                  pageNum: 0,
                  pageSize: 10,
                  sort:3
                };
                ManagerUser(requestData5).then((response) => {
                console.log(response);
                this.dataInfoList = response.data;
                this.dataInfoListLoading = false;
              });
            },
            deleteUser(id){
              let dataRequest = {
                userId:id
              };
              deleteUser(dataRequest).then((res=>{
                  console.log(response);
                  this.dataInfoList = res.data;
              }))
            },
            search(){
               let requestData5 = {
                  pageNum: 0,
                  pageSize: 10,
                  nname:this.searchUsername
                };
               searchUser(requestData5).then((res=>{
                  console.log(res);
                  this.dataInfoList = res.data;
              }))
            }
            },
        }
    
</script>

<style lang="scss" scoped>
.up{
  position: relative;
  top: -5px;
  left: 7px;
  cursor: pointer;
}
.up::selection{
  background-color: #fc4f4f;
}
.down{
  position: relative;
  top: 7px;
  left: -3px;
  cursor: pointer;
}
.do{
  margin-left: 90px!important;
}
.fenye{
  margin-top: 10px;
}
.photo{
  width: 32px;
	height: 32px;
 margin-top: 10px;
  margin-left: 30px;
  border-radius: 50%;
}
.username{
  margin-left: 70px;
  width: 100px;
}
.email1{
  width: 210px;
  margin-left: 30px;
}
.relea{
  width: 50px;
  margin-left: 30px;
}
.unpass{
  width: 50px;
  margin-left: 150px;
}
.delete{
  margin-left: 148px;
  width: 32px;
	height: 16px;
	font-size: 16px;
	color: #fc4f4f;
}
.box1{
  width: 987px;
  margin-top: 18px;
	box-shadow: 0px 0px 17px 0px 
		rgba(244, 244, 244, 0.5);
	border-radius: 30px!important;
  background-color: #ffffff;
}
.show{
  width: 100%;
	height: 60px;
  line-height: 60px;
	box-shadow: 0px -1px 0px 0px 
		#e6e6e6;
}
.search{
  margin-left: 900px;
  width: 348px;
	height: 48px;
	border-radius: 16px;
	border: solid 1px #e2e2e2;
  cursor: pointer;
}
.search:hover{
  border: solid 1px #ff6465;
}
.search:focus{
  border: solid 1px #ff6465;
  outline: none;
}

input::placeholder {
  padding-left: 20px;
}
.icon{
  position: relative;
  top: -38px;
  left: 1201px;
}
.box{
  width: 987px;
	height: 679px;
  margin-left: 107px;
	background-color: #ffffff;
	box-shadow: 0px 0px 17px 0px 
		rgba(244, 244, 244, 0.6);
	border-radius: 16px;
}
.head{
  width: 987px;
	height: 72px;
	border: solid 1px #ededed;
	box-shadow: 0px 0px 17px 0px 
		rgba(244, 244, 244, 0.6);
	border-radius: 16px;
}
.head{
  >div{
    margin-left:130px;
    display: flex;
       align-items: center;
       	font-size: 16px;
  }
}
</style>