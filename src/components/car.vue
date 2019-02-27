<template>
    <div class="car-mui-content">

		<div class="shopping">
			<div class="shop-group-item">
				<div class="shop-name ">
					<input type="checkbox" class="check checkbox shopCheck">
					<h4>
						<a href="#">锤子官方旗舰店</a>
					</h4>
					<div class="coupons"><span>领券</span><em>|</em><span>编辑</span></div>
				</div>
				<ul style="background:#f5f5f5">
					<li>
						<div class="shop-info">
							<input type="checkbox" class="check checkbox goodsCheck">
							<div class="shop-info-img">
								<a href="#">
									<img src="../assets/img/pd/pd1.jpg"/>
								</a>
							</div>
							<div class="shop-info-text">
								<h4>锤子 坚果Pro 64GB 细红线特别版 全网通 移动联通电信4G手机 双卡双待</h4>
								<div class="shop-brief">
									<span>重量:3.3kg</span>
									<span>颜色:标配版</span>
								</div>
								<div class="shop-price">
									<div class="shop-pices">
										￥<b class="price">1399.00</b>
									</div>
									<div class="shop-arithmetic">
										<a href="javascript:;" class="minus">-</a>
										<span class="num">1</span>
										<a href="javascript:;" class="plus">+</a>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>
					<div class="shop-info">
						<input type="checkbox" class="check checkbox goodsCheck">
						<div class="shop-info-img">
							<a href="#">
								<img src="../assets/img/pd/pd2.jpg"/>
							</a>
						</div>
						<div class="shop-info-text">
							<h4>好孩子（KAIMEIYUAN)面朝大海系列双肩包55062MINI号</h4>
							<div class="shop-brief">
								<span>重量:3.3kg</span>
								<span>颜色:标配版</span>
							</div>
							<div class="shop-price">
								<div class="shop-pices">
									￥<b class="price">100.00</b>
								</div>
								<div class="shop-arithmetic">
									<a href="javascript:;" class="minus">-</a>
									<span class="num">1</span>
									<a href="javascript:;" class="plus">+</a>
								</div>
							</div>
						</div>
					</div>
					</li>
					<li>
						<div class="shop-info">
							<input type="checkbox" class="check checkbox goodsCheck">
							<div class="shop-info-img">
								<a href="#">
									<img src="../assets/img/pd/pd2.jpg"/>
								</a>
							</div>
							<div class="shop-info-text">
								<h4>好孩子（KAIMEIYUAN)面朝大海系列双肩包55062MINI号</h4>
								<div class="shop-brief">
									<span>重量:3.3kg</span>
									<span>颜色:标配版</span>
								</div>
								<div class="shop-price">
									<div class="shop-pices">
										￥<b class="price">100.00</b>
									</div>
									<div class="shop-arithmetic">
										<a href="javascript:;" class="minus">-</a>
										<span class="num">1</span>
										<a href="javascript:;" class="plus">+</a>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<div class="shopPrice">
					本店总计：￥<span class="shop-total-amount ShopTotal">0.00</span>
				</div>
			</div><div class="h10"></div>
			<div class="shop-group-item">
				<div class="shop-name">
					<input type="checkbox" class="check checkbox shopCheck">
					<h4>
						<a href="#">锤子官方旗舰店</a>
					</h4>
					<div class="coupons"><span>领券</span><em>|</em><span>编辑</span></div>
				</div>
				<ul style="background:#f5f5f5">
					<li>
						<div class="shop-info">
							<input type="checkbox" class="check checkbox goodsCheck">
							<div class="shop-info-img">
								<a href="#">
									<img src="../assets/img/pd/pd1.jpg"/>
								</a>
							</div>
							<div class="shop-info-text">
								<h4>好孩子（KAIMEIYUAN)面朝大海系列双肩包55062MINI号</h4>
								<div class="shop-brief">
									<span>重量:3.3kg</span>
									<span>颜色:标配版</span>
								</div>
								<div class="shop-price">
									<div class="shop-pices">
										￥<b class="price">100.00</b>
									</div>
									<div class="shop-arithmetic">
										<a href="javascript:;" class="minus">-</a>
										<span class="num">1</span>
										<a href="javascript:;" class="plus">+</a>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="shop-info">
							<input type="checkbox" class="check checkbox goodsCheck">
							<div class="shop-info-img">
								<a href="#">
									<img src="../assets/img/pd/pd1.jpg"/>
								</a>
							</div>
							<div class="shop-info-text">
								<h4>好孩子（KAIMEIYUAN)面朝大海系列双肩包55062MINI号</h4>
								<div class="shop-brief">
									<span>重量:3.3kg</span>
									<span>颜色:标配版</span>
								</div>
								<div class="shop-price">
									<div class="shop-pices">
										￥<b class="price">100.00</b>
									</div>
									<div class="shop-arithmetic">
										<a href="javascript:;" class="minus">-</a>
										<span class="num">1</span>
										<a href="javascript:;" class="plus">+</a>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<div class="shopPrice">
					总额：￥<span class="shop-total-amount ShopTotal">0.00</span>
				</div>
			</div>
		</div>
		<div class="jl"></div>
		<div class="car-payment-bar">
			<div class="all-checkbox">
				<input type="checkbox" class="check goods-check" id="AllCheck">全选
			</div>
			<div class="shop-total">
				<strong>
					总额：<i class="total" id="AllTotal">0.00</i>
				</strong>
				<span>运费：5.00</span>
			</div>
			<a href="#" class="settlement">去结算</a>
		</div>
	</div>
	
