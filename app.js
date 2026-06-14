const projectsList = document.querySelector(".projects-list");
const viewButtons = document.querySelectorAll(".view-btn");

const totalProjects = document.querySelector("#total-projects");
const completedProjects = document.querySelector("#completed-projects");
const activeProjects = document.querySelector("#active-projects");
const testingProjects = document.querySelector("#testing-projects");


/* =========================================
   TRAJANJE PROJEKTA
========================================= */

function izracunajTrajanje(pocetak, kraj, status) {
    const startDate = new Date(pocetak);

    let endDate;

    if (
        (status === "završen" || status === "napušten") &&
        kraj
    ) {
        endDate = new Date(kraj);
    } else {
        endDate = new Date();
    }

    const razlika = endDate - startDate;

    const dani = Math.floor(
        razlika / (1000 * 60 * 60 * 24)
    );

    return Math.max(1, dani);
}


function formatirajDane(brojDana) {
    return brojDana === 1
        ? "1 dan"
        : `${brojDana} dana`;
}


/* =========================================
   STATISTIKA
========================================= */

function renderStats() {
    totalProjects.textContent = projekti.length;

    completedProjects.textContent = projekti.filter(
        function (projekt) {
            return projekt.status === "završen";
        }
    ).length;

    activeProjects.textContent = projekti.filter(
        function (projekt) {
            return projekt.status === "u izradi";
        }
    ).length;

    testingProjects.textContent = projekti.filter(
        function (projekt) {
            return projekt.status === "testiranje";
        }
    ).length;
}


/* =========================================
   SLIKE
========================================= */

function dohvatiSlikeProjekta(projekt) {
    if (Array.isArray(projekt.slike)) {
        return projekt.slike;
    }

    if (Array.isArray(projekt.slika)) {
        return projekt.slika;
    }

    if (
        typeof projekt.slika === "string" &&
        projekt.slika.trim() !== ""
    ) {
        return [projekt.slika];
    }

    return [];
}


function napraviSlikeHtml(projekt) {
    const slikeProjekta = dohvatiSlikeProjekta(projekt);

    if (slikeProjekta.length === 0) {
        return "";
    }

    const imageClass = slikeProjekta.length > 1
        ? "multiple-images"
        : "single-image";

    const slikeHtml = slikeProjekta
    .map(function (slika, index) {
        const frontClass = index === 0
            ? "is-front"
            : "";

        return `
            <img
                src="${slika}"
                alt="Screenshot projekta ${projekt.naziv}"
                class="project-image project-image-${index + 1} ${frontClass}"
                loading="lazy"
            >
        `;
    })
    .join("");

    return `
        <div class="project-images ${imageClass}">
            ${slikeHtml}
        </div>
    `;
}


/* =========================================
   JEDAN TECHNOLOGY BAR
========================================= */

function napraviJedanTechnologyBar(grupa) {
    if (
        !grupa ||
        !Array.isArray(grupa.udioTehnologija)
    ) {
        return "";
    }

    const barSegments = grupa.udioTehnologija
        .map(function (tehnologija) {
            return `
                <span
                    class="technology-bar-segment ${tehnologija.klasa}"
                    style="width: ${tehnologija.postotak}%"
                    title="${tehnologija.naziv}: ${tehnologija.postotak}%"
                ></span>
            `;
        })
        .join("");

    const legendItems = grupa.udioTehnologija
        .map(function (tehnologija) {
            return `
                <span class="technology-legend-item">

                    <span
                        class="technology-dot ${tehnologija.klasa}"
                    ></span>

                    <strong>
                        ${tehnologija.naziv}
                    </strong>

                    ${tehnologija.postotak}%

                </span>
            `;
        })
        .join("");

    const naslovGrupe = grupa.naziv
        ? `
            <p class="technology-group-title">
                ${grupa.naziv}
            </p>
        `
        : "";

    return `
        <div class="technology-group">

            ${naslovGrupe}

            <div class="technology-bar">
                ${barSegments}
            </div>

            <div class="technology-legend">
                ${legendItems}
            </div>

        </div>
    `;
}


/* =========================================
   SVI TECHNOLOGY BAROVI
========================================= */

function napraviTechnologyBars(projekt) {
    if (!Array.isArray(projekt.technologyGroups)) {
        return "";
    }

    const groupsHtml = projekt.technologyGroups
        .map(function (grupa) {
            return napraviJedanTechnologyBar(grupa);
        })
        .join("");

    return `
        <div class="technology-usage">
            ${groupsHtml}
        </div>
    `;
}


/* =========================================
   RENDER PROJEKATA
========================================= */

function renderProjects(nacinPrikaza) {
    let projektiZaPrikaz = [...projekti];

    if (nacinPrikaza === "aktualno") {
        projektiZaPrikaz.sort(function (a, b) {
            return new Date(b.pocetak) - new Date(a.pocetak);
        });
    }

    if (nacinPrikaza === "progres") {
        projektiZaPrikaz.sort(function (a, b) {
            return new Date(a.pocetak) - new Date(b.pocetak);
        });
    }

    projectsList.innerHTML = "";

    projektiZaPrikaz.forEach(function (projekt) {
        const article = document.createElement("article");

        article.classList.add("project-card");

        const projectImagesHtml = napraviSlikeHtml(projekt);

        const technologyBarsHtml =
            napraviTechnologyBars(projekt);

        const trajanje = izracunajTrajanje(
            projekt.pocetak,
            projekt.kraj,
            projekt.status
        );

        const deployHtml = projekt.deploy
            ? `
                <a
                    class="deploy-link"
                    href="${projekt.deploy}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Otvori projekt
                </a>
            `
            : `
                <span class="deploy-empty">
                    Nema deploy
                </span>
            `;

        article.innerHTML = `
            <div class="project-header">

                <h3>
                    ${projekt.naziv}
                </h3>

                <span
                    class="status ${projekt.statusKlasa || "active"}"
                >
                    ${projekt.status}
                </span>

            </div>

            ${projectImagesHtml}

            <div class="project-content">

                <div class="project-main-info">

                    <p class="project-description">
                        ${projekt.opis}
                    </p>

                    <div class="project-meta">

                        <p>
                            <strong>Tehnologije:</strong>
                            ${projekt.tehnologije.join(", ")}
                        </p>

                        ${technologyBarsHtml}

                        <p>
                            <strong>Kategorija:</strong>
                            ${projekt.kategorija}
                        </p>

                        <p>
                            <strong>Početak:</strong>
                            ${projekt.pocetak}
                        </p>

                        <p>
                            <strong>Trajanje:</strong>
                            ${formatirajDane(trajanje)}
                        </p>

                    </div>

                </div>

                <aside class="project-side-info">

                    <p class="side-label">
                        Razina
                    </p>

                    <strong>
                        ${projekt.razina}
                    </strong>

                    ${deployHtml}

                </aside>

            </div>
        `;

        projectsList.appendChild(article);
    });
}


/* =========================================
   GUMBI ZA PRIKAZ
========================================= */

viewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const view = button.dataset.view;

        viewButtons.forEach(function (btn) {
            btn.classList.remove("active-view");
        });

        button.classList.add("active-view");

        renderProjects(view);
    });
});


/* =========================================
   POKRETANJE
========================================= */

renderProjects("aktualno");
renderStats();