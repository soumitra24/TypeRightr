import{r as t,f as O,j as e,B as o}from"./index-CzEx8CtP.js";/* empty css               */import{a as S,d as L}from"./FirebaseConfig-C4cAf6Ka.js";const A=()=>{const[n,i]=t.useState(!0),[d,c]=t.useState(""),[g,m]=t.useState(""),[p,h]=t.useState(""),[v,b]=t.useState(""),[r,x]=t.useState(""),[l,f]=t.useState(""),[a,u]=t.useState(""),P=()=>{j(),i(!0)},w=()=>{j(),i(!1)},j=()=>{c(""),m(""),h(""),b(""),x(""),f(""),u("")};t.useEffect(()=>{i(!1)},[]),t.useEffect(()=>{u(r!==l?"Passwords do not match":"")},[r,l]);const E=s=>{L.collection("Uname").add({userId:s,uname:p})},y=s=>{s.preventDefault(),a||S.createUserWithEmailAndPassword(v,r).then(C=>{const I=C.user.uid;E(I),o.success("Account Created! Please Log In to Continue.",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}).catch(()=>{o.error("🦄 Try Again :(",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})})},N=O(),U=s=>{s.preventDefault(),a||S.signInWithEmailAndPassword(d,g).then(()=>{o.success("Logged In!!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),N("/typingtest")}).catch(()=>{o.error("🦄 Wrong Credentials!!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})})};return e.jsx("div",{className:"Body",children:e.jsxs("div",{className:"Form",children:[e.jsxs("div",{className:"mods",children:[e.jsx("button",{onClick:P,className:n?"selected":"",children:"Log In"}),e.jsx("button",{onClick:w,className:n?"":"selected",children:"Sign Up"})]}),n?e.jsx("div",{className:"LogIn",children:e.jsxs("form",{onSubmit:U,children:[e.jsx("input",{type:"email",placeholder:"Email ID",required:!0,value:d,onChange:s=>c(s.target.value)}),e.jsx("br",{}),e.jsx("input",{type:"password",placeholder:"Password",required:!0,value:g,onChange:s=>m(s.target.value)}),e.jsx("br",{}),e.jsx("button",{className:"submit",type:"submit",children:"Submit"})]})}):e.jsx("div",{className:"SignUp",children:e.jsxs("form",{onSubmit:y,children:[e.jsx("input",{type:"text",placeholder:"Username",value:p,onChange:s=>h(s.target.value),required:!0}),e.jsx("br",{}),e.jsx("input",{type:"email",placeholder:"Email ID",value:v,onChange:s=>b(s.target.value),required:!0}),e.jsx("br",{}),e.jsx("input",{type:"password",placeholder:"Password",value:r,onChange:s=>x(s.target.value),required:!0}),e.jsx("br",{}),e.jsx("input",{type:"password",placeholder:"Confirm Password",value:l,onChange:s=>f(s.target.value),required:!0}),e.jsx("br",{}),e.jsx("div",{className:`error-message ${a?"visible":""}`,children:a}),e.jsx("button",{className:"submit",type:"submit",children:"Submit"})]})})]})})};export{A as default};
