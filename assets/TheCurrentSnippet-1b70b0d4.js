import{d as m,u as f,r as h,c as _,o as c,b as d,i as u,f as v,q as w,t as C,g as y,j as b}from"../index.js";const x=`<script type="module" crossorigin src="https://vida.turbinekreuzberg.com/index.js" id="vida-script"><\/script>
<link rel="stylesheet" href="https://vida.turbinekreuzberg.com/index.css" />
<script type="text/javascript">
  window.addEventListener('vida-loaded', function (e) {
    window.vida = e.detail;
    window.vida.configuration = window.vida.Configuration.create();
    window.vida.configuration

      // general setting
      .setLanguage(###language###)
      .setHandColor(###color###)
      .setEmergencyNumber(###emergencyNumber###)
      .setHandVisible(###visible###)
      .setHandPosition(###position###)

      // institution setting
      .getInstitution()
      .setName(###institutionName###)
      .setPhone(###institutionPhone###)
      .setInformation(###institutionInformation###)
      .setChat(###institutionChat###);

    window.vida.init(window.vida.configuration);
  });
<\/script>`,N={class:"the-current-snippet"},k={key:0},P=["textContent"],$=m({__name:"TheCurrentSnippet",setup(T){const{configuration:p}=f(),s=h(!1),l=_(()=>{let n=x;const e=p.value,t=e.getInstitution(),o=t.hasChat()?t.getChat():null,r=i=>i.replace(/\\"/g,"&quot;"),a={color:`"${e.getHandColor()}"`,position:`"${e.getHandPosition()}"`,visible:e.isHandVisible()?"true":"false",language:`"${e.getLanguage()}"`,emergencyNumber:`"${e.getEmergencyNumber()}"`,institutionName:`"${t.getName()}"`,institutionPhone:`"${t.getPhone()}"`,institutionInformation:`"${r(t.getInformation())}"`,institutionChat:o?`"${o}"`:"null"};for(const i in a)n=n.replace(`###${i}###`,a[i]);return n}),g=async()=>{var t;const n=(t=document.querySelector(".the-current-snippet pre"))==null?void 0:t.innerHTML;function e(o){return new DOMParser().parseFromString(o,"text/html").documentElement.textContent||""}if(!n)throw new Error("Could not grasp code...");await navigator.clipboard.writeText(e(n)),s.value=!0,window.setTimeout(()=>s.value=!1,1e3)};return(n,e)=>(c(),d("div",N,[u("div",{class:"copy",onClick:g},[v(" Copy code to clipboard. "),s.value?(c(),d("span",k,"(done)")):w("",!0)]),u("pre",{textContent:C(y(l))},null,8,P)]))}});const I=b($,[["__scopeId","data-v-43e8008f"]]);export{I as default};
