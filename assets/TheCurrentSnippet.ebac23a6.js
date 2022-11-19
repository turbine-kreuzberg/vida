import{d as l,u as p,r as g,c as f,o as r,b as a,i as s,g as h,q as m,t as v,f as _,j as w}from"../index.js";const b=`<script type="module" crossorigin src="https://vida.turbinekreuzberg.com/index.js" id="vida-script"><\/script>
<link rel="stylesheet" href="https://vida.turbinekreuzberg.com/index.css" />
<script type="text/javascript">
  window.addEventListener('vida-loaded', function (e) {
    window.vida = e.detail;
    window.vida.configuration = window.vida.Configuration.create();
    window.vida.configuration

      // general setting
      .setLanguage('###language###')
      .setHandColor('###color###')
      .setEmergencyNumber('110')
      .setHandVisible(###visible###)
      .setHandPosition('###position###')

      // institution setting
      .getInstitution()
      .setName('Hilfetelefon')
      .setPhone('08000116016')
      .setInformation('<p>Das Hilfetelefon "Gewalt gegen Frauen" ist ein bundesweites Beratungsangebot f\xFCr Frauen, die Gewalt erlebt haben oder noch erleben. Unter der Nummer 08000 116 016 und via Online-Beratung unterst\xFCtzen wir Betroffene aller Nationalit\xE4ten, mit und ohne Behinderung \u2013 365 Tage im Jahr, rund um die Uhr. Auch Angeh\xF6rige, Freundinnen und Freunde sowie Fachkr\xE4fte beraten wir anonym und kostenfrei.</p>')
      .setChat('https://login.beranet.de/chatlight/index.php?firma_id=850&type=infochat');

    window.vida.init(window.vida.configuration);
  });
<\/script>`,y={class:"the-current-snippet"},C={key:0},x=["textContent"],k=l({__name:"TheCurrentSnippet",setup(H){const{configuration:i}=p(),o=g(!1),d=f(()=>{let e=b;const n={color:i.value.getHandColor(),position:i.value.getHandPosition(),visible:i.value.isHandVisible()?"true":"false",language:i.value.getLanguage()};for(const t in n)e=e.replace(`###${t}###`,n[t]);return e}),c=async()=>{var t;const e=(t=document.querySelector(".the-current-snippet pre"))==null?void 0:t.innerHTML;function n(u){return new DOMParser().parseFromString(u,"text/html").documentElement.textContent||""}if(!e)throw new Error("Could not grasp code...");await navigator.clipboard.writeText(n(e)),o.value=!0,window.setTimeout(()=>o.value=!1,1e3)};return(e,n)=>(r(),a("div",y,[s("div",{class:"copy",onClick:c},[h(" Copy code to clipboard. "),o.value?(r(),a("span",C,"(done)")):m("",!0)]),s("pre",{textContent:v(_(d))},null,8,x)]))}});const N=w(k,[["__scopeId","data-v-2ca4d4f8"]]);export{N as default};
