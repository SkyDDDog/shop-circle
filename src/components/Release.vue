<template>
  <div class="main">
    <div class="release justify-content-between">
      <div
        class="w-60 d-flex back-img justify-content-between align-items-center"
      >
        <template v-for="item in typeList">
          <div
            :key="item.type"
            class="mx-4 cursor-point"
            @click="handlerTypeClick(item.name)"
          >
            <div><img :src="item.img" /></div>
            <div class="mt-2">{{ item.name }}</div>
          </div>
        </template>
      </div>
      <div class="w-25 back-img2 d-flex align-items-center">
        <div class="add-content d-in" @click="handleRelease">
          <span>在这里</span>
          <br />
          <span>发布你的闲置</span>
        </div>
        <div class="add-icon d-in" @click="handleRelease">
          <img src="../assets/icon_add.png" alt="" />
        </div>
      </div>
    </div>
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
        v-for="item in dataInfoList"
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
          <img src="../assets/icon_user.png" alt="" />
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
import {
  getLsyp,
  getMzhf,
  getEssj,
  getFsxb,
  getRyjj,
  getAll,
} from "../api/api";

export default {
  data() {
    return {
      dataInfoList: [],
      dataInfoListLoading: false,
	  total:0,
      typeList: [
        {
          name: "美妆护肤",
          routeLink: "",
          type: "makeup",
          img: require("../assets/icon_makeup.png"),
        },
        {
          name: "服饰鞋包",
          routeLink: "",
          type: "cloths",
          img: require("../assets/icon_custom.png"),
        },
        {
          name: "二手书籍",
          routeLink: "",
          type: "books",
          img: require("../assets/icon_book.png"),
        },
        {
          name: "日用家居",
          routeLink: "",
          type: "daily",
          img: require("../assets/icon_dailyuse.png"),
        },
        {
          name: "零食饮品",
          routeLink: "",
          type: "foods",
          img: require("../assets/icon_snack.png"),
        },
      ],
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
          img: require("../assets/icon_arrow_up.png"),
        },
        {
          name: "价格",
          routeLink: "",
          type: "desc",
          picture: true,
          img: require("../assets/icon_arrow_down.png"),
        },
        {
          name: "最新发布",
          routeLink: "",
          type: "newest",
          picture: false,
        },
      ],
      // 点击进行分类
      pageNum: "2",
      pageSize: "20",
      order: "",
      sortCounst: "",
      total:0,
    };
  },
  created() {
    let requestData5 = {
      pageNum: 1,
      pageSize: 10,
      order: "",
    };
    // provide reject
    getAll(requestData5).then((response) => {
      console.log('我是返回数据',response);
      this.dataInfoList = response.data;
	    this.total = parseInt(response.total);
      this.dataInfoListLoading = false;
    });
  },
  methods: {
	changePage(e){
		let requestData5 = {
		  pageNum: e,
		  pageSize: 10,
		  order: "",
		};
		getAll(requestData5).then((response) => {
		  this.dataInfoList = response.data;
		  this.dataInfoListLoading = false;
		});
	},
    handlerTypeClick(typeName) {
      this.sortCounst = typeName;
        let dataRequest = {
            pageNum: 0,
            pageSize: this.pageSize,
            order: this.order,
          };
          if (typeName === "美妆护肤") {
            getMzhf(dataRequest).then((res) => {
              this.dataInfoList = [];
              this.dataInfoList.push(...res.data);
            });
          }
          if (typeName === "二手书籍") {
            getEssj(dataRequest).then((res) => {
              this.dataInfoList = res.data;
            });
          }
          if (typeName === "日用家居") {
            getRyjj(dataRequest).then((res) => {
              this.dataInfoList = res.data;
            });
          }
          if (typeName === "零食饮品") {
            getLsyp(dataRequest).then((res) => {
              this.dataInfoList = res.data;
            });
          }
          if (typeName === "服饰鞋包") {
            getFsxb(dataRequest).then((res) => {
              this.dataInfoList = res.data;
            });
          }
    
    },
    handlerSortTypeClick(sortLabel) {
      this.order = sortLabel;
      let localSortName = this.sortCounst;
      if (localSortName) {
        this.handlerTypeClick(localSortName);
      }
    },
    pushInfo(id) {
      // 跳转的时候带上id
     // this.$router.push({path:'/shop/info'})
        this.$router.push(
          {
            name:'ShopInfo',
            params: {
              shopID: id
            }
            }
          )
    },
    handleRelease(){
       this.$router.push('/release');
    }
  },
};
</script>

<style lang="scss" scoped>
.main {
  .release {
    width: 100%;
    > div {
      margin-top: 30px;
    }
    .back-img {
      margin-left: 13%;
      background: url("../assets/button_purple.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 126px;
    }
    .back-img2 {
      margin-left: 13%;
      margin-right: 13%;
      background: url("../assets/button_orange.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 126px;
    }
    .add-content {
      font-family: SourceHanSansSC-Regular;
      font-size: 24px;
      margin-left: 40px;
      color: #ffffff;
    }
    .add-icon {
      padding-left: 38px;
    }
  }
  .sort {
    width: 76%;
    margin-left: 13%;
    color: #444444;
    > div {
      width: 6%;
      height: 21%;
      margin-left: 6%;
      background-color: #f6f6f8;
      border-radius: 30px;
    }
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
.fenye{
  margin-top: 20px;
}
</style>