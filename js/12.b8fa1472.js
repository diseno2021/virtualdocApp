(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"0fad":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"text-bold text-primary titles",attrs:{align:"center"}},[t._v("\n    Configura tus plantillas\n  ")]),e("q-card",{staticClass:"my-card cards"},[e("q-card-section",[e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"text-bold text-secondary",staticStyle:{"font-size":"x-large"},attrs:{align:"center"}},[t._v("\n          Encabezado de documentos\n        ")]),e("Imagen",{attrs:{id:"examenes",numFoto:"fotoEncabezado",fotografia:t.fotoEncabezado}})],1)])],1),e("q-card",{staticClass:"my-card cards"},[e("q-card-section",[e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"text-bold text-secondary",staticStyle:{"font-size":"x-large"},attrs:{align:"center"}},[t._v("\n          Pie de pagina de documentos\n        ")]),e("Imagen",{attrs:{id:"examenes",numFoto:"fotoPieDePagina",fotografia:t.fotoPieDePagina}})],1)])],1),e("q-card",{staticClass:"my-card cards"},[e("q-card-section",[e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"text-bold text-secondary",staticStyle:{"font-size":"x-large"},attrs:{align:"center"}},[t._v("\n          Firma para documentos\n        ")]),e("Imagen",{attrs:{id:"examenes",numFoto:"fotoFirmaDigital",fotografia:t.fotoFirmaDigital}})],1)])],1)],1)},n=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"q-my-md"},[e("div",{staticClass:"q-my-md",attrs:{aling:"center"}},[t.foto?e("q-img",{staticClass:"q-my-md rounded-borders",attrs:{src:t.foto,contain:"",ratio:32/9}},[e("q-tooltip",{attrs:{"content-class":"bg-accent text-white","content-style":"font-size: 12px",anchor:"top left",self:"bottom left",offset:[0,0]}},[t._v("Si desea cambiar la imagen seleccione una nueva y de click en el\n          boton para subirla.")]),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"float-right",attrs:{dense:"",round:"",icon:"close",flat:""},on:{click:function(a){t.foto=""}}},[e("q-tooltip",{attrs:{"content-class":"bg-accent text-white","content-style":"font-size: 12px",anchor:"bottom left",self:"top left",offset:[0,8]}},[t._v("Borrar imagen")])],1)],1):t._e()],1)]),e("br"),e("div",{staticClass:"q-my-md",staticStyle:{"text-align":"center"}},[e("q-file",{staticClass:"q-mx-md col-md-11",attrs:{filled:"",counter:"",label:"Seleccione la imagen",accept:".jpg, image/*",type:"file"},scopedSlots:t._u([{key:"before",fn:function(){return[e("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0},{key:"after",fn:function(){return[e("q-btn",{attrs:{push:"",disable:null==t.imagen,color:"secondary","text-color":"white",round:"",icon:"cloud_upload"},on:{click:function(a){return t.cambiar_imagen()}}}),e("q-tooltip",{attrs:{"content-class":"bg-accent text-white","content-style":"font-size: 12px",anchor:"top left",self:"bottom left",offset:[0,8]}},[t._v("Cargar imagen")])]},proxy:!0}]),model:{value:t.imagen,callback:function(a){t.imagen=a},expression:"imagen"}},[e("q-tooltip",{attrs:{"content-class":"bg-accent text-white","content-style":"font-size: 12px",anchor:"top left",self:"bottom left",offset:[0,8]}},[t._v("Seleccione una imagen para el paciente")])],1)],1)])},s=[],c=e("fc1b"),l={props:{numFoto:String,fotografia:String},data(){return{foto:this.fotografia,imagen:null}},methods:{cambiar_imagen(){let t=this.numFoto,a={};a[t]=this.foto,c["b"].collection("medicos").doc(localStorage.getItem("id_doctor")).update(a).then((()=>{})).catch((function(t){}))}},watch:{imagen:{handler:function(t){var a=new FileReader;a.readAsDataURL(t);let e=this;a.onload=function(){e.foto=a.result}}},fotografia:function(t){this.foto=t}}},r=l,d=e("2877"),f=e("068f"),m=e("05c0"),g=e("9c40"),u=e("7d53"),p=e("0016"),b=e("7f67"),x=e("eebe"),v=e.n(x),h=Object(d["a"])(r,i,s,!1,null,null,null),y=h.exports;v()(h,"components",{QImg:f["a"],QTooltip:m["a"],QBtn:g["a"],QFile:u["a"],QIcon:p["a"]}),v()(h,"directives",{ClosePopup:b["a"]});var q={components:{Imagen:y},props:{id_doctor:String},data(){return{fotoEncabezado:null,fotoFirmaDigital:null,fotoPieDePagina:null}},async created(){let t=this;await c["b"].collection("medicos").doc(localStorage.getItem("id_doctor")).get().then((a=>{if(a.exists){let e=a.data();t.fotoEncabezado=e.fotoEncabezado,t.fotoFirmaDigital=e.fotoFirmaDigital,t.fotoPieDePagina=e.fotoPieDePagina}})).catch((t=>{}))},methods:{}},C=q,_=e("f09f"),w=e("a370"),S=Object(d["a"])(C,o,n,!1,null,null,null);a["default"]=S.exports;v()(S,"components",{QCard:_["a"],QCardSection:w["a"]})}}]);