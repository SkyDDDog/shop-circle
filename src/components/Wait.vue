<template>
       <div class="box">
            <div
              v-for="item in dataInfoList"
              :key="item.itemId"
              class="show"
            >
            <div @click="pushInfo(item.itemId)">
              <img class="photo cursor-point" :src="'https:' + item.itemPhoto" />
            </div>
            <div class="name"   @click="pushInfo(item.itemId)">{{item.itemName}}</div>
            <div class="seller d-flex">
              <div>商家</div>
              <div class="xian"></div>
              <div>{{item.sellerName}}</div>
            </div>
            <div class="time">{{item.date}}</div>
            <div class="price">
              <span class="fuhao">￥</span>
              <span class="price1">{{item.price}}</span>
            </div>
              <div class="status">{{item.status}}</div>
              <div class="d-flex message">
                <div class="cancle" @click="cancle(item.orderId)">取消订单</div>
                <div class="modify" @click="modify(item.orderId)">修改信息</div>
                <button class="confirm" @click="confirms(item.orderId)">确认收货</button>
              </div>
             
          </div>
        </div>
</template>

<script>
import { cancleShop } from "../api/api";
import { confirmShop } from "../api/api";
import { getMyBuy } from "../api/api";
    export default {
        data(){
            return{
                dataInfoList: [],
                      userid:"",
                sort:0,
                      pageNum:0,
                      pageSize:10,
            }
        },
        created(){
                console.log('1')
                this.userid = window.localStorage.getItem('userid')
                let dataRequest={
                    userId:this.userid,
                    sort:this.sort,
                    pageNum:this.pageNum,
                    pageSize:this.pageSize,
                }
                getMyBuy(dataRequest).then((res=>{
                    console.log(res,2)
                    this.dataInfoList = res.data;
                 }))

          },
          methods:{
              modify(){
                        this.$router.push(
                            {
                                name:'My',
                                }
                            )
                    },
                confirms(id){
                    let dataRequest = {
                    orderId:id
                    };
                    confirmShop(dataRequest).then((res=>{
                            console.log(res,1)
                            this.dataInfoList = res.data;
                        }))
                },
          cancle(id){
             let dataRequest = {
              orderId:id
            };
            cancleShop(dataRequest).then((res=>{
                    console.log(res,1)
                    this.dataInfoList = res.data;
                 }))
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
          }
        
    }
</script>

<style lang="scss" scoped>
.box{
  width: 890px;
  margin-top: 30px;
	box-shadow: 0px 0px 17px 0px 
		rgba(244, 244, 244, 0.5);
	border-radius: 30px!important;
  background-color: #ffffff;
}
.message{
  position: relative;
  top: -138px;
  left: 630px;
  >div{
    cursor: pointer;
  }
}
.cancle{
  color: #ff6465;
}
.modify{
  margin-left: 22px;
  color: #67c4f0;
}
.confirm{
  margin-left: 22px;
  width: 72px;
	height: 26px;
	background-color: #ff6465;
	border-radius: 31px;
	font-size: 14px;
	color: #ffffff;
  border:none;
}
.show{
  width: 890px;
	height: 96px;
	box-shadow: 0px -1px 0px 0px 
		#e6e6e6;
}
.confirm{
  position: relative;
  bottom: 5px;
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
  width: 400px;
  height: 24px;
  position: relative;
  top: -73px;
  left: 143px;
     white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
}
.time{
  position: relative;
 top: -120px!important;
  left: 750px!important;
  height: 24px;
}
.seller{
  position: relative;
  top: -97px;
  left: 620px;
  height: 24px;
}
.status{
  position: relative;
  top:-119px;
  left: 200px;
  font-size: 14px;
  margin-left: 13px;
  width: 66px;
	height: 26px;
	background-color: #ffecec;
	border-radius: 43px;
	border: solid 1px #f5caca;
  display: flex;
  align-items: center;
  color: #e27475;
  justify-content: center;
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
.time{
  	font-size: 14px;
	height: 21px;
    position: relative;
  top: -110px;
    left: 790px;
}
</style>