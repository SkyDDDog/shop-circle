<template>
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
            <div class="time">{{item.date}}</div>
            <div class="price d-flex">
              <span class="fuhao">￥</span>
              <span class="price1">{{item.price}}</span>
                <div class="isseller" v-if="item.isSelled === '未售出'">{{item.isSelled}}</div>
                <div class="isseller1" v-if="item.isSelled === '已出售'">{{item.isSelled}}</div>
            </div>
              <div class="d-flex message">
                <div class="cancle" @click="cancle(item.id)">下架商品</div>
                <div class="modify" @click="modify(item.id)">修改信息</div>
              </div>
             
          </div>
        </div>
</template>

<script>
  import { deleteShop } from "../api/api";
   import { getMySeller } from "../api/api";
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
                    sort:0,
                    pageNum:0,
                    pageSize:10,
                }
                getMySeller(dataRequest).then((res=>{
                    console.log(res,2)
                    this.dataInfoList = res.data;
                 }))
            },
            methods:{
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
                        modify(id) {
                            this.$router.push(
                            {
                                name:'Release',
                                params: {
                                shopID: id
                                }
                                }
                            )
                        },
        cancle(id){
        let dataRequest = {
              itemId:id
            };
            deleteShop(dataRequest).then((res=>{
                    console.log(res,1)
                    this.dataInfoList = res.data;
                 }))
                        }
            },
        
    }
</script>

<style lang="scss" scoped>
.cancle{
    width: 56px;
	height: 14px;
	color: #ff6465;
    position: relative;
    top: -65px;
    left: 681px;
    cursor: pointer;
}
.modify{
    width: 56px;
	height: 14px;
	color: #67c4f0;
    position: relative;
    top: -65px;
    left: 726px;
    cursor: pointer;
}
.show{
  width: 890px;
	height: 96px;
	box-shadow: 0px -1px 0px 0px 
		#e6e6e6;
}
.isseller{
    width: 66px;
	height: 26px;
	background-color: #ffecec;
	border-radius: 43px;
	border: solid 1px #f5caca;
    color: #e27475;
    font-size: 14px;
    display: flex;
    justify-content: center;
    line-height: 26px;
    margin-left: 20px;
}
.price{
    height: 26px;
    position: relative;
    top: -45px;
    font-size: 14px;
    left: 128px;
}
.fuhao{
    margin-top: 6px;
}
.price1{
     margin-top: 6px;
}
.name{
    position: relative;
     top: -72px;
    left: 138px;
}
.box{
  width: 890px;
  margin-top: 30px;
	box-shadow: 0px 0px 17px 0px 
		rgba(244, 244, 244, 0.5);
	border-radius: 30px!important;
  background-color: #ffffff;
}
.photo{
  width: 72px;
	height: 72px;
	border-radius: 25px;
  margin-top: 13px;
  margin-left: 38px;
   cursor: pointer;
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
</style>