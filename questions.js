// Întrebări Grilă generate din cursurile TW-CSS (Curs 3, Curs 5, Curs 6, Curs 7)
var QUIZ_QUESTIONS = [
  {
    "id": 1,
    "course": "Curs 3",
    "category": "Sintaxă & Baze CSS",
    "difficulty": "Ușor",
    "question": "Care este rolul distinct al limbajului CSS în raport cu HTML?",
    "code": null,
    "options": [
      "HTML și CSS sunt interdependente și trebuie combinate obligatoriu în același fișier.",
      "HTML reprezintă structura și conținutul unei pagini web, în timp ce CSS controlează aspectul și forma acestui conținut.",
      "CSS gestionează logica dinamică și interogările la baza de date, iar HTML stilizează componentele.",
      "CSS este un limbaj compilat pe server care generează arborele DOM."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 3 (Slide 2), cele două limbaje sunt independente. HTML reprezintă structura și conținutul unei pagini web, în timp ce CSS controlează aspectul și forma acestui conținut. Este o bună practică să nu se amestece codul CSS în interiorul documentului HTML."
  },
  {
    "id": 2,
    "course": "Curs 3",
    "category": "Metode de Includere",
    "difficulty": "Ușor",
    "question": "Care sunt cele trei atribute standard ale etichetei <link> folosite pentru includerea unei foi de stil externe?",
    "code": "<link rel=\"stylesheet\" href=\"css/styles.css\" type=\"text/css\">",
    "options": [
      "src, type, media",
      "href, rel, type",
      "url, rel, target",
      "href, class, format"
    ],
    "answer": 1,
    "explanation": "Elementul <link> (Curs 3, Slide 2) nu are tag de închidere, se plasează în <head> și folosește: href (calea către fișier), rel=\"stylesheet\" (relația documentului) și type=\"text/css\" (tipul MIME)."
  },
  {
    "id": 3,
    "course": "Curs 3",
    "category": "Bune Practici",
    "difficulty": "Ușor",
    "question": "De ce este considerată utilizarea CSS-ului extern o bună practică (Good Practice)?",
    "code": null,
    "options": [
      "Permite executarea regulilor CSS asincron pe plăci video dedicate.",
      "Toate paginile site-ului pot partaja același fișier CSS, reducând redundanța, permițând caching-ul în browser și facilitând mentenanța centralizată.",
      "Stilurile inline sunt deprecate și generează erori de compilare în HTML5.",
      "Doar fișierele externe permit utilizarea variabilelor CSS și a pseudo-claselor."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 3 (Slide 3): Toate paginile partajează același fișier <link>, nu se repetă codul, site-ul se încarcă mai rapid (caching), modificările se fac într-un singur fișier, iar codul HTML este mai curat și ușor de citit."
  },
  {
    "id": 4,
    "course": "Curs 3",
    "category": "Sintaxă & Reguli",
    "difficulty": "Ușor",
    "question": "Din ce componente principale este alcătuită o regulă CSS standard?",
    "code": "h1 {\n  color: red;\n  font-size: 24px;\n}",
    "options": [
      "Dintr-un tag HTML și o funcție JavaScript.",
      "Dintr-un selector și un bloc de declarații (perechi proprietate-valoare între acolade).",
      "Dintr-o interogare media și o variabilă globală.",
      "Dintr-o clasă și un eveniment DOM."
    ],
    "answer": 1,
    "explanation": "O regulă CSS este compusă dintr-un selector (care identifică elementele țintă) urmat de acolade ce conțin una sau mai multe declarații (perechi proprietate-valoare separate prin două puncte și finalizate cu punct și virgulă)."
  },
  {
    "id": 5,
    "course": "Curs 3",
    "category": "Proprietăți Speciale",
    "difficulty": "Mediu",
    "question": "Ce valoare va prelua bordura elementului în următorul fragment de cod ce utilizează cuvântul-cheie \"currentColor\"?",
    "code": "<div style=\"color: blue; border: 1px dashed currentcolor;\">\n  Blue text\n</div>",
    "options": [
      "Negru (#000000), deoarece este culoarea implicită a browserului pentru borduri.",
      "Albastru (blue), deoarece currentColor referă direct valoarea curentă a proprietății color a elementului.",
      "Transparent, deoarece currentColor necesită o funcție de calcul.",
      "Gri (gray), valoarea implicită din User Agent Stylesheet."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 3 (Slide 3), cuvântul-cheie currentColor reprezintă valoarea proprietății color a elementului (sau moștenită de la părinte). Astfel, chenarul devine albastru."
  },
  {
    "id": 6,
    "course": "Curs 3",
    "category": "Selectori de Atribut",
    "difficulty": "Mediu",
    "question": "Care selector de atribut va selecta exclusiv link-urile ale căror adrese URL încep cu protocolul securizat \"https://\"?",
    "code": null,
    "options": [
      "a[href*=\"https://\"]",
      "a[href^=\"https://\"]",
      "a[href$=\"https://\"]",
      "a[href~=\"https://\"]"
    ],
    "answer": 1,
    "explanation": "Sintaxa selectorilor de atribute (Curs 3, Slide 6): [attr^=\"val\"] înseamnă prefix (începe cu), [attr$=\"val\"] înseamnă sufix (se termină cu), iar [attr*=\"val\"] înseamnă că subșirul apare oriunde."
  },
  {
    "id": 7,
    "course": "Curs 3",
    "category": "Combinatori CSS",
    "difficulty": "Mediu",
    "question": "Având structura HTML dată, care elemente <p> vor fi colorate în roșu de regula: \"div > p { color: red; }\"?",
    "code": "<div>\n  <p>Paragraf 1</p>\n  <section>\n    <p>Paragraf 2</p>\n  </section>\n  <p>Paragraf 3</p>\n</div>",
    "options": [
      "Toate cele 3 paragrafe (Paragraf 1, 2 și 3).",
      "Doar Paragraf 1 și Paragraf 3, deoarece sunt copii direcți (child) ai elementului <div>.",
      "Doar Paragraf 2, fiind cel mai adânc imbricat.",
      "Niciun paragraf, sintaxa este incorectă."
    ],
    "answer": 1,
    "explanation": "Combinatorul copil direct \">\" selectează doar elementele care sunt direct descendente (copii de nivel 1). Paragraf 2 este copil al lui <section>, deci este doar descendent al <div>, nu copil direct."
  },
  {
    "id": 8,
    "course": "Curs 3",
    "category": "Combinatori CSS",
    "difficulty": "Mediu",
    "question": "Ce element este vizat de combinatorul next-sibling definit prin regula: \"h1 + p\"?",
    "code": "h1 + p {\n  font-weight: bold;\n}",
    "options": [
      "Toate paragrafele din interiorul titlului <h1>.",
      "Toate paragrafele care urmează după <h1> în aceeași secțiune.",
      "Doar primul paragraf <p> care este plasat imediat după elementul <h1>, având același părinte comun.",
      "Paragrafele care au aceeași clasă ca și <h1>."
    ],
    "answer": 2,
    "explanation": "Combinatorul \"+\" (Next-sibling) selectează elementul frate plasat imediat după primul element specificat la același nivel în ierarhia DOM."
  },
  {
    "id": 9,
    "course": "Curs 3",
    "category": "Pseudo-clase Funcționale",
    "difficulty": "Avansat",
    "question": "Ce efect are regula CSS: \"p:has(img)\"?",
    "code": "p:has(img) {\n  border: 2px solid green;\n}",
    "options": [
      "Aplică o bordură verde imaginilor <img> aflate în paragrafe.",
      "Aplică o bordură verde oricărui paragraf <p> care conține în interiorul său cel puțin o imagine <img>.",
      "Selectează paragrafele care sunt urmate imediat de o imagine.",
      "Transformă paragraful într-un container flexibil pentru imagini."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 3 (Slide 8), :has() este o pseudo-clasă relațională/funcțională care permite selectarea unui element părinte în funcție de conținutul sau frații săi. \"p:has(img)\" selectează paragraful ce conține un <img>."
  },
  {
    "id": 10,
    "course": "Curs 3",
    "category": "Pseudo-clase Link-uri",
    "difficulty": "Ușor",
    "question": "Care este ordinea corectă de definire a pseudo-claselor pentru stările link-urilor (regula LVHA)?",
    "code": "/* Ordinea corectă în fișierul CSS */\na:link { ... }\na:visited { ... }\na:hover { ... }\na:active { ... }",
    "options": [
      ":hover, :active, :visited, :link",
      ":link, :visited, :hover, :active",
      ":active, :link, :hover, :visited",
      ":visited, :link, :active, :hover"
    ],
    "answer": 1,
    "explanation": "Conform Cursului 3 (Slide 9), ordinea corectă pentru funcționarea corespunzătoare a stărilor de interacțiune conform cascadei este LVHA: :link, :visited, :hover, :active."
  },
  {
    "id": 11,
    "course": "Curs 3",
    "category": "Pseudo-clase Structurale",
    "difficulty": "Mediu",
    "question": "Care selector va selecta rândurile impare dintr-un tabel (1, 3, 5, etc.)?",
    "code": null,
    "options": [
      "tr:nth-child(even)",
      "tr:nth-child(odd)",
      "tr:first-child",
      "tr:only-child"
    ],
    "answer": 1,
    "explanation": "Pseudo-clasa :nth-child(odd) vizează copiii cu indici impari (1, 3, 5...), în timp ce :nth-child(even) vizează copiii pari (2, 4, 6...)."
  },
  {
    "id": 12,
    "course": "Curs 5",
    "category": "Cascading Algorithm",
    "difficulty": "Mediu",
    "question": "Care este ordinea corectă de prioritizare a regulilor în algoritmul CSS Cascade?",
    "code": null,
    "options": [
      "Order -> Specificity -> Inheritance -> Origin -> Importance",
      "Importance -> Origin & Importance -> Specificity -> Order -> Inheritance",
      "Inheritance -> Order -> Specificity -> Importance -> Origin",
      "Specificity -> Order -> Origin -> Importance -> Inheritance"
    ],
    "answer": 1,
    "explanation": "Conform Cursului 5 (Slide 1), ordinea de prioritate este: 1. Importance (!important), 2. Origin (User Agent, User, Author), 3. Specificity (scorul selectorului), 4. Order (ordinea în fișier - ultima declarație câștigă), 5. Inheritance (moștenirea)."
  },
  {
    "id": 13,
    "course": "Curs 5",
    "category": "Moștenire CSS (Quiz Curs)",
    "difficulty": "Mediu",
    "question": "Conform QUIZ-ului din Cursul 5 (Slide 3), care dintre următoarele proprietăți se moștenesc automat de la părinte la descendenți?",
    "code": "/* Proprietăți evaluate: */\nFont, Color, Background, Box-sizing, Display",
    "options": [
      "Doar Background și Display",
      "Font și Color",
      "Box-sizing și Display",
      "Toate cele 5 proprietăți se moștenesc"
    ],
    "answer": 1,
    "explanation": "Proprietățile legate de conținutul textual și tipografie (font, color, line-height, text-align) se moștenesc automat. Proprietățile legate de cutie și layout (background, box-sizing, display, margin, padding, border) NU se moștenesc."
  },
  {
    "id": 14,
    "course": "Curs 5",
    "category": "Specificitate CSS (Quiz Curs)",
    "difficulty": "Avansat",
    "question": "Care este scorul de specificitate al selectorului \"header.navigation p\" (reprezentat ca vector: Inline, ID, Clasă/Pseudo-clasă/Atribut, Element)?",
    "code": "header.navigation p {\n  color: blue;\n}",
    "options": [
      "0, 1, 0, 1",
      "0, 0, 1, 2",
      "0, 0, 2, 1",
      "1, 0, 1, 2"
    ],
    "answer": 1,
    "explanation": "Conform Cursului 5 (Slide 4): 0 stiluri inline, 0 ID-uri, 1 clasă (.navigation) și 2 elemente HTML (header și p). Rezultă vectorul (0, 0, 1, 2)."
  },
  {
    "id": 15,
    "course": "Curs 5",
    "category": "Specificitate CSS (Quiz Curs)",
    "difficulty": "Avansat",
    "question": "Comparând regulile \"#item1 { color: green; }\" și \"[id=\\\"item1\\\"] { color: lightgreen; }\", care regulă câștigă și de ce?",
    "code": "<p id=\"item1\">First Item</p>",
    "options": [
      "Câștigă [id=\"item1\"] deoarece este un selector de atribut modern.",
      "Câștigă #item1 deoarece un selector de ID are specificitatea (0, 1, 0, 0), în timp ce un selector de atribut are doar specificitate de clasă (0, 0, 1, 0).",
      "Au aceeași specificitate și se aplică întotdeauna ultima regulă scrisă.",
      "Niciuna nu este validă fără specificarea tag-ului <p>."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 5 (Slide 5), un selector de ID direct (#item1) contribuie cu 1 pe coloana a doua de specificitate (0,1,0,0). În schimb, selectorul de atribut [id=\"...\"] contribuie pe coloana a treia (0,0,1,0), având o pondere mult mai mică."
  },
  {
    "id": 16,
    "course": "Curs 5",
    "category": "Pseudo-clase Moderne",
    "difficulty": "Avansat",
    "question": "De ce este recomandată utilizarea pseudo-clasei :where() în dezvoltarea bibliotecilor de componente UI?",
    "code": ".card :where(h1, h2, p) {\n  color: var(--text-color);\n}",
    "options": [
      "Pentru că accelerează randarea în GPU prin WebGL.",
      "Pentru că :where() are întotdeauna specificitate zero (0, 0, 0, 0), permițând dezvoltatorilor care folosesc biblioteca să suprascrie stilurile foarte ușor.",
      "Pentru că blochează moștenirea proprietăților către elementele copil.",
      "Pentru că obligă toate tag-urile să folosească același font."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 5 (Slide 6): :where() grupează selectori dar are specificitate zero. Spre deosebire de :is() (care preia specificitatea maximă din grup), :where() facilitează suprascrierea facilă a regulilor de către utilizatorii bibliotecii."
  },
  {
    "id": 17,
    "course": "Curs 5",
    "category": "Pseudo-elemente",
    "difficulty": "Mediu",
    "question": "Care dintre următoarele afirmații despre conținutul inserat prin pseudo-elementele ::before și ::after este ADEVĂRATĂ?",
    "code": "button::after {\n  content: \" →\";\n}",
    "options": [
      "Textul inserat poate fi selectat cu mouse-ul și copiat în clipboard ca orice alt text HTML.",
      "Proprietatea \"content\" este obligatorie, iar conținutul generat este pur vizual (nu face parte din DOM-ul accesibil și poate să nu fie citit de screen readers).",
      "Este necesar un tag HTML special <after> în document.",
      "Nu poate fi stilizat cu proprietăți de culoare sau font."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 5 (Slide 7): Proprietatea content este obligatorie. Conținutul generat este pur vizual, nu poate fi selectat cu mouse-ul și nu este garantat că va fi citit corect de screen readers, fiind recomandat exclusiv pentru decor."
  },
  {
    "id": 18,
    "course": "Curs 5",
    "category": "Pseudo-elemente",
    "difficulty": "Ușor",
    "question": "Ce pseudo-element CSS permite modificarea culorii de fundal și a textului atunci când utilizatorul selectează un fragment de text cu mouse-ul?",
    "code": "::selection {\n  background: #ffec3d;\n  color: #000;\n}",
    "options": [
      "::highlight",
      "::selection",
      "::focus-within",
      "::active-text"
    ],
    "answer": 1,
    "explanation": "Conform Cursului 5 (Slide 7), pseudo-elementul ::selection permite aplicarea stilurilor asupra porțiunii de document selectată activ de către utilizator."
  },
  {
    "id": 19,
    "course": "Curs 5",
    "category": "Variabile CSS",
    "difficulty": "Ușor",
    "question": "Cum se definește o variabilă CSS și cum se citește valoarea ei în cadrul unei reguli?",
    "code": null,
    "options": [
      "$color = #333; color: $color;",
      "--main-color: #333; color: var(--main-color);",
      "@color: #333; color: get(@color);",
      "var-color: #333; color: read(var-color);"
    ],
    "answer": 1,
    "explanation": "Variabilele CSS (Custom Properties) se declară începând obligatoriu cu prefixul \"--\" (ex: --main-color: #333;) și se accesează prin funcția \"var(--main-color)\"."
  },
  {
    "id": 20,
    "course": "Curs 5",
    "category": "CSS Box Model",
    "difficulty": "Mediu",
    "question": "Ce calculează browserul pentru lățimea totală a unei casete dacă aplicăm \"box-sizing: border-box\"?",
    "code": ".box {\n  box-sizing: border-box;\n  width: 300px;\n  padding: 20px;\n  border: 5px solid black;\n}",
    "options": [
      "350px (300px conținut + 40px padding + 10px bordură).",
      "300px exact (lățimea declarată include deja padding-ul și bordura, conținutul interior fiind redus la 250px).",
      "250px pe ecran.",
      "325px pe ecran."
    ],
    "answer": 1,
    "explanation": "La box-sizing: border-box (Curs 5, Slide 10-11), valorile width și height includ padding-ul și border-ul. Lățimea totală rămâne exact 300px, dimensiunea zonei de conținut ajustându-se automat (300 - 40 - 10 = 250px)."
  },
  {
    "id": 21,
    "course": "Curs 5",
    "category": "Unități de Măsură",
    "difficulty": "Mediu",
    "question": "Dacă rădăcina documentului are font-size: 16px, iar un container are font-size: 2em și conține un paragraf cu font-size: 1.5em, ce dimensiune va avea textul paragrafului?",
    "code": "html { font-size: 16px; }\n.container { font-size: 2em; }\n.container p { font-size: 1.5em; }",
    "options": [
      "24px",
      "48px (16px * 2 * 1.5)",
      "32px",
      "16px"
    ],
    "answer": 1,
    "explanation": "Unitatea \"em\" este relativă la font-size-ul elementului părinte direct (compounding effect). Containerul devine 16px * 2 = 32px. Paragraful din interior devine 32px * 1.5 = 48px."
  },
  {
    "id": 22,
    "course": "Curs 5",
    "category": "Shorthand & Usability (Quiz Curs)",
    "difficulty": "Ușor",
    "question": "Conform QUIZ-ului de rescriere din Cursul 5 (Slide 16), cum se simplifică declarațiile următoare pentru a respecta bunele practici de concizie?",
    "code": ".container {\n  padding: 3px 5px 3px 5px;\n  margin: 3px 5px 3px 5px;\n  border-radius: 3px 3px 0 0;\n}",
    "options": [
      "padding: 8px; margin: 8px; border-radius: 6px;",
      "padding: 3px 5px; margin: 3px 5px; border-radius: 3px 3px 0 0;",
      "padding: 3px; margin: 5px; border-radius: 3px 0;",
      "padding-margin: 3px 5px; border-radius: top 3px;"
    ],
    "answer": 1,
    "explanation": "Sintaxa shorthand cu două valori: prima valoare indică top/bottom (3px), iar a doua valoare indică left/right (5px). Astfel, \"padding: 3px 5px 3px 5px;\" devine concis \"padding: 3px 5px;\"."
  },
  {
    "id": 23,
    "course": "Curs 5",
    "category": "Poziționare CSS",
    "difficulty": "Mediu",
    "question": "Ce se întâmplă cu spațiul inițial ocupat în fluxul documentului de un element configurat cu \"position: absolute\"?",
    "code": ".item {\n  position: absolute;\n  top: 50px;\n}",
    "options": [
      "Spațiul inițial este păstrat gol, celelalte elemente ocolindu-l.",
      "Elementul este scos complet din fluxul normal al documentului, iar elementele vecine se rearanjează ocupând spațiul ca și cum acesta nu ar exista.",
      "Spațiul se dublează pe verticală.",
      "Elementul își pierde lățimea și devine invizibil."
    ],
    "answer": 1,
    "explanation": "Poziționarea absolută (Curs 5, Slide 18) scoate elementul din fluxul normal (out of flow), astfel încât acesta nu mai ocupă spațiu în structura paginii."
  },
  {
    "id": 24,
    "course": "Curs 5",
    "category": "Poziționare & z-index",
    "difficulty": "Ușor",
    "question": "În ce condiție funcționează proprietatea \"z-index\" pe un element HTML din fluxul standard?",
    "code": ".box {\n  z-index: 10;\n}",
    "options": [
      "Funcționează oricând pe orice element, inclusiv pe cele cu position: static.",
      "Funcționează doar dacă elementul este poziționat (are position: relative, absolute, fixed sau sticky) ori este copil al unui flex/grid container.",
      "Funcționează doar dacă elementul conține o imagine.",
      "Funcționează doar dacă valoarea este negativă."
    ],
    "answer": 1,
    "explanation": "Proprietatea z-index (Curs 5, Slide 19) controlează ordinea de stivuire pe axa Z și se aplică doar elementelor poziționate (non-static) sau elementelor flex/grid."
  },
  {
    "id": 25,
    "course": "Curs 5",
    "category": "Float & Clearfix",
    "difficulty": "Mediu",
    "question": "De ce apare fenomenul de colaps al înălțimii unui container părinte atunci când toți copiii săi au \"float: left\"?",
    "code": null,
    "options": [
      "Pentru că elementele flotante sunt scoase din fluxul normal al documentului, iar containerul își calculează înălțimea ca fiind 0 dacă nu conține alte elemente în flux.",
      "Din cauza unei erori de compatibilitate din standardul HTML5.",
      "Pentru că proprietatea float forțează înălțimea părintelui la 100vh.",
      "Deoarece proprietatea clear este activată automat."
    ],
    "answer": 0,
    "explanation": "Conform Cursului 5 (Slide 20-21), elementele flotante sunt scoase din fluxul normal. Prin urmare, containerul părinte nu le include în calculul automat al înălțimii, colapsând la 0 în lipsa unui mecanism precum display: flow-root sau clearfix."
  },
  {
    "id": 26,
    "course": "Curs 5",
    "category": "Responsive & Media Queries",
    "difficulty": "Ușor",
    "question": "Ce reprezintă abordarea \"Mobile-First\" în scrierea regulilor CSS?",
    "code": "/* Exemplu: */\n.card { width: 100%; }\n@media screen and (min-width: 768px) {\n  .card { width: 50%; }\n}",
    "options": [
      "Scrierea codului exclusiv pentru telefoane, blocând accesul utilizatorilor de pe calculatoare.",
      "Definirea stilurilor de bază inițiale pentru ecrane mici, urmată de interogări media cu (min-width) pentru a adapta și îmbogăți layout-ul pe măsură ce ecranul devine mai lat.",
      "Utilizarea regulilor (max-width) începând de la ecrane mari de 4K către telefoane.",
      "Forțarea dimensiunilor în pixeli absoluți pe toate dispozitivele."
    ],
    "answer": 1,
    "explanation": "Mobile-first presupune stilizarea de bază fără media queries orientată către dispozitive mobile, adăugând apoi reguli condiționate prin @media (min-width: ...) pe măsură ce spațiul pe ecran crește."
  },
  {
    "id": 27,
    "course": "Curs 5",
    "category": "Grid 12 Coloane",
    "difficulty": "Ușor",
    "question": "Într-un sistem de layout responsive pe 12 coloane, ce lățime procentuală are o clasă pentru 3 coloane (.col-3)?",
    "code": ".col-3 {\n  width: ?%;\n}",
    "options": [
      "30%",
      "25% (3 * 8.333%)",
      "33.33%",
      "20%"
    ],
    "answer": 1,
    "explanation": "O coloană reprezintă 100% / 12 = 8.333%. Trei coloane reprezintă 3 * 8.333% = 25% (un sfert din lățimea containerului)."
  },
  {
    "id": 28,
    "course": "Curs 6",
    "category": "Flexbox",
    "difficulty": "Mediu",
    "question": "Ce efect are setarea \"flex: 1\" asupra elementelor copil dintr-un container flexibil?",
    "code": ".col {\n  flex: 1;\n}",
    "options": [
      "Forțează lățimea elementului la 1px fix.",
      "Este echivalentă cu \"flex: 1 1 0%\", făcând ca toate coloanele să aibă lățimi riguros egale, plecând de la aceeași bază nulă indiferent de conținutul textual.",
      "Permite doar primului element să se extindă, blocându-le pe celelalte.",
      "Dezactivează proprietatea flex-wrap."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 6 (Slide 4): flex: 1 este echivalent cu \"flex: 1 1 0%\", generând coloane egale deoarece elementele pleacă de la aceeași bază, indiferent de cât text conțin."
  },
  {
    "id": 29,
    "course": "Curs 6",
    "category": "Flexbox",
    "difficulty": "Ușor",
    "question": "Care este diferența dintre axa principală (main axis) și axa transversală (cross axis) în Flexbox?",
    "code": null,
    "options": [
      "Axa principală este întotdeauna verticală, iar cea transversală este orizontală.",
      "Direcția axei principale este determinată de proprietatea \"flex-direction\" (implicit 'row' orizontal sau 'column' vertical), iar axa transversală este perpendiculară pe aceasta.",
      "Nu există axe în Flexbox, acestea apar doar în CSS Grid.",
      "Axa principală controlează culoarea, iar axa transversală dimensiunea."
    ],
    "answer": 1,
    "explanation": "În Flexbox, direcția fluxului este dată de flex-direction. Axa principală (main axis) este aliniată de justify-content, iar axa perpendiculară (cross axis) este aliniată de align-items."
  },
  {
    "id": 30,
    "course": "Curs 6",
    "category": "CSS Grid",
    "difficulty": "Mediu",
    "question": "Care este deosebirea fundamentală dintre Flexbox și CSS Grid conform Cursului 6?",
    "code": null,
    "options": [
      "Flexbox este conceput pentru animații 3D, iar Grid pentru formulare.",
      "Flexbox este un sistem de organizare unidimensional (pe o singură axă, rând sau coloană), în timp ce CSS Grid este bidimensional (permite definirea simultană a rândurilor și coloanelor).",
      "CSS Grid nu permite spațiere prin proprietatea gap.",
      "Flexbox funcționează doar în browsere mobile."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 6 (Slide 2) și Cursului 5 (Slide 29): Flexbox este unidimensional (1D), conceput pentru distribuire pe o axă, în timp ce CSS Grid este bidimensional (2D), permițând definirea simultană a rândurilor și coloanelor."
  },
  {
    "id": 31,
    "course": "Curs 6",
    "category": "CSS Grid",
    "difficulty": "Avansat",
    "question": "Ce rol are funcția \"minmax(200px, 1fr)\" utilizată în definirea coloanelor unui grid?",
    "code": ".grid {\n  grid-template-columns: repeat(3, minmax(200px, 1fr));\n}",
    "options": [
      "Restrânge gridul la exact 200 de coloane.",
      "Stabilește că fiecare coloană va avea o lățime minimă de 200px și se va putea extinde până la o fracțiune (1fr) din spațiul rămas liber.",
      "Calculează valoarea medie dintre 200px și lățimea ecranului.",
      "Ascunde coloanele care au conținut mai mic de 200px."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 6 (Slide 17), funcția minmax(minim, maxim) permite definirea unei dimensiuni minime de siguranță și a unei dimensiuni maxime flexibile pentru un grid track."
  },
  {
    "id": 32,
    "course": "Curs 6",
    "category": "CSS Grid",
    "difficulty": "Mediu",
    "question": "Cum se întinde un element pe toată lățimea unui grid cu număr necunoscut de coloane folosind indici de linii negativi?",
    "code": ".banner {\n  grid-column: ?;\n}",
    "options": [
      "grid-column: 0 / 100;",
      "grid-column: 1 / -1;",
      "grid-column: all;",
      "grid-column: 1 / end-of-row;"
    ],
    "answer": 1,
    "explanation": "În CSS Grid, liniile pot fi referite și prin numere negative începând de la sfârșit. Linia \"-1\" reprezintă ultima linie a gridului explicit. Prin urmare, \"grid-column: 1 / -1\" acoperă de la prima până la ultima coloană."
  },
  {
    "id": 33,
    "course": "Curs 6",
    "category": "CSS Grid Shorthand",
    "difficulty": "Avansat",
    "question": "Ce reprezintă valorile din declarația shorthand: \"grid: 100px 300px / 3fr 1fr;\" (Curs 6, Slide 14)?",
    "code": ".container {\n  grid: 100px 300px / 3fr 1fr;\n}",
    "options": [
      "2 coloane de 100px și 300px, respectiv 2 rânduri de 3fr și 1fr.",
      "2 rânduri (primul de 100px, al doilea de 300px) și 2 coloane (prima de 3fr, a doua de 1fr).",
      "Lățimea maximă de 100px și înălțimea de 300px a containerului.",
      "O matrice 3D cu 4 cadrane de animație."
    ],
    "answer": 1,
    "explanation": "În shorthand-ul CSS \"grid: <grid-template-rows> / <grid-template-columns>\", valorile dinaintea slash-ului definesc rândurile (100px și 300px), iar cele de după slash definesc coloanele (3fr și 1fr)."
  },
  {
    "id": 34,
    "course": "Curs 6",
    "category": "Culori & Accesibilitate",
    "difficulty": "Mediu",
    "question": "Conform standardelor internaționale de accesibilitate web WCAG prezentate în Cursul 6 (Slide 21), care este raportul minim de contrast impus pentru textul normal?",
    "code": null,
    "options": [
      "2:1",
      "3:1",
      "4.5:1",
      "7:1"
    ],
    "answer": 2,
    "explanation": "Ghidul WCAG (Nivel AA) cere un contrast minim de 4.5:1 pentru textul normal și 3:1 pentru textul mare (peste 18pt sau 14pt bold) pentru a asigura lizibilitatea persoanelor cu deficiențe de vedere."
  },
  {
    "id": 35,
    "course": "Curs 6",
    "category": "Culori în CSS",
    "difficulty": "Ușor",
    "question": "Cum este reprezentat canalul alpha de transparență în formatul modern de culoare \"hsl(210 100% 50% / 0.8)\"?",
    "code": "background-color: hsl(210 100% 50% / 0.8);",
    "options": [
      "Prin primul număr (210).",
      "Prin valoarea de după caracterul slash (0.8, adică 80% opacitate).",
      "Nu există canal de transparență în exemplul dat.",
      "Prin procentul de 100%."
    ],
    "answer": 1,
    "explanation": "În specificația CSS Color Module Level 4, canalul alpha se separă de parametrii de culoare (nuanță, saturație, luminozitate) printr-un slash (/)."
  },
  {
    "id": 36,
    "course": "Curs 6",
    "category": "Gradients",
    "difficulty": "Ușor",
    "question": "Care funcție CSS este utilizată pentru a crea un fundal cu trecere cromatică circulară pornind din centru?",
    "code": "background-image: radial-gradient(circle, #f06, #4a90e2);",
    "options": [
      "linear-gradient()",
      "radial-gradient()",
      "conic-gradient()",
      "box-gradient()"
    ],
    "answer": 1,
    "explanation": "Funcția radial-gradient() produce o imagine generată procedural ce radiază dintr-un punct central (circular sau eliptic)."
  },
  {
    "id": 37,
    "course": "Curs 6",
    "category": "Tipografie UI/UX",
    "difficulty": "Mediu",
    "question": "Conform Cursului 6 (Slide 25-27), care este distincția între Kerning și Tracking?",
    "code": null,
    "options": [
      "Tracking se aplică pe verticală, iar Kerning pe orizontală.",
      "Tracking (letter-spacing) ajustează spațiul uniform între toate literele dintr-un text, în timp ce Kerning ajustează spațiul specific dintre anumite perechi de litere pentru a corecta golurile optice inegale.",
      "Kerning este o proprietate CSS care schimbă culoarea literelor.",
      "Tracking se folosește doar pentru fonturi cursive."
    ],
    "answer": 1,
    "explanation": "Tracking este uniform pe întregul cuvânt/paragraf. Kerning-ul compensează forma geometrică a anumitor litere puse una lângă alta (cum ar fi 'AV', 'WA', 'To') astfel încât spațierea să pară armonioasă ochiului uman."
  },
  {
    "id": 38,
    "course": "Curs 6",
    "category": "Tipografie CSS",
    "difficulty": "Ușor",
    "question": "Ce valoare numerică a proprietății \"font-weight\" corespunde textului cu greutate normală (regular)?",
    "code": "p {\n  font-weight: 400;\n}",
    "options": [
      "100",
      "400",
      "700",
      "900"
    ],
    "answer": 1,
    "explanation": "Scara tipografică standard în CSS definește: 400 = normal (regular) și 700 = bold. Valorile 100-300 sunt light/thin, iar 800-900 sunt extra-bold/black."
  },
  {
    "id": 39,
    "course": "Curs 6",
    "category": "Animații CSS - Tranziții",
    "difficulty": "Ușor",
    "question": "Având declarația: \"transition: background-color 0.3s ease 0.1s;\", ce reprezintă valoarea \"0.1s\"?",
    "code": "button {\n  transition: background-color 0.3s ease 0.1s;\n}",
    "options": [
      "Durata totală de rulare a tranziției.",
      "Timpul de întârziere (transition-delay) înainte ca tranziția să înceapă.",
      "Numărul de iterații ale animației.",
      "Intensitatea efectului de estompare."
    ],
    "answer": 1,
    "explanation": "Sintaxa shorthand a tranziției este: transition: <property> <duration> <timing-function> <delay>. Prima durată (0.3s) este timpul de execuție, iar a doua (0.1s) este întârzierea (delay)."
  },
  {
    "id": 40,
    "course": "Curs 6",
    "category": "Animații CSS - Keyframes",
    "difficulty": "Mediu",
    "question": "Cum se definește o animație bazată pe cadre-cheie cu mai multe etape intermediare în CSS?",
    "code": "@keyframes slideIn {\n  0%   { opacity: 0; transform: translateY(-20px); }\n  50%  { opacity: 0.5; }\n  100% { opacity: 1; transform: translateY(0); }\n}",
    "options": [
      "Folosind directiva @animate",
      "Folosind directiva @keyframes urmată de numele animației și etape procentuale sau from/to",
      "Prin intermediul funcției JavaScript setInterval()",
      "Prin tagul HTML <animation>"
    ],
    "answer": 1,
    "explanation": "Animațiile CSS se definesc prin directiva @keyframes, urmată de un identificator/nume și de pași intermediari stabiliți prin procente (0% - 100%) sau cuvintele cheie from / to."
  },
  {
    "id": 41,
    "course": "Curs 6",
    "category": "Micro-interacțiuni UI",
    "difficulty": "Mediu",
    "question": "Conform cărții lui Dan Saffer citate în Cursul 6 (Slide 41-42), care este scopul principal al unei micro-interacțiuni într-o interfață digitală?",
    "code": null,
    "options": [
      "Să ruleze procese de inteligență artificială în fundal.",
      "Să comunice prompt rezultatul unei acțiuni a utilizatorului, să evidențieze modificările de stare ale sistemului și să prevină erorile prin feedback vizual/auditiv de scurtă durată.",
      "Să sporească dimensiunea fișierului CSS.",
      "Să deschidă ferestre modale nesolicitate."
    ],
    "answer": 1,
    "explanation": "Micro-interacțiunile sunt detalii de design axate pe o singură sarcină (ex: un buton de 'Like', un switch toggle, un indicator de încărcare). Ele oferă feedback imediat utilizatorului, confirmând primirea comenzii."
  },
  {
    "id": 42,
    "course": "Curs 7",
    "category": "Percepție & UX",
    "difficulty": "Ușor",
    "question": "Ce afirmă studiul Nielsen Norman Group (2024) prezentat în Cursul 7 cu privire la percepția utilizatorilor?",
    "code": null,
    "options": [
      "Utilizatorii acordă în medie 5 minute pentru a evalua dacă le place designul unui site.",
      "„Percepția precede cogniția”: utilizatorii analizează layout-ul și își formează o judecată vizuală despre credibilitatea site-ului în mai puțin de 50 de milisecunde (< 0.05s).",
      "Toți utilizatorii preferă layout-urile asimetrice fără aliniere.",
      "Cogniția este complet independentă de indiciile vizuale."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 7 (Slide 21), percepția precede cogniția. Prima impresie vizuală se formează subconștient în mai puțin de 50ms, dictând încrederea și dorința utilizatorului de a continua navigarea."
  },
  {
    "id": 43,
    "course": "Curs 7",
    "category": "Principii Gestalt",
    "difficulty": "Mediu",
    "question": "Ce descrie principiul Gestalt de „Similaritate” (Similarity) în proiectarea UI?",
    "code": null,
    "options": [
      "Toate site-urile trebuie să semene între ele.",
      "Elementele vizuale care împărtășesc caracteristici similare (culoare, formă, dimensiune, orientare) sunt percepute automat de creier ca făcând parte din același grup funcțional.",
      "Textul trebuie să fie identic pe toate butoanele.",
      "Dimensiunea fontului trebuie să fie similară pe întreaga pagină."
    ],
    "answer": 1,
    "explanation": "Principiul similarității afirmă că ochiul uman asociază spontan elementele ce au aceleași atribute vizuale (de exemplu, toate link-urile albastre sau toate butoanele primare verzi)."
  },
  {
    "id": 44,
    "course": "Curs 7",
    "category": "Principii de Design CRAP",
    "difficulty": "Mediu",
    "question": "Care sunt cele 4 mari principii de proiectare vizuală stabilite de Robin Williams în lucrarea „The Non-Designer’s Design Book”?",
    "code": null,
    "options": [
      "Color, Robustness, Architecture, Pixel",
      "Contrast, Repetiție, Aliniere, Proximitate (CRAP)",
      "Creation, Rendering, Animation, Production",
      "Components, Redundancy, Adaptability, Position"
    ],
    "answer": 1,
    "explanation": "Cele 4 principii fundamentale CRAP sunt: Contrast (evidențierea diferențelor), Repetition (repetiția pentru unitate), Alignment (alinierea pentru coeziune) și Proximity (proximitatea pentru gruparea logică)."
  },
  {
    "id": 45,
    "course": "Curs 7",
    "category": "Principii de Design CRAP",
    "difficulty": "Ușor",
    "question": "Conform principiului Contrastului din Cursul 7, cum trebuie tratate elementele dintr-o pagină dacă nu sunt identice?",
    "code": null,
    "options": [
      "Trebuie făcute doar foarte puțin diferite, aproape insesizabil.",
      "Dacă două elemente nu sunt exact la fel, trebuie făcute foarte diferite pentru a atrage atenția și a stabili o ierarhie vizuală clară.",
      "Trebuie ascunse pe ecrane mici.",
      "Trebuie colorate obligatoriu în tonuri de gri."
    ],
    "answer": 1,
    "explanation": "Regula de bază a contrastului enunțată de Robin Williams: nu fi timid! Dacă două elemente sunt diferite (titlu vs paragraf, buton activ vs inactiv), fă diferența clară și evidentă (contrast puternic = energie și focalizare)."
  },
  {
    "id": 46,
    "course": "Curs 7",
    "category": "Principii de Design CRAP",
    "difficulty": "Mediu",
    "question": "Ce afirmă principiul Alinierii (Alignment) despre dispunerea elementelor într-un design web?",
    "code": null,
    "options": [
      "Fiecare element poate fi pus oriunde pe ecran unde există spațiu liber disponibil.",
      "Nimic nu ar trebui plasat arbitrar pe pagină; fiecare element trebuie să aibă o legătură vizuală și o aliniere clară cu un alt element, asigurând coeziune și ordine.",
      "Toate textele dintr-o pagină trebuie aliniate obligatoriu la dreapta.",
      "Alinierea matematică este întotdeauna superioară alinierii optice percepute de ochiul uman."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 7 (Slide 35-41), alinierea creează coeziune și conectează elemente deconectate spațial. Nimic nu trebuie să pară aruncat la întâmplare pe ecran."
  },
  {
    "id": 47,
    "course": "Curs 7",
    "category": "Legea lui Fitts",
    "difficulty": "Mediu",
    "question": "Ce implicație directă are Legea lui Fitts (Fitts’s Law) în proiectarea butoanelor și a formularelor web?",
    "code": "T = a + b * log2(2D / W)",
    "options": [
      "Butoanele trebuie să fie cât mai mici pentru a economisi spațiu pe ecran.",
      "„Big and near objects are easy to click”: elementele interactive cheie (cum ar fi butoanele CTA) trebuie să aibă o țintă de click suficient de generoasă și să fie plasate aproape de traiectoria naturală a utilizatorului.",
      "Numărul de culori de pe ecran influențează direct viteza procesorului.",
      "Formularele trebuie să conțină cel puțin 20 de câmpuri de introducere."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 7 (Slide 50), timpul necesar pentru a atinge o țintă depinde de distanța (D) și lățimea/dimensiunea (W) acesteia. Obiectele mari și apropiate sunt cele mai ușor și rapid de acționat."
  },
  {
    "id": 48,
    "course": "Curs 7",
    "category": "Regula 60-30-10",
    "difficulty": "Ușor",
    "question": "Cum se împart proporțiile culorilor într-o interfață web conform Regulii 60-30-10 (Curs 7, Slide 65-66)?",
    "code": null,
    "options": [
      "60% imagini, 30% text, 10% iconițe",
      "60% Culoarea principală/de fundal, 30% Culoarea secundară (structură, carduri), 10% Culoarea de accent (butoane CTA, puncte focale)",
      "60% negru, 30% gri, 10% alb",
      "60% contrast, 30% luminozitate, 10% saturație"
    ],
    "answer": 1,
    "explanation": "Regula 60-30-10 asigură echilibrul cromatic: 60% domină fundalul și suprafețele mari, 30% susține elementele structurale și cardurile, iar 10% (accentul) este rezervat pentru elementele interactive de maxim interes (butoane CTA, notificări)."
  },
  {
    "id": 49,
    "course": "Curs 7",
    "category": "Landing Page & Conversie",
    "difficulty": "Ușor",
    "question": "Ce este „Propunerea de Valoare” (Value Proposition) pe un Landing Page eficient?",
    "code": null,
    "options": [
      "O listă de prețuri detaliată cu toate monedele internaționale.",
      "Un mesaj clar și concis (de regulă în titlul principal) care comunică imediat beneficiul unic pe care produsul sau serviciul îl aduce utilizatorului și problema pe care o rezolvă.",
      "Termenii legali de licențiere a software-ului.",
      "O animație complexă de deschidere a paginii."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 7 (Slide 55), propunerea de valoare evidențiază direct de ce ar alege utilizatorul această soluție, comunicând imediat și fără jargon tehnic beneficiul principal."
  },
  {
    "id": 50,
    "course": "Curs 7",
    "category": "Landing Page & Încredere",
    "difficulty": "Ușor",
    "question": "Ce rol joacă secțiunile de „Social Proof” (recenzii, evaluări de 5 stele, testimoniale) pe o pagină web?",
    "code": null,
    "options": [
      "Să verifice dacă utilizatorul este conectat la o rețea de socializare.",
      "Să consolideze încrederea vizitatorilor și să reducă ezitarea de cumpărare prin validarea oferită de experiențele pozitive ale altor clienți reali.",
      "Să crească viteza de încărcare a resurselor statice.",
      "Să înlocuiască complet descrierea produsului."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 7 (Slide 61), Social Proof demonstrează potențialilor utilizatori că produsul este validat de oameni reali, crescând dramatic rata de conversie și încrederea în brand."
  },
  {
    "id": 51,
    "course": "Curs 7",
    "category": "Simplitate & UX",
    "difficulty": "Ușor",
    "question": "Ce recomandă Cursul 7 pentru prevenirea încărcării cognitive a utilizatorului pe o pagină web?",
    "code": null,
    "options": [
      "Afișarea a cât mai multe bannere și opțiuni simultane pe primul ecran.",
      "Evitarea supraîncărcării vizuale: un titlu concis, un singur CTA primar clar, imagini contextuale relevante și eliminarea oricărui element care nu servește obiectivului paginii.",
      "Dezactivarea barei de derulare și a tastaturii.",
      "Adăugarea a cel puțin 5 formulare de contact pe fiecare pagină."
    ],
    "answer": 1,
    "explanation": "Conform Cursului 7 (Slide 46, 53), principiul simplității recomandă eliminarea elementelor inutile ('Perfection is achieved when there is nothing left to take away') pentru a menține interfața aerisită și focalizată pe acțiunea dorită."
  },
  {
    "id": 52,
    "course": "Curs 6 & 7",
    "category": "Gradients & Backgrounds",
    "difficulty": "Mediu",
    "question": "Care este sintaxa CSS corectă pentru un gradient liniar la 90 de grade (orizontal) ce trece de la galben la roșu?",
    "code": "background: linear-gradient(90deg, yellow, red);",
    "options": [
      "background: gradient-line(to right, yellow, red);",
      "background: linear-gradient(90deg, yellow, red);",
      "background-color: linear(90, yellow, red);",
      "background-image: color-transition(horizontal, yellow, red);"
    ],
    "answer": 1,
    "explanation": "Funcția corectă este linear-gradient(direcție_sau_unghi, culoare1, culoare2, ...). 90deg sau 'to right' generează o tranziție pe orizontală de la stânga la dreapta."
  }
];
