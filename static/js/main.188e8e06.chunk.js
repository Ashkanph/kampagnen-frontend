(this.webpackJsonpkampagnenmanager=this.webpackJsonpkampagnenmanager||[]).push([[0],{122:function(e,t,a){},204:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(29),r=a.n(i),n=(a(122),a(110)),d=a(280),o=a(20),m=a(281),l=a(267),u=a(286),p=a(287),x=a(289),b=a(288),j=a(126),g=a.n(j),h=a(1);var D=function(e){var t=Object(l.a)("(max-width: 400px)");return Object(h.jsx)(u.a,{position:"static",sx:{zIndex:4},children:Object(h.jsxs)(p.a,{children:[Object(h.jsx)(b.a,{edge:"start",color:"inherit","aria-label":"menu",sx:{ml:t?"10px":"34px",mr:"16px"},children:Object(h.jsx)(g.a,{sx:{height:"24px",width:"24px"}})}),Object(h.jsx)(x.a,{className:"letter-spacing-86",fontSize:"24px",fontWeight:"bold",component:"div",sx:{flexGrow:1},children:"Kampagnenmanager"})]})})},N=a(137),O=Object(N.a)({palette:{primary:{main:"#00bef7",contrastText:"#ffffff"},secondary:{main:"#fafafa",light:"#ffffff",contrastText:"#444444",tableCellBorder:"#ebebeb",tableBorder:"#d8d8d8",tableHeaderBG:"#f4f6f8",filterLabel:"#7c7c7c",selectedItemBG:"#e7f9fe"}}});function f(e){var t=e.children,a=Object(l.a)("(max-width: 475px)");return Object(h.jsxs)(m.a,{maxWidth:"100vw",sx:{backgroundColor:O.palette.secondary.main,padding:"0 !important",width:"100vw",height:"100vh"},children:[Object(h.jsx)(D,{}),Object(h.jsx)(m.a,{maxWidth:"100vw",sx:{zIndex:2,p:a?"0 15px":"0 32px"},children:t})]})}var v=a(16),_=a(290),y=a(17),k=a(292),w=a(296),S=a(295),z=a(291),T=a(293),C=a(294);function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(y.a)({year:"numeric",month:"2-digit",day:"2-digit"},t);return e&&""!==e?new Intl.DateTimeFormat("de-DE",a).format(new Date(Number(e))).replace(/\./g,"-"):e||""}var K=a(39),R=a(284);function V(){var e=Object(K.a)();return Object(h.jsx)(R.a,{sx:{width:"24px",minWidth:"0",marginLeft:"4px",marginBottom:"4px"},children:Object(h.jsx)(_.a,{sx:{"&:before, &:after":{border:"6px solid transparent",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",content:"''",display:"block",height:"0%",width:"0%"},"&:before":{borderBottomColor:e.palette.primary.main},"&:after":{borderTopColor:e.palette.primary.main,marginTop:"2px"}}})})}var W=function(e){var t=e.data,a=e.statuses,s=e.filteredStatuses,c=Object(l.a)("(max-width: 646px)"),i={fontSize:"16px !important",letterSpacing:"0.57",height:"60px",p:"0 0 0 ".concat(c?"10px":"23.5px"),color:O.palette.secondary.contrastText},r=Object(y.a)(Object(y.a)({},i),{},{fontWeight:"bold",height:"60px",backgroundColor:O.palette.secondary.tableHeaderBG,p:"0 0 0 23.5px",color:O.palette.secondary.contrastText}),n=function(e){return Object(y.a)(Object(y.a)({},i),{},{minWidth:e})};return Object(h.jsx)(z.a,{sx:{height:"calc(100vh - 331px)",overflowY:"scroll",border:"1px solid ".concat(O.palette.secondary.tableBorder)},children:Object(h.jsxs)(k.a,{stickyHeader:!0,sx:{minWidth:650},"aria-label":"a dense table",children:[Object(h.jsx)(T.a,{children:Object(h.jsxs)(C.a,{children:[Object(h.jsxs)(S.a,{sx:r,children:["CS-ID",Object(h.jsx)(V,{})]}),Object(h.jsxs)(S.a,{sx:r,children:["Kunde",Object(h.jsx)(V,{})]}),Object(h.jsxs)(S.a,{sx:r,children:["Kampagnenname",Object(h.jsx)(V,{})]}),Object(h.jsxs)(S.a,{sx:r,children:["Start",Object(h.jsx)(V,{})]}),Object(h.jsxs)(S.a,{sx:r,children:["Ende",Object(h.jsx)(V,{})]}),Object(h.jsxs)(S.a,{sx:r,children:["Status",Object(h.jsx)(V,{})]})]})}),Object(h.jsx)(w.a,{children:t.map((function(e){return(0===s.length||s.find((function(t){return t===e.status})))&&Object(h.jsxs)(C.a,{sx:{td:{borderLeft:"1px solid ".concat(O.palette.secondary.tableCellBorder),borderBottom:"1px solid ".concat(O.palette.secondary.tableCellBorder)}},children:[Object(h.jsx)(S.a,{sx:n("178px"),children:e.csid}),Object(h.jsx)(S.a,{sx:n("0"),children:e.customerName}),Object(h.jsx)(S.a,{sx:n("188px"),children:e.campaignName}),Object(h.jsx)(S.a,{sx:n("107px"),children:B(e.startDate)}),Object(h.jsx)(S.a,{sx:n("107px"),children:B(e.endDate)}),Object(h.jsx)(S.a,{className:"text-capitalize",sx:n("107px"),children:a[e.status]})]},e.csid)}))})]})})},I=a(19),E=a(279),L=a(299),F=a(275),G=a(283),Z=a(118),M=a.n(Z),A=a(127),Y=a.n(A),P=a(128),H=a.n(P),J=a(278),Q=a(297),$=a(298),q=a(129),U=a.n(q),X={PaperProps:{style:{maxHeight:224,width:250}}},ee=function(e){return{backgroundColor:e.secondary.selectedItemBG,margin:"0 8px 0 0",padding:"6px 0",borderRadius:"2px",height:"24px",fontSize:"14px",zIndex:"100","& .MuiSvgIcon-root":{fill:e.primary.main,width:"18px"}}};function te(e,t,a){return{fontSize:"14px",textTransform:"capitalize",fontWeight:-1===t.indexOf(e)?a.typography.fontWeightRegular:a.typography.fontWeightMedium}}var ae=function(e){var t=e.filteredStatuses,a=e.children,s=Object(K.a)(),c=Object(l.a)("(max-width: 646px)"),i=function(e){return Object(h.jsxs)(x.a,{sx:{letterSpacing:"0.5px",color:s.palette.secondary.filterLabel,fontSize:"14px"},component:"span",children:["Status filtern:",c&&(t.length>0?Object(h.jsx)(Y.a,{fontSize:"medium",sx:{fill:s.palette.primary.main,marginBottom:"-5px"}}):Object(h.jsx)(H.a,{fontSize:"medium",sx:{marginBottom:"-5px"}}))]})};return c?Object(h.jsxs)(J.a,{sx:{width:"100%"},children:[Object(h.jsx)(Q.a,{expandIcon:Object(h.jsx)(U.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(h.jsx)(i,{})}),Object(h.jsx)($.a,{children:a})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i,{}),a]})},se=function(e){var t=e.statuses,a=e.filteredStatuses,s=e.setFilteredStatuses,c=Object(K.a)(),i=Object(l.a)("(max-width: 646px)");return Object(h.jsx)(_.a,{sx:{backgroundColor:c.palette.secondary.tableHeaderBG,maxHeight:i?"250px":"60px",mt:"24px",border:"1px solid ".concat(c.palette.secondary.tableBorder),borderBottom:0,display:"flex",justifyContent:"flex-end",alignItems:"center",flexDirection:i?"column":"row"},children:Object(h.jsx)(ae,{filteredStatuses:a,children:Object(h.jsx)(L.a,{sx:{m:1,height:i?"125px":36,width:i?"100%":438},children:Object(h.jsx)(F.a,{id:"select-filter",multiple:!0,value:a,onChange:function(e){var t=e.target.value;s("string"===typeof t?t.split(","):t)},inputProps:{"aria-label":"Without label"},sx:{height:i?"125px":"36px",backgroundColor:c.palette.primary.contrastText},renderValue:function(e){return Object(h.jsxs)(_.a,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:[e.map((function(e){return Object(h.jsx)(G.a,{label:t[e],sx:ee(c.palette),onDelete:function(t){return function(e){var t=a.filter((function(t,a,s){return t!==e}));s(Object(I.a)(t))}(e)},onMouseDown:function(e){e.stopPropagation()},deleteIcon:Object(h.jsx)(M.a,{})},e)})),e.length>0&&Object(h.jsx)(G.a,{label:e.length,sx:Object(y.a)(Object(y.a)({},ee(c.palette)),{},{fontWeight:"bold",marginLeft:i?"0":"auto",marginRight:"0","& .MuiChip-label":{backgroundColor:c.palette.primary.main,color:c.palette.primary.contrastText,width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"2px",marginRight:"10px"}}),onDelete:function(e){return s([])},onMouseDown:function(e){e.stopPropagation()},deleteIcon:Object(h.jsx)(M.a,{})},"selected-filter-count")]})},MenuProps:X,children:Object.keys(t).map((function(e){return Object(h.jsx)(E.a,{value:e,style:te(e,a,c),children:t[e]},e)}))})})})})},ce=a(4),ie=a(133),re=a.n(ie),ne=(a(158),a(276)),de=a(282),oe=a(300),me=a(132),le=a.n(me),ue=a(131),pe=["className"];var xe=function(e){e.className;var t=Object(ue.a)(e,pe),a=t.onClick,s=t.label,c=t.variant,i=t.sx,r=t.type,n=i||{},d="outlined"===c?{color:O.palette.primary.main,backgroundColor:O.palette.primary.contrastText}:{};return Object(h.jsx)(R.a,{onClick:null!==a&&void 0!==a?a:null,variant:"contained",sx:Object(y.a)(Object(y.a)({fontSize:"14px",fontWeight:"bold",letterSpacing:"0.5px"},d),n),type:r,children:s})},be={flexDirection:"row",width:"100%",mb:"24px",alignItems:"center",justifyContent:"center"},je={width:"160px",mr:"40px",fontWeight:"bold",fontSize:"16px",letterSpacing:"0.57px",textAlign:"right"},ge={width:"100%",maxWidth:"560px",height:"36px",fontSize:"14px",letterSpacing:"0.5px"},he={fontSize:"14px",letterSpacing:"0.5px"},De=function(e){var t=e.setKampagnenData,a=s.useState(!1),c=Object(v.a)(a,2),i=c[0],r=c[1],n=s.useState(!1),d=Object(v.a)(n,2),o=d[0],m=d[1],u=function(){r(!1),m(!1),N({status:""})},p=Object(l.a)("(min-width:961px)"),b=Object(l.a)("(max-width: 640px)"),j=s.useState({status:""}),g=Object(v.a)(j,2),D=g[0],N=g[1],O=Object(K.a)(),f=function(e){var t="startDate"!==e.target.name&&"endDate"!==e.target.name?e.target.value.trim():new Date(e.target.value).getTime();N((function(a){return Object(y.a)(Object(y.a)({},a),{},Object(ce.a)({},e.target.name,t))}))},k=s.useMemo((function(){return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:p?960:"100vw",height:p?562:"100vh",bgcolor:"background.paper",boxShadow:24,p:4}}),[p]),w=s.forwardRef((function(e,t){e._value;var a=e.onClick,s=e.startOrEnd;return Object(h.jsx)(de.a,{sx:Object(y.a)(Object(y.a)({},ge),{},{width:"134px",color:O.palette.secondary.filterLabel}),onClick:a,inputRef:t,value:B(D["".concat(s,"Date")]),startAdornment:Object(h.jsx)(oe.a,{position:"start",children:Object(h.jsx)(le.a,{sx:{fill:O.palette.secondary.filterLabel}})})})})),S=function(e){var t=e.startOrEnd;return Object(h.jsx)(re.a,{style:{width:"134px"},onChange:function(e){return f({target:{name:"".concat(t,"Date"),value:e}})},customInput:Object(h.jsx)(w,{startOrEnd:t})})};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(xe,{onClick:function(){return r(!0)},label:"Kampagne erstellen"}),Object(h.jsx)(ne.a,{open:i,onClose:u,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",sx:{"*":{color:O.palette.secondary.contrastText}},children:Object(h.jsxs)(_.a,{sx:k,component:"form",children:[Object(h.jsx)(x.a,{id:"modal-modal-title",align:"center",fontWeight:"bold",fontSize:"24px",variant:"h6",component:"h2",borderBottom:"2px solid ".concat(O.palette.secondary.filterLabel),m:"-32px -32px 47px -32px",p:"24px 0",height:"80px",children:"Kampagne erstellen"}),Object(h.jsxs)(L.a,{sx:be,children:[Object(h.jsx)(x.a,{sx:je,children:"Kampagnenname*:"}),Object(h.jsx)(de.a,{placeholder:"Kampagnenname eingeben",sx:ge,onChange:f,name:"name",error:o&&(!(null!==D&&void 0!==D&&D.name)||""===(null===D||void 0===D?void 0:D.name))})]}),Object(h.jsxs)(L.a,{sx:be,children:[Object(h.jsx)(x.a,{sx:je,children:"Kunde*:"}),Object(h.jsx)(de.a,{placeholder:"Kunde eingeben",sx:ge,onChange:f,name:"customerName",error:o&&(!(null!==D&&void 0!==D&&D.customerName)||""===(null===D||void 0===D?void 0:D.customerName))})]}),Object(h.jsxs)(_.a,{sx:Object(y.a)(Object(y.a)({},be),{},{display:"flex",maxHeight:"65px"}),children:[Object(h.jsx)(x.a,{sx:je,children:"Laufzeit:"}),Object(h.jsxs)(_.a,{sx:Object(y.a)(Object(y.a)({},ge),{},{display:"flex",alignItems:"center",height:b?"65px":"36px",flexDirection:b?"column":"row","& .react-datepicker-wrapper":{width:"134px",marginRight:"24px"}}),children:[Object(h.jsx)(x.a,{sx:Object(y.a)(Object(y.a)({},he),{},{mr:"8px"}),children:"Start*:"}),Object(h.jsx)(S,{startOrEnd:"start"}),Object(h.jsx)(x.a,{sx:Object(y.a)(Object(y.a)({},he),{},{mr:"8px",mt:b?"10px":"0"}),children:"Ende*:"}),Object(h.jsx)(S,{startOrEnd:"end"})]})]}),Object(h.jsxs)(L.a,{sx:Object(y.a)(Object(y.a)({},be),{},{mt:b?"50px":"0"}),children:[Object(h.jsx)(x.a,{sx:je,children:"Status:"}),Object(h.jsxs)(F.a,{id:"status-select",onChange:f,name:"status",value:D.status,sx:ge,children:[Object(h.jsx)(E.a,{value:"created",sx:he,children:"Erstellt"}),Object(h.jsx)(E.a,{value:"booked",sx:he,children:"Gebucht"}),Object(h.jsx)(E.a,{value:"archived",sx:he,children:"Archiviert"})]})]}),Object(h.jsxs)(L.a,{sx:be,children:[Object(h.jsx)(x.a,{sx:je,children:"Notiz:"}),Object(h.jsx)("textarea",{style:Object(y.a)(Object(y.a)({},ge),{},{minHeight:"100px",border:"1px solid ".concat(O.palette.secondary.tableBorder),borderRadius:"4px",padding:"16px 14px"}),onChange:f,name:"customerName"})]}),Object(h.jsxs)(L.a,{sx:Object(y.a)({},be),children:[Object(h.jsx)(x.a,{sx:je,children:" "}),Object(h.jsxs)(_.a,{sx:Object(y.a)(Object(y.a)({},ge),{},{display:"flex",justifyContent:"flex-end"}),children:[Object(h.jsx)(xe,{onClick:u,variant:"outlined",label:"Abbrechen",sx:{marginRight:"16px"}}),Object(h.jsx)(xe,{onClick:function(e){e.preventDefault(),m(!0),null!==D&&void 0!==D&&D.name&&""!==!(null!==D&&void 0!==D&&D.name)&&null!==D&&void 0!==D&&D.customerName&&""!==!(null!==D&&void 0!==D&&D.customerName)&&(t((function(e){var t=[].concat(Object(I.a)(e),[{campaignName:null===D||void 0===D?void 0:D.name,customerName:null===D||void 0===D?void 0:D.customerName,startDate:null===D||void 0===D?void 0:D.startDate,endDate:null===D||void 0===D?void 0:D.endDate,status:null===D||void 0===D?void 0:D.status,csid:"csid_"+(new Date).getTime()}]);return localStorage.setItem("kampagnenData",JSON.stringify(t)),t})),u())},type:"submit",label:"Erstellen",sx:{marginRight:"1px"}})]})]})]})})]})},Ne=[{campaignName:"Daltfresh",customerName:"InnoZ",startDate:"1625973397000",endDate:"1650310154000",status:"created",csid:"csid_1648778815000"},{campaignName:"Tres-Zap",customerName:"Skimia",startDate:"1642137726000",endDate:"1647409936000",status:"booked",csid:"csid_1648778815001"},{campaignName:"Keylex",customerName:"Youopia",startDate:"1635216389000",endDate:"1635173618000",status:"booked",csid:"csid_1648778815002"},{campaignName:"Konklab",customerName:"Vinder",startDate:"1647158271000",endDate:"1633129419000",status:"created",csid:"csid_1648778815003"},{campaignName:"Konklux",customerName:"Trudoo",startDate:"1638831192000",endDate:"1651054042000",status:"booked",csid:"csid_1648778815004"},{campaignName:"Bitwolf",customerName:"Voonix",startDate:"1647196946000",endDate:"1647504415000",status:"booked",csid:"csid_1648778815005"},{campaignName:"Tempsoft",customerName:"Mynte",startDate:"1643263613000",endDate:"1651481887000",status:"archived",csid:"csid_1648778815006"},{campaignName:"Alphazap",customerName:"Dynabox",startDate:"1650932221000",endDate:"1640484477000",status:"created",csid:"csid_1648778815007"},{campaignName:"Quo Lux",customerName:"Jaxspan",startDate:"1650526975000",endDate:"1624524576000",status:"created",csid:"csid_1648778815008"},{campaignName:"Regrant",customerName:"Vitz",startDate:"1634561352000",endDate:"1631368529000",status:"created",csid:"csid_1648778815009"},{campaignName:"Ronstring",customerName:"Agivu",startDate:"1629671197000",endDate:"1626536009000",status:"booked",csid:"csid_1648778815010"},{campaignName:"Regrant",customerName:"Pixonyx",startDate:"1622148229000",endDate:"1622733618000",status:"created",csid:"csid_1648778815011"},{campaignName:"Zontrax",customerName:"Kazu",startDate:"1636360078000",endDate:"1622732796000",status:"archived",csid:"csid_1648778815012"},{campaignName:"Cardify",customerName:"Katz",startDate:"1644489082000",endDate:"1622133068000",status:"created",csid:"csid_1648778815013"},{campaignName:"Sonsing",customerName:"Dynabox",startDate:"1645316591000",endDate:"1636007358000",status:"created",csid:"csid_1648778815014"},{campaignName:"Veribet",customerName:"Oozz",startDate:"1632150616000",endDate:"1625707433000",status:"created",csid:"csid_1648778815015"},{campaignName:"Cardify",customerName:"Demimbu",startDate:"1651013299000",endDate:"1629146843000",status:"archived",csid:"csid_1648778815016"},{campaignName:"Ventosanzap",customerName:"Jabbersphere",startDate:"1651075348000",endDate:"1642649677000",status:"archived",csid:"csid_1648778815017"},{campaignName:"Zathin",customerName:"Devify",startDate:"1642054590000",endDate:"1650068249000",status:"booked",csid:"csid_1648778815018"},{campaignName:"Ronstring",customerName:"Minyx",startDate:"1647373792000",endDate:"1625979917000",status:"booked",csid:"csid_1648778815019"},{campaignName:"Namfix",customerName:"Realfire",startDate:"1650874032000",endDate:"1643456231000",status:"created",csid:"csid_1648778815020"},{campaignName:"Zamit",customerName:"Thoughtworks",startDate:"1649939704000",endDate:"1650992547000",status:"booked",csid:"csid_1648778815021"},{campaignName:"Voltsillam",customerName:"Eare",startDate:"1646240953000",endDate:"1645939400000",status:"created",csid:"csid_1648778815022"},{campaignName:"Ronstring",customerName:"Twitterlist",startDate:"1632317065000",endDate:"1635788837000",status:"created",csid:"csid_1648778815023"},{campaignName:"Asoka",customerName:"Gabspot",startDate:"1632978910000",endDate:"1630785941000",status:"booked",csid:"csid_1648778815024"},{campaignName:"Bigtax",customerName:"Skcsidoo",startDate:"1633335047000",endDate:"1637874081000",status:"created",csid:"csid_1648778815025"},{campaignName:"Trippledex",customerName:"Katz",startDate:"1630053946000",endDate:"1650041702000",status:"archived",csid:"csid_1648778815026"},{campaignName:"Cookley",customerName:"Pixope",startDate:"1638983124000",endDate:"1645089281000",status:"booked",csid:"csid_1648778815027"},{campaignName:"Ventosanzap",customerName:"Fanoodle",startDate:"1628416662000",endDate:"1633692169000",status:"created",csid:"csid_1648778815028"},{campaignName:"Zontrax",customerName:"Feedfish",startDate:"1626774241000",endDate:"1645047500000",status:"archived",csid:"csid_1648778815029"},{campaignName:"Subin",customerName:"Rhyzio",startDate:"1638812203000",endDate:"1642973268000",status:"archived",csid:"csid_1648778815030"},{campaignName:"Sonsing",customerName:"Shuffledrive",startDate:"1646380543000",endDate:"1630467094000",status:"archived",csid:"csid_1648778815031"},{campaignName:"Tresom",customerName:"Aivee",startDate:"1639037616000",endDate:"1651171384000",status:"booked",csid:"csid_1648778815032"},{campaignName:"Veribet",customerName:"Dazzlesphere",startDate:"1623509357000",endDate:"1641881994000",status:"booked",csid:"csid_1648778815033"},{campaignName:"Regrant",customerName:"Ooba",startDate:"1630664029000",endDate:"1636909585000",status:"archived",csid:"csid_1648778815034"},{campaignName:"Voyatouch",customerName:"Divavu",startDate:"1646806744000",endDate:"1627598989000",status:"archived",csid:"csid_1648778815035"},{campaignName:"Bitwolf",customerName:"Voonyx",startDate:"1635600714000",endDate:"1645339551000",status:"booked",csid:"csid_1648778815036"},{campaignName:"Zamit",customerName:"Edgeblab",startDate:"1622074241000",endDate:"1650435689000",status:"archived",csid:"csid_1648778815037"},{campaignName:"Alphazap",customerName:"Kanoodle",startDate:"1636058319000",endDate:"1649048712000",status:"archived",csid:"csid_1648778815038"},{campaignName:"Voltsillam",customerName:"Browsezoom",startDate:"1634613195000",endDate:"1628720382000",status:"archived",csid:"csid_1648778815039"},{campaignName:"Zontrax",customerName:"Ntag",startDate:"1648753177000",endDate:"1641276060000",status:"booked",csid:"csid_1648778815040"},{campaignName:"Subin",customerName:"Realfire",startDate:"1625033084000",endDate:"1646922796000",status:"booked",csid:"csid_1648778815041"},{campaignName:"Solarbreeze",customerName:"Browsetype",startDate:"1651750657000",endDate:"1622370909000",status:"archived",csid:"csid_1648778815042"},{campaignName:"Zaam-Dox",customerName:"Jetwire",startDate:"1634957399000",endDate:"1650330898000",status:"archived",csid:"csid_1648778815043"},{campaignName:"Fix San",customerName:"Thoughtworks",startDate:"1632238853000",endDate:"1627677577000",status:"archived",csid:"csid_1648778815044"},{campaignName:"Fintone",customerName:"Yodoo",startDate:"1636889935000",endDate:"1638962280000",status:"created",csid:"csid_1648778815045"},{campaignName:"Y-find",customerName:"Tagfeed",startDate:"1649026812000",endDate:"1636719727000",status:"created",csid:"csid_1648778815046"},{campaignName:"Pannier",customerName:"Eabox",startDate:"1628539891000",endDate:"1628007196000",status:"created",csid:"csid_1648778815047"},{campaignName:"Voyatouch",customerName:"Yakijo",startDate:"1623519258000",endDate:"1650068673000",status:"booked",csid:"csid_1648778815048"},{campaignName:"Gembucket",customerName:"Gevee",startDate:"1633791089000",endDate:"1623854919000",status:"archived",csid:"csid_1648778815049"},{campaignName:"Holdlamis",customerName:"Voomm",startDate:"1641733237000",endDate:"1628388952000",status:"archived",csid:"csid_1648778815050"},{campaignName:"Transcof",customerName:"Realbrcsidge",startDate:"1639211397000",endDate:"1629532477000",status:"booked",csid:"csid_1648778815051"},{campaignName:"Y-find",customerName:"Yozio",startDate:"1634677753000",endDate:"1630298443000",status:"archived",csid:"csid_1648778815052"},{campaignName:"Konklux",customerName:"Edgeblab",startDate:"1643372214000",endDate:"1642836639000",status:"booked",csid:"csid_1648778815053"},{campaignName:"Fintone",customerName:"Layo",startDate:"1622011803000",endDate:"1640971145000",status:"booked",csid:"csid_1648778815054"},{campaignName:"Keylex",customerName:"Dazzlesphere",startDate:"1634249778000",endDate:"1631369014000",status:"created",csid:"csid_1648778815055"},{campaignName:"Konklab",customerName:"Oloo",startDate:"1629778677000",endDate:"1647757452000",status:"created",csid:"csid_1648778815056"},{campaignName:"Fixflex",customerName:"Tagchat",startDate:"1641232924000",endDate:"1626027007000",status:"archived",csid:"csid_1648778815057"},{campaignName:"Trippledex",customerName:"Jaloo",startDate:"1649083493000",endDate:"1649656485000",status:"created",csid:"csid_1648778815058"},{campaignName:"Lotstring",customerName:"Devpulse",startDate:"1642791240000",endDate:"1629036943000",status:"created",csid:"csid_1648778815059"},{campaignName:"Ventosanzap",customerName:"Brainverse",startDate:"1650271260000",endDate:"1622322022000",status:"booked",csid:"csid_1648778815060"},{campaignName:"Duobam",customerName:"Fadeo",startDate:"1639445616000",endDate:"1638289588000",status:"booked",csid:"csid_1648778815061"},{campaignName:"Veribet",customerName:"Twimbo",startDate:"1638633102000",endDate:"1641647415000",status:"created",csid:"csid_1648778815062"},{campaignName:"Zamit",customerName:"Dabfeed",startDate:"1629922157000",endDate:"1653106175000",status:"created",csid:"csid_1648778815063"},{campaignName:"Prodder",customerName:"Brainlounge",startDate:"1644104266000",endDate:"1625973107000",status:"created",csid:"csid_1648778815064"},{campaignName:"Cookley",customerName:"Tazzy",startDate:"1647717377000",endDate:"1646032033000",status:"booked",csid:"csid_1648778815065"},{campaignName:"Cardguard",customerName:"Wikizz",startDate:"1649446460000",endDate:"1641942565000",status:"archived",csid:"csid_1648778815066"},{campaignName:"Veribet",customerName:"Mybuzz",startDate:"1646812574000",endDate:"1624276592000",status:"created",csid:"csid_1648778815067"},{campaignName:"Lotstring",customerName:"Thoughtblab",startDate:"1633842301000",endDate:"1644117338000",status:"created",csid:"csid_1648778815068"},{campaignName:"Viva",customerName:"Twimbo",startDate:"1633980843000",endDate:"1650080573000",status:"archived",csid:"csid_1648778815069"},{campaignName:"Greenlam",customerName:"Skajo",startDate:"1652748952000",endDate:"1643514793000",status:"created",csid:"csid_1648778815070"},{campaignName:"Rank",customerName:"Feedmix",startDate:"1626441391000",endDate:"1642578552000",status:"booked",csid:"csid_1648778815071"},{campaignName:"Konklab",customerName:"Blognation",startDate:"1646294082000",endDate:"1627174792000",status:"created",csid:"csid_1648778815072"},{campaignName:"Fintone",customerName:"Fadeo",startDate:"1625195922000",endDate:"1645708796000",status:"archived",csid:"csid_1648778815073"},{campaignName:"Konklab",customerName:"Yata",startDate:"1635318319000",endDate:"1637962408000",status:"booked",csid:"csid_1648778815074"},{campaignName:"Overhold",customerName:"Twimbo",startDate:"1627252650000",endDate:"1640060696000",status:"archived",csid:"csid_1648778815075"},{campaignName:"Biodex",customerName:"Riffpedia",startDate:"1652353832000",endDate:"1641007386000",status:"created",csid:"csid_1648778815076"},{campaignName:"Quo Lux",customerName:"Tazz",startDate:"1627779404000",endDate:"1650199705000",status:"created",csid:"csid_1648778815077"},{campaignName:"Veribet",customerName:"Zava",startDate:"1648169146000",endDate:"1639945368000",status:"archived",csid:"csid_1648778815078"},{campaignName:"Fintone",customerName:"Rhycero",startDate:"1653084591000",endDate:"1652154839000",status:"booked",csid:"csid_1648778815079"},{campaignName:"Vagram",customerName:"Twimbo",startDate:"1632271060000",endDate:"1623736458000",status:"archived",csid:"csid_1648778815080"},{campaignName:"Lotstring",customerName:"Jaxworks",startDate:"1633741204000",endDate:"1623689983000",status:"booked",csid:"csid_1648778815081"},{campaignName:"Y-find",customerName:"Browsetype",startDate:"1630766850000",endDate:"1638432652000",status:"booked",csid:"csid_1648778815082"},{campaignName:"Bytecard",customerName:"Vinder",startDate:"1651366192000",endDate:"1647759907000",status:"created",csid:"csid_1648778815083"},{campaignName:"Kanlam",customerName:"Twimbo",startDate:"1622882051000",endDate:"1624862621000",status:"archived",csid:"csid_1648778815084"},{campaignName:"Span",customerName:"Yombu",startDate:"1641189886000",endDate:"1625599400000",status:"booked",csid:"csid_1648778815085"},{campaignName:"Sonair",customerName:"Demivee",startDate:"1645809964000",endDate:"1627236058000",status:"created",csid:"csid_1648778815086"},{campaignName:"Tempsoft",customerName:"Eadel",startDate:"1626311751000",endDate:"1622187128000",status:"created",csid:"csid_1648778815087"},{campaignName:"Wrapsafe",customerName:"Tavu",startDate:"1630613973000",endDate:"1633451216000",status:"created",csid:"csid_1648778815088"},{campaignName:"Zamit",customerName:"Vinder",startDate:"1630789861000",endDate:"1648440243000",status:"booked",csid:"csid_1648778815089"},{campaignName:"Wrapsafe",customerName:"Thoughtblab",startDate:"1636877368000",endDate:"1631538533000",status:"booked",csid:"csid_1648778815090"},{campaignName:"Hatity",customerName:"Mynte",startDate:"1637152720000",endDate:"1627478692000",status:"created",csid:"csid_1648778815091"},{campaignName:"Tresom",customerName:"Miboo",startDate:"1638268210000",endDate:"1649897463000",status:"booked",csid:"csid_1648778815092"},{campaignName:"Sonair",customerName:"Leenti",startDate:"1629046172000",endDate:"1642321389000",status:"booked",csid:"csid_1648778815093"},{campaignName:"Bigtax",customerName:"Youbrcsidge",startDate:"1627186912000",endDate:"1630094473000",status:"created",csid:"csid_1648778815094"},{campaignName:"Y-Solowarm",customerName:"Gigazoom",startDate:"1639186012000",endDate:"1644582025000",status:"archived",csid:"csid_1648778815095"},{campaignName:"Lotlux",customerName:"Skilith",startDate:"1642851036000",endDate:"1651696634000",status:"booked",csid:"csid_1648778815096"},{campaignName:"Veribet",customerName:"Kayveo",startDate:"1625135798000",endDate:"1634505625000",status:"archived",csid:"csid_1648778815097"},{campaignName:"Tres-Zap",customerName:"Tambee",startDate:"1628818547000",endDate:"1652746229000",status:"created",csid:"csid_1648778815098"},{campaignName:"Andalax",customerName:"Zoomlounge",startDate:"1648778816000",endDate:"1632318370000",status:"archived",csid:"csid_1648778815099"}],Oe={booked:"Gebukht",created:"Erstellt",archived:"Archiviert"},fe=function(e){var t=Object(s.useState)([]),a=Object(v.a)(t,2),c=a[0],i=a[1],r=Object(s.useState)([]),n=Object(v.a)(r,2),d=n[0],o=n[1],m=Object(l.a)("(max-width: 525px)"),u=Object(l.a)("(max-width: 475px)");return Object(s.useEffect)((function(){var e=localStorage.getItem("kampagnenData");e?o(JSON.parse(e)):(localStorage.setItem("kampagnenData",JSON.stringify(Ne)),o(Ne))}),[]),Object(h.jsxs)(_.a,{sx:{mt:"40px",p:u?0:"32px 32px 45px",height:"calc(100vh - 136px)",backgroundColor:O.palette.primary.contrastText,color:O.palette.secondary.contrastText,borderRadius:"2px",boxShadow:u?"none":"0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)"},children:[Object(h.jsxs)(_.a,{sx:{display:"flex",flexDirection:m?"column":"row"},children:[Object(h.jsx)(x.a,{className:"letter-spacing-86",fontSize:"24px",fontWeight:"bold",component:"div",sx:{flexGrow:1},children:"Alle Kampagnen"}),Object(h.jsx)(De,{setKampagnenData:o})]}),Object(h.jsx)(se,{statuses:Oe,filteredStatuses:c,setFilteredStatuses:i}),Object(h.jsx)(W,{theme:e.theme,data:d,statuses:Oe,filteredStatuses:c})]})};var ve=function(e){return Object(h.jsx)(f,{children:Object(h.jsx)(fe,{})})};function _e(e){return Object(h.jsx)(f,{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("div",{children:"404"}),Object(h.jsx)("div",{children:"Page Not Found!"})]})})}var ye=function(e){return Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",children:Object(h.jsx)(ve,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/home",children:Object(h.jsx)(ve,{})}),Object(h.jsx)(o.a,{path:"*",children:Object(h.jsx)(_e,{})})]})};var ke=function(){return Object(h.jsx)(n.a,{children:Object(h.jsx)(d.a,{theme:O,children:Object(h.jsx)(ye,{})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(204);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(ke,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[206,1,2]]]);
//# sourceMappingURL=main.188e8e06.chunk.js.map