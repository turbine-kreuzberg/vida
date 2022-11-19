import{d as o,u as a,c as s,o as d,b as c,i as u,t as p,f as l,j as g}from"../index.js";const f=`<script
  type="module"
  crossorigin
  src="https://vida.turbinekreuzberg.com/index.js"
  id="vida-script"
><\/script>
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
<\/script>`,h={class:"the-code-content"},_=["textContent"],m=o({__name:"TheCurrentSnippet",setup(v){const{configuration:n}=a(),r=s(()=>{let e=f;const t={color:n.value.getHandColor(),position:n.value.getHandPosition(),visible:n.value.isHandVisible()?"true":"false"};for(const i in t)e=e.replace(`###${i}###`,t[i]);return e});return(e,t)=>(d(),c("div",h,[u("pre",{textContent:p(l(r))},null,8,_)]))}});const b=g(m,[["__scopeId","data-v-36a107cf"]]);export{b as default};
