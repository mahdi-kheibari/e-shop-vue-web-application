(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{442:function(t,e,o){"use strict";o.r(e);var r={computed:{digitalCategory:function(){return this.$store.state.categories.allCategories["Digital products"].products},houseCategory:function(){return this.$store.state.categories.allCategories.House.products}},components:{categoryPage:o(388).default},asyncData:function(t){var e=t.store,o={},r=e.state.Digital.Products,c=e.state.House.Products;for(var n in r)o[n]=r[n];for(var d in c)o[d]=c[d];return{Products:o}}},c=o(31),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("categoryPage",{attrs:{productsCategory:t.digitalCategory,productsCategory2:t.houseCategory,productsItems:t.Products,subRoute:"/Products/Digital/",subRoute2:"/Products/House/",activeText:t.$tc("categoryAside.footer",1)}})}),[],!1,null,null,null);e.default=component.exports}}]);