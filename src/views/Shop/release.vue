<template>
    <div>
      <div class="header">
        <Head/>
      </div>
      <div class="content-box">
        <div class="head">
        编辑闲置信息
        </div>
        <div class="xian">
        </div>
        <div class="input">
          <input
            type="text"
            v-model="name"
            placeholder='请填写你的闲置简介，买家比较关心品牌、新旧程度、入手渠道...'
            onfocus="this.placeholder=''"
            onblur="this.placeholder='请填写你的闲置简介，买家比较关心品牌、新旧程度、入手渠道...'"
            />
        </div>
        <div class="upload">
          <el-upload
            class="avatar-uploader"
            action="https://localhost:9091/items/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <template>
        <el-radio-group v-model="radio" class="typeList">
           <span class="type">商品品类</span>
            <el-radio :label="3">服饰鞋包</el-radio>
            <el-radio :label="6">美妆护肤</el-radio>
            <el-radio :label="9">二手闲置</el-radio>
            <el-radio :label="12">日用家居</el-radio>
            <el-radio :label="15">零食饮品</el-radio>
        </el-radio-group>
        </template>
        <div class="price">
            <span style="font-size: 16px;">价格</span>
            <input
            class="inputprice"
            type="text"
            v-model="price"
            placeholder='请输入价格'
            onfocus="this.placeholder=''"
            onblur="this.placeholder='请输入价格'"
            />
        </div>
        <button class="release-button" @click="upload">发布闲置</button>
      </div>
    </div>
</template>

<script>
 import {UploadShop} from "@/api/api";
import Head from "../../components/Head.vue";
    export default {
    name: "Release",
    components: {
        Head,
     },
       data() {
      return {
        imageUrl: '',
           radio: 3,
           seller_id:"",
           name:"",
           kind:"",
           price:"",
           number:"",
           type:"",
      };
    },
    mounted(){
        this.seller_id = window.localStorage.getItem('userid');
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      upload(){
        if(this.radio === 3)
        this.type = '服饰鞋包'
         if(this.radio === 6)
        this.type ='美妆护肤'
         if(this.radio === 9)
        this.type = '二手闲置'
        if(this.radio === 12)
        this.type = '日用家居'
        if(this.radio === 15)
        this.type = '零食饮品'
        console.log(this.type)
        let dataRequest = {
          kind:this.type,
          name:this.name,
          price:this.price,
          number:1,
          seller_id:this.seller_id,
        }
        		UploadShop(dataRequest).then((res) => {
            console.log(res)
          });

      }
    }
}
</script>

<style lang="scss" scoped>
.body{
    width: 100%;
    height: 100%;
}
.header{
    width: 100%;
    height: 7%;
}
/*
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }*/
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  /*
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }*/
  .type{
       margin-right: 32px;
  }
  .typeList{
      margin-top: 3%;
  }
.content-box{
    width: 58%;
    height: 93%;
    margin-left: 21%;
    background-color: #ffffff;
    border: 1px solid #ffffff;
	box-shadow: 0px 1px 9px 0px 
		rgba(230, 230, 230, 0.6);
    >div{
        margin-left: 8%;
    }
}
.upload{
     width: 178px;
    height: 178px;
    display: block;
    margin-top: 4%;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.upload:hover{
     border-color: #409EFF;
}
.head{
    width: 156px;
	height: 26px;
	font-family: SourceHanSansSC-Regular;
	font-size: 26px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 26px;
    margin-top: 6%;
	color: #444444;
}
.xian{
       margin-top: 3%;
    width: 156px;
	height: 8px;
	background-color: #ff6465;
	border-radius: 2px;
}
input{
     margin-top: 3%;
     width: 90%;
	height: 250px;
	font-size: 16px;
	line-height: 28px;
    outline: none;
	color: #b0b0b0;
}
.inputprice{
    width: 134px;
	height: 36px;
	border-radius: 8px;
    margin-left: 32px;
	border: solid 1px #efefef;
}
.release-button{
    width: 145px;
	height: 60px;
	background-color: #ff6465;
	border-radius: 62px;
    margin-top: 72px;
    font-size: 20px;
    color: #ffffff;
    margin-left: 75.5%;
    cursor: pointer;
    border: none;
}
</style>