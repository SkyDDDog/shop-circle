<template>
    <div>
      <Head/>
      <Search/>
      <div class="h-px w-30 align-items-center d-flex sort">
      <template v-for="item in sortList">
        <div
          :key="item.type"
          class="cursor-point d-flex align-items-center justify-content-center"
          @click="handlerSortTypeClick(item.type)"
        >
          <div>{{ item.name }}</div>
          <div v-if="item.picture === true">
            <div><img :src="item.img" /></div>
          </div>
        </div>
      </template>
    </div>
       <div class="d-flex conation-box">
      <div
        v-for="item in dataInfoList1"
        :key="item.id"
        class="shop-box"
        @click="pushInfo(item.id)"
      >
        <div class="justify-content-center">
          <img class="photo cursor-point" :src="'https:' + item.photo" />
        </div>
        <div class="price mt-1 cursor-point">￥{{ item.price }}</div>
        <div class="intro mt-1 cursor-point">{{ item.name }}</div>
        <div class="seller mr-1 justify-content-right cursor-point">
          <img src="../../assets/icon_user.png" alt="" />
          {{ item.sellerName }}
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
import { searchShop } from "../../api/api";
import Search from "../../components/Search.vue";
import Head from "../../components/Head.vue";
    export default {
          name: "SearchInfo",
          components: {
                Head,
                Search,
            },
     data() {
    return {
      total:0,
      searchName:"",
      pageNum:"",
      pageSize:"",
      sort:"",
        dataInfo: [],
        dataInfoList1: [],
        sortList: [
        {
          name: "综合",
          routeLink: "",
          type: "",
          picture: false,
        },
        {
          name: "价格",
          routeLink: "",
          type: "asc",
          picture: true,
          img: require("../../assets/icon_arrow_up.png"),
        },
        {
          name: "价格",
          routeLink: "",
          type: "desc",
          picture: true,
          img: require("../../assets/icon_arrow_down.png"),
        },
        {
          name: "最新发布",
          routeLink: "",
          type: "newest",
          picture: false,
        },
      ],
    };
  },
    mounted() {
    const dataInfoList = this.$route.params.dataInfo;
    this.dataInfoList1= dataInfoList
     this.searchName = window.localStorage.getItem('searchName');
      console.log( this.searchName)
  },
  created(){
    this.searchName = window.localStorage.getItem('searchName');
 let dataRequest = {
          name: this.searchName,
          sort:0,
           pageNum:0,
          pageSize:10,
        };
    // provide reject
    searchShop(dataRequest).then((response) => {
      console.log('我是返回数据',response);
      this.dataInfoList1 = response.data;
	    this.total = parseInt(response.total);
      this.dataInfoListLoading = false;
    });
  },

  methods:{
    		changePage(e){
		let requestData5 = {
		   name: this.searchName,
          sort:0,
           pageNum:e-1,
          pageSize:10,
		};
	searchShop(requestData5).then((response) => {
		  this.dataInfoList1 = response.data;
		  this.dataInfoListLoading = false;
		});
	},
        pushInfo(id) {
        this.$router.push(
          {
            name:'ShopInfo',
            params: {
              shopID: id
            }
            }
          )
    },
    handlerSortTypeClick(type){
      console.log(type)
      if(type === 'asc'){
         let dataRequest = {
          name: this.searchName,
          sort:1,
           pageNum:0,
          pageSize:10,
        };
        searchShop(dataRequest).then((response)=>{
          console.log(dataRequest.name);
          console.log(response);
          this.dataInfoList1 = response.data;
          console.log( this.dataInfoList)
        });
      }
       if(type === 'desc'){
         let dataRequest = {
          name: this.searchName,
          sort:2,
           pageNum:0,
          pageSize:10,
        };
        searchShop(dataRequest).then((response)=>{
          console.log(dataRequest.name);
          console.log(response);
          this.dataInfoList1 = response.data;
          console.log( this.dataInfoList)
        });
      }
      if(type === 'newest')
      {
           let dataRequest = {
          name: this.searchName,
          sort:3,
           pageNum:0,
          pageSize:10,
        };
        searchShop(dataRequest).then((response)=>{
          console.log(dataRequest.name);
          console.log(response);
          this.dataInfoList1 = response.data;
          console.log( this.dataInfoList)
        });

      }
     

    }
  }
    }
</script>

<style lang="scss" scoped>
  .sort {
    width: 76%;
    margin-left: 16%;
    color: #444444;
    > div {
      width: 6%;
      height: 21%;
      margin-left: 6%;
      background-color: #f6f6f8;
      border-radius: 30px;
    }
  }
  .photo {
  width: 100%;
  margin: auto;
  border-radius: 10px;
}
.conation-box {
  width: 75%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.shop-box {
  width: 19%;
  height: 100%;
  margin-left: 0.5%;
  background-color: #ffffff;
  margin-top: 0.5%;
  border-radius: 10px;
  border: solid 1px #e7e7e7;
}
.price {
  margin-left: 3%;
  font-family: SourceHanSansSC-Regular;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 0px;
  color: #fc7c4f;
}
.intro {
  margin-left: 3%;
  margin-right: 3%;
  font-family: SourceHanSansSC-Regular;
  font-weight: normal;
  font-stretch: normal;
  line-height: 14px;
  line-height: 21px;
  letter-spacing: 0px;
  color: #444444;
  font-size: 14px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #444444;
}
.seller {
  img {
    margin-right: 8px;
    width: 12px;
    height: 12px;
  }
  margin-right: 15px;
  font-family: SourceHanSansSC-Regular;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 12px;
  letter-spacing: 0px;
  color: #7e7e7e;
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>