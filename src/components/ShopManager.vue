<template>
    <div class="son1">
      <div>
          <input
          class="search"
          type="text"
          placeholder="输入要查询的商品名"
          v-model="searchManagername"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='输入要查询的商品名'"
        />
        <div class="icon">
          <img @click="search" src="../assets/icon_searchbar.png" alt="">
        </div>
      </div>
        <div class="exam-type d-flex">
            <div>审核类型</div>
            <div><img style="margin-left:7px;" src="../assets/icon_arrow_right.png" alt=""></div>
            <template v-for="item in examtypeList">
              <div
               :key="item.type"
               class="examType"
               @click="handlerExamTypeClick(item.type)"
              >
              {{ item.name }}
              </div>
            </template >
        </div>
        <div class="type d-flex">
        <div>商品品类</div>
        <div><img style="margin-left:7px;" src="../assets/icon_arrow_right.png" alt=""></div>
         <template v-for="item in typeList">
              <div
               :key="item.type"
               class="Type"
                @click="handlerTypeClick(item.type)"
              >
              {{ item.name }}
              </div>
          </template >
        </div>
        <div class="box">
            <div
              v-for="item in dataInfoList"
              :key="item.id"
              class="show"
            >
            <div @click="pushInfo(item.id)">
              <img class="photo cursor-point" :src="'https:' + item.photo" />
            </div>
            <div class="name"   @click="pushInfo(item.id)">{{item.name}}</div>
            <div class="kind">{{item.kind}}</div>
            <div class="seller d-flex">
              <div>商家</div>
              <div class="xian"></div>
              <div>{{item.sellerName}}</div>
            </div>
            <div class="price">
              <span class="fuhao">￥</span>
              <span class="price1">{{item.price}}</span>
            </div>
            <div class="time">{{item.sdf}}</div>
            <div class="audit-pass" v-if="item.is_audit === '合格'">{{item.is_audit}}</div>
             <div class="audit-nopass" v-if="item.is_audit === '不合格'">{{item.is_audit}}</div>
             <div class="audit-no" v-if="item.is_audit === '未审核'">{{item.is_audit}}</div>
          </div>
        </div>
        <div>下一页</div>
    </div>
</template>

<script>
import {
ManagerShop
} from "../api/api";
import {
  examMzhf,
  examFsxb,
  examEssj,
  examRyjj,
  examLsyp,
 getExamAll,
} from "../api/api";
    export default {
       data(){
           return{
             searchManagername:"",
              dataInfoList: [],
                examtypeList:[
                    {
                      name:"未审核",
                      type:"0",
                    },
                    {
                      name:"不合格",
                      type:"1",
                    },
                    {
                      name:"合格",
                      type:"2",
                    }
                ],
                typeList: [
                {
                name: "美妆护肤",
                type: "makeup",
                },
                {
                name: "服饰鞋包",
                type: "cloths",
                },
                {
                name: "二手书籍",
                type: "books",
                },
                {
                name: "日用家居",
                type: "daily",
                },
                {
                name: "零食饮品",
                type: "foods",
                },
                 ],
                pageNum: "0",
                pageSize: "6",
                type: 0,
                typeCounst: "",
                total:0
           };
       },
         created() {
            let requestData5 = {
              pageNum: 0,
              pageSize: 6,
              type: 0,
            };
            // provide reject
            getExamAll(requestData5).then((response) => {
              console.log(response);
              this.dataInfoList = response.data;
            });
          },
       methods: {
    handlerTypeClick(typeName) {
      console.log(typeName)
      this.typeCounst = typeName;
      let dataRequest = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        type: this.type,
      };
      if (typeName === "makeup") {
        examMzhf(dataRequest).then((res) => {
          if(res.code === '400')
          window.alert(res.msg)
           console.log(res);
          this.dataInfoList = [];
          this.dataInfoList.push(...res.data);
        });
      }
      if (typeName === "books") {
        examEssj(dataRequest).then((res) => {
            if(res.code === '400')
          window.alert(res.msg)
                console.log(res);
          this.dataInfoList = res.data;
        });
      }
      if (typeName === "daily") {
         examRyjj(dataRequest).then((res) => {
             if(res.code === '400')
            window.alert(res.msg)
           console.log(res);
          this.dataInfoList = res.data;
        });
      }
      if (typeName === "foods") {
         examLsyp(dataRequest).then((res) => {
              if(res.code === '400')
            window.alert(res.msg)
           console.log(res);
          this.dataInfoList = res.data;
        });
      }
      if (typeName === "cloths") {
         examFsxb(dataRequest).then((res) => {
            if(res.code === '400')
            window.alert(res.msg)
           console.log(res);
          this.dataInfoList = res.data;
        });
      }
    },
    handlerExamTypeClick(Type) {
      this.type = Type;
      let localSortName = this.typeCounst;
      if (localSortName) {
        this.handlerTypeClick(localSortName);
      }
    },
    pushInfo(id) {
      // 跳转的时候带上id
     // this.$router.push({path:'/managerShop'})
        this.$router.push(
          {
            name:'ManagerShop',
            params: {
              shopID: id
            }
            }
          )
    },
    search(){
        let dataRequest = {
        nname:this.searchManagername,
        pageNum:0,
        pageSize:10,
      };
      console.log(this.searchManagername)
      ManagerShop(dataRequest).then((res=>{
           console.log(res);
          this.dataInfoList = res.data;
      }))
    }
  },
    }
