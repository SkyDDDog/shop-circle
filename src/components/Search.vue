<template>
  <div class="search d-flex">
       <input
       class="w-75 mt-6"
        type="text"
         @blur="getname"
        placeholder="请输入您要搜索的关键词"
        onfocus="this.placeholder=''"
        onblur="this.placeholder='请输入您要搜索的关键词'"
      />
    <button class="w-25 mt-6" @click="search()">搜索</button>
  </div>
</template>

<script>
import { searchShop } from "../api/api";
export default {
  data() {
    return {
      dataInfoList :[],
      name:"",
      sort:"",
      pageNum:"",
      pageSize:"",
    };
  },
  methods: {
      getname(event) {
      this.name= event.target.value;
      console.log(this.name);
    },
    // 涉及到组件之间共享数据
    // 数据传到另一个页面 creata 或者mounted 里面接收数据
    search(){
         let dataRequest = {
          name: this.name,
          sort:0,
           pageNum:0,
          pageSize:10,
        };
         console.log(this.name);
        searchShop(dataRequest).then((response)=>{
            console.log(dataRequest);
          console.log(response);
          this.dataInfoList = response.data;
          console.log( this.dataInfoList)
          window.localStorage.setItem("searchName", dataRequest.name)
          this.$router.push(
              {
                  name:'SearchInfo',
                  params: {
                   dataInfo:this.dataInfoList
                  }
              })
        });
      },
    },
 
  
};
</script>

<style lang="scss" scoped>
.search input {
  margin-left: 20%;
  border-right: 0;
  background-color: #ffffff;
  box-shadow: 0px 0px 14px 0px rgba(230, 230, 230, 0.8);
  border-radius: 8px 0px 0px 8px;
  outline: none;
  border: 1px solid #ff6465;
}
.search button {
  margin-right: 20%;
  height: 70px;
  background-color: #ff6465;
  border-radius: 0px 8px 8px 0px;
  font-family: SourceHanSansSC-Regular;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 23px;
  letter-spacing: 6px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  border: 1px solid #ff6465;
}
input::placeholder {
  padding-left: 24px;
}
</style>