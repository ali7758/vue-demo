<template>
    <div class="mine-mui-content">
	<div class="memberbg">
		<div class="member">
			<img src="../assets/icon/body.jpg"/>
			<p>{{name}}</p>
		</div>
	</div>
	<ul class="menu">
		<li class="qianbao">
			<a href="">
				<i class="icon-aui-my icon-qb"></i>
				<p>钱包</p>
			</a>
		</li>
		<li class="kaquan">
			<a href="">
				<i class="icon-aui-my icon-kq"></i>
				<p>卡券</p>
			</a>
		</li>
		<li class="qian">
			<a href="">
				<i class="icon-aui-my icon-qi"></i>
				<p>签到</p>
			</a>
		</li>
	</ul>
	<div class="h10"></div>
	<ul class="mymember">
		<h2 class="b-line">
			<span class="fl">我的订单</span>
			<a href="" class="fr">全部订单
			</a>
		</h2>
		<li>
			<a href="">
				<i class="icon-aui-my icon-fk"></i>
				<p>待付款</p>
			</a>
		</li>
		<li>
			<a href="">
				<i class="icon-aui-my icon-fh"></i>
				<p>待发货</p>
			</a>
		</li>
		<li>
			<a href="">
				<i class="icon-aui-my icon-sh"></i>
				<p>待收货</p>
			</a>
		</li>
		<li>
			<a href="">
				<i class="icon-aui-my icon-pj"></i>
				<p>待评价</p>
			</a>
		</li>
		<li>
			<a href="">
				<i class="icon-aui-my icon-th"></i>
				<p>退货/售后</p>
			</a>
		</li>
	</ul>
	<div class="h10"></div>
	<ul class="list-menu">
		<li class="b-line">
			<a href="">
				<span class="fl">超级会员</span>
				<i class="fr icon-aui icon-row"></i>
			</a>
		</li>
		<li class="b-line">
			<a href="step.html">
				<span class="fl">设置</span>
				<i class="fr icon-aui icon-row"></i>
			</a>
		</li>
		<li class="b-line">
			<a href="">
				<span class="fl">地址管理</span>
				<i class="fr icon-aui icon-row"></i>
			</a>
		</li>
		<li class="b-line">
			<a href="">
				<span class="fl">实名认证</span>
				<i class="fr icon-aui icon-row"></i>
			</a>
		</li>
		<li class="b-line">
			<a href="step.html">
				<span class="fl">消息设置</span>
				<i class="fr icon-aui icon-row"></i>
			</a>
		</li>
		<li class="b-line">
			<a href="">
				<span class="fl">清除缓存</span>
				<i class="fr icon-aui icon-row"></i>
			</a>
		</li>
		<li class="b-line">
			<a href="">
				<span class="fl">关于我们</span>
				<i class="fr icon-aui icon-row"></i>
			</a>
		</li>
	</ul>
</div>
</template>
<script>
import {mapGetters} from 'vuex';
import store from '../store/store.js';
import types from'../cookie/cookie.js'
export default {
	data(){
		return{
			"name":""
		}
	},
	created(){
		this.name=types.getcookie("on")
	},
	beforeRouteEnter (to, from, next) {
		if(store.state.user.auth){
		next()
		}else{
		next('/login')
		}
	},
  computed:mapGetters([
    'userdata'
  ])
}
</script>

<style>
body {
    font-family: 'Helvetica Neue',Helvetica,sans-serif;
    font-size: 12px;
    color: #000;

}
.mine-mui-content{margin:0 0 50px;width:100%;height:100%;font-size:100%}
.memberbg {
	background: url(../assets/icon/my.png) no-repeat;
	background-size: 100%;
	height:11rem;
	text-align: center;
}

.member {
	padding-top: 1.5rem;
	margin: 0 auto;
	width: 90px;
}

.member img {
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	padding: 3px;
	border: 1px solid #fff;
}

.member p {
	text-align: center;
	color: #fff;
	font-size: 16px;
	text-shadow: #333 0 1px 0;
}
.menu {
	overflow: hidden;
	padding: .2rem 0;
}

.menu li {
	width: 33.33%;
	float: left;
	text-align: center;
}

.menu .qianbao i {
	color: #e84e34;
	font-size: 26px;
}

.menu .kaquan i {
	color: #00c800;
}

.menu .qian i {
	color: #ffb627;
	font-size: 28px;
}

.h10 {
	background: #f5f5f5;
	height:10px;
}

.mymember {
	overflow: hidden;
}

.mymember h2 {
	font-size: .28rem;
	line-height: 40px;
	overflow: hidden;
	padding: 0 15px;
	height: 40px;
	font-size: 12px;
}

.mymember h2 a {
	color: #ff0303;
}

.mymember h2 i {
	font-size: 16px;
}

.mymember li {
	width: 20%;
	float: left;
	text-align: center;
	padding: .2rem 0;
}

.mymember li a {
	color: #111;
}

.mymember li i {
	font-size: 28px;
}

.list-menu {
	padding:0 15px;
	overflow: hidden;
}

.list-menu li {
	overflow: hidden;
	border-bottom: 1px solid #efefef;
}

.list-menu li a {
	color: #111;
	overflow: hidden;
	font-size: 12px;
	width: 100%;
}

.list-menu li a i{
	margin-top:10px;
}
	
.fl{float:left;line-height:2.5rem}
.fr{float:right;line-height:2.5rem}
</style>

