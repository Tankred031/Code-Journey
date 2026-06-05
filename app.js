//console.log(projekti);

const projectsList = document.querySelector(".projects-list");
console.log(projectsList);

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

console.log(izracunajTrajanje("2026-06-01", null, "active"));


function renderProjects() {
    projekti.forEach(function(projekt) {
        const article = document.createElement("article");
        article.classList.add("project-card")

        article.innerHTML = `
            <div class="project-header">
                <h3>${projekt.naziv}</h3>
                <span class="status active">${projekt.status}</span>
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

renderProjects()

