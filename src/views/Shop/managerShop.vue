<template>
    <div>
     <Head/>
          <div class="return d-flex">
          <img @click="handleReturn" src="../../assets/icon_arrow_left_red.png" alt="">
          <div class="return-message">返回上一级</div>
          </div>
         <div class="details d-flex">
            <div class="photo">
            <div> <img class="picture" :src="'https:' + dataInfo[0].photo"/></div>
                </div>
            <div class="intro">
                <div class="seller d-flex">
                <div> <img class="head" :src="dataInfo[0].sellerHead"/></div>
                <div class="sellername">
                    {{dataInfo[0].sellerName}}
                </div>
                <div>
                    <img class="communicate" src="../../assets/icon_communicate.png" alt="">
                </div>
                </div>
                <div class="price d-flex">
                    <div class="fuhao">￥</div>
                    <div class="price1">{{dataInfo[0].price}}</div>
                    <div class="time">
                    发布于{{dataInfo[0].sdf}}
                    </div>
                </div>
                <div class="introduce">
                {{dataInfo[0].name}}
                </div>
                <button class="nopass"  @click="handleShop1(dataInfo[0].id)">审核不合格</button>
                <button class="pass"  @click="handleShop2(dataInfo[0].id)">审核合格</button>
            </div>
            </div>
    </div>
</template>

<script>
import Head from "../../components/Head.vue";
import { examShop } from "../../api/api";
import { getInfo } from "../../api/api";
    export default {
        name: "ManagerShop",
          components: {
          Head,
        },
         data() {
            return {
            dataInfo: [],
            shopID: "",
            };
        },
          mounted() {
            const id = this.$route.params.shopID;
            if (id) {
            window.localStorage.setItem("shopID", id);
            }
            let shopID = window.localStorage.getItem("shopID");
            if (shopID !== "undefined") {
            this.shopID = shopID;
            console.log(this.shopID);
            }
            this.getShopInfo()
        },
        methods: {
            getShopInfo() {
            let shopId = this.shopID;
            getInfo(shopId).then((res) => {
                console.log(res)
                this.dataInfo = res.data;
            });
            },
            handleReturn(){
               this.$router.push({
                path: "/manager"
              })
            },
            handleShop1(id){
              let dataRequest = {
                id:id,
                pass:0,
              };
              examShop(dataRequest).then((res) => {
                    console.log(res)
                    this.$router.push({
                      path: "/manager"
                    })
                });
            },
              handleShop2(id){
              let dataRequest = {
                id:id,
                pass:1,
              };
              examShop(dataRequest).then((res) => {
                    console.log(res)
                    this.$router.push({
                      path: "/manager"
                    })
                });
            },

        },
  
    }
</script>

<style lang="scss" scoped>
.details{
  width: 100%;
  height: 100%;
}
.return{
  margin-left: 13px;
  padding-top: 18px;
}
.return-message{
  width: 100px;
	height: 30px;
	font-size: 20px;
	line-height: 320%;
	color: #ff6465;
}
.photo{
  width: 383.19px;
  height: 383.19px;
  margin-left: 24%;
  margin-top: 6%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center; 
}
.head{
  width: 25.6px;
  height: 25.6px;
  border-radius: 50%;
  margin-top: 12.8px;
  margin-right: 12.8px;
   margin-left: 12.8px;
}
.sellername{
  margin-top: 14.8px;
}
.communicate{
  margin-left: 188px;
  margin-top: 5px;
}
.picture{
   width: 383.19px;
  height: 383.19px;
}
.intro{
    width: 25%;
    height: 383.19px;
    margin-left: 3%;
    margin-top: 6%;
}
.seller{
  width: 403.2px;
	height: 51.2px;
	background-color: #fff6f6;
	border-radius: 24px;
}
.fuhao{
  width: 32px;
	height: 48px;
	font-size: 32px;
	line-height: 37.6px;
	color: #fc7c4f;
  margin-top: 3%;
}
.price1{
  width: 64px;
	height: 38.4px;
	font-size: 38.4px;
	line-height: 38.4px;
	color: #fc7c4f;
  margin-top: 3%;
}
.introduce{
  width: 403.2px;
	height: 156.8px;
	font-size: 18px;
	line-height: 27px;
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center; 
}
.nopass{
  position: relative;
  top: 34px;
  left: -181px;
  width: 128px;
  height: 57.6px;
  background: #FFE7E8;
  border: 1px solid #F5CACA;
  border-radius: 30px;
  margin-top: 5%;
  margin-left: 277px;
  font-size: 19.2px;
}
.pass{
  position: relative;
  top: -40px;
  left: 12px;
	width: 128px;
	height:57.6px;
  background: #E1F5EF;
  border-radius: 30px;
	border: solid 1px #c4e4d7;
  margin-top: 5%;
  margin-left: 277px;
  font-size: 19.2px;
}
.time{
 display: flex;
 justify-content: center;
 align-items: center;
 margin-left: 181px;
 	font-size: 15px;
}
</style>