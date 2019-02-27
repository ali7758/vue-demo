<template>
    <div class="detail">
        <aliswipe class="detail-my-swipe">
            <swipe-item class="alislide1">
                <img :src="detail.pic" alt="">
            </swipe-item>
           
        </aliswipe>
      
        <div class="aui-product-content">
        <div class="aui-real-price clearfix">
                    <span>
                        <i>￥</i>
                        {{detail.a_price}}

                    </span>
            <del>
                <span class="aui-font-num">￥{{detail.b_price}}</span>
            </del>
            <div class="aui-settle-choice">
                <span>促销价</span>
            </div>
        </div>
        <div class="aui-product-title">
            <h2>{{detail.tit}}
            </h2>
            <p>原封未拆，厂商授权！【服务】顺丰配送，7天无理由退货！
            </p>
        </div>
        <div class="aui-product-boutique clearfix">
            <img src="themes/img/icon/icon-usa.png" alt="">
            <span class="aui-product-tag-text">美国品牌</span>
            <img src="themes/img/icon/icon-sj.png" alt="">
            <span class="aui-product-tag-text">精选商家</span>
        </div>
        <div class="aui-product-coupon">
            <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
                <div class="aui-address-cell-bd">选择</div>
                <div class="aui-address-cell-ft">颜色分类</div>
            </a>
            <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" id="J_ShowActionSheet">
                <div class="aui-address-cell-bd">领券</div>
                <div class="aui-address-cell-ft">
                    <span>满159减10券</span>
                    <span>满299减30券</span>
                </div>
            </a>
            <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
                <div class="aui-address-cell-bd">配送</div>
                <div class="aui-address-cell-ft">
                    <input class="aui-Address-box-input" type="text" readonly="" id="J_Address" placeholder="所在地区" style="height:auto; padding-left:0; margin-bottom:0;">
                </div>
            </a>
            <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
                <div class="aui-address-cell-bd">运费</div>
                <div class="aui-address-cell-ft">免运费</div>
            </a>
            <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
                <div class="aui-address-cell-bd">说明</div>
                <div class="aui-address-cell-ft">假一赔十 7天无忧退货</div>
            </a>
        </div>
        <div class="aui-dri"></div>
        <div class="aui-product-evaluate">
            <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
                <div class="aui-address-cell-bd">
                    商品评价   <em>(3290)</em>
                </div>
                <div class="aui-address-cell-ft">
                    <span>好评 100%</span>
                </div>
            </a>
        </div>
        </div>
        <div class="jl"></div>
		<div class="detail-payment-bar">
			<div class="all-checkbox">
				数量:<input type="number" class="check detail-goods-check" id="AllCheck" value=1 >
			</div>
			<div class="shop-total">
				<strong>
					总额：<i class="total" id="AllTotal">0.00</i>
				</strong>
				<span>运费：5.00</span>
			</div>
			<a href="#" class="settlement">加入购物车</a>
		</div>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from 'axios'
export default {
    data(){
        return{
            detail:{}
        }
    },
    components:{
        aliswipe: Swipe,
        'swipe-item': SwipeItem
    },
    created(){
    let id = this.$route.params.id;
    let dataName = this.$route.query.dataname;
    axios({
        url:`/static/data/${dataName}.json`
    }).then(
        res=>{this.detail=res.data[id-1]
    })

  }
    
}
</script>

