//console.log(projekti);

const projectsList = document.querySelector(".projects-section");

console.log(projectsList);

function renderProjects() {
    projekti.forEach(function(projekt) {
        console.log(projekt.naziv);
    });    
}

renderProjects()