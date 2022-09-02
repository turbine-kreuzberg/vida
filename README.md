# Breakout

During the lockdowns, domestic violence has increased sharply, although the level is unfortunately always very high. It
is difficult for victims to ask for help because they often cannot withdraw from their tormentors, e.g. shared
apartment, no own bank card, cell phone is checked regularly, victims are separated from their families and friends by
their perpetrators etc....

## How to apply breakout on your website

Depending on your region, the institutions that provide help might defer. Also the emergency numbers are different in
each country. Please choose a snipped based on the ngo and country that fits your websites target-group.

### Germany & hilfetelefon.de

```html

<script type="module" crossorigin src="https://turbine-kreuzberg.github.io/melb/code.js"></script>
<link rel="stylesheet" href="https://turbine-kreuzberg.github.io/melb/style.css">
<script type="text/javascript">
  window.addEventListener('breakout-loaded', function (e) {
    window.breakout = e.detail
    window.breakout.init({
      language: 'en',
      emergencyNumber: '110',
      institution: {
        name: 'Hilfetelefon',
        phone: '08000116016',
        information: "<p>Das Hilfetelefon \"Gewalt gegen Frauen\" ist ein bundesweites Beratungsangebot für Frauen, die Gewalt erlebt haben oder noch erleben. Unter der Nummer 08000 116 016 und via Online-Beratung unterstützen wir Betroffene aller Nationalitäten, mit und ohne Behinderung – 365 Tage im Jahr, rund um die Uhr. Auch Angehörige, Freundinnen und Freunde sowie Fachkräfte beraten wir anonym und kostenfrei.</p>",
        chat: 'https://login.beranet.de/chatlight/index.php?firma_id=850&type=infochat'
      },
      widget: {
        showHand: true,
        position: 'bottom-right'
      },
    })
  })
</script>
```

## Portugal & APAV

```html

<script type="module" src="/src/main.ts"></script>
<script type="text/javascript">
  window.addEventListener('breakout-loaded', function (e) {
    window.breakout = e.detail
    window.breakout.init({
      language: 'en',
      emergencyNumber: '112',
      institution: {
        name: 'APAV',
        phone: '116006',
        information: "<p>A APAV apoia pessoas vítimas de crime, seus familiares e amigos, de forma gratuita e confidencial.\n</p><p>Oferecemos um apoio prático, psicológico, jurídico e social. Os/as nossos/as Técnicos/as de Apoio à Vítima são especializados no apoio a pessoas que foram ou são vítimas de algum tipo de crime e estão disponíveis para o ouvir, garantindo a confidencialidade e o respeito pela sua autonomia.</p>",
        chat: 'https://www.facebook.com/APAV.Portugal/'
      },
      widget: {
        showHand: true,
        position: 'bottom-right'
      },
    })
  })
</script>
```

### Open breakout from anywhere

You can open breakout from anywhere. You do not need to add it as a fixed badge on your page.

```html
<a href="#" onclick="window.breakout.open(); return false;">Open popup</a>
```