var h=Object.defineProperty,x=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var C=(t,r,o)=>r in t?h(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,u=(t,r)=>{for(var o in r||(r={}))P.call(r,o)&&C(t,o,r[o]);if(g)for(var o of g(r))_.call(r,o)&&C(t,o,r[o]);return t},c=(t,r)=>x(t,D(r));import{r as f}from"./index.05a944e4.js";import{u as S}from"./c13bd456.js";function z(t){const{locale:r}=S(),o=f.exports.useMemo(()=>({style:"currency",currency:t.currencyCode}),[t.currencyCode]),e=parseFloat(t.amount),i=f.exports.useMemo(()=>new Intl.NumberFormat(r,o).format(e),[e,r,o]),a=new Intl.NumberFormat(r,o).formatToParts(e),v=new Intl.NumberFormat(r,c(u({},o),{currencyDisplay:"name"})).formatToParts(e),w=new Intl.NumberFormat(r,c(u({},o),{currencyDisplay:"narrowSymbol"})).formatToParts(e),N=new Intl.NumberFormat(r,c(u({},o),{minimumFractionDigits:0,maximumFractionDigits:0})),I=new Intl.NumberFormat(r),T=new Intl.NumberFormat(r,{minimumFractionDigits:0,maximumFractionDigits:0}),F=e%1===0?N.format(e):i,b=e%1===0?T.format(e):I.format(e);return f.exports.useMemo(()=>{var m,l,s,y,d,p;return{currencyCode:t.currencyCode,currencyName:(l=(m=v.find(n=>n.type==="currency"))===null||m===void 0?void 0:m.value)!==null&&l!==void 0?l:t.currencyCode,currencySymbol:(y=(s=a.find(n=>n.type==="currency"))===null||s===void 0?void 0:s.value)!==null&&y!==void 0?y:t.currencyCode,currencyNarrowSymbol:(p=(d=w.find(n=>n.type==="currency"))===null||d===void 0?void 0:d.value)!==null&&p!==void 0?p:"",parts:a,localizedString:i,amount:a.filter(n=>["decimal","fraction","group","integer","literal"].includes(n.type)).map(n=>n.value).join(""),original:t,withoutTrailingZeros:F,withoutTrailingZerosAndCurrency:b}},[a,t,v,w,i,F,b])}export{z as u};
//# sourceMappingURL=7673577b.js.map
