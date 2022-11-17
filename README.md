# VIDA

A widget to take part on supporting **vi**ctims of **d**omestic **a**buse.

The widget can be applied on any website. The outcome will be a little hand on the screen, which can be used by victims
to retrieve information & help. The interaction with the widget is not trackable by abusers.

A more discreet implementation is also possible. See chapter: **Open widget from anywhere**

Try out here: https://vida.turbinekreuzberg.com

## Usage

Depending on your region, the institutions that provide help might defer. Also, the emergency numbers are different in
each country. Please choose a snippet based on the ngo and country that fits your websites target-group. If your country
and institution does not exist in the following examples, feel free to contact us, so we see if we can provide a
configuration.

Also feel free to suggest us new configurations.

### Germany & hilfetelefon.de

```html

<script type="module" crossorigin src="https://vida.turbinekreuzberg.com/index.js" id="vida-script"></script>
<link rel="stylesheet" href="https://vida.turbinekreuzberg.com/index.css">
<script type="text/javascript">
    window.addEventListener('vida-loaded', function (e) {
        window.vida = e.detail
        window.vida.init({
            language: 'de',
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

### Portugal & APAV

```html

<script type="module" crossorigin src="https://vida.turbinekreuzberg.com/index.js" id="vida-script"></script>
<link rel="stylesheet" href="https://vida.turbinekreuzberg.com/index.css">
<script type="text/javascript">
    window.addEventListener('vida-loaded', function (e) {
        window.vida = e.detail
        window.vida.init({
            language: 'pt',
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

...

> ... more snippets will follow. If you have suggestions for country/institution combinations, let us know!

### Open widget from anywhere

The widget can also be placed in a more discreet way as a link, without the hand-badge. Just set `showHand` to false and
add the link like following:

```html
<a href="#" onclick="window.vida.open(); return false;">Open widget</a>
```