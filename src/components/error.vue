<template>
<div class="error">
    <p>404</p>
    <p>404</p>
    <p>404</p>
    <p>404</p>
</div>
</template>
<script>
export default {
       mounted(){
        let url="/static/a.json"
        function get(url){
            var result = fetch(url);
            return result;
        }
        get(url).then(res=>{
            // console.log(res)
            return res.json()
        }).then(json=>{
            console.log(json)
        })

    }
}
</script>

