
    const setcookie=function (name,value,timer){
        var mydate=new Date();
        mydate.setDate(mydate.getDate()+timer)
        document.cookie=name+"="+value+";expires="+mydate
        
    }
    
    const removecookie=function(name){
        //			删除cookie
        setcookie(name,1,-1)
    }
    //			获取cookie
    const getcookie =function (name){
        var str=document.cookie.split("; ")
        var arrstr;
        var newarr;
        for(let i=0;i<str.length;i++){
            arrstr=str[i]
            newarr=arrstr.split("=")
            if(name==newarr[0]){
                return newarr[1]
            }
        }
        return null
    }
    
    // let loading = Vue=>Vue.component('loading',LoadingComponent)
    export default{
        getcookie:getcookie,
        setcookie,removecookie
    }