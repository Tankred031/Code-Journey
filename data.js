const razineProjekata = {
    "0": {
        broj: 0,
        naziv: "Hello World faza",
        opis: "Prvi mali projekti, osnovne naredbe i upoznavanje s tehnologijom."
    },

    "1": {
        broj: 1,
        naziv: "Static Frontend Beginner",
        opis: "Statične web stranice izrađene pomoću HTML-a i CSS-a."
    },

    "2": {
        broj: 2,
        naziv: "Interactive Frontend Beginner",
        opis: "Interaktivne frontend aplikacije s korisničkim unosima, stanjem i API pozivima."
    },

    "3": {
        broj: 3,
        naziv: "Structured Frontend Developer",
        opis: "Strukturirane aplikacije s komponentama, CRUD funkcijama i organiziranim podacima."
    },

    "4": {
        broj: 4,
        naziv: "Real World Application Developer",
        opis: "Aplikacije povezane sa stvarnim podacima, lokacijom, API servisima i kontekstualnom logikom."
    },

    "5": {
        broj: 5,
        naziv: "System Architecture Mindset",
        opis: "Sustavi s progresijom, grananjem, pravilima, dinamičkim renderiranjem i složenijim tokom podataka."
    },

    "6": {
        broj: 6,
        naziv: "Full Stack Systems",
        opis: "Frontend i backend komunikacija, baze podataka, autentifikacija i API arhitektura."
    },

    "7": {
        broj: 7,
        naziv: "Advanced Engineering / Product Systems",
        opis: "Napredni, skalabilni sustavi poput SaaS platformi, multiplayer i AI aplikacija."
    }
};

const projekti = [
    {
        naziv: "My First Webpage",
        opis: "Moja prva HTML/CSS stranica: osnovni HTML kostur, heading elementi, link na CSS datoteku i prva promjena boje pozadine.",

        tehnologije: ["HTML", "CSS"],

        technologyGroups: [
            {
                naziv: "",
                udioTehnologija: [
                    {
                        naziv: "CSS",
                        postotak: 55,
                        klasa: "tech-css"
                    },
                    {
                        naziv: "HTML",
                        postotak: 45,
                        klasa: "tech-html"
                    }
                ]
            }
        ],

        kategorija: "First Steps / HTML CSS Basics",

        slika: "images/MyFirst-img.png",

        status: "završen",
        statusKlasa: "completed",

        pocetak: "2025-11-06",
        kraj: "2025-11-06",

        razina: "0",

        deploy: ""
    },

    {
        naziv: "Machines of Future",
        opis: "Statički HTML/CSS SF projekt inspiriran filmovima 80-ih, s tematskim stranicama, slikama, videom i retro atmosferom.",

        tehnologije: ["HTML", "CSS"],

        technologyGroups: [
            {
                naziv: "",
                udioTehnologija: [
                    {
                        naziv: "HTML",
                        postotak: 75.9,
                        klasa: "tech-html"
                    },
                    {
                        naziv: "CSS",
                        postotak: 24.1,
                        klasa: "tech-css"
                    }
                ]
            }
        ],

        kategorija: "Static Website / Movie Theme",

        slika: "images/Machines-img.png",

        status: "završen",
        statusKlasa: "completed",

        pocetak: "2025-12-20",
        kraj: "2026-01-12",

        razina: "1",

        deploy: ""
    },

    {
        naziv: "WineAndCheesePairingApp",
        opis: "React aplikacija za pregled vina i sireva, CRUD funkcionalnosti i uparivanje vina sa sirevima.",

        tehnologije: [
            "React",
            "React Bootstrap",
            "JavaScript",
            "Vite"
        ],

        technologyGroups: [
            {
                naziv: "",
                udioTehnologija: [
                    {
                        naziv: "JavaScript",
                        postotak: 96.4,
                        klasa: "tech-js"
                    },
                    {
                        naziv: "CSS",
                        postotak: 3.5,
                        klasa: "tech-css"
                    },
                    {
                        naziv: "HTML",
                        postotak: 0.1,
                        klasa: "tech-html"
                    }
                ]
            }
        ],

        kategorija: "Food Pairing / CRUD App",

        slika: ["images/Wine-img.png", "images/Wine2-img.png"],

        status: "završen",
        statusKlasa: "completed",

        pocetak: "2026-03-12",
        kraj: "2026-05-19",

        razina: "3",

        deploy: ""
    },
    {
        naziv: "Health Companion",
        opis: "Wellness aplikacija s meteo podacima, hidracijom i sezonskim preporukama.",

        tehnologije: [
            "React",
            "Bulma",
            "JavaScript",
            "API"
        ],

        technologyGroups: [
            {
                naziv: "",
                udioTehnologija: [
                    {
                        naziv: "JavaScript",
                        postotak: 97.3,
                        klasa: "tech-js"
                    },
                    {
                        naziv: "CSS",
                        postotak: 2.1,
                        klasa: "tech-css"
                    },
                    {
                        naziv: "HTML",
                        postotak: 0.6,
                        klasa: "tech-html"
                    }
                ]
            }
        ],

        kategorija: "Health / Wellness App",

        slika: "images/Health-img.png",

        status: "testiranje",
        statusKlasa: "testing",

        pocetak: "2026-05-24",
        kraj: null,

        razina: "4",

        deploy: "https://health-companion-mauve.vercel.app/"
    },
    {
        naziv: "DruidSpecs",

        opis: "React vodič kroz Diablo druid i assassin specijalizacije, njihove vještine, potrebne razine, troškove mane, trajanje i tipove napada.",

        tehnologije: [
            "React",
            "React Bootstrap",
            "JavaScript",
            "CSS",
            "Vite"
        ],

        technologyGroups: [
            {
                naziv: "",
                udioTehnologija: [
                    {
                        naziv: "JavaScript",
                        postotak: 98,
                        klasa: "tech-js"
                    },
                    {
                        naziv: "HTML",
                        postotak: 1.1,
                        klasa: "tech-html"
                    },
                    {
                        naziv: "CSS",
                        postotak: 0.9,
                        klasa: "tech-css"
                    }
                ]
            }
        ],

        kategorija: "Game Guide / Reference App",

        slika: ["images/druids1-img.png", "images/druids2-img.png"],

        status: "završen",
        statusKlasa: "completed",

        pocetak: "2026-05-22",
        kraj: "2026-06-02",

        razina: "2",

        deploy: ""
    },
    {
        naziv: "Excise Duties Calculator",
        opis: "Kalkulator trošarina za kavu, pića, duhan i alkohol.",

        tehnologije: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        technologyGroups: [
            {
                naziv: "",
                udioTehnologija: [
                    {
                        naziv: "JavaScript",
                        postotak: 42,
                        klasa: "tech-js"
                    },
                    {
                        naziv: "CSS",
                        postotak: 29.4,
                        klasa: "tech-css"
                    },
                    {
                        naziv: "HTML",
                        postotak: 28.6,
                        klasa: "tech-html"
                    }
                ]
            }
        ],

        kategorija: "Calculator / Work Tool",

        slika: "images/Excise-img.png",

        status: "završen",
        statusKlasa: "completed",

        pocetak: "2026-06-01",
        kraj: "2026-06-11",

        razina: "3",

        deploy: "https://excise-duties-calculator.vercel.app/"
    },
    {
        naziv: "SF Quiz",
        opis: "Retro SF kviz aplikacija s razinama, tematskim kategorijama, admin otključavanjem, nagradnim slikama i spremanjem napretka u localStorage.",

        tehnologije: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        technologyGroups: [
            {
                naziv: "",
                udioTehnologija: [
                    {
                        naziv: "JavaScript",
                        postotak: 79.8,
                        klasa: "tech-js"
                    },
                    {
                        naziv: "CSS",
                        postotak: 18.5,
                        klasa: "tech-css"
                    },
                    {
                        naziv: "HTML",
                        postotak: 1.7,
                        klasa: "tech-html"
                    }
                ]
            }
        ],

        kategorija: "Quiz / Progression App",

        slika: "images/SF-Quiz-img.png",

        status: "završen",
        statusKlasa: "completed",

        pocetak: "2026-06-04",
        kraj: "2026-06-17",

        razina: "5",

        deploy: ""
    },
    {
        naziv: "Obvious Solution",
        opis: "Interaktivna SF priča u kojoj korisnik izborima određuje smjer radnje, lokacije i daljnji tijek priče.",
        tehnologije: ["Vue", "JavaScript", "CSS", "Vue Router", "Vite"],

        technologyGroups: [
            {
                naziv: "",
                udioTehnologija: [
                    {
                        naziv: "JavaScript",
                        postotak: 54.9,
                        klasa: "tech-js"
                    },
                    {
                        naziv: "CSS",
                        postotak: 26.8,
                        klasa: "tech-css"
                    },
                    {
                        naziv: "Vue",
                        postotak: 18.5,
                        klasa: "tech-vue"
                    },
                    {
                        naziv: "HTML",
                        postotak: 1.8,
                        klasa: "tech-html"
                    }
                ]
            }
        ],

        kategorija: "Interactive Story / Branching System",

        slika: "images/ObviousSolution-img.png",

        status: "napušten",
        statusKlasa: "abandoned",

        pocetak: "2026-05-30",
        kraj: null,

        frontendRazina: 5,
        backendRazina: null,

        deploy: ""
    },
    {
        naziv: "SM Šped Website",
        opis: "Moderna poslovna web stranica za špeditersku firmu s prikazom usluga, carinskih postupaka, podataka o tvrtki i kontakt obrascem.",

        tehnologije: [
            "Vue",
            "Bulma",
            "CSS",
            "JavaScript",
            "Vite"
        ],

        technologyGroups: [
            {
                naziv: "",
                udioTehnologija: [
                    {
                        naziv: "JavaScript",
                        postotak: 59,
                        klasa: "tech-js"
                    },
                    {
                        naziv: "Vue",
                        postotak: 28.6,
                        klasa: "tech-vue"
                    },
                    {
                        naziv: "CSS",
                        postotak: 11.5,
                        klasa: "tech-css"
                    },
                    {
                        naziv: "HTML",
                        postotak: 0.9,
                        klasa: "tech-html"
                    }
                ]
            }
        ],

        kategorija: "Business Website / Logistics",

        slika: "images/SM2-img.png",

        status: "završen",
        statusKlasa: "completed",

        pocetak: "2026-06-13",
        kraj: "2026-06-14",

        razina: "2",

        deploy: "https://webpagesm-sped.vercel.app/"
    },

    {
        naziv: "Python Page & Python Streamlit",
        opis: "Dvije jednostavne Python web aplikacije: Flask stranica s HTML/CSS frontendom i Streamlit aplikacija izrađena potpuno u Pythonu.",

        tehnologije: [
            "Python",
            "Flask",
            "Streamlit",
            "HTML",
            "CSS"
        ],

        technologyGroups: [
            {
                naziv: "Flask Page",
                udioTehnologija: [
                    {
                        naziv: "CSS",
                        postotak: 50.6,
                        klasa: "tech-css"
                    },
                    {
                        naziv: "HTML",
                        postotak: 33.8,
                        klasa: "tech-html"
                    },
                    {
                        naziv: "Python",
                        postotak: 15.6,
                        klasa: "tech-python"
                    }
                ]
            },

            {
                naziv: "Streamlit Page",
                udioTehnologija: [
                    {
                        naziv: "Python",
                        postotak: 100,
                        klasa: "tech-python"
                    }
                ]
            }
        ],

        kategorija: "Learning Project / Python Web",

        slike: [
            "images/Python-img.png",
            "images/Streamlit-img.png"
        ],

        status: "završen",
        statusKlasa: "completed",

        pocetak: "2026-06-14",
        kraj: "2026-06-14",

        razina: "0",

        deploy: ""
    },
    {
        naziv: "SF Quiz 2.0",

        opis:
            "Nova Vue verzija interaktivnog SF filmskog kviza s različitim razdobljima, tematskim cjelinama, sustavom napredovanja, nagradama i zasebnim vizualnim identitetom za svaku granu kviza.",

        tehnologije: [
            "Vue",
            "JavaScript",
            "CSS",
            "Bulma",
            "Vite"
        ],

        technologyGroups: [
            {
                naziv: "",
                udioTehnologija: [                    
                    {
                        naziv: "CSS",
                        postotak: 51.1,
                        klasa: "tech-css"
                    },
                    {
                        naziv: "Vue",
                        postotak: 38,
                        klasa: "tech-vue"
                    },
                    {
                        naziv: "JavaScript",
                        postotak: 9.2,
                        klasa: "tech-js"
                    },
                    {
                        naziv: "HTML",
                        postotak: 1.7,
                        klasa: "tech-html"
                    }
                ]
            }
        ],

        kategorija: "Quiz / Progression System",

        slika: "images/SF-Q2-img.png",

        status: "u izradi",
        statusKlasa: "active",

        pocetak: "2026-06-16",
        kraj: null,

        frontendRazina: 6,
        backendRazina: null,

        deploy: ""
    },
    {
    naziv: "Što kuhamo?",

    opis:
        "Vue aplikacija za planiranje tjednog jelovnika i vođenje kućnih zaliha hrane u hladnjaku i špajzi. Omogućit će odabir obroka po danima, unos kupljenih namirnica i povezivanje potrošnje sastojaka sa zalihama.",

    tehnologije: [
        "Vue",
        "JavaScript",
        "UIkit",
        "CSS",
        "Vite"
    ],

    technologyGroups: [
            {
                naziv: "",
                udioTehnologija: [                    
                    {
                        naziv: "JavaScript",
                        postotak: 64.3,
                        klasa: "tech-js"
                    },
                    {
                        naziv: "HTML",
                        postotak: 22.7,
                        klasa: "tech-html"
                    },
                    {
                        naziv: "Vue",
                        postotak: 13.0,
                        klasa: "tech-vue"
                    }                   
                ]
            }
        ],

    kategorija: "Meal Planner / Pantry Management",

    slika: "images/CookingMenu-img.png",

    status: "u izradi",
    statusKlasa: "active",

    pocetak: "2026-06-17",
    kraj: null,

    frontendRazina: 3,
    backendRazina: null,

    deploy: ""
}

];


/*
status: završen, napušten, testiranje, u izradi
statusKlasa: completed, abandoned, testing, active

*/
