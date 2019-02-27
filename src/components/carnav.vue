<template>
    <header class="car-header-mui-bar mui-bar-nav header">
	<a class="mui-action-back mui-icon mui-pull-left" @click="goback" href="javascripe:;">
		<i id="out" >&lt;</i>
	</a>
	<h1 class="mui-title">爱猫商城</h1>
	<a class="mui-action-back mui-icon mui-pull-right" href="search.html">
		<i class="icon-aui icon-home"></i>
	</a>
</header>
</template>
<script>
export default {
	methods:{
		goback(){this.$router.go(-1)},

	}
}
</script>

<style>
#out{
	color:#000
}
header{
    display: block;
    height:44px
}
.car-header-mui-bar {
	position: fixed;
	z-index: 9;
	right: 0;
	left: 0;
	height: 44px;
	padding-right: 10px;
	padding-left: 10px;
	border-bottom: 0;
	background:#888580;
}
.car-header-mui-bar .mui-title {
	right: 40px;
	left: 40px;
	display: inline-block;
	overflow: hidden;
	width: auto;
	margin: 0;
	text-overflow: ellipsis
}
.mui-title {
	font-size: 17px;
	font-weight: 500;
	line-height: 44px;
	position: absolute;
	display: block;
	width: 100%;
	margin: 0 -10px;
	padding: 0;
	text-align: center;
	white-space: nowrap;
	color: #000
}

.mui-title a {
	color: inherit
}
.car-header-mui-bar .mui-backdrop {
	background: 0 0
}
.mui-bar-nav {
	top: 0;

}
.mui-bar-nav {
	top: 0;
	/* -webkit-box-shadow: 0 1px 6px #ccc; */
	/* box-shadow: 0 1px 6px #ccc; */
}

.mui-bar-nav~.mui-content .mui-anchor {
	display: block;
	visibility: hidden;
	height: 45px;
	margin-top: -45px
}

.mui-bar-nav.mui-bar .mui-icon {
	margin-right: -10px;
	margin-left: -10px;
	padding-right: 10px;
	padding-left: 10px
}
.car-header-mui-bar .mui-title .mui-icon {
	margin: 0;
	padding: 0
}
.car-header-mui-bar .mui-icon {
	font-size: 24px;
	position: relative;
	z-index: 20;
	padding-top: 10px;
	padding-bottom: 10px
}

.car-header-mui-bar .mui-title .mui-icon.mui-icon-caret {
	top: 4px;
	margin-left: -5px
}
.mui-pull-left {
	float: left
}

.mui-pull-right {
	float: right
}
</style>