<style>
body{
  font-size:12px
}
.detail-my-swipe {
  height: 18rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
.detail-my-swipe img{height:18rem}
.detail{
    margin:44px 0  51px
}

.aui-real-price {
	padding: 15px 15px 0 15px;
}

.aui-real-price span {
	font-size: 20px;
	color: #d4244e;
	float: left;
	font-weight: 700;
}

.aui-real-price span i {
	font-size: 12px;
}

.aui-real-price .aui-settle-choice span {
	font-size: .7rem;
	float: left;
	display: block;
	margin-top: 3px;
	margin-left: 5px;
	padding: 0 4px;
	font-weight: 200;
}

.aui-real-price .aui-font-num {
	line-height: 24px;
	color: #999;
	font-size: 14px;
	text-decoration: line-through;
	font-weight: inherit;
	margin-left: 5px;
}
.aui-banner-content {
	overflow-x: hidden;
	width: 100%;
	position: relative;
}
.aui-product-content {
	padding-bottom: 50px;
	background: #fff;
}
.aui-product-title {
	padding: 1px 15px 10px 15px;
}

.aui-product-title h2 {
	font-size: 14px;
	font-weight: 800;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}

.aui-product-title p {
	font-size: 0.7rem;
	color: #888;
	padding-top: 4px;
}
.aui-product-evaluate .aui-address-cell-ft span {
	color: #d4244e;
}
.aui-product-coupon .aui-address-cell .aui-address-cell-ft span {
	color: #d4244e;
}

.aui-product-coupon .aui-address-cell-bd {
	width: 40px;
	-webkit-box-flex: inherit;
	-webkit-flex: inherit;
	flex: inherit;
	font-weight: 700;
}

.aui-product-coupon .aui-address-cell-ft {
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	flex: 1;
	text-align: left;
	color: #666;
}
.aui-address-cell {
	padding: 10px 15px;
	position: relative;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	color: inherit;
}

.aui-address-cell-bd {
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	flex: 1;
	font-size: 16px;
}

.aui-address-cell-ft {
	text-align: right;
	color: #222222;
	padding-right: 15px;
}

.aui-address-cell-ft .aui-address-text {
	width: 100%;
	height: 22px;
	line-height: 22px;
	color: #222;
	font-size: 12px;
	position: relative;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.aui-fl-arrow-clear .aui-address-cell-bd {
	font-size: 12px;
}
.aui-address-cell-hd {
	width: 28px;
	height: 28px;
	margin-right: 5px;
}

.aui-address-cell-hd img {
	width: 100%;
	height: 100%;
	display: block;
	border: none;
}

.aui-settle-choice a {
	padding: 10px 15px;
}

.aui-settle-choice a .aui-address-cell-bd p {
	color: #000;
	font-size: 0.7rem;
}
.aui-product-boutique {
    width: auto;
    height:1rem;
	/* padding: 10px 15px; */
	margin: 0 15px 10px 15px;
    background: #777;
    
}

.aui-product-boutique img {
	float: left;
	display: block;
	width: 16px;
	height: 16px;
	margin-right: 6px;
}
.aui-product-tag-text {
	float: left;
	margin-right: 10px;
	font-size: 12px;
	color:#000
}
.detail-payment-bar {
	clear: both;
	overflow: hidden;
	width: 100%;
	height: 49px;
	position: fixed;
	bottom: 0;
	/* border-top: 1px solid #e0e0e0; */
	background: #fff;
	-webkit-touch-callout: none;
	overflow-x: hidden;
	background-color: #ffffff;
	box-shadow: 0 0 10PX 0PX rgba(155,143,143,0.6);
	-webkit-box-shadow: 0 0 10PX 0PX rgba(155,143,143,0.6);
	-moz-box-shadow: 0 0 10PX 0PX rgba(155,143,143,0.6);
}
.detail-payment-bar .all-checkbox {
	float: left;
	line-height: 49px;
	/* padding-left: 40px; */
}
.detail-payment-bar .shop-total {
	float: left;
	-webkit-box-flex: 1.0;
	/* box-flex: 1.0; */
	margin: 9px 10px 9px 10px;
}
.detail-payment-bar .shop-total strong {
	display: block;
	font-size: 16px;
}
.detail-payment-bar .shop-total span {
	display: block;
	font-size: 12px;
}
.detail-payment-bar .settlement {
	display: inline-block;
	float: right;
	width: 140px;
	height: 49px;
	line-height: 49px;
	text-align: center;
	color: #fff;
	font-size: 16px;
	background: #ffaa00;
}
.detail-goods-check{
    height:49px;
    width:50px
}
</style>

