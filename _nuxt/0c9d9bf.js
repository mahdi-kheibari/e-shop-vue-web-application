(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{457:function(t,r,e){"use strict";e.r(r);e(136);var n={validate:function(t){var r=t.params;return t.store.state.Beauty.Products.health.some((function(t){return t.id===r.id}))},asyncData:function(t){var r=t.params,e=t.store;return{product:e.state.Beauty.Products.health.find((function(t){return t.id===r.id})),similarProducts:e.state.Beauty.Products.health}},components:{singleProduct:e(387).default}},o=e(31),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement;return(t._self._c||r)("singleProduct",{attrs:{product:t.product,similarProducts:t.similarProducts,params:t.$route.params.id,subCrumbName:"health",forBreadcrumbFa:"سلامتی",subPath:"Beauty"}})}),[],!1,null,null,null);r.default=component.exports}}]);