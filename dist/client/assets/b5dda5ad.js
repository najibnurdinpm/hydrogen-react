import{R as p}from"./index.05a944e4.js";import{u as m}from"./c13bd456.js";import{useLoadScript as l}from"./8889e7ec.js";import"./83a69ff7.js";import"./c34bdfb5.js";import"./6106a1d6.js";const c="https://cdn.shopify.com/shopifycloud/shop-js/v0.8/client.js";function w({variantIds:t,className:u,variantIdsAndQuantities:r}){const{storeDomain:d}=m(),h=l(c);let n;if(t&&r)throw new Error(v);if(t)n=t.reduce((s,o)=>{const e=a(o);return e&&s.push(e),s},[]);else if(r)n=r.reduce((s,o)=>{var e;const i=a(o==null?void 0:o.id);return i&&s.push(`${i}:${(e=o==null?void 0:o.quantity)!==null&&e!==void 0?e:1}`),s},[]);else throw new Error(f);return p.createElement("div",{className:u,tabIndex:0},h==="done"&&p.createElement("shop-pay-button",{"store-url":`https://${d}`,variants:n.join(",")}))}function a(t){if(!!t)return t.split("/").pop()}const f='You must pass in either "variantIds" or "variantIdsAndQuantities" to ShopPayButton',v="You must provide either a variantIds or variantIdsAndQuantities prop, but not both in the ShopPayButton component";export{v as DoublePropsErrorMessage,f as MissingPropsErrorMessage,w as ShopPayButton,a as getIdFromGid};
//# sourceMappingURL=b5dda5ad.js.map
