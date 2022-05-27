import{l as c}from"./6106a1d6.js";import{r as e}from"./index.05a944e4.js";function d(a,t){const[o,r]=e.exports.useState("loading"),s=JSON.stringify(t);return e.exports.useEffect(()=>{async function i(){try{r("loading"),await c(a,t),r("done")}catch{r("error")}}i()},[a,s,t]),o}export{d as useLoadScript};
//# sourceMappingURL=8889e7ec.js.map
