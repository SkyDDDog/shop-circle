<template>
    <div>
      <Head/>
       <div class="status">
       <img src="../../assets/img_progress.png" alt="">
       </div>
       <div class="mess">
        <span class="comfirm">确认订单信息</span>
        <span class="upload">成功提交订单</span>
       </div>
       <div class="buy-address d-flex">
        <div class="shuxian"></div>
        <div class="message">收货信息</div>
       </div>
       <div class="details1 d-flex">
         <div class="name">{{username}}</div>
         <div class="phone">{{userphone}}</div>
         <img src="../../assets/icon_location.png" alt="">
         <div class="address">{{useraddress}}</div>
       </div>
       <div class="box">
          <div class="shopInfo d-flex">
          <div class="shuxian"></div>
          <div class="message">商品信息</div>
        </div>
        <div class="shopDetails d-flex">
        <div> <img class="picture" :src="dataInfo[0].photo"/></div>
        <div class="right">
            <div class="introduce">{{dataInfo[0].name}}</div>
            <div class="seller d-flex">
            <img src="../../assets/icon_user.png" alt="">
            <div class="sellername">
                {{dataInfo[0].sellerName}}
            </div>
          </div>
        </div>
        </div>
        <div class="pay">支付方式</div>
        <div class="hengxian"></div>
           <template>
            <el-radio-group v-model="radio" class="paytype">
                <el-radio :label="1">在线支付</el-radio>
                <el-radio :label="2">线下支付</el-radio>
            </el-radio-group>
           </template>
           <div class="price">
            <span>应付金额：</span>
            <span class="fuhao">￥</span>
            <span class="relprice">{{dataInfo[0].price}}</span>
           </div>
       </div>
       <button class="upload1" @click="handleupload1">提交订单</button>
    </div>
</template>

<script>
 import { getUserInfo} from "@/api/api";
import Head from "../../components/Head.vue";
import { getInfo } from "../../api/api";
import { Buy } from "../../api/api";
    export default {
          name: "Buy",
          components: {
          Head,
        },
        data() {
            return {
            dataInfo: [],
            shopID: "",
            radio: 1,
            buyer_id:"",
            good_id:"",
            number:1,
            useraddress:"",
            username:"",
            userphone:""
            };
        },
        mounted() {
        const id = this.$route.params.shopID;
        this.good_id = shopID;
        if (id) {
        window.localStorage.setItem("shopID", id);
        }
        let shopID = window.localStorage.getItem("shopID");
        if (shopID !== "undefined") {
        this.shopID = shopID;
        console.log(this.shopID);
         this.good_id = shopID;
        }
        this.getShopInfo()
        this.buyer_id = window.localStorage.getItem('userid')
              let dataRequest1 = {
                        id:this.buyer_id 
                    }
                       getUserInfo(dataRequest1).then((res)=>{
                        console.log(res)
                        this.useraddress = res.data.address
                        this.userphone =  res.data.tel
                        this.username = res.data.nickName
                    })
    },
  methods: {
    getShopInfo() {
      let shopId = this.shopID;
      getInfo(shopId).then((res) => {
          console.log(res)
        this.dataInfo = res.data;
      });
    },
    handleupload1(){
      let dataRequest={
        buyer_id : this.buyer_id,
         good_id: this.good_id,
         number:this.number,
      }
      Buy(dataRequest).then((res=>{
        console.log(res)
        window.alert('您已成功购买')
      }))
    }
},
    }
</script>

