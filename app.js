const projectsList = document.querySelector(".projects-list");
const viewButtons = document.querySelectorAll(".view-btn");
const totalProjects = document.querySelector("#total-projects");
const completedProjects = document.querySelector("#completed-projects");
const activeProjects = document.querySelector("#active-projects");
const testingProjects = document.querySelector("#testing-projects");


function izracunajTrajanje(pocetak, kraj, status) {
    const startDate = new Date(pocetak);
    let endDate;
    if (status === "završen" || status === "napušten") {
        endDate = new Date(kraj);
    } else {
        endDate = new Date();
    }

    const razlika = endDate - startDate;
    const dani = Math.floor(razlika / (1000 * 60 * 60 * 24));

    return dani;
}

//console.log(izracunajTrajanje("2026-06-01", null, "u izradi"));


function renderStats() {
    totalProjects.textContent = projekti.length;

    completedProjects.textContent = projekti.filter(function (projekt) {
        return projekt.status === "završen";
    }).length;

    activeProjects.textContent = projekti.filter(function (projekt) {
        return projekt.status === "u izradi";
    }).length;

    testingProjects.textContent = projekti.filter(function (projekt) {
        return projekt.status === "testiranje";
    }).length;
}


function renderProjects(nacinPrikaza) {

    let projektiZaPrikaz = [...projekti];

    if (nacinPrikaza === "aktualno") {
        projektiZaPrikaz.sort(function (a, b) {
            return new Date(b.pocetak) - new Date(a.pocetak)
        });
    }

    if (nacinPrikaza === "progres") {
        projektiZaPrikaz.sort(function (a, b) {
            return new Date(a.pocetak) - new Date(b.pocetak)
        });
    }

    projectsList.innerHTML = "";

    projektiZaPrikaz.forEach(function (projekt) {
        const article = document.createElement("article");
        article.classList.add("project-card")

        let technologyBarHtml = "";

        if (Array.isArray(projekt.udioTehnologija)) {
            const barSegments = projekt.udioTehnologija
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

            const legendItems = projekt.udioTehnologija
                .map(function (tehnologija) {
                    return `
                <span class="technology-legend-item">
                    <span class="technology-dot ${tehnologija.klasa}"></span>

                    <strong>${tehnologija.naziv}</strong>
                    ${tehnologija.postotak}%
                </span>
            `;
                })
                .join("");

            technologyBarHtml = `
        <div class="technology-usage">
            <div class="technology-bar">
                ${barSegments}
            </div>

            <div class="technology-legend">
                ${legendItems}
            </div>
        </div>
    `;
        }

        console.log(projekt.naziv, projekt.status, projekt.statusKlasa);

        article.innerHTML = `
            <div class="project-header">
                <h3>${projekt.naziv}</h3>
                <span class="status ${projekt.statusKlasa || "active"}">${projekt.status}</span>
            </div>

            <img class="project-image" 
                src="${projekt.slika}" 
                alt="Screenshot projekta ${projekt.naziv}"
            >

            <div class="project-content">

                <div class="project-main-info">
                    <p class="project-description">
                        ${projekt.opis}
                    </p>
                        
                    <div class="project-meta">
                        <p><strong>Tehnologije:</strong> ${projekt.tehnologije.join(", ")}</p>  
                        
                        ${technologyBarHtml}
                        
                        <p><strong>Kategorija:</strong> ${projekt.kategorija}</p>
                        <p><strong>Početak:</strong> ${projekt.pocetak}</p>
                        <p><strong>Trajanje:</strong> ${izracunajTrajanje(projekt.pocetak, projekt.kraj, projekt.status)} dana</p>
                    </div>
                </div>

                <aside class="project-side-info">
                    <p class="side-label">Razina</p>
                    <strong>${projekt.razina}</strong>

                    ${projekt.deploy
                ? `<a class="deploy-link" href="${projekt.deploy}" target="_blank">Otvori projekt</a>`
                : `<span class="deploy-empty">Nema deploy</span>`
            }
                </aside>

            </div>

            
        `;

        projectsList.appendChild(article);
        console.log(projekt.naziv);
    });
}

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

renderProjects("aktualno");
renderStats();


/*
<div class="project-image-stack">
    ${projekt.slike.map(function(slika) {
        return `
            <img 
                src="${slika}" 
                alt="Screenshot projekta ${projekt.naziv}"
            >
        `;
    }).join("")}
</div>
*/