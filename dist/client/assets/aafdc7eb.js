var y=Object.defineProperty,C=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var d=(t,o,r)=>o in t?y(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,f=(t,o)=>{for(var r in o||(o={}))m.call(o,r)&&d(t,r,o[r]);if(n)for(var r of n(o))h.call(o,r)&&d(t,r,o[r]);return t},b=(t,o)=>C(t,I(o));var k=(t,o)=>{var r={};for(var e in t)m.call(t,e)&&o.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&n)for(var e of n(t))o.indexOf(e)<0&&h.call(t,e)&&(r[e]=t[e]);return r};import{r as s,a as g}from"./index.05a944e4.js";import{j as v}from"./b3c7a578.js";import"./a9b6d49b.js";import"./ab9fabc7.js";import"./c13bd456.js";import"./83a69ff7.js";import"./c34bdfb5.js";import"./aec1b891.js";import"./fdb2e11a.js";import"./b2690ef3.js";function D(t){const{createInstantCheckout:o,checkoutUrl:r}=v(),[e,a]=s.exports.useState(!1),p=t,{quantity:i,variantId:u,attributes:c,children:x}=p,l=k(p,["quantity","variantId","attributes","children"]);s.exports.useEffect(()=>{r&&(window.location.href=r)},[r]);const w=s.exports.useCallback(()=>{a(!0),o({lines:[{quantity:i!=null?i:1,merchandiseId:u,attributes:c}]})},[a,o,i,u,c]);return g("button",b(f({disabled:e!=null?e:l.disabled},l),{onClick:w,children:x}))}export{D as BuyNowButton};
//# sourceMappingURL=aafdc7eb.js.map
