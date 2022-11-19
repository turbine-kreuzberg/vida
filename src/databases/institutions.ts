import { Institution } from '../models/Institution';

export const institutions: Institution[] = [
  new Institution(
    'Deutschland: Hilfetelefon',
    'Hilfetelefon',
    '08000116016',
    '<p>Das Hilfetelefon \\"Gewalt gegen Frauen\\" ist ein bundesweites Beratungsangebot für Frauen, die Gewalt erlebt haben oder noch erleben. Unter der Nummer 08000 116 016 und via Online-Beratung unterstützen wir Betroffene aller Nationalitäten, mit und ohne Behinderung – 365 Tage im Jahr, rund um die Uhr. Auch Angehörige, Freundinnen und Freunde sowie Fachkräfte beraten wir anonym und kostenfrei.</p>',
    'https://login.beranet.de/chatlight/index.php?firma_id=850&type=infochat'
  ),
  new Institution(
    'Portugal: APAV',
    'APAV',
    '116006',
    '<p>A APAV apoia pessoas vítimas de crime, seus familiares e amigos, de forma gratuita e confidencial.\\n</p><p>Oferecemos um apoio prático, psicológico, jurídico e social. Os/as nossos/as Técnicos/as de Apoio à Vítima são especializados no apoio a pessoas que foram ou são vítimas de algum tipo de crime e estão disponíveis para o ouvir, garantindo a confidencialidade e o respeito pela sua autonomia.</p>',
    'https://www.facebook.com/APAV.Portugal/'
  )
];
