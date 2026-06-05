//console.log(projekti);

const projectsList = document.querySelector(".projects-list");
console.log(projectsList);


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
                <p><strong>Početak:</strong> ${projekt.pocetak}</p>
                <p><strong>Trajanje:</strong> računa se kasnije kroz JavaScript</p>
            </div>
        `;

        projectsList.appendChild(article);
        console.log(projekt.naziv);
    });    
}

renderProjects()