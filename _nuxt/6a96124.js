(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{455:function(t,r,n){"use strict";n.r(r);n(136);var e={validate:function(t){var r=t.params;return t.store.state.House.Products.cleaning.some((function(t){return t.id===r.id}))},asyncData:function(t){var r=t.params,n=t.store;return{product:n.state.House.Products.cleaning.find((function(t){return t.id===r.id})),similarProducts:n.state.House.Products.cleaning}},components:{singleProduct:n(387).default}},o=n(31),component=Object(o.a)(e,(function(){var t=this,r=t.$createElement;return(t._self._c||r)("singleProduct",{attrs:{product:t.product,similarProducts:t.similarProducts,params:t.$route.params.id,subCrumbName:"cleaning",forBreadcrumbFa:"نظافت",subPath:"House"}})}),[],!1,null,null,null);r.default=component.exports}}]);