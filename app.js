const projectsList = document.querySelector(".projects-list");
const viewButtons = document.querySelectorAll(".view-btn");


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

        article.innerHTML = `
            <div class="project-header">
                <h3>${projekt.naziv}</h3>
                <span class="status ${projekt.statusKlasa}">${projekt.status}</span>
            </div>

            <img class="project-image" 
                src="${projekt.slika}" 
                alt="Screenshot projekta ${projekt.naziv}"
            >

            <p class="project-description">
                ${projekt.opis}
            </p>
                
            <div class="project-meta">
                <p><strong>Tehnologije:</strong> ${projekt.tehnologije.join(", ")} </p>                
                <p><strong>Kategorija:</strong> ${projekt.kategorija}</p>
                <p><strong>Razina:</strong> ${projekt.razina}</p>
                <p><strong>Početak:</strong> ${projekt.pocetak}</p>
                <p><strong>Trajanje:</strong> ${izracunajTrajanje(projekt.pocetak, projekt.kraj, projekt.status)} dana</p>
            </div>
        `;

        projectsList.appendChild(article);
        console.log(projekt.naziv);
    });
}

viewButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const view = button.dataset.view;

        viewButtons.forEach(function(btn) {
            btn.classList.remove("active-view");
        });

        button.classList.add("active-view");

        renderProjects(view);
    });
});

renderProjects("aktualno")