</template>


<style>
.car-mui-content{margin:44px 0 51px}
.shopping {
	clear: both;
	overflow: hidden;
	height: auto;
	padding-bottom: 10px;
}
.shop-group-item {
	margin-bottom: 5px;
}
.shop-group-item ul li {
	border-bottom: 1px solid #fff;
	margin-bottom: 8px;
	background: #fff;
}
.shop-group-item ul li:last-child {
	border-bottom: none;
}
.shop-name {
	background: #fff;
	height: 45px;
	line-height: 45px;
	padding: 0 15px;
    position: relative;
    border-bottom:1px solid #000
}
.shop-name h4 {
	float: left;
    font-size: 14px;
    line-height:45px;
	/* background: url(../assets/img/pd/pd1.jpg) no-repeat left center; */
	background-size: 20px 20px;
	padding-left: 25px;
	/* margin-left: 10px; */
	font-weight: 300;
	/* margin-top: 17px; */
}
.shop-name .coupons {
	float: right;
}
.shop-name .coupons span {
	display: inline-block;
	padding: 0 5px;
	font-size: 12px;
}
.shop-name .coupons em {
	color: #e0e0e0;
	width:1px;
	height:22px;
}
.shop-info {
	height: 120px;
	padding: 0 15px;
	position: relative;
	/* background: #efefef; */
}
.shop-info .checkbox {
	/* background: url((../assets/img/pd/pd1.jpg) no-repeat left center; */
	background-size: 20px 20px;
	position: absolute;
	top: 50%;
	left: 15px;
	margin-top: -60px;
	width: 20px;
	height: 120px;
}
.shop-info .checkbox1 {
	/* background: url((../assets/img/pd/pd1.jpg) no-repeat left center; */
	background-size: 20px 20px;
	position: absolute;
	top: 50%;
	left: 15px;
	margin-top: -60px;
	width: 20px;
	height: 120px;
}
.shop-info .shop-info-img {
	position: absolute;
	top: 15px;
	left: 35px;
	width: 90px;
	height: 90px;
}
.shop-info .shop-info-img img {
	width: 100%;
	height: 100%;
}
.shop-info .shop-info-text {
	margin-left: 120px;
	padding: 15px 0;
}
.shop-info .shop-info-text h4 {
	font-size: 14px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	line-height: 20px;
	margin-bottom: 0;
}
.shop-info .shop-info-text .shop-brief {
	height: 25px;
	line-height: 25px;
	font-size: 12px;
	color: #81838e;
	white-space: nowrap;
}
.shop-info .shop-info-text .shop-brief span {
	display: inline-block;
	margin-right: 8px;
}
.shop-info .shop-info-text .shop-price {
	height: 25px;
	line-height: 24px;
	position: relative;
}
.shop-info .shop-info-text .shop-price .shop-pices {
	color: #ffaa00;
	font-size: 16px;
}
.shop-info .shop-info-text .shop-arithmetic {
	position: absolute;
	right: 0px;
	top: 0;
	width: 78px;
	box-sizing: border-box;
	white-space: nowrap;
	height: 100%;
	border: 1px solid #e0e0e0;
}

.shop-info .shop-info-text .shop-arithmetic a {
	display: inline-block;
	width: 23px;
	height: 22px;
	line-height: 22px;
	text-align: center;
	background: #fff;
	font-size: 16px;
}
.shop-info .shop-info-text .shop-arithmetic .minus {
	border-right: 1px solid #e0e0e0;
}
.shop-info .shop-info-text .shop-arithmetic .failed {
	color: #d1d1d1;
}
.shop-info .shop-info-text .shop-arithmetic .plus {
	border-left: 1px solid #e0e0e0;
}
.shop-info .shop-info-text .shop-arithmetic .num {
	width: 32px;
	text-align: center;
	border: none;
	display: inline-block;
	height: 100%;
	box-sizing: border-box;
	vertical-align: top;
	font-size: 12px;
	margin: 0 -6px;
}
.shopPrice {
	background: #fff;
	height: 35px;
	line-height: 35px;
	padding: 0 15px;
    text-align: right;
    border-top:1px solid #000
}
.shopPrice span {
	color: #ffaa00;
	font-weight: bold;
}
.car-payment-bar {
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
.car-payment-bar .all-checkbox {
	float: left;
	line-height: 49px;
	padding-left: 40px;
}
.car-payment-bar .shop-total {
	float: left;
	-webkit-box-flex: 1.0;
	/* box-flex: 1.0; */
	margin: 9px 20px 9px 35px;
}
.car-payment-bar .shop-total strong {
	display: block;
	font-size: 16px;
}
.car-payment-bar .shop-total span {
	display: block;
	font-size: 12px;
}
.car-payment-bar .settlement {
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
</style>

