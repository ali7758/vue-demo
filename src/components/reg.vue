<template>
<div class="wrap clearfix">
	<div class="SpecialTop">
		<a href="demo.html"><i></i></a>手机注册  <router-link to="/login"><a href="login.html" class="Tlogin">登录</a></router-link>
	</div>
	<div class="login">
	  <form action="" method="post" name="formUser" onSubmit="return register();">
		<div class="errorTips" id="register_info" style="display:none"></div>
		<ul>
			<li><span>手机号码</span> <input name="mobile_phone" type="text" value="11位有效手机号"  onblur="if(this.value==''){this.value='11位有效手机号';}" onFocus="if(this.value=='11位有效手机号'){this.value='';}"></li>
			<li><span>账号名称</span> <input name="username" type="text" v-model="user" value="3-16位数字和字母" onBlur="if(this.value==''){this.value='3-16位数字和字母';}" onFocus="if(this.value=='3-16位数字和字母'){this.value='';}"></li>
			<li><span>密　　码</span> <input name="password" type="password" v-model="pass"></li>
			<li><span>确认密码</span> <input name="confirm_password" type="password" ></li>
		</ul>
		<div class="agr"><label><input type="checkbox" checked="checked"> 我已阅读并同意遵守<a href="###">《非盈利协议》</a></label></div>
		<input class="loginBtn" name="Submit" type="button" value="注 册" @click="reg">
		<input name="act" type="hidden" value="do_register" >
		</form>
	</div>
	<div class="login-footer">
    	<p>粤ICP备09196652号-2</p>
    </div>
</div>
</template>
<script>
// import {getcookie,setcookie} from '../cookie/cookie.js'
import types from '../cookie/cookie.js'
export default {
	data(){
		return{
			'user':"",
			'pass':""
		}
	},
	methods:{
		reg(){
			let user=this.user;
			let pass=this.pass;

			let str=JSON.parse(types.getcookie("user"))
			let str2=0
			console.log(str)
			if(str==null){
				let str1=[]
				str1.push({user,pass})
				str1=JSON.stringify(str1)
				types.setcookie("user",str1,7)
			}else{
				for(let i=0;i<str.length;i++){
					if(str[i].user==user){
						alert("用户名重复！")
					}else{
						str2++
					}
				}
				console.log(str)
				console.log(str2)
				if(str2==str.length){
					str.push({user,pass})
					str=JSON.stringify(str)
					types.setcookie("user",str,7)
				}
			}
			this.$router.push('/login')

		}
	}
}
</script>

<style>
@charset "utf-8";
body{font:12px/1.333 tahoma;color:#555;background:#f2f3f4;height:100%;position:relative}
wrap clearfix{margin:0 0 51px 0}
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

