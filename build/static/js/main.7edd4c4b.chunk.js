(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{196:function(e,t,c){},197:function(e,t,c){},198:function(e,t,c){"use strict";c.r(t);var n=c(23),i=c.n(n),a=(c(84),c(1)),r=c.n(a),s=c(14),d=c(9),j=c.n(d),o=c(12),l=c(10),m=c(200),b=c(201),u=c(202),O=c(219),x=c(203),h=c(204),p=c(205),A=c(206),f=c(199),g=c(2),v=function(e){var t="$".concat(e.price.toFixed(2));return Object(g.jsx)(r.a.Fragment,{children:Object(g.jsx)("div",{children:Object(g.jsxs)("ul",{style:{border:"1px solid #ffe79e",padding:"10px"},children:[e.name,Object(g.jsx)(f.a,{className:"badge",style:{borderRadius:"10px"},children:e.amount}),Object(g.jsx)("button",{style:{float:"right",marginLeft:"5px"},className:"Addbutton",onClick:e.onRemove,children:"- Remove"}),Object(g.jsx)("button",{style:{float:"right"},className:"Addbutton",onClick:e.onAdd,children:"+ Add"}),Object(g.jsxs)("span",{style:{float:"right",marginRight:"10px"},children:[t," "]})]})})})},N=r.a.createContext({items:[],totalAmount:0,addItems:function(e){},removeItems:function(e){},clearCart:function(e,t){}}),y=function(e){var t=Object(a.useContext)(N),c="$".concat(t.totalAmount.toFixed(2)),n=function(e){t.addItems(Object(s.a)(Object(s.a)({},e),{},{amount:1}))},i=function(e){t.removeItems(e)};return Object(g.jsxs)(r.a.Fragment,{children:[t.items.map((function(e){return Object(g.jsx)(v,{name:e.name,price:e.price,amount:e.amount,onAdd:n.bind(null,e),onRemove:i.bind(null,e.id)},e.id)})),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:"Total Amount : "}),Object(g.jsx)("span",{style:{float:"right",marginRight:"130px"},children:c})]})]})},C=c.p+"static/media/logo.de5c1950.png",S="data:image/png;base64,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",R=(c(89),c(19)),F=c(79),w=c(26),D=w.a().shape({firstName:w.b().required("first name should not be empty"),lastName:w.b().required("last name should not be empty"),pincode:w.b().matches(/^[0-9]+$/,"Must be only digits").test("len","must be 5 chares long",(function(e){return 5===e.length})).required(),street:w.b().required("street should not be empty")}),B=function(e){var t,c,n,i,d=Object(R.d)({resolver:Object(F.a)(D)}),v=d.register,w=d.handleSubmit,B=d.reset,T=d.formState.errors,I=Object(a.useState)(!1),Q=Object(l.a)(I,2),J=Q[0],k=Q[1],P=Object(a.useState)(!1),V=Object(l.a)(P,2),E=V[0],Y=V[1],G=function(){return k(!J)},U=Object(a.useContext)(N),M=U.items.length>0,K=U.items.reduce((function(e,t){return e+t.amount}),0),L=function(){var e=Object(o.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={data:t,orderedItems:U.items},e.next=3,fetch("https://react-foodorder-ea422-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:c,orderedItems:U.items})});case 3:n=e.sent,console.log(c),U.clearCart(),G(),B(n),Y(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)(r.a.Fragment,{children:Object(g.jsx)("div",{children:Object(g.jsxs)(m.a,{color:"light",light:!0,expand:"md",className:"container-fluid fixed-top",children:[Object(g.jsxs)(b.a,{className:"navbar-brand ",children:[Object(g.jsx)("img",{src:C,alt:"Logoimage"}),"Food Order"]}),Object(g.jsx)(u.a,{className:" ms-auto pe-5",navbar:!0,children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("button",{className:"cart-btn",onClick:G,children:[Object(g.jsx)("img",{src:S,alt:"cartIcon",className:"cartLogo"}),"My Cart",Object(g.jsx)(f.a,{className:"badge",style:{borderRadius:"10px"},children:K})]}),Object(g.jsxs)(O.a,{isOpen:J,toggle:G,children:[Object(g.jsxs)(x.a,{toggle:G,children:[" ",Object(g.jsx)("img",{src:S,alt:"cartIcon",className:"cartLogo"})," Your Cart"]}),Object(g.jsx)(h.a,{children:Object(g.jsx)(y,{})}),Object(g.jsxs)(p.a,{children:[!E&&Object(g.jsx)(A.a,{className:"btn-cancel",onClick:G,children:"Cancel"}),M&&!E&&Object(g.jsx)(A.a,{className:"btn-order",onClick:function(){return Y(!0)},children:"Order"})]}),E&&Object(g.jsx)("div",{children:Object(g.jsxs)("form",{className:"order-form",onSubmit:w(L),children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"Fname",children:"First Name"}),Object(g.jsx)("input",Object(s.a)({id:"Fname",name:"firstName",type:"text"},v("firstName",{required:!0}))),Object(g.jsx)("p",{children:null===(t=T.firstName)||void 0===t?void 0:t.message})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"Lname",children:"Last Name"}),Object(g.jsx)("input",Object(s.a)({id:"Lname",name:"lastName",type:"text"},v("lastName",{required:!0}))),Object(g.jsx)("p",{children:null===(c=T.lastName)||void 0===c?void 0:c.message})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"pin",children:"PIN CODE"}),Object(g.jsx)("input",Object(s.a)({id:"pin",name:"pin"},v("pincode",{required:!0}))),Object(g.jsx)("p",{children:null===(n=T.pincode)||void 0===n?void 0:n.message})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"street",children:"Street"}),Object(g.jsx)("input",Object(s.a)({id:"street",name:"street",type:"text"},v("street",{required:!0}))),Object(g.jsx)("p",{children:null===(i=T.street)||void 0===i?void 0:i.message})]}),Object(g.jsx)("button",{className:"btn-cancel",onClick:G,children:"Cancel"}),Object(g.jsx)("button",{className:"btn-order",type:"submit",children:"Submit Order"})]})})]})]})})]})})})},T=c(78),I=c(207),Q=c(208),J=c(209),k=c(210),P=(c(196),c.p+"static/media/meal3.16519915.jpg"),V=c.p+"static/media/meal5.da4b2687.jpg",E=[{src:P,altText:"Slide 1",caption:Object(g.jsxs)("div",{className:"iceCream",children:[Object(g.jsx)("h5",{style:{color:"#f5c242"},children:"Top Selling"}),Object(g.jsx)("br",{}),Object(g.jsx)("h1",{children:"Fresh "}),Object(g.jsx)("h1",{className:"headCap",children:"Ice creams"}),Object(g.jsx)("br",{}),Object(g.jsx)("h3",{children:"Just Rs.99"})]})},{src:V,altText:"Slide 2",caption:Object(g.jsxs)("div",{className:"iceCream",children:[Object(g.jsx)("h5",{style:{color:"#f5c242"},children:"Top Selling"}),Object(g.jsx)("br",{}),Object(g.jsx)("h2",{children:"Get Healthy With"}),Object(g.jsx)("h1",{className:"headCap",children:"Fresh Salad"}),Object(g.jsx)("br",{}),Object(g.jsx)("h3",{children:"Just Rs.299"})]})}],Y=function(e){var t=Object(a.useState)(0),c=Object(l.a)(t,2),n=c[0],i=c[1],r=Object(a.useState)(!1),s=Object(l.a)(r,2),d=s[0],j=s[1],o=function(){if(!d){var e=n===E.length-1?0:n+1;i(e)}},m=function(){if(!d){var e=0===n?E.length-1:n-1;i(e)}},b=E.map((function(e){return Object(g.jsxs)(T.a,{onExiting:function(){return j(!0)},onExited:function(){return j(!1)},children:[Object(g.jsx)("img",{src:e.src,alt:e.altText,className:"imageItem"}),Object(g.jsx)(I.a,{captionText:e.caption,className:"caption"})]},e.src)}));return Object(g.jsxs)(Q.a,{activeIndex:n,next:o,previous:m,children:[Object(g.jsx)(J.a,{items:E,activeIndex:n,onClickHandler:function(e){d||i(e)}}),b,Object(g.jsx)(k.a,{direction:"prev",directionText:"Previous",onClickHandler:m}),Object(g.jsx)(k.a,{direction:"next",directionText:"Next",onClickHandler:o,className:"control"})]})},G=c(216),U=c(217),M=c(218),K=c.p+"static/media/tomatoEgg.2fe74ae3.jpg",L=c.p+"static/media/dessert.aa8f9f32.jpg",X=c.p+"static/media/creamSoup.9349c7a7.jpg",z=c.p+"static/media/pasta.b62b01f4.jpg",q=c.p+"static/media/salad.e925d469.jpg",W=c.p+"static/media/sichuan.9bfaa956.jpg",H=c.p+"static/media/soup.4b5d2f16.jpg",Z=c.p+"static/media/tomatoRice.7b5e435a.jpg",$=c(211),_=c(212),ee=c(213),te=c(214),ce=c(215),ne=(c(47),r.a.forwardRef((function(e,t){return Object(g.jsx)("input",Object(s.a)({className:"inputNum",ref:t},e.input))}))),ie=function(e){var t=Object(a.useState)(!0),c=Object(l.a)(t,2),n=c[0],i=c[1],s=Object(a.useRef)();return Object(g.jsx)(r.a.Fragment,{children:Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=s.current.value,n=+c;0===c.trim().length||n<1||n>5?i(!1):e.onAddtoCart(n)},children:[Object(g.jsxs)("button",{className:"Addbutton",type:"submit",children:[Object(g.jsx)(ne,{ref:s,input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),"Add"]}),"  ",!n&&Object(g.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})})},ae=function(e){var t=Object(a.useContext)(N);return Object(g.jsx)(r.a.Fragment,{children:Object(g.jsx)("div",{children:Object(g.jsxs)($.a,{className:"card",children:[Object(g.jsx)(_.a,{top:!0,src:e.src,alt:"Card image cap"}),Object(g.jsxs)(ee.a,{children:[Object(g.jsx)(te.a,{tag:"h6",className:"mb-2 text-muted",children:e.name}),Object(g.jsx)(ce.a,{children:e.description}),Object(g.jsx)("span",{children:e.price}),Object(g.jsx)(ie,{id:e.id,onAddtoCart:function(c){t.addItems({id:e.id,name:e.name,amount:c,price:e.price})}})]})]})})})},re=function(){var e=[{id:"1",name:"Tomatoes and Eggs",description:"Fresh tomato and eggs with a toast",price:25.5,src:K},{id:"2",name:"Dessert",description:"Dessert filled with freshness",price:14.4,src:L},{id:"3",name:"Cream Soup",description:"Hot and Sweet cream soup",price:55,src:X},{id:"4",name:"Pasta",description:"Mouth watering italian pasta",price:42.2,src:z},{id:"5",name:"Salad",description:"Fresh Salad from farm",price:12.1,src:q},{id:"6",name:"Sichuan",description:"Best Thai dish Hoty and Spicy",price:34.4,src:W},{id:"7",name:"Soup",description:"Start your Day with Tomato Soup",price:44.4,src:H},{id:"8",name:"Tomato Rice",description:"Tangy Rice with Hint of spice",price:22.8,src:Z}];return Object(g.jsx)(r.a.Fragment,{children:Object(g.jsx)(G.a,{fluid:!0,children:Object(g.jsx)(U.a,{children:e.map((function(e){return Object(g.jsx)(M.a,{md:3,children:Object(g.jsx)(ae,{id:e.id,name:e.name,description:e.description,price:e.price,src:e.src},e.id)})}))})})})},se=(c(197),function(){return Object(g.jsxs)(r.a.Fragment,{children:[Object(g.jsxs)("div",{className:"main",children:[Object(g.jsx)("h6",{style:{color:"#bd8c11"},children:"OUR PRODUCTS"}),Object(g.jsx)("h3",{children:"Top Recommended Dishes"})]}),Object(g.jsxs)("div",{className:"mainLink",children:[Object(g.jsx)("text",{children:Object(g.jsx)("a",{href:"#/",style:{color:"#bd8c11",borderBottom:"1px solid #bd8c11"},children:"Starter"})}),Object(g.jsx)("text",{children:Object(g.jsx)("a",{href:"#/",children:"Breakfast"})}),Object(g.jsx)("text",{children:Object(g.jsx)("a",{href:"#/",children:"Lunch"})}),Object(g.jsx)("text",{children:Object(g.jsx)("a",{href:"#/",children:"Dinner"})})]}),Object(g.jsx)("br",{})]})}),de=function(){return Object(g.jsxs)(r.a.Fragment,{children:[Object(g.jsx)(se,{}),Object(g.jsx)(re,{})]})},je=c(7),oe=function(e){var t={items:[],totalAmount:0},c=Object(a.useReducer)((function(e,c){if("ADD"===c.type){var n,i=e.items.findIndex((function(e){return e.id===c.item.id}));return-1===i?n=[].concat(Object(je.a)(e.items),[c.item]):(n=Object(je.a)(e.items))[i].amount+=c.item.amount,{items:n,totalAmount:e.totalAmount+c.item.price*c.item.amount}}if("REMOVE"===c.type){var a,r=e.items.findIndex((function(e){return e.id===c.id}));return 1===e.items[r].amount?a=e.items.filter((function(e){return e.id!==c.id})):(a=Object(je.a)(e.items))[r].amount-=1,{items:a,totalAmount:e.totalAmount-e.items[r].price}}return t}),t),n=Object(l.a)(c,2),i=n[0],r=n[1],s={items:i.items,totalAmount:i.totalAmount,addItems:function(e){r({type:"ADD",item:e})},removeItems:function(e){r({type:"REMOVE",id:e})},clearCart:function(e,t){r({type:"CLEAR",id:t,item:e})}};return Object(g.jsx)(N.Provider,{value:s,children:e.children})};var le=function(){return Object(g.jsxs)(oe,{value:N,children:[Object(g.jsx)(B,{}),Object(g.jsx)(Y,{}),Object(g.jsx)(de,{})]})};i.a.render(Object(g.jsx)(le,{}),document.getElementById("root"))},47:function(e,t,c){},84:function(e,t,c){},89:function(e,t,c){}},[[198,1,2]]]);
//# sourceMappingURL=main.7edd4c4b.chunk.js.map