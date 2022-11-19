import{d as m,u as f,r as h,c as s,o as a,b as d,i,g as _,q as v,n as w,f as c,t as b,F as y,j as C}from"../index.js";const x=`<script type="module" crossorigin src="https://vida.turbinekreuzberg.com/index.js" id="vida-script"><\/script>
<link rel="stylesheet" href="https://vida.turbinekreuzberg.com/index.css" />
<script type="text/javascript">
  window.addEventListener('vida-loaded', function (e) {
    window.vida = e.detail;
    window.vida.configuration = window.vida.Configuration.create();
    window.vida.configuration

      // general setting
      .setLanguage('en')
      .setHandColor('###color###')
      .setEmergencyNumber('110')
      .setHandVisible(###visible###)
      .setHandPosition(###position###)

      // institution setting
      .getInstitution()
      .setName('Hilfetelefon')
      .setPhone('08000116016')
      .setInformation('<p>Das Hilfetelefon "Gewalt gegen Frauen" ist ein bundesweites Beratungsangebot f\xFCr Frauen, die Gewalt erlebt haben oder noch erleben. Unter der Nummer 08000 116 016 und via Online-Beratung unterst\xFCtzen wir Betroffene aller Nationalit\xE4ten, mit und ohne Behinderung \u2013 365 Tage im Jahr, rund um die Uhr. Auch Angeh\xF6rige, Freundinnen und Freunde sowie Fachkr\xE4fte beraten wir anonym und kostenfrei.</p>')
      .setChat('https://login.beranet.de/chatlight/index.php?firma_id=850&type=infochat');

    window.vida.init(window.vida.configuration);
  });
<\/script>`,k={key:0},H={class:"the-current-snippet"},T={class:"scroll-area"},F=["textContent"],S=m({__name:"TheCurrentSnippet",setup(B){const{configuration:o}=f(),r=h(!1),l=s(()=>{let e=x;const n={color:o.value.getHandColor(),position:o.value.getHandPosition(),visible:o.value.isHandVisible()?"true":"false"};for(const t in n)e=e.replace(`###${t}###`,n[t]);return e}),u=async()=>{var t;const e=(t=document.querySelector(".the-current-snippet pre"))==null?void 0:t.innerHTML;function n(g){return new DOMParser().parseFromString(g,"text/html").documentElement.textContent||""}if(!e)throw new Error("Could not grasp code...");await navigator.clipboard.writeText(n(e)),r.value=!0,window.setTimeout(()=>r.value=!1,1e3)},p=s(()=>({"--color":o.value.getHandColor()}));return(e,n)=>(a(),d(y,null,[i("a",{style:w(c(p)),class:"copy",onClick:u},[_(" \u2398 Copy code to clipboard. "),r.value?(a(),d("span",k,"(done)")):v("",!0)],4),i("div",H,[i("div",T,[i("pre",{textContent:b(c(l))},null,8,F)])])],64))}});const E=C(S,[["__scopeId","data-v-0d3d22db"]]);export{E as default};