<style lang="scss" scoped>
.status img{
  margin-left: 34%;
  margin-top: 4%;
}
.buy-address{
  margin-left: 21%;
  width: 58%;
	height: 56px;
	background-color: #f9f9f9;
	border-radius: 4px;
	border: solid 1px #efefef;
}
.mess{
  margin-top: 0.5%;
}
.comfirm{
  margin-left: 34%;
  margin-right: 22%;
  width: 85px;
	height: 14px;
	font-family: SourceHanSansSC-Regular;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 14px;
	letter-spacing: 0px;
	color: #444444;
}
.upload{
  width: 85px;
	height: 14px;
	font-family: SourceHanSansSC-Regular;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 14px;
	letter-spacing: 0px;
	color: #b0b0b0;
}
.shuxian{
  width: 4px;
	height: 57px;
	background-color: #ff6465;
}
.message{
  width: 64px;
	height: 16px;
	font-family: SourceHanSansSC-Regular;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 350%;
	letter-spacing: 0px;
	color: #444444;
  margin-left: 2%;
}
.buy-address{
  margin-top: 2%;
}
.details1{
   width: 58%;
    margin-left: 21%;
   margin-top: 1%;
	height: 94px;
	background-color: #ffffff;
	border-radius: 8px;
	border: solid 1px #efefef;
}
.name{
  width: 40px;
	height: 20px;
	font-size: 20px;
	line-height: 430%;
	color: #000000;
  margin-left: 2%;
   margin-right: 4%;
}
.phone{
  width: 86px;
	height: 14px;
	font-size: 14px;
	line-height: 620%;
	color: #000000;
  margin-right: 4%;
}
.details1 img{
  width: 2%;
	height: 17px;
  margin-top: 4%;
  margin-right: 1%;
}
.address{
	height: 14px;
	font-family: SourceHanSansSC-Regular;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 14px;
	letter-spacing: 0px;
	color: #000000;
  margin-top: 4%;
}
.shopInfo{
  margin-left: 21%;
  width: 35%;
	height: 56px;
	background-color: #f9f9f9;
	border-radius: 4px;
	border: solid 1px #efefef;
  margin-top: 2%;
}
.shopDetails{
   margin-top: 2%;
  margin-left: 21%;
  width: 34%;
	height: 173px;
	background-color: #ffffff;
	border-radius: 8px;
	border: solid 1px #efefef;
}
.picture{
  width: 109px;
	height: 109px;
  margin-top: 30%;
  margin-left: 30%;
  border-radius: 10px;
}
.introduce{
  width:90%;
	height: 50px;
	font-size: 14px;
	line-height: 25px;
	color: #000000;
}
.seller{
  margin-top: 12%;
}
.seller img{
  width: 14px;
	height: 14px;
}
.right{
  margin-left: 12%;
    margin-top: 6.5%;
}
.sellername{
	font-family: SourceHanSansSC-Regular;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 14px;
	letter-spacing: 0px;
	color: #7e7e7e;
}
.pay{
  position:relative;
  top: -240px;
  width: 19%;
  left:60%;
  height: 67px;
  font-family: SourceHanSansSC-Bold;
	font-size: 16px;
	font-weight: bold;
	font-stretch: normal;
	line-height: 16px;
	letter-spacing: 0px;
	color: #444444;
}
.hengxian{
  width: 19%;
	height: 1px;
	background-color: #efefef;
   position:relative;
  top: -270px;
    left:60%;
}
.paytype{
   position:relative;
  width: 19%;
   top: -190px;
    left:60%;
}
.price{
     position:relative;
  width: 19%;
   top: -105px;
    left:68%;
}
.fuhao{
  width: 24px;
	height: 24px;
	font-family: SourceHanSansSC-Regular;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 24px;
	letter-spacing: 0px;
	color: #fc4f4f;
}
.relprice{
  width: 98px;
	height: 24px;
	font-family: SourceHanSansSC-Regular;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 24px;
	letter-spacing: 0px;
	color: #fc4f4f;
}
.upload1{
  width: 145px;
	height: 60px;
	background-color: #ff6465;
	border-radius: 62px;
  font-family: SourceHanSansSC-Regular;
	font-size: 20px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 20px;
	letter-spacing: 0px;
	color: #ffffff;
    border: none;
  cursor: pointer;
  margin-left: 71%;
}
</style>