</script>

<style lang="scss" scoped>
.search{
  margin-left: 750px;
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
.icon{
  position: relative;
  top: -38px;
  left: 1050px;
}
.son1{
  margin-left: 80px;
  	font-size: 16px;
}
input::placeholder {
  padding-left: 20px;
}
.examType{
  margin-left: 48px;
  cursor: pointer;
}
.type{
  margin-top: 30px;
}
.Type{
   margin-left: 48px;
   cursor: pointer;
}
.box{
  width: 1100px;
  margin-top: 30px;
	box-shadow: 0px 0px 17px 0px 
		rgba(244, 244, 244, 0.5);
	border-radius: 30px!important;
  background-color: #ffffff;
}
.show{
  width: 100%;
	height: 96px;
	box-shadow: 0px -1px 0px 0px 
		#e6e6e6;
}
.photo{
  width: 72px;
	height: 72px;
	border-radius: 25px;
  margin-top: 13px;
  margin-left: 38px;
   cursor: pointer;
}
.name{
   cursor: pointer;
  width: 420px;
  height: 24px;
  position: relative;
  top: -73px;
  left: 143px;
     white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
}
.kind{
  position: relative;
  top: -100px;
  left: 590px;
  width: 70px;
	height: 21px;
	background-color: #ffffff;
	border-radius: 56px;
	border: solid 1px #f2c3c4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.seller{
  position: relative;
  top: -120px;
  left: 790px;
  height: 24px;
}
.xian{
  width: 0px;
	height: 16px;
	border: solid 1px #e2e2e2;
  margin-left: 5px;
  margin-right: 5px;
}
.price{
    position: relative;
  top: -92px;
    left: 143px;
}
.fuhao{
  width: 14px;
	height: 21px;
	font-size: 14px;
	line-height: 16px;
	color: #fc7c4f;
}
.price1{
  width: 27px;
	height: 24px;
	font-size: 16px;
	line-height: 19px;
	color: #fc7c4f;
}
.audit-pass{
  width: 100px;
	height: 40px;
	background-color: #e1f5ef;
	border-radius: 30px;
	border: solid 1px #c4e4d7;
  position: relative;
  top: -171px;
    left: 980px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.audit-nopass{
	width: 100px;
	height: 40px;
	background-image: linear-gradient(
		#ffe7e8, 
		#ffe7e8), 
	linear-gradient(
		#ffffff, 
		#ffffff);
	background-blend-mode: normal, 
		normal;
	border-radius: 30px;
	border: solid 1px #f5caca;
  position: relative;
  top: -171px;
    left: 980px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.audit-no{
		width: 100px;
	height: 40px;
	background-color: #f1f1f1;
	border-radius: 30px;
	border: solid 1px #c7c7c7;
  position: relative;
  top: -171px;
    left: 980px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.time{
  	font-size: 14px;
	height: 21px;
    position: relative;
  top: -110px;
    left: 790px;
}
</style>