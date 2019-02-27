<template>
    <div class="wrap clearfix">
	<div class="SpecialTop">
	<a href="javascript:;"><i></i></a>会员登录  <router-link to="/reg"><a href="javascript:;" class="Tlogin">注册</a></router-link>
	</div>
	<div class="errorTips" id="login_info" style="display:none"></div>
	<form name="formLogin" action="" method="post" onSubmit="return userLogin()">
	<div class="login">
		<ul>
			<li><span>用户名</span> <input name="username" type="text" placeholder="用户名/手机/邮箱" v-model="user" ></li>
			<li><span>密　码</span> <input name="password" type="password" class="loginPassW password" placeholder="4-30位数字和字母" v-model="pass" /></li>
		</ul>
		<input style="cursor:pointer" class="loginBtn" type="button" name="my_login" title="马上登录" value="登 录" @click="login" />
		<input type="hidden" name="act" value="do_login" />
		<input type="hidden" name="back_act" value="user.php" />
		<div class="forPassW clearfix">
        	<label style="float:left;"><input type="checkbox" name="remember" value="1"> 下次自动登录</label>
            <a href="#" style="float:right;">忘记密码 ></a>
        </div>
	</div>
	</form>
    <div class="login-footer">
    	<p>粤ICP备09196652号-2</p>
    </div>
	</div>
</template>
<script>
import axios from 'axios'
import store from '../store/store'
import types from'../cookie/cookie.js'
export default {
	data(){
		return{
			'user':"",
			"pass":""
		}
	},
	methods:{
		login(){
			let user=this.user
			let pass=this.pass
			let str=JSON.parse(types.getcookie('user'))
			let str1=0
			for(let l=0;l<str.length;l++){
				if(JSON.parse(types.getcookie('user'))[l].user==user){
					if(JSON.parse(types.getcookie("user"))[l].pass==pass){
						axios({
							url:"/static/data/user.json"
						}).then(
							res=>{
							types.setcookie("on",user,7)
								this.$store.dispatch('VIEW_USER',res.data);
							this.$router.push('/mine')
						})
					}else{
						alert("用户名或者密码错误！")
					}

				}else{
					str1++
				}
				
				if(str1==str.length){
					alert("用户名不存在！")
				}
			}
		}
	}
}
</script>

<style>
@charset "utf-8";
body{font:12px/1.333 tahoma;color:#555;background:#f2f3f4;height:100%;position:relative}
body,div,p,ul,li,dl,dt,dd,h1,h2,h3,h4,h5,form{margin:0;padding:0}
.none{display:none}
a{text-decoration:none;outline:none;color:#333}
em{font-style:normal}
li{list-style:none}
i{font-style:normal}
img{border:none}
.clearfix:after{content:"";display:block;clear:both}
.clearfix{*zoom:1}
.wrap{margin:0 auto;height:auto;}
.SpecialTop{z-index:99;width:100%;height:46px;background-color:#fff;border-bottom:1px solid #555;line-height:46px;color:#d00000;text-align:center;font-size:16px;font-family:microsoft yahei;position:relative}
.Tlogin{position:absolute;right:8px;top:0;color:#d00000;}
.errorTips{background:#fef5cc;height:40px;border:none;color:#d17124;font-size:14px;text-align:center;line-height:40px}
.login ul{margin-top:10px}
.login li{
	width:300px;margin:0 auto 7px;height:40px;line-height:40px;background:#fff;border:1px solid #cacaca;
	-webkit-box-shadow:inset 0 5px 3px #eeeded; 
	-moz-box-shadow:inset 0 5px 3px #eeeded; 
	box-shadow:inset 0 5px 3px #eeeded;
}
.login li span{display:inline-block;vertical-align:middle;width:85px;height:40px;padding-left:5px;font-size:16px;}
.login li input{outline:none;height:30px;vertical-align:middle;background:none;line-height:30px;border:none;color:#aaa;font-size:16px;width:180px;background:none;}
.login li img{display:inline-block;vertical-align:middle;margin-top:2px}
.forPassW{ padding-bottom:15px;font-size:14px;margin:0 auto}
.forPassW a,.login .agr a{color:#4b90bc}
.login .agr{margin:5px;font-size:14px;line-height:25px;height:25px;text-align:center}
.login .yzm{width:75px;margin-right:5px}
.loginBtn{
    background:#fff;
    
	background-image:-webkit-gradient(linear, left top, left bottom, from(#d00000), to(#d00000));
	background-image: -webkit-linear-gradient(top, #d00000, #d00000);
	background-image: -moz-linear-gradient(top, #d00000, #d00000);
	background-image: -o-linear-gradient(top, #d00000, #d00000);
	border-radius:0;width:100%;border:1px solid #333;height:40px;line-height:40px;font-family:microsoft yahei;text-align:center;display:block;margin:20px auto 10px;font-size:18px;color:#d00000;}
.login-footer{text-align:center;font-size:21px;font-family:microsoft yahei;}
.login-footer p{padding-top:17px;color:#999;font-size:12px;}

</style>