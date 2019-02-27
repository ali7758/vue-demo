import * as types from './types';
// console.log([types.VIEW_HOME])
export default {
    [types.VIEW_NAV]:(state,payload)=>{state.bNav=payload},
    [types.VIEW_FOOT]:(state,payload)=>{state.bFoot=payload},
    [types.VIEW_CARF]:(state,payload)=>{state.carF=payload},
    [types.VIEW_USER]:(state,payload)=>{state.user=payload},
    [types.VIEW_LOADING]:(state,payload)=>{state.bLoading=payload},
    [types.VIEW_HOME]:(state,payload)=>{state.home=payload},

}