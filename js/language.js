

$(function() {

  var t = {
    nav_language: {
      en: "Language",
      fr: " ",
      es: "Idioma",
      it: "Lingua",
      rs: "Jezik",
      ru: " "
    },
    nav_language_english: {
      en: "English",
      fr: " ",
      es: "Inglés",
      it: "Inglese",
      rs: "Engleski",
      ru: " "
    },
    nav_language_french: {
      en: "French",
      fr: " ",
      es: "Francés",
      it: "Francese",
      rs: " ",
      ru: " "
    },
    nav_language_spanish: {
      en: "Spanish",
      fr: " ",
      es: "Español",
      it: "Spagnolo",
      rs: "Španski",
      ru: " "
    },
    nav_language_italian: {
      en: "Italian",
      fr: " ",
      es: "Italiano",
      it: "Italiano",
      rs: " ",
      ru: " "
    },
    nav_language_serbian: {
      en: "Serbian",
      fr: " ",
      es: "Serbio",
      it: "Serbo",
      rs: "Srpski",
      ru: " "
    },
    nav_language_russian: {
      en: "Russian",
      fr: " ",
      es: "Ruso",
      it: "Russo",
      rs: "",
      ru: " "
    },
    nav_home: {
      en: "Home",
      fr: " ",
      es: "Inicio",
      it: "Home",
      rs: "Početna",
      ru: " "
    },
    nav_wallets: {
      en: "Wallets",
      fr: " ",
      es: "Carteras",
      it: "Portafogli",
      rs: "Novčanici",
      ru: " "
    },
    nav_roadmap: {
      en: "Roadmap",
      fr: " ",
      es: "Hoja de ruta",
      it: "Roadmap",
      rs: "Planovi za budućnost",
      ru: " "
    },
    nav_exchanges: {
      en: "Exchanges",
      fr: " ",
      es: "Casas de intercambio",
      it: "Mercati di scambio",
      rs: "Menjačnice",
      ru: " "
    },
    nav_team: {
      en: "Team",
      fr: " ",
      es: "Equipo",
      it: "Team",
      rs: "Tim",
      ru: " "
    },
    nav_community: {
      en: "Community",
      fr: " ",
      es: "Comunidad",
      it: "Comunità",
      rs: "Zajednica",
      ru: " "
    },
    price_block: {
      en: "Price",
      fr: " ",
      es: "Precio",
      it: "Prezzo",
      rs: "Cena",
      ru: " "
    },
    section_logo_text: {
      en: "#POW&nbsp;&nbsp;&nbsp;&nbsp;#SCRYPT&nbsp;&nbsp;&nbsp;&nbsp;#No ICO&nbsp;&nbsp;&nbsp;&nbsp;#No Premine&nbsp;&nbsp;&nbsp;&nbsp;#No Airdrops&nbsp;&nbsp;&nbsp;&nbsp;#Fair Launch",
      fr: " ",
      es: "#POW&nbsp;&nbsp;&nbsp;&nbsp;#SCRYPT&nbsp;&nbsp;&nbsp;&nbsp;#Sin ICO&nbsp;&nbsp;&nbsp;&nbsp;#Sin Preminado&nbsp;&nbsp;&nbsp;&nbsp;#Sin Airdrops&nbsp;&nbsp;&nbsp;&nbsp;#Lanzamiento justo",
      it: "#POW&nbsp;&nbsp;&nbsp;&nbsp;#SCRYPT&nbsp;&nbsp;&nbsp;&nbsp;#No ICO&nbsp;&nbsp;&nbsp;&nbsp;#Non preminata&nbsp;&nbsp;&nbsp;&nbsp;#No Airdrops&nbsp;&nbsp;&nbsp;&nbsp;#Giusto inizio",
      rs: "#POW&nbsp;&nbsp;&nbsp;&nbsp;#SCRYPT&nbsp;&nbsp;&nbsp;&nbsp;#Nema ICO&nbsp;&nbsp;&nbsp;&nbsp;#Nema Premine-a&nbsp;&nbsp;&nbsp;&nbsp;#Nema Airdropova&nbsp;&nbsp;&nbsp;&nbsp;#Fer pokretanje",
      ru: " "
    },
    marketcap_block: {
      en: "Market Cap",
      fr: " ",
      es: "Capitalización de mercado",
      it: "Capitalizzazione di mercato",
      rs: "Ukupna kapitalizacija",
      ru: " "
    },
    currentsupply_block: {
      en: "Current supply",
      fr: " ",
      es: "Suministro actual",
      it: "Fornitura corrente",
      rs: "Trenutni broj novčića",
      ru: " "
    },
    hashrate_block: {
      en: "Hashrate",
      fr: " ",
      es: "Tasa de hash",
      it: "Hashrate",
      rs: "Hashrate",
      ru: " "
    },
    about: {
      en: "About",
      fr: " ",
      es: "Acerca de",
      it: "Informazioni",
      rs: "O nama",
      ru: " "
    },
    about_desc_1: {
      en: "Actinium is more than a crypto currency.<br><br>Actinium is a <b>decentralized currency built on blockchain technology</b> that aims to help bring crypto into every customer’s pocket, every store, and be extraordinarily safe and easy to use.<br><br>This can be achieved because <b>Actinium is a Lightning Network supported coin</b> that will allow <b>instant transactions with near-zero fees, atomic swaps, and many of the numerous other 2nd Layer solutions.</b>",
      fr: " ",
      es: "Actinium es más que una criptomoneda.<br><br>Actinium es una <b>moneda descentralizada basada en la tecnología blockchain</b> que tiene como objetivo ayudar a llevar las criptomonedas al bolsillo de cada cliente, a cada tienda y ser extraordinariamente seguro y fácil de usar.<br><br>Esto se puede lograr porque <b>Actinium es una moneda admitida por Lightning Network</b> que permitirá <b>transacciones instantáneas con tarifas casi nulas, swaps atómicos y muchas de las numerosas soluciones de 2ª capa.</b>",
      it: "Actinium è più di una criptovaluta.<br><br>Actinium è una <b>valuta decentralizzata basata sulla tecnologia blockchain</b> che mira ad aiutare a portare le criptovalute nella tasca di ogni cliente, in ogni negozio, ed ad essere straordinariamente sicura e facile da usare.<br><br>Questo può essere ottenuto perchè <b>Actinium  è una moneta supportata da Lightning Network</b> che consentirà <b>transazioni istantanee con tariffe quasi nulle, Atomic Swaps, e molte altre soluzioni di 2° livello.</b>",
      rs: "Aktinijum je mnogo više od kriptovalute.<br><br>Aktinijum je <b>decentralizovana valuta, izgradjena na blokčejn tehnologiji</b> koja za cilj ima da učini kripto dostupnim svakom pojedincu, svakoj prodavnici, kao i da pruži sigurnost i lakoću, prilikom korišćenja.<br><br>Ovo je moguće iz prostog razloga,<b>Aktinijum je novčić koji podržava Lightning Network</b>, protokol koji omogućava instant transakcije, uz izuzetno niske provizije, Atomic Swaps, kao i mnoga druga rešenja, drugog sloja.</b>",
      ru: " "
    },
    about_desc_2: {
      en: "Actinium is completely decentralized without premine and is not an ICO. <b>It has proper mining support, mobile wallets, and hardware wallet integration.</b><br><br>Actinium has all the needed features already activated to achieve Lightning Network compatibility.<br><br>Actinium will not remain a blockchain-only cryptocurrency. <b>The inevitable progress will deliver competing solutions to many problems on different layers.</b>",
      fr: " ",
      es: "Actinium está completamente descentralizado sin preminado y no es una ICO. <b>Tiene soporte de minería adecuado, carteras móviles e integración de carteras de hardware.</b><br><br>Actinium tiene todas las características necesarias ya activadas para lograr la compatibilidad de Lightning Network.<br><br>Actinium no seguirá siendo una criptomoneda de blockchain. <b>El progreso inevitable ofrecerá soluciones competitivas para muchos problemas en diferentes capas.</b>",
      it: "Actinium è completamente decentralizzata, non preminata e non è una ICO. <b>Ha un adeguato supporto per l'estrazione, portafogli mobili, e integrazione con portafogli fisici.</b><br><br>Actinium ha tutte le funzionalità necessarie già attivate per ottenere la compatibilità con Lighting Network.<br><br>Actinium  non rimarrà solo una criptovaluta di blockchain. Gli inevitabili profressi porteranno soluzioni competitive a molti problemi su differenti livelli.</b>",
      rs: "Aktinijum je kompletno decentralizovan, bez premine-a i bez ICO-a. <b>Potpuno je podržan od strane rudara, poseduje mobilni i hardverski novčanik.</b><br><br>Sve odlike Aktiniujma su kompatibilne sa Lightning Network-om.<br><br>Aktinijum neće ostati samo blokčejn valuta. <b>Nezaustavljivi napredak donosi konkurentna rešenja za mnoge probleme Drugog nivoa.</b>",
      ru: " "
    },
    wallets: {
      en: "Wallets",
      fr: " ",
      es: "Carteras",
      it: "Portafogli",
      rs: "Novčanici",
      ru: " "
    },
    wallets_desc: {
      en: "Download Actinium for any platform",
      fr: " ",
      es: "Descarga Actinium para cualquier plataforma",
      it: "Scarica Actinium per qualsiasi piattaforma ",
      rs: "Preuzmite Aktinijum novčanik za bilo koju platformu",
      ru: " "
    },
    pools: {
      en: "Mining pools",
      fr: " ",
      es: "Piscinas de minado",
      it: "Mining Pools",
      rs: "Mining Pools",
      ru: " "
    },
    pools_desc: {
      en: "Select a pool and start mining",
      fr: " ",
      es: "Selecciona una piscina y comienza a minar",
      it: "Seleziona una Mining Pool e inizia a minare ",
      rs: "Odaberite pool i počnite da rudarite",
      ru: " "
    },
    official_button: {
      en: "Official",
      fr: " ",
      es: "Oficial",
      it: "Ufficiale",
      rs: "Zvanično",
      ru: " "
    },
    explorer_button: {
      en: "Explorer",
      fr: " ",
      es: "Explorador",
      it: "Explorer",
      rs: "Explorer",
      ru: " "
    },
    miners: {
      en: "Miners",
      fr: " ",
      es: "Mineros",
      it: "Minatori",
      rs: "Rudari",
      ru: " "
    },
    miners_desc: {
      en: "Download a miner for your GPU architecture",
      fr: " ",
      es: "Descargue el minero según la arquitectura de su GPU",
      it: "Scarica un minatore per la tua architettura GPU",
      rs: "Preuzmite majner za svoje GPU",
      ru: " "
    },
    how_to_gpu_amd_01: {
      en: "Create a .bat file inside the miner directory and add this parameters:",
      fr: " ",
      es: "Crea un archivo .bat dentro del directorio del minero y añade estos parámetros:",
      it: "Crea un file .bat all'interno della directory del miner e aggiungi questi parametri:",
      rs: "Napravite .bat fajl unutar majner foldera i dodajte ove parametre:",
      ru: " "
    },
    how_to_gpu_amd_02: {
      en: "You can download sgMiner for AMD GPU in the next link:",
      fr: " ",
      es: "Puedes descargar sgMiner para GPUs AMD en el siguiente enlace:",
      it: "Puoi scaricare sgMiner per le GPU AMD dal link seguente:",
      rs: "Možete preuzeti sgMiner za AMD grafičke kartice na sledećem linku:",
      ru: " "
    },
    how_to_gpu_nvidia_01: {
      en: "Create a .bat file inside the miner directory and add this parameters:",
      fr: " ",
      es: "Crea un archivo .bat dentro del directorio del minero y añade estos parámetros:",
      it: "Crea un file .bat all'interno della directory del miner e aggiungi questi parametri:",
      rs: "Napravite .bat fajl unutar majner foldera i dodajte ove parametre:",
      ru: " "
    },
    how_to_gpu_nvidia_02: {
      en: "You can download sgMiner for NVIDIA GPU in the next link:",
      fr: " ",
      es: "Puedes descargar sgMiner para GPUs NVIDIA en el siguiente enlace:",
      it: "Puoi scaricare sgMiner per le GPU NVIDIA dal link seguente:",
      rs: "Možete preuzeti sgMiner za NVIDIA grafičke kartice na sledećem linku:",
      ru: " "
    },
    how_to_code_miner: {
      en: "sgminer -o stratum+tcp://goldmine.actinium.org:14334 -u YOURADDRESS -p c=ACM -I 10",
      fr: " ",
      es: "sgminer -o stratum+tcp://goldmine.actinium.org:14334 -u TUDIRECCIÓN -p c=ACM -I 10",
      it: "sgminer -o stratum+tcp://goldmine.actinium.org:14334 -u YOURADDRESS -p c=ACM -I 10",
      rs: "sgminer -o stratum+tcp://goldmine.actinium.org:14334 -u YOURADDRESS -p c=ACM -I 10",
      ru: " "
    },
    other_links: {
      en: "Other links",
      fr: " ",
      es: "Otros enlaces",
      it: "Altri link",
      rs: "Ostali linkovi",
      ru: " "
    },
    other_links_desc: {
      en: "Discover more about Actinium",
      fr: " ",
      es: "Descubre más sobre Actinium",
      it: "Scopri di più su Actinium",
      rs: "Otkrijte još o Aktinijumu",
      ru: " "
    },
    desktop_wallets: {
      en: "Desktop Wallets",
      fr: " ",
      es: "Carteras de escritorio",
      it: "Portafogli Desktop",
      rs: "Desktop novčanici",
      ru: " "
    },
    finish_q1: {
      en: "Finished Q1 2018",
      fr: " ",
      es: "Finalizado Q1 2018 ",
      it: "Finito Q1 2018",
      rs: "Završeno u Q1 2018",
      ru: " "
    },
    progress: {
      en: "Progress...",
      fr: " ",
      es: "Progreso...",
      it: "Progresso...",
      rs: "Napredak...",
      ru: " "
    },
    smartphone_wallets: {
      en: "Smartphone Wallets",
      fr: " ",
      es: "Carteras para móvil",
      it: "Portafogli per Smartphone",
      rs: "Smartphone novčanici",
      ru: " "
    },
    going_q2: {
      en: "On going Q2 2018",
      fr: " ",
      es: "Estimado para Q2 2018",
      it: "In corso Q2 2018",
      rs: "Planirano u Q2 2018",
      ru: " "
    },
    going_q3: {
      en: "On going Q3 2018",
      fr: " ",
      es: "Estimado para Q3 2018",
      it: "In corso Q2 2018",
      rs: "Planirano u Q3 2018",
      ru: " "
    },
    ledger_nano: {
      en: "Ledger Nano",
      fr: " ",
      es: "Ledger Nano",
      it: "Ledger Nano",
      rs: "Ledger Nano",
      ru: " "
    },
    ledger_nano_progress: {
      en: "Ledger Nano progress...",
      fr: " ",
      es: "Desarrollo para Ledger Nano...",
      it: "Progresso Ledger Nano...",
      rs: "Ledger Nano napredak..",
      ru: " "
    },
    ledger_nano_screenshot: {
      en: "Take a look!",
      fr: " ",
      es: "¡Échale un vistazo!",
      it: "Dai un'occhiata!",
      rs: "Pogledajte!",
      ru: " "
    },
    lightning_network: {
      en: "Lightning Network",
      fr: " ",
      es: "Lightning Network",
      it: "Lightning Network",
      rs: "Lightning Network",
      ru: " "
    },
    testing: {
      en: "Testing!",
      fr: " ",
      es: "¡En pruebas!",
      it: "In fase di Test",
      rs: "Test faza",
      ru: " "
    },
    exchanges: {
      en: "Exchanges",
      fr: " ",
      es: "Casas de intercambio",
      it: "Mercati di scambio",
      rs: "Menjačnice",
      ru: " "
    },
    exchanges_desc: {
      en: "Trade your Actinium",
      fr: " ",
      es: "Intercambia tus Actinium",
      it: "Scambia i tuoi Actinium",
      rs: "Trgujte Aktinijumom",
      ru: " "
    },
    team: {
      en: "Team",
      fr: " ",
      es: "Equipo",
      it: "Team",
      rs: "Tim",
      ru: " "
    },
    team_desc: {
      en: "Unlike many other altcoins <b>we are not anonymous.</b><br><br>We think that investors have a right to know the people representing the coin. Yes, the standard excuse is very often <i>'But Satoshi never revealed himself'</i>.<br><br>However, unlike us, who are building things based on Bitcoin's original code, Satoshi created something extraordinary and he/she/they had every right to remain hidden.",
      fr: " ",
      es: "A diferencia de muchas otras altcoins, <b>no somos anónimos.</b><br><br>Creemos que los inversores tienen derecho a conocer a las personas que representan la moneda. Sí, la excusa estándar es muy a menudo <i>'Pero Satoshi nunca se reveló a sí mismo'.</i><br><br>Sin embargo, a diferencia de nosotros, que estamos construyendo cosas basadas en el código original de Bitcoin, Satoshi creó algo extraordinario y él/ella/ellos tenían todo el derecho a permanecer ocultos.",
      it: "A differenza di molte altre monete alternative <b>noi non siamo anonimi.</b><br><br>Pensiamo che gli investitori abbiano il diritto di sapere le persone che rappresentano la moneta. Si, la scusa standard è molto spesso <i>'Ma Satoshi non si è mai rivelato'</i>.<br><br>Tuttavia, a differenza di noi, che stiamo costruendo cose basate sul codice originale di Bitcoin, Satoshi ha creato qualcosa di straordinario e lui/lei/loro avevano tutto il diritto di rimanere nascosti.",
      rs: "Za razliku od mnogih drugih altcoin-a<b>mi se ne krijemo.</b><br><br>Naše je mišljenje da investitori imaju pravo da znaju ko su ljudi koji stoje iza novčića. Da, najčešći izgovor je <i>'Ali Satoshi nikad nije otkrio svoj identitet'</i>.<br><br>Za razliku od nas, koji gradimo na Bitkoinovom originalnom kodu, Satoshi je napravio nešto zaista izuzetno, i on/ona/oni imaju svako pravo da ostanu anonimni.",
      ru: " "
    },
    harris_sub: {
      en: "Founder - Software developer",
      fr: " ",
      es: "Fundador - Desarrollador de software",
      it: "Fondatore - Sviluppatore del software",
      rs: "Osnivač - Softver developer",
      ru: " "
    },
    harris_desc: {
      en: "Software Developer 🤖",
      fr: " ",
      es: "Desarrollador de software 🤖",
      it: "Sviluppatore del software 🤖",
      rs: "Softver Developer 🤖",
      ru: " "
    },
    pablo_sub: {
      en: "Web Designer",
      fr: " ",
      es: "Diseñador Web",
      it: "Web Designer",
      rs: "Web Dizajner",
      ru: " "
    },
    pablo_desc: {
      en: "I came here when this was still an experiment. Fan of 360º photography and cats lover (I have 12)... 😹",
      fr: " ",
      es: "Llegué aquí cuando todo esto era aún un experimento. Fan de la fotografía en 360º y amante de los gatos (Tengo 12)... 😹",
      it: "Sono venuto qui quando questo era ancora un esperimento. Fan della fotografia a 360° e amante dei gatti (ne ho 12)... 😹",
      rs: "Pridružio sam se zajednici još u fazi eksperimenta. Zaljubljenik u 360º fotografije, kao i u mačke(Imam ih 12)...😹",
      ru: " "
    },
    milosnes_sub: {
      en: "Community Leader",
      fr: " ",
      es: "Líder de la comunidad",
      it: "Leader della comunità",
      rs: " ",
      ru: " "
    },
    milosnes_desc: {
      en: " ",
      fr: " ",
      es: " ",
      it: " ",
      rs: " ",
      ru: " "
    },
    copyright: {
      en: "Copyrights &copy; 2018 All Rights Reserved by The Actinium Project.",
      fr: " ",
      es: "Copyrights &copy; 2018 Todos los Derechos Reservados por El Proyecto Actinium.",
      it: "Copyrights &copy; 2018 Tutti i diritti riservati da The Actinium Project.",
      rs: "Copyrights &copy; 2018 Sva prava zadržava Aktinijum Projekat.",
      ru: " "
    },

    "JUST THE END, DONT TOUCH AFTER THIS": {
      es: "Dont touch after this"
    }
  };
  var _t = $('body').translate({lang: "en", t: t});
  var str = _t.g("translate");
  console.log(str);


  $(".lang_selector").click(function(ev) {
    var lang = $(this).attr("data-value");
    _t.lang(lang);

    console.log(lang);
    ev.preventDefault();
  });



});
