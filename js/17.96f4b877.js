(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{cfc8:function(o,a,t){"use strict";t.r(a);var s=function(){var o=this,a=o.$createElement,t=o._self._c||a;return t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"row"},[null!=o.usuario?t("div",{staticClass:"col-6 offset-1"},[t("p",[o._v(o._s(o.usuario.displayName))]),t("p",[o._v(o._s(o.usuario.email))]),t("p",[o._v(o._s(o.usuario.id))]),t("p",[t("q-btn",{attrs:{icon:"warning"},on:{click:o.mostrarMensaje}},[o._v("mostrar mensaje")]),t("q-btn",{attrs:{icon:"windows"},on:{click:o.mostrarDialog}},[o._v("Modal dialogo")])],1)]):o._e()])])},n=[],i=t("fc1b"),e={name:"unNombre",data(){return{usuario:null}},methods:{mostrarMensaje(){this.$q.notify("un mensaje corto"),this.$q.notify({message:"un mensaje",icon:"warning",color:"negative"})},mostrarPosicion(){navigator.geolocation.getCurrentPosition((o=>{var a=o.coords;this.$q.notify({message:"latitud: "+a.latitude+" longitud: "+a.longitude,icon:"map",color:"primary"})}))},mostrarDialog(){this.$q.dialog({title:"Dialogo Modal",message:"<h1>Titulo</h1><h4>Sub Titulo HTML</h4>",cancel:!0,persistent:!1,html:!0}).onOk((()=>{})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}},created(){i["a"].onAuthStateChanged((o=>{this.usuario=o}))}},r=e,l=t("2877"),u=t("9c40"),c=t("eebe"),m=t.n(c),d=Object(l["a"])(r,s,n,!1,null,null,null);a["default"]=d.exports;m()(d,"components",{QBtn:u["a"]})}}]);