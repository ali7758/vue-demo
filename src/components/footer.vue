<template>
<div class="footer">
    <div class="jl"></div>
    <nav class="footer-mui-bar mui-bar-tab">
        <router-link tag="li" active-class="mui-active" to="/home" class="mui-tab-item">
        <a  href=javascript:;>
                    <span class="mui-icon ">
                        <i class="icon-aui icon-home"></i>
                    </span>
            <span class="mui-tab-label">首页</span>
        </a>
        </router-link>
        <router-link tag="li" active-class="mui-active" to="/list" class="mui-tab-item">
        <a  href=javascript:;>
                    <span class="mui-icon">
                        <i class="icon-aui icon-class"></i>
                    </span>
            <span class="mui-tab-label">分类</span>
        </a>
        </router-link>
        <router-link tag="li" active-class="mui-active" to="/find" class="mui-tab-item">
        <a  href=javascript:;>
                    <span class="mui-icon">
                        <i class="icon-aui icon-find"></i>
                    </span>
            <span class="mui-tab-label">发现</span>
        </a>
        </router-link>
        <router-link tag="li" active-class="mui-active" to="/car" class="mui-tab-item">
        <a href=javascript:;>
                    <span class="mui-icon">
                        <i class="icon-aui icon-car"></i>
                    </span>
            <span class="mui-tab-label">购物车</span>
        </a>
        </router-link>
        <router-link tag="li" to="/mine" class="mui-tab-item">
        <a href=javascript:;>
                    <span class="mui-icon">
                        <i class="icon-aui icon-my"></i>
                    </span>
            <span class="mui-tab-label">我的</span>
        </a>
        </router-link>

    </nav>
</div>
</template>
<style>
.footer-mui-bar router-link {float:left}
.mui-bar-tab .mui-tab-item {
	display: table-cell;
	overflow: hidden;
	width: 1%;
	height: 50px;
	text-align: center;
	vertical-align: middle;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #2c2c2c;
}

.mui-bar-tab .mui-tab-item .mui-active {
	color: #ffaa00
}
.mui-bar-tab .mui-tab-item .mui-icon {
	top: 3px;
	width: 24px;
	height: 24px;
	padding-top: 0;
	padding-bottom: 0
}
.mui-bar-tab .mui-tab-item .mui-icon~.mui-tab-label {
	font-size: 11px;
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight:200;
	/* color: #2c2c2c; */
}
.mui-bar-tab .mui-tab-item .mui-icon:active {
	background: 0 0
}
.footer-mui-bar {
	position: fixed;
	z-index: 10;
	right: 0;
	left: 0;
	height: 50px;
	padding-right: 10px;
	padding-left: 10px;
	border-bottom: 0;
    background:#fff;
    bottom:0;

}
.jl{
    height:1px;background:#000;bottom:50px;position:fixed;width:100%;z-index:999;opacity:.3
}
.footer{
	overflow: hidden;

}
</style>

