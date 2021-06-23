(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"0453":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("q-inner-loading",{attrs:{showing:a.cargando}},[e("q-spinner-cube",{attrs:{size:"3rem",color:"primary"}}),e("span",{staticClass:" text-primary\n      text-uppercase\n      text-overline\n      text-weight-bold"},[a._v("Cargando informacion del paciente")])],1),0==a.cargando&&null==a.paciente?e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-12 text-h5 q-my-xl text-center"},[a._v("\n      No existe el paciente con id: "+a._s(a.$router.currentRoute.params.id)+"\n    ")]),e("div",{staticClass:"col-auto"},[e("q-btn",{attrs:{icon:"people",color:"secondary",to:"/"}},[a._v("Ver Pacientes")])],1)]):0==a.cargando&&"No pertece al medico"==a.paciente?e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-12 text-h5 q-my-xl text-center"},[a._v("\n      El paciente con id: "+a._s(a.$router.currentRoute.params.id)+" , no pertece a su lista de pacientes\n    ")]),e("div",{staticClass:"col-auto"},[e("q-btn",{attrs:{icon:"people",color:"secondary",to:"/"}},[a._v("Ver Pacientes")])],1)]):0==a.cargando?e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[null!==a.paciente?e("InformacionPersonal",{ref:"refInformacionPersonal",attrs:{id:"informacion-personal",paciente:a.paciente},on:{guardarInformacion:a.guardarInformacion}}):a._e()],1)]),e("q-separator"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6"},[null!==a.paciente?e("Antecedentes",{ref:"refAntecedentes",attrs:{id:"antecedentes",paciente:a.paciente}}):a._e()],1),e("div",{staticClass:"col-12 col-md-6"},[null!==a.paciente?e("Alergias",{ref:"refAlergias",attrs:{id:"alergias",paciente:a.paciente}}):a._e()],1)]),e("q-separator"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6"},[null!==a.paciente?e("MedicamentosPermanentes",{ref:"refMedicamentosPermanentes",attrs:{id:"medicamentos-permanentes",paciente:a.paciente}}):a._e()],1),e("div",{staticClass:"col-12 col-md-6"},[null!==a.paciente?e("EnfermedadesCronicas",{ref:"refEnfermedadesCronicas",attrs:{id:"enfermedades-cronicas",paciente:a.paciente}}):a._e()],1)]),e("q-separator"),e("Consultas",{attrs:{id:"consultas",consultas:a.consultasPaciente}}),e("q-separator"),e("Recetas",{attrs:{id:"recetas",consultas:a.consultasPaciente}}),e("q-separator"),e("Examenes",{attrs:{id:"examenes",idPaciente:this.$router.currentRoute.params.id}}),e("q-separator"),e("div",{staticClass:"row  justify-end q-mt-md"},[e("div",{staticClass:"col-12 col-sm-6 col-lg-4"},[e("q-btn",{staticClass:"q-mx-sm",attrs:{outline:"",color:"primary",icon:"home",label:"Inicio",to:"/"}}),e("q-btn",{staticClass:"q-mx-sm",attrs:{outline:"",color:"secondary",icon:"save",label:"Guardar"},on:{click:a.guardarInformacion}})],1)])],1):a._e()],1)},i=[],n=(e("a79d"),e("e6cf"),e("26e9"),function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"q-ma-md"},[e("div",{staticClass:"row items-center"},[a._m(0),e("div",{staticClass:"col-12 col-sm-5 justify-between"},[e("q-btn",{staticClass:"q-mx-sm",attrs:{outline:"",color:"primary",icon:"home",label:"Inicio",to:"/"}}),e("q-btn",{staticClass:"q-mx-sm",attrs:{outline:"",color:"secondary",icon:"save",label:"Guardar"},on:{click:a.guardarInformacion}})],1)]),e("div",{staticClass:"row q-mt-md"},[e("div",{staticClass:"col-12 q-mt-md q-px-md"},[e("q-input",{attrs:{label:"Nombre completo"},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"person"}})]},proxy:!0}]),model:{value:a.paciente.nombre,callback:function(t){a.$set(a.paciente,"nombre",t)},expression:"paciente.nombre"}})],1)]),e("div",{staticClass:"row justify-between q-mt-md"},[e("div",{staticClass:"col-12  col-sm-6 q-px-md "},[e("q-input",{scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[e("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-date",{attrs:{mask:"DD/MM/YYYY",locale:a.myLocale},model:{value:a.paciente.fechaNacimiento,callback:function(t){a.$set(a.paciente,"fechaNacimiento",t)},expression:"paciente.fechaNacimiento"}},[e("div",{staticClass:"row items-center justify-end"},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cerrar",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:a.paciente.fechaNacimiento,callback:function(t){a.$set(a.paciente,"fechaNacimiento",t)},expression:"paciente.fechaNacimiento"}})],1),e("div",{staticClass:"col-12 col-sm-6 q-px-md "},[e("q-input",{attrs:{label:"Edad"},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"cake"}})]},proxy:!0}]),model:{value:a.edad,callback:function(t){a.edad=t},expression:"edad"}})],1)]),e("div",{staticClass:"row justify-between q-mt-md"},[e("div",{staticClass:"col-12 col-sm-6 q-px-md"},[e("div",{staticClass:"row justify-between"},[e("div",{staticClass:"col-6 col-sm-5"},[e("q-radio",{attrs:{val:"Masculino",label:"Masculino"},model:{value:a.paciente.genero,callback:function(t){a.$set(a.paciente,"genero",t)},expression:"paciente.genero"}})],1),e("div",{staticClass:"col-6 col-sm-5 q-px-md "},[e("q-radio",{attrs:{val:"Femenino",label:"Femenino"},model:{value:a.paciente.genero,callback:function(t){a.$set(a.paciente,"genero",t)},expression:"paciente.genero"}})],1)])]),e("div",{staticClass:"col-12 col-sm-6 q-px-md"},[e("q-input",{attrs:{label:"Tipo de sangre"},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"bloodtype"}})]},proxy:!0}]),model:{value:a.paciente.tipoSangre,callback:function(t){a.$set(a.paciente,"tipoSangre",t)},expression:"paciente.tipoSangre"}})],1)]),e("div",{staticClass:"row justify-between q-mt-md"},[e("div",{staticClass:"col-12 col-md-6 "},[e("div",{staticClass:"row q-mb-md  justify-between q-px-md"},[e("div",{staticClass:"col-8"},[e("q-input",{attrs:{label:"Nuevo Peso (libras)",type:"number"},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"monitor_weight"}})]},proxy:!0},{key:"after",fn:function(){return[e("q-btn",{staticClass:"q-mt-md",attrs:{disable:null==a.nuevoPeso||""==a.nuevoPeso,flat:"",label:"Agregar",color:"primary"},on:{click:a.agregarPeso}})]},proxy:!0}]),model:{value:a.nuevoPeso,callback:function(t){a.nuevoPeso=t},expression:"nuevoPeso"}})],1),e("div",{staticClass:"col-4"},[e("q-btn",{staticClass:"q-mt-md",attrs:{color:"primary",label:"Pesos",flat:"",icon:"expand_more"}},[e("q-menu",{attrs:{"max-height":"200px"}},a._l(a.paciente.peso,(function(t){return e("q-item",{key:t,staticStyle:{"min-width":"100px"}},[e("q-item-section",[a._v("\n                  "+a._s(t)+" lbs\n                ")])],1)})),1)],1)],1)]),e("div",{staticClass:"q-px-md"},[a.datosGraficaPeso?e("Grafica",{attrs:{datosGrafica:a.datosGraficaPeso,numerosGrafica:a.numerosGraficaPeso,label:"Peso"}}):a._e()],1)]),e("div",{staticClass:"col-12 col-md-6 "},[e("div",{staticClass:"row q-mb-md  justify-between q-px-md"},[e("div",{staticClass:"col-8"},[e("q-input",{attrs:{label:"Nueva estatura (cms)",type:"number"},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"accessibility"}})]},proxy:!0},{key:"after",fn:function(){return[e("q-btn",{staticClass:"q-mt-md",attrs:{disable:null==a.nuevaEstatura||""==a.nuevaEstatura,flat:"",label:"Agregar",color:"primary"},on:{click:a.agregarEstatura}})]},proxy:!0}]),model:{value:a.nuevaEstatura,callback:function(t){a.nuevaEstatura=t},expression:"nuevaEstatura"}})],1),e("div",{staticClass:"col-4"},[e("q-btn",{staticClass:"q-mt-md",attrs:{color:"primary",label:"Estaturas",flat:"",icon:"expand_more"}},[e("q-menu",{attrs:{"max-height":"200px"}},a._l(a.paciente.estatura,(function(t){return e("q-item",{key:t,staticStyle:{"min-width":"100px"}},[e("q-item-section",[a._v("\n                  "+a._s(t)+" cms\n                ")])],1)})),1)],1)],1)]),e("div",{staticClass:"q-px-md"},[a.datosGraficaEstatura?e("Grafica",{attrs:{datosGrafica:a.datosGraficaEstatura,numerosGrafica:a.numerosGraficaEstatura,label:"Estatura"}}):a._e()],1)])]),e("div",{staticClass:"col-md-12 q-mt-md q-px-md"},[e("q-input",{attrs:{label:"Dirección"},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"directions"}})]},proxy:!0}]),model:{value:a.paciente.direccion,callback:function(t){a.$set(a.paciente,"direccion",t)},expression:"paciente.direccion"}})],1),e("div",{staticClass:"row justify-between"},[e("div",{staticClass:"col-12 col-sm-6 q-mt-md q-px-md"},[e("q-input",{attrs:{label:"Teléfono",mask:"#### - ####"},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"phone"}})]},proxy:!0}]),model:{value:a.paciente.telefono,callback:function(t){a.$set(a.paciente,"telefono",t)},expression:"paciente.telefono"}})],1),e("div",{staticClass:"col-12 col-sm-6 q-mt-md q-px-md"},[e("q-input",{attrs:{label:"Whatsapp",mask:"#### - ####"},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"smartphone"}})]},proxy:!0}]),model:{value:a.paciente.whatsapp,callback:function(t){a.$set(a.paciente,"whatsapp",t)},expression:"paciente.whatsapp"}})],1)]),e("div",{staticClass:"row justify-between"},[e("div",{staticClass:"col-12 col-md-6 q-mt-md q-px-md"},[e("q-input",{attrs:{label:"Email"},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:a.paciente.email,callback:function(t){a.$set(a.paciente,"email",t)},expression:"paciente.email"}})],1),e("div",{staticClass:"col-12 col-md-6 q-mt-md q-px-md"},[e("q-input",{attrs:{label:"DUI",mask:"########-#"},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"credit_card"}})]},proxy:!0}]),model:{value:a.paciente.dui,callback:function(t){a.$set(a.paciente,"dui",t)},expression:"paciente.dui"}})],1)]),e("div",{staticClass:"col-md-12 q-my-md q-px-md"},[e("q-input",{attrs:{label:"Caso de emergencia"},scopedSlots:a._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"warning"}})]},proxy:!0}]),model:{value:a.paciente.enCasoEmergencia,callback:function(t){a.$set(a.paciente,"enCasoEmergencia",t)},expression:"paciente.enCasoEmergencia"}})],1)])}),o=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"col-12 col-sm-7 justify-between"},[e("h4",{staticClass:"text-h4"},[a._v("Información Personal")])])}],c=e("bd4c"),r=e("0603"),l=e("c4af"),d={data(){return{nuevoPeso:null,nuevaEstatura:null,datosGraficaEstatura:null,numerosGraficaEstatura:[],datosGraficaPeso:null,numerosGraficaPeso:[],myLocale:{days:"Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),daysShort:"Dom_Lun_Mar_Mié_Jue_Vie_Sáb".split("_"),months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),monthsShort:"Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split("_"),firstDayOfWeek:1}}},props:["paciente"],components:{BannerPrincipal:r["a"],Grafica:l["a"]},computed:{fechaNacimiento(){return c["b"].formatDate(this.paciente.fechaNacimiento,"YYYY-MM-DD")},edad(){var a=new Date,t=new Date(this.paciente.fechaNacimiento),e=a.getFullYear()-t.getFullYear(),s=a.getMonth()-t.getMonth();return(s<0||0===s&&a.getDate()<t.getDate())&&e--,e}},methods:{guardarInformacion(){this.$emit("guardarInformacion")},cargarDatosGrafica(){this.datosGraficaEstatura=null,this.numerosGraficaEstatura=[],this.datosGraficaPeso=null,this.numerosGraficaPeso=[],this.datosGraficaEstatura=this.paciente.estatura.length>5?this.paciente.estatura.slice(-5):this.paciente.estatura,this.datosGraficaPeso=this.paciente.peso.length>5?this.paciente.peso.slice(-5):this.paciente.peso;for(let a=1;a<=this.datosGraficaEstatura.length;a++)this.numerosGraficaEstatura.push(a);for(let a=1;a<=this.datosGraficaPeso.length;a++)this.numerosGraficaPeso.push(a)},agregarPeso(){null!==this.nuevoPeso&&""!==this.nuevoPeso&&(this.paciente.peso.push(parseFloat(this.nuevoPeso)),this.nuevoPeso=null,this.cargarDatosGrafica())},agregarEstatura(){null!==this.nuevaEstatura&&""!==this.nuevaEstatura&&(this.paciente.estatura.push(parseFloat(this.nuevaEstatura)),this.nuevaEstatura=null,this.cargarDatosGrafica())}},mounted(){this.cargarDatosGrafica()}},p=d,m=e("2877"),u=e("9c40"),f=e("27f9"),h=e("0016"),v=e("7cbe"),b=e("52ee"),C=e("3786"),x=e("4e73"),g=e("66e5"),q=e("4074"),_=e("7f67"),y=e("eebe"),P=e.n(y),w=Object(m["a"])(p,n,o,!1,null,"5053e2c9",null),E=w.exports;P()(w,"components",{QBtn:u["a"],QInput:f["a"],QIcon:h["a"],QPopupProxy:v["a"],QDate:b["a"],QRadio:C["a"],QMenu:x["a"],QItem:g["a"],QItemSection:q["a"]}),P()(w,"directives",{ClosePopup:_["a"]});var k=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"q-ma-md"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h4",{staticClass:"text-h4"},[a._v("Antecedentes")]),e("q-editor",{attrs:{toolbar:[["bold","italic","strike","underline"],[{label:a.$q.lang.editor.fontSize,icon:a.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]}]],"min-height":"8rem","max-height":"8rem"},model:{value:a.paciente.antecedentes,callback:function(t){a.$set(a.paciente,"antecedentes",t)},expression:"paciente.antecedentes"}})],1)])])},$=[],S={data(){return{}},props:["paciente"],components:{BannerPrincipal:r["a"]}},M=S,z=e("d66b"),D=Object(m["a"])(M,k,$,!1,null,"3f5cbdb8",null),I=D.exports;P()(D,"components",{QEditor:z["a"]});var Q=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"q-ma-md"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h4",{staticClass:"text-h4"},[a._v("Alergias")]),e("q-editor",{attrs:{toolbar:[["bold","italic","strike","underline"],[{label:a.$q.lang.editor.fontSize,icon:a.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]}]],"min-height":"8rem","max-height":"8rem"},model:{value:a.paciente.alergias,callback:function(t){a.$set(a.paciente,"alergias",t)},expression:"paciente.alergias"}})],1)])])},G=[],Y={props:["paciente"]},j=Y,N=Object(m["a"])(j,Q,G,!1,null,"5133bbf7",null),A=N.exports;P()(N,"components",{QEditor:z["a"]});var F=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"q-ma-md"},[a._m(0),e("q-editor",{attrs:{toolbar:[["bold","italic","strike","underline"],[{label:a.$q.lang.editor.fontSize,icon:a.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]}]],"min-height":"8rem","max-height":"8rem"},model:{value:a.paciente.medicamentosPermanentes,callback:function(t){a.$set(a.paciente,"medicamentosPermanentes",t)},expression:"paciente.medicamentosPermanentes"}})],1)},L=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row"},[e("h4",{staticClass:"text-h4"},[a._v("Medicamentos Permanentes")])])}],O={props:{paciente:Object}},R=O,T=Object(m["a"])(R,F,L,!1,null,null,null),J=T.exports;P()(T,"components",{QEditor:z["a"]});var H=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"q-ma-md"},[a._m(0),a.consultas.length>0?e("div",{staticClass:"row"},a._l(a.consultasPagina,(function(t,s){return e("div",{key:t.id,staticClass:"col-12 col-md-6 q-pa-sm"},[e("q-card",{attrs:{flat:"",bordered:""}},[e("q-expansion-item",{scopedSlots:a._u([{key:"header",fn:function(){return[e("q-item-section",{staticClass:"text-body2"},[e("span",[a._v(" "+a._s(a.formatoFecha(t.fecha))+" - "),e("strong",[a._v(" Motivo: "+a._s(t.motivoConsulta)+" ")])])])]},proxy:!0}],null,!0)},[e("q-separator"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-auto q-py-none q-pl-sm q-pr-none"},[e("q-tabs",{staticClass:"text-primary q-px-none",attrs:{dense:"",vertical:"","no-caps":"",align:"left"},model:{value:a.tab[s],callback:function(t){a.$set(a.tab,s,t)},expression:"tab[index]"}},[e("q-tab",{attrs:{name:"sintomas"+s,label:"Sintomas"}}),e("q-tab",{attrs:{name:"ef"+s,label:"E. Fisica"}}),e("q-tab",{attrs:{name:"diagnostico"+s,label:"Diagnostico"}}),e("q-tab",{attrs:{name:"receta"+s,label:"Receta"}}),e("q-tab",{attrs:{name:"examenes"+s,label:"Examenes"}})],1)],1),e("q-separator",{attrs:{vertical:"",inset:"",color:"primary"}}),e("div",{staticClass:"col q-pl-sm q-pr-xs q-py-xs"},[e("q-scroll-area",{staticStyle:{height:"170px"}},[e("q-tab-panels",{attrs:{animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:a.tab[s],callback:function(t){a.$set(a.tab,s,t)},expression:"tab[index]"}},[e("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"sintomas"+s}},[e("div",{staticClass:"text-h6 q-mb-md"},[a._v("Sintomas")]),e("div",{staticClass:"text-body2",domProps:{innerHTML:a._s(t.sintomas)}})]),e("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"ef"+s}},[e("div",{staticClass:"text-h6 q-mb-md"},[a._v("Exploracion Fisica")]),e("div",{staticClass:"text-body2",domProps:{innerHTML:a._s(t.exploracionFisica)}})]),e("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"diagnostico"+s}},[e("div",{staticClass:"text-h6 q-mb-md"},[a._v("Diagnostico")]),e("div",{staticClass:"text-body2",domProps:{innerHTML:a._s(t.diagnostico)}})]),e("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"receta"+s}},[e("div",{staticClass:"text-h6 q-mb-md"},[a._v("Receta")]),e("div",{staticClass:"text-body2",domProps:{innerHTML:a._s(t.receta)}})]),e("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"examenes"+s}},[e("div",{staticClass:"text-h6 q-mb-md"},[a._v("Examenes")]),e("div",{staticClass:"text-body2",domProps:{innerHTML:a._s(t.examenes)}})])],1)],1)],1),e("q-separator",{staticClass:"gt-md",attrs:{vertical:""}}),e("q-separator",{staticClass:"lt-md gt-xs",attrs:{vertical:""}}),e("div",{staticClass:"col-12 col-sm-4 col-md-12 col-lg-4 q-py-xs q-px-md"},[e("q-separator",{staticClass:"lt-lg gt-sm"}),e("q-separator",{staticClass:"lt-sm"}),e("div",{staticClass:"row q-pt-xs"},[e("div",{staticClass:"col-6 col-sm-12 col-md-6 col-lg-12"},[e("span",{staticClass:"text-subtitle2"},[a._v("Peso: ")]),e("span",{staticClass:"text-body2"},[a._v(a._s(t.peso+" lb"))])]),e("div",{staticClass:"col-6 col-sm-12 col-md-6 col-lg-12"},[e("span",{staticClass:"text-subtitle2"},[a._v("Estatura: ")]),e("span",{staticClass:"text-body2"},[a._v(a._s(t.estatura+" cm"))])]),e("div",{staticClass:"col-6 col-sm-12 col-md-6 col-lg-12"},[e("span",{staticClass:"text-subtitle2"},[a._v("Temperatura: ")]),e("span",{staticClass:"text-body2"},[a._v(a._s(t.temperatura+" °C"))])]),e("div",{staticClass:"col-6 col-sm-12 col-md-6 col-lg-12"},[e("span",{staticClass:"text-subtitle2"},[a._v("IMC: ")]),e("span",{staticClass:"text-body2"},[a._v(a._s(t.imc+" kg/m2"))])]),e("div",{staticClass:"col-12"},[e("span",{staticClass:"text-subtitle2"},[a._v("Presion arterial: ")]),e("span",{staticClass:"text-body2"},[a._v(a._s(t.presionArterial+" mmHg"))])])])],1)],1),e("q-separator"),e("div",{staticClass:"row items-center"},[void 0!=t.proximaCita?e("div",[null!=t.proximaCita&&""!=t.proximaCita?e("div",{staticClass:"col-auto q-pa-sm"},[a._v("\n                Proxima cita: "+a._s(a.formatoFecha(t.proximaCita))+"\n              ")]):e("div",{staticClass:"col-auto q-pa-sm"},[a._v("\n                Proxima cita: No se programo cita.\n              ")])]):e("div",{staticClass:"col-auto q-pa-sm"},[a._v("\n                Proxima cita: No se programo cita.\n            ")]),e("q-space"),e("div",{staticClass:"col-auto q-py-xs q-px-sm"},[e("q-btn",{attrs:{flat:"",size:"md",color:"secondary",dense:"",to:"/editar-consulta/"+t.id}},[a._v("Editar")])],1)],1)],1)],1)],1)})),0):a._e(),a.consultas.length>0?e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-auto"},[e("q-pagination",{attrs:{max:a.max,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},on:{input:a.cambiarPagina},model:{value:a.pagina,callback:function(t){a.pagina=t},expression:"pagina"}})],1)]):e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center text-h5"},[a._v("\n      El paciente no tiene consultas registradas\n    ")])])])},B=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row"},[e("h4",{staticClass:"text-h4"},[a._v("Consultas")])])}],V={props:{consultas:Array},data:()=>({tab:[],pagina:1,max:1,consultasPagina:[],nConsultasPagina:4}),methods:{cambiarPagina(){this.consultasPagina.splice(0,this.consultasPagina.length);for(let a=(this.pagina-1)*this.nConsultasPagina;a<this.pagina*this.nConsultasPagina;a++)this.consultas.length>=a+1&&this.consultasPagina.push(this.consultas[a]);this.consultasPagina.forEach(((a,t)=>{this.tab.push("sintomas"+t)}))}},computed:{formatoFecha(){return a=>c["b"].isValid(a)?c["b"].formatDate(a,"DD/MM/YYYY"):c["b"].formatDate(new Date(1e3*a.seconds),"DD/MM/YYYY")}},watch:{consultas(a,t){this.max=Math.ceil(this.consultas.length/this.nConsultasPagina);for(let e=0;e<this.nConsultasPagina;e++)this.consultas.length>=e+1&&this.consultasPagina.push(this.consultas[e]);this.consultasPagina.forEach(((a,t)=>{this.tab.push("sintomas"+t)}))}}},U=V,W=e("f09f"),K=e("3b73"),X=e("eb85"),Z=e("429b"),aa=e("7460"),ta=e("4983"),ea=e("adad"),sa=e("823b"),ia=e("2c91"),na=e("3b16"),oa=Object(m["a"])(U,H,B,!1,null,null,null),ca=oa.exports;P()(oa,"components",{QCard:W["a"],QExpansionItem:K["a"],QItemSection:q["a"],QSeparator:X["a"],QTabs:Z["a"],QTab:aa["a"],QScrollArea:ta["a"],QTabPanels:ea["a"],QTabPanel:sa["a"],QSpace:ia["a"],QBtn:u["a"],QPagination:na["a"]});var ra=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"q-ma-md"},[a._m(0),a.consultas.length>0?e("div",{staticClass:"row"},a._l(a.consultasPagina,(function(t){return e("div",{key:t.id,staticClass:"col-12 col-md-6 q-pa-sm"},[e("q-card",{attrs:{flat:"",bordered:""}},[e("q-expansion-item",{scopedSlots:a._u([{key:"header",fn:function(){return[e("q-item-section",{staticClass:"text-body2 text-center"},[a._v("\n              "+a._s(a.formatoFecha(t.fecha))+"\n            ")])]},proxy:!0}],null,!0)},[e("q-separator"),e("div",{staticClass:"row"},[e("div",{staticClass:"col q-pl-sm q-px-md q-py-xs"},[e("q-scroll-area",{staticStyle:{height:"150px"}},[e("div",{staticClass:"text-h6 q-mb-md"},[a._v("Receta")]),e("div",{staticClass:"text-body2",domProps:{innerHTML:a._s(t.receta)}})])],1)]),e("q-separator"),e("div",{staticClass:"row items-center"},[void 0!=t.proximaCita?e("div",[null!=t.proximaCita&&""!=t.proximaCita?e("div",{staticClass:"col-auto q-pa-sm"},[a._v("\n                Proxima cita: "+a._s(a.formatoFecha(t.proximaCita))+"\n              ")]):e("div",{staticClass:"col-auto q-pa-sm"},[a._v("\n                Proxima cita: No se programo cita.\n              ")])]):e("div",{staticClass:"col-auto q-pa-sm"},[a._v("\n                Proxima cita: No se programo cita.\n            ")]),e("q-space"),e("div",{staticClass:"col-auto q-py-xs q-px-sm"},[e("q-btn",{attrs:{flat:"",size:"md",color:"secondary",dense:"",to:"/editar-consulta/"+t.id}},[a._v("Editar")])],1)],1)],1)],1)],1)})),0):a._e(),a.consultas.length>0?e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-auto"},[e("q-pagination",{attrs:{max:a.max,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},on:{input:a.cambiarPagina},model:{value:a.pagina,callback:function(t){a.pagina=t},expression:"pagina"}})],1)]):e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center text-h5"},[a._v("\n      El paciente no tiene recetas registradas\n    ")])])])},la=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row"},[e("h4",{staticClass:"text-h4"},[a._v("Recetas")])])}],da={props:{consultas:Array},data:()=>({tab:[],pagina:1,max:1,consultasPagina:[],nConsultasPagina:4}),methods:{cambiarPagina(){this.consultasPagina.splice(0,this.consultasPagina.length);for(let a=(this.pagina-1)*this.nConsultasPagina;a<this.pagina*this.nConsultasPagina;a++)this.consultas.length>=a+1&&this.consultasPagina.push(this.consultas[a]);this.consultasPagina.forEach(((a,t)=>{this.tab.push("sintomas"+t)}))}},computed:{formatoFecha(){return a=>c["b"].isValid(a)?c["b"].formatDate(a,"DD/MM/YYYY"):c["b"].formatDate(new Date(1e3*a.seconds),"DD/MM/YYYY")}},watch:{consultas(a,t){this.max=Math.ceil(this.consultas.length/this.nConsultasPagina);for(let e=0;e<this.nConsultasPagina;e++)this.consultas.length>=e+1&&this.consultasPagina.push(this.consultas[e]);this.consultasPagina.forEach(((a,t)=>{this.tab.push("sintomas"+t)}))}}},pa=da,ma=Object(m["a"])(pa,ra,la,!1,null,null,null),ua=ma.exports;P()(ma,"components",{QCard:W["a"],QExpansionItem:K["a"],QItemSection:q["a"],QSeparator:X["a"],QScrollArea:ta["a"],QSpace:ia["a"],QBtn:u["a"],QPagination:na["a"]});var fa=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"q-ma-md"},[a._m(0),e("q-editor",{attrs:{toolbar:[["bold","italic","strike","underline"],[{label:a.$q.lang.editor.fontSize,icon:a.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]}]],"min-height":"8rem","max-height":"8rem"},model:{value:a.paciente.enfermedadesCronicas,callback:function(t){a.$set(a.paciente,"enfermedadesCronicas",t)},expression:"paciente.enfermedadesCronicas"}})],1)},ha=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row"},[e("h4",{staticClass:"text-h4"},[a._v("Enfermedades Crónicas")])])}],va={props:{paciente:Object}},ba=va,Ca=Object(m["a"])(ba,fa,ha,!1,null,null,null),xa=Ca.exports;P()(Ca,"components",{QEditor:z["a"]});var ga=e("45ba"),qa=e("fc1b"),_a={data:()=>({cargando:!0,paciente:null,validacionPaciente:"",consultasPaciente:[]}),components:{InformacionPersonal:E,Antecedentes:I,Alergias:A,MedicamentosPermanentes:J,Consultas:ca,Recetas:ua,EnfermedadesCronicas:xa,Examenes:ga["default"]},methods:{guardarInformacion(){let a={antecedentes:this.$refs.refAntecedentes.paciente.antecedentes,alergias:this.$refs.refAlergias.paciente.alergias,medicamentosPermanentes:this.$refs.refMedicamentosPermanentes.paciente.medicamentosPermanentes,EnfermedadesCronicas:this.$refs.refEnfermedadesCronicas.paciente.enfermedadesCronicas,direccion:this.$refs.refInformacionPersonal.paciente.direccion,dui:this.$refs.refInformacionPersonal.paciente.dui,email:this.$refs.refInformacionPersonal.paciente.email,enCasoEmergencia:this.$refs.refInformacionPersonal.paciente.enCasoEmergencia,estatura:this.$refs.refInformacionPersonal.paciente.estatura,fechaNacimiento:this.$refs.refInformacionPersonal.paciente.fechaNacimiento,genero:this.$refs.refInformacionPersonal.paciente.genero,nombre:this.$refs.refInformacionPersonal.paciente.nombre,peso:this.$refs.refInformacionPersonal.paciente.peso,telefono:this.$refs.refInformacionPersonal.paciente.telefono,tipoSangre:this.$refs.refInformacionPersonal.paciente.tipoSangre,whatsapp:this.$refs.refInformacionPersonal.paciente.whatsapp},t=this.$router.currentRoute.params.id;var e=qa["b"].collection("pacientes").doc(t);return e.update(a).then((()=>{this.$q.notify({message:"Información actualizada",color:"green-4",textColor:"white",icon:"cloud_done"})})).catch((a=>{this.$q.notify({type:"negative",message:"Error al actualizar información"})}))},obtenerDatosPaciente(){let a=this.$router.currentRoute.params.id;var t=qa["b"].collection("pacientes").doc(a);t.get().then((a=>{a.exists?a.data().idMedico==qa["a"].currentUser.uid?(this.paciente=a.data(),this.paciente.fechaNacimiento=c["b"].formatDate(this.paciente.fechaNacimiento,"DD/MM/YYYY")):this.paciente="No pertece al medico":this.paciente=null})).catch((a=>{console.log("Error getting document:",a)})).finally((()=>{this.cargando=!1}))},obtenerConsultas(){qa["b"].collection("consultas").where("idPaciente","==",this.$router.currentRoute.params.id).get().then((a=>{a.docs.forEach((a=>{let t=a.data();Object.defineProperty(t,"id",{value:a.id,writable:!0,enumerable:!0,configurable:!0}),this.consultasPaciente.push(t),this.consultasPaciente.reverse()}))}))}},created(){this.obtenerDatosPaciente(),this.obtenerConsultas()}},ya=_a,Pa=e("74f7"),wa=e("a6a3"),Ea=Object(m["a"])(ya,s,i,!1,null,null,null);t["default"]=Ea.exports;P()(Ea,"components",{QInnerLoading:Pa["a"],QSpinnerCube:wa["a"],QBtn:u["a"],QSeparator:X["a"]})}}]);