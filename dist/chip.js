!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("lodash"),require("vue")):"function"==typeof define&&define.amd?define(["lodash","vue"],e):"object"==typeof exports?exports.chip=e(require("lodash"),require("vue")):t.chip=e(t.lodash,t.vue)}(this,function(t,e){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=16)}([function(t,e){t.exports=function(t,e,n,i,r){var s,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,a=t.default);var l="function"==typeof a?a.options:a;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i);var c;if(r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,p=u?l.render:l.beforeCreate;u?l.render=function(t,e){return c.call(e),p(t,e)}:l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:s,exports:a,options:l}}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(i[s]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=u[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(s(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(s(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function s(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(f)return b;i.parentNode.removeChild(i)}if(v){var s=_++;i=d||(d=r()),e=a.bind(null,i,s,!1),n=a.bind(null,i,s,!0)}else i=r(),e=o.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function a(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var s=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function o(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(32),u={},p=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,_=0,f=!1,b=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){f=n;var r=c(t,e);return i(r),function(e){for(var n=[],s=0;s<r.length;s++){var a=r[s],o=u[a.id];o.refs--,n.push(o)}e?(r=c(t,e),i(r)):r=[];for(var s=0;s<n.length;s++){var o=n[s];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete u[o.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var i=n(0)(n(12),n(26),null,null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(15),n(22),null,null,null);t.exports=i.exports},function(e,n){e.exports=t},function(t,e,n){function i(t){n(31)}var r=n(0)(n(9),n(27),i,null,null);t.exports=r.exports},function(t,e,n){function i(t){n(30)}var r=n(0)(n(10),n(25),i,null,null);t.exports=r.exports},function(t,e,n){function i(t){n(29)}var r=n(0)(n(11),n(24),i,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{invoices:{type:Array,required:!0}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),r=n.n(i);e.default={props:{routes:{type:Object,default:{form_post_update:""}},stripeForm:{type:Object,required:!0},paymentInfo:{type:Object,default:function(){return{card_brand:"",card_last_four:"",billing_address:"",billing_city:"",billing_state:"",billing_zip:"",billing_country:""}}},currency:{type:Object,default:function(){return{symbol:"$",code:"USD"}}}},computed:{hasPaymentInfo:function(){return this.paymentInfo.card_brand},billingAddress:function(){var t="";return t+=this.paymentInfo.billing_address?this.paymentInfo.billing_address+", ":"",t+=this.paymentInfo.billing_city?this.paymentInfo.billing_city+", ":"",t+=this.paymentInfo.billing_state?this.paymentInfo.billing_state+", ":"",t+=this.paymentInfo.billing_zip?this.paymentInfo.billing_zip+", ":"",t+=this.paymentInfo.billing_country?this.paymentInfo.billing_country+", ":"",t=t.replace(/\, $/,"")}},components:{"stripe-upgrade":r.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),r=n.n(i),s=n(20),a=n.n(s),o=n(21),l=n.n(o);e.default={props:{routes:{type:Object,default:{cancel_subscription:"",resume_subscription:"",change_plan:"",form_post_subscribe:""}},stripeForm:{type:Object,required:!0},plans:{type:Array,required:!0},subscription:{type:Object,default:function(){return{stripe_plan:"",cancelled:!1,on_grace_period:!1,ends_at:null}}},coupon:{type:String,default:""},currency:{type:Object,default:function(){return{symbol:"$",code:"USD"}}},listViewMinPlans:{type:Number,default:4}},data:function(){return{activePlan:null}},computed:{hasSubscription:function(){return!r.a.isEmpty(this.subscription)},hasActiveSubscription:function(){return this.hasSubscription&&!this.subscriptionIsExpired},subscriptionIsExpired:function(){return!!this.hasSubscription&&(this.subscription.cancelled&&!this.subscription.on_grace_period)},showResumeAlert:function(){return!!this.hasSubscription&&(this.subscription.cancelled&&this.subscription.on_grace_period)},showPricingTable:function(){return!this.hasSubscription||(!this.subscription.cancelled||this.subscriptionIsExpired)}},mounted:function(){this.setActivePlan()},methods:{setActivePlan:function(){this.hasSubscription&&this.plans.length&&(this.activePlan=r.a.find(this.plans,{id:this.subscription.stripe_plan}))},isCurrentPlan:function(t){return!this.hasSubscription&&!t||this.hasSubscription&&this.subscription.stripe_plan==t},showCancelButton:function(){return!!this.hasSubscription&&!this.subscription.cancelled},confirmCancel:function(t){confirm("Are you sure you want to cancel your subscription?")||t.preventDefault()}},watch:{subscription:function(){this.setActivePlan()}},components:{"column-view":a.a,"list-view":l.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),r=n.n(i),s=n(4),a=n.n(s);e.default={props:{routes:{type:Object,required:!0},stripeForm:{type:Object,required:!0},subscription:{type:Object,required:!0},coupon:{type:String,default:""},plan:{type:Object,required:!0},currency:{type:Object,required:!0}},computed:{hasSubscription:function(){return!r.a.isEmpty(this.subscription)},hasActiveSubscription:function(){return this.hasSubscription&&!this.subscriptionIsExpired},subscriptionIsExpired:function(){return!!this.hasSubscription&&(this.subscription.cancelled&&!this.subscription.on_grace_period)}},methods:{isCurrentPlan:function(t){return!this.hasSubscription&&!t||this.hasSubscription&&this.subscription.stripe_plan==t},showChangeButton:function(t){return this.hasActiveSubscription&&t},changeButtonText:function(t){return this.isCurrentPlan(t)?"Current Plan":"Change Plan"},confirmChange:function(t){if(t.target.getAttribute("disabled"))return void t.preventDefault();confirm("Are you sure you want to change your subscription? You will be charged a prorated amount now, then the new rate going forward.")||t.preventDefault()},showUpgradeButton:function(t){return!this.hasActiveSubscription&&t}},components:{"stripe-upgrade":a.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=n.n(i);e.default={props:{routes:{type:Object,required:!0},stripeForm:{type:Object,required:!0},plans:{type:Array,required:!0},subscription:{type:Object,required:!0},coupon:{type:String,required:!0},currency:{type:Object,required:!0}},components:{actions:r.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=n.n(i);e.default={props:{routes:{type:Object,required:!0},stripeForm:{type:Object,required:!0},plans:{type:Array,required:!0},subscription:{type:Object,required:!0},coupon:{type:String,required:!0},currency:{type:Object,required:!0}},components:{actions:r.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(33),r=n.n(i);e.default={props:["formData","action","text","plan","coupon","currency"],data:function(){return{stripe:null,stripeToken:"",billing_name:"",billing_address_country:"",billing_address_zip:"",billing_address_state:"",billing_address_line1:"",billing_address_city:"",billing_address_country_code:""}},created:function(){var t=this;this.stripe=StripeCheckout.configure({key:this.formData.stripe_key,name:this.formData.app_name,email:this.formData.user_email,currency:this.currency.code,locale:"auto",zipCode:!0,billingAddress:!0,allowRememberMe:!1,token:function(e,n){t.stripeToken=e.id,t.billing_name=n.billing_name,t.billing_address_country=n.billing_address_country,t.billing_address_zip=n.billing_address_zip,t.billing_address_state=n.billing_address_state,t.billing_address_line1=n.billing_address_line1,t.billing_address_city=n.billing_address_city,t.billing_address_country_code=n.billing_address_country_code,r.a.nextTick(function(){t.$el.submit()})}})},methods:{open:function(){this.plan?this.stripe.open({description:this.plan.name+" plan",amount:100*this.plan.price,panelLabel:"Pay {{amount}} "+this.plan.interval}):this.stripe.open({panelLabel:"Update Card Details"})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),r=n.n(i),s=n(7),a=n.n(s),o=n(6),l=n.n(o);n.d(e,"PlanAndPricing",function(){return r.a}),n.d(e,"PaymentInfo",function(){return a.a}),n.d(e,"PaymentHistory",function(){return l.a}),e.default={install:function(t){t.component("plan-and-pricing",r.a),t.component("payment-info",a.a),t.component("payment-history",l.a)}}},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,".pricing-table{margin-bottom:0}.pricing-table-column-view td,.pricing-table-column-view th{text-align:center}.pricing-table tbody tr td{border:0}.pricing-table .features{list-style:none;margin:0;padding:0}.pricing-table .table-spacer{padding:7px 5px}.resume-alert{margin-bottom:0}.coupon-alert,.plan-and-pricing-panel .cancel-btn{margin-top:20px}.coupon-alert{margin-bottom:0}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,".payment-info-spacer{padding:7px 5px}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,".payment-history-table .table-spacer{padding:4px 5px}",""])},function(t,e,n){var i=n(0)(n(13),n(23),null,null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(14),n(28),null,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{action:t.action,method:"post"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.csrf_token,expression:"formData.csrf_token"}],attrs:{type:"hidden",name:"_token"},domProps:{value:t.formData.csrf_token},on:{input:function(e){e.target.composing||(t.formData.csrf_token=e.target.value)}}}),t._v(" "),t.plan?n("input",{directives:[{name:"model",rawName:"v-model",value:t.plan.id,expression:"plan.id"}],attrs:{type:"hidden",name:"plan_id"},domProps:{value:t.plan.id},on:{input:function(e){e.target.composing||(t.plan.id=e.target.value)}}}):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.stripeToken,expression:"stripeToken"}],attrs:{type:"hidden",name:"stripeToken"},domProps:{value:t.stripeToken},on:{input:function(e){e.target.composing||(t.stripeToken=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.billing_name,expression:"billing_name"}],attrs:{type:"hidden",name:"billing_name"},domProps:{value:t.billing_name},on:{input:function(e){e.target.composing||(t.billing_name=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.billing_address_country,expression:"billing_address_country"}],attrs:{type:"hidden",name:"billing_address_country"},domProps:{value:t.billing_address_country},on:{input:function(e){e.target.composing||(t.billing_address_country=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.billing_address_zip,expression:"billing_address_zip"}],attrs:{type:"hidden",name:"billing_address_zip"},domProps:{value:t.billing_address_zip},on:{input:function(e){e.target.composing||(t.billing_address_zip=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.billing_address_state,expression:"billing_address_state"}],attrs:{type:"hidden",name:"billing_address_state"},domProps:{value:t.billing_address_state},on:{input:function(e){e.target.composing||(t.billing_address_state=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.billing_address_line1,expression:"billing_address_line1"}],attrs:{type:"hidden",name:"billing_address_line1"},domProps:{value:t.billing_address_line1},on:{input:function(e){e.target.composing||(t.billing_address_line1=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.billing_address_city,expression:"billing_address_city"}],attrs:{type:"hidden",name:"billing_address_city"},domProps:{value:t.billing_address_city},on:{input:function(e){e.target.composing||(t.billing_address_city=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.billing_address_country_code,expression:"billing_address_country_code"}],attrs:{type:"hidden",name:"billing_address_country_code"},domProps:{value:t.billing_address_country_code},on:{input:function(e){e.target.composing||(t.billing_address_country_code=e.target.value)}}}),t._v(" "),t.coupon?n("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon,expression:"coupon"}],attrs:{type:"hidden",name:"coupon"},domProps:{value:t.coupon},on:{input:function(e){e.target.composing||(t.coupon=e.target.value)}}}):t._e(),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.open}},[t._v(t._s(t.text))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table pricing-table pricing-table-column-view"},[n("thead",[n("tr",t._l(t.plans,function(e){return n("th",[n("strong",[t._v(t._s(e.name))])])}))]),t._v(" "),n("tbody",[n("tr",t._l(t.plans,function(e){return n("td",[t._v("\n\t\t\t\t"+t._s(t.currency.symbol)+t._s(e.price)+" "+t._s(e.interval)+"\n\t\t\t\t"),t.coupon?n("span",[t._v("*")]):t._e()])})),t._v(" "),n("tr",t._l(t.plans,function(e){return n("td",[n("ul",{staticClass:"features"},t._l(e.features,function(e){return n("li",[t._v(t._s(e))])}))])})),t._v(" "),n("tr",t._l(t.plans,function(e){return n("td",[n("actions",{attrs:{routes:t.routes,"stripe-form":t.stripeForm,subscription:t.subscription,coupon:t.coupon,plan:e,currency:t.currency}})],1)}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel panel-default plan-and-pricing-panel"},[n("div",{staticClass:"panel-heading"},[t._v("Plan and Pricing")]),t._v(" "),n("div",{staticClass:"panel-body"},[t.showResumeAlert?n("div",{staticClass:"alert alert-warning resume-alert"},[n("p",[t._v("You have cancelled your subscription to the\n\t\t\t\t"),t.activePlan?n("strong",[t._v(t._s(t.activePlan.name)+" ("+t._s(t.currency.symbol)+t._s(t.activePlan.price)+" "+t._s(t.activePlan.interval)+")")]):t._e(),t._v(" plan.\n\t\t\t")]),t._v(" "),n("p",[t._v("The benefits of your subscription will continue until your current billing period ends on\n\t\t\t\t"),t.hasSubscription?n("strong",[t._v(t._s(t.subscription.ends_at))]):t._e(),t._v(". You may resume your subscription at no\n\t\t\t\textra cost until the end of the billing period.")]),t._v(" "),n("p",{staticStyle:{"margin-top":"20px"}},[n("a",{staticClass:"btn btn-primary",attrs:{href:t.routes.resume_subscription}},[t._v("Resume Subscription")])])]):t._e(),t._v(" "),t.showPricingTable?n("div",[t.plans.length<t.listViewMinPlans?n("column-view",{attrs:{routes:t.routes,"stripe-form":t.stripeForm,plans:t.plans,subscription:t.subscription,coupon:t.coupon,currency:t.currency}}):n("list-view",{attrs:{routes:t.routes,"stripe-form":t.stripeForm,plans:t.plans,subscription:t.subscription,coupon:t.coupon,currency:t.currency}})],1):t._e(),t._v(" "),t.showCancelButton()?n("a",{staticClass:"btn btn-danger cancel-btn",attrs:{href:t.routes.cancel_subscription},on:{click:t.confirmCancel}},[t._v("Cancel Subscription")]):t._e(),t._v(" "),t.coupon?n("div",{staticClass:"alert alert-info coupon-alert"},[t._v("\n\t\t\t* price before coupon is applied\n\t\t")]):t._e()])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel panel-default payment-info-panel"},[n("div",{staticClass:"panel-heading"},[t._v("Payment Information")]),t._v(" "),n("div",{staticClass:"panel-body"},[t.hasPaymentInfo?n("div",[n("div",{staticClass:"pull-right"},[n("stripe-upgrade",{attrs:{text:"Update Details","form-data":t.stripeForm,action:t.routes.form_post_update,currency:t.currency}})],1),t._v(" "),n("div",{staticClass:"payment-info-spacer"},[n("p",[n("strong",[t._v("Card:")]),t._v(" "+t._s(t.paymentInfo.card_brand)+" ending in "),n("strong",[t._v(t._s(t.paymentInfo.card_last_four))])]),t._v(" "),t.billingAddress?n("p",{staticStyle:{"margin-bottom":"0"}},[n("strong",[t._v("Address:")]),t._v(" "+t._s(t.billingAddress))]):t._e()])]):n("em",[t._v("No payment information added yet")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showChangeButton(t.plan.id)?n("a",{staticClass:"btn",class:[t.isCurrentPlan(t.plan.id)?"btn-default":"btn-primary"],attrs:{href:t.routes.change_plan+"?plan_id="+t.plan.id,disabled:t.isCurrentPlan(t.plan.id)},on:{click:t.confirmChange}},[t._v(t._s(t.changeButtonText(t.plan.id)))]):t._e(),t._v(" "),t.showUpgradeButton(t.plan.id)?n("div",[t.isCurrentPlan(t.plan.id)?n("button",{staticClass:"btn btn-default",attrs:{type:"button",disabled:""}},[t._v("Current Plan")]):n("stripe-upgrade",{attrs:{text:"Upgrade","form-data":t.stripeForm,action:t.routes.form_post_subscribe,plan:t.plan,coupon:t.coupon,currency:t.currency}})],1):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel panel-default payment-history-panel"},[n("div",{staticClass:"panel-heading"},[t._v("Payment History")]),t._v(" "),n("div",{staticClass:"panel-body"},[t.invoices.length?n("table",{staticClass:"table payment-history-table"},[t._m(0),t._v(" "),n("tbody",t._l(t.invoices,function(e){return n("tr",[n("td",[n("div",{staticClass:"table-spacer"},[t._v(t._s(e.date))])]),t._v(" "),n("td",{staticClass:"text-right"},[n("div",{staticClass:"table-spacer"},[t._v(t._s(e.total))])]),t._v(" "),n("td",{staticClass:"text-right"},[e.link?n("a",{staticClass:"btn btn-default btn-sm",attrs:{href:e.link}},[t._v("Download")]):t._e()])])}))]):n("em",[t._v("No invoices yet")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Date")]),t._v(" "),n("th",{staticClass:"text-right"},[t._v("Total")]),t._v(" "),n("th")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table pricing-table pricing-table-list-view"},[n("tbody",t._l(t.plans,function(e){return n("tr",[n("td",[n("div",{staticClass:"table-spacer"},[n("strong",[t._v(t._s(e.name))])])]),t._v(" "),n("td",{staticClass:"text-center"},[n("div",{staticClass:"table-spacer"},[n("ul",{staticClass:"features"},t._l(e.features,function(e){return n("li",[t._v(t._s(e))])}))])]),t._v(" "),n("td",{staticClass:"text-center"},[n("div",{staticClass:"table-spacer"},[t._v("\n\t\t\t\t\t"+t._s(t.currency.symbol)+t._s(e.price)+" "+t._s(e.interval)+"\n\t\t\t\t\t"),t.coupon?n("span",[t._v("*")]):t._e()])]),t._v(" "),n("td",{staticClass:"text-right"},[n("actions",{attrs:{routes:t.routes,"stripe-form":t.stripeForm,subscription:t.subscription,coupon:t.coupon,plan:e,currency:t.currency}})],1)])}))])},staticRenderFns:[]}},function(t,e,n){var i=n(17);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("95d47bd6",i,!0)},function(t,e,n){var i=n(18);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("572cd858",i,!0)},function(t,e,n){var i=n(19);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("6e558418",i,!0)},function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var s=e[r],a=s[0],o=s[1],l=s[2],c=s[3],u={id:t+":"+r,css:o,media:l,sourceMap:c};i[a]?i[a].parts.push(u):n.push(i[a]={id:a,parts:[u]})}return n}},function(t,n){t.exports=e}])});
//# sourceMappingURL=chip.js.map