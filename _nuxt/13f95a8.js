(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{460:function(t,r,n){"use strict";n.r(r);n(136);var e={validate:function(t){var r=t.params;return t.store.state.Fashion.Products.male.some((function(t){return t.id===r.id}))},asyncData:function(t){var r=t.params,n=t.store;return{product:n.state.Fashion.Products.male.find((function(t){return t.id===r.id})),similarProducts:n.state.Fashion.Products.male}},components:{singleProduct:n(387).default}},o=n(31),component=Object(o.a)(e,(function(){var t=this,r=t.$createElement;return(t._self._c||r)("singleProduct",{attrs:{product:t.product,similarProducts:t.similarProducts,params:t.$route.params.id,subCrumbName:"male",forBreadcrumbFa:"مردانه",subPath:"Fashion"}})}),[],!1,null,null,null);r.default=component.exports}}]);