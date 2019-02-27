import {VIEW_NAV,VIEW_FOOT,VIEW_CARF,VIEW_HOME,VIEW_USER,VIEW_LOADING} from './types';
import axios from 'axios';
// console.log([VIEW_NAV])
export default {
    [VIEW_NAV]:({commit,state},payload)=>{commit(VIEW_NAV,payload)}, 
    [VIEW_FOOT]:({commit,state},payload)=>{commit(VIEW_FOOT,payload)}, 
    [VIEW_CARF]:({commit,state},payload)=>{commit(VIEW_CARF,payload)}, 
    [VIEW_USER]:({commit,state},payload)=>{commit(VIEW_USER,payload)}, 
    [VIEW_LOADING]:({commit,state},payload)=>{commit(VIEW_LOADING,payload)}, 
    [VIEW_HOME]:({commit,state})=>{
        axios({
            url:"/static/data/home.json"
        }).then(function(res){
            commit(VIEW_HOME,res.data)
        })
    }, 
}