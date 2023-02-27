import{d as g,u as m,r as f,c as h,o as c,e as d,f as _,w as v,h as w,v as C,j as y,t as b,g as x,k as N}from"../index.js";import{T as k}from"./TheActionButton-3828d78c.js";const T=`<script type="module" crossorigin src="https://vida.turbinekreuzberg.com/index.js" id="vida-script"><\/script>
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
<\/script>`,P={class:"the-current-snippet"},$={key:0},H=["textContent"],I=g({__name:"TheCurrentSnippet",setup(S){const{configuration:u}=m(),s=f(!1),p=h(()=>{let n=T;const t=u.value,e=t.getInstitution(),o=e.hasChat()?e.getChat():null,r=i=>i.replace(/\\"/g,"&quot;"),a={color:`"${t.getHandColor()}"`,position:`"${t.getHandPosition()}"`,visible:t.isHandVisible()?"true":"false",language:`"${t.getLanguage()}"`,emergencyNumber:`"${t.getEmergencyNumber()}"`,institutionName:`"${e.getName()}"`,institutionPhone:`"${e.getPhone()}"`,institutionInformation:`"${r(e.getInformation())}"`,institutionChat:o?`"${o}"`:"null"};for(const i in a)n=n.replace(`###${i}###`,a[i]);return n}),l=async()=>{var e;const n=(e=document.querySelector(".the-current-snippet pre"))==null?void 0:e.innerHTML;function t(o){return new DOMParser().parseFromString(o,"text/html").documentElement.textContent||""}if(!n)throw new Error("Could not grasp code...");await navigator.clipboard.writeText(t(n)),s.value=!0,window.setTimeout(()=>s.value=!1,1e3)};return(n,t)=>(c(),d("div",P,[_(k,{color:"dark-rosa",onClick:l},{default:v(()=>[w(" Copy to clipboard "),s.value?(c(),d("span",$,"(done)")):C("",!0)]),_:1}),y("pre",{textContent:b(x(p))},null,8,H)]))}});const B=N(I,[["__scopeId","data-v-d5fc7260"]]);export{B as default};
