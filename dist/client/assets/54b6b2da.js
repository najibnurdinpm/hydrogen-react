var g=Object.defineProperty;var s=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var p=(o,r,t)=>r in o?g(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,c=(o,r)=>{for(var t in r||(r={}))l.call(r,t)&&p(o,t,r[t]);if(s)for(var t of s(r))m.call(r,t)&&p(o,t,r[t]);return o};var f=(o,r)=>{var t={};for(var e in o)l.call(o,e)&&r.indexOf(e)<0&&(t[e]=o[e]);if(o!=null&&s)for(var e of s(o))r.indexOf(e)<0&&m.call(o,e)&&(t[e]=o[e]);return t};import{R as y}from"./index.05a944e4.js";import{u as w}from"./7673577b.js";import"./83a69ff7.js";import"./aec1b891.js";import"./c13bd456.js";import"./c34bdfb5.js";function j(o){const a=o,{data:r,as:t,withoutCurrency:e,withoutTrailingZeros:u}=a,h=f(a,["data","as","withoutCurrency","withoutTrailingZeros"]),i=w(r),d=t!=null?t:"div";let n=i.localizedString;return(e||u)&&(e&&!u?n=i.amount:!e&&u?n=i.withoutTrailingZeros:n=i.withoutTrailingZerosAndCurrency),y.createElement(d,c({},h),n)}export{j as Money};
//# sourceMappingURL=54b6b2da.js.map