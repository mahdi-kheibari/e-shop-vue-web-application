(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{458:function(t,r,o){"use strict";o.r(r);o(136);var n={validate:function(t){var r=t.params;return t.store.state.Digital.Products.laptop.some((function(t){return t.id===r.id}))},asyncData:function(t){var r=t.params,o=t.store;return{product:o.state.Digital.Products.laptop.find((function(t){return t.id===r.id})),similarProducts:o.state.Digital.Products.laptop}},components:{singleProduct:o(387).default}},e=o(31),component=Object(e.a)(n,(function(){var t=this,r=t.$createElement;return(t._self._c||r)("singleProduct",{attrs:{product:t.product,similarProducts:t.similarProducts,params:t.$route.params.id,subCrumbName:"laptop",forBreadcrumbFa:"لپ تاپ",subPath:"Digital"}})}),[],!1,null,null,null);r.default=component.exports}}]);