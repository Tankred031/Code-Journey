const projectsTableBody = document.querySelector(
    "#projects-table-body"
);

const tableProjectCount = document.querySelector(
    "#table-project-count"
);

/* =========================================
   PRETVARANJE NAZIVA U ID
========================================= */

function napraviProjectId(naziv) {
    return naziv
        .toLowerCase()
        .trim()
        .replace(/[čć]/g, "c")
        .replace(/š/g, "s")
        .replace(/ž/g, "z")
        .replace(/đ/g, "d")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/* =========================================
   TABLIČNI PREGLED PROJEKATA
========================================= */

function renderProjectTable() {
    if (!projectsTableBody) {
        return;
    }

    const sortiraniProjekti = [...projekti].sort(
        function (a, b) {
            return new Date(b.pocetak) - new Date(a.pocetak);
        }
    );

    projectsTableBody.innerHTML = "";

    sortiraniProjekti.forEach(function (projekt) {
        const row = document.createElement("tr");

        row.classList.add("project-table-row");

        const projectId = napraviProjectId(projekt.naziv);

        row.dataset.projectId = projectId;

        const razinaProjekta =
            projekt.razina ??
            projekt.frontendRazina ??
            "—";

        const tehnologije = Array.isArray(projekt.tehnologije)
            ? projekt.tehnologije.join(", ")
            : "—";

        row.innerHTML = `
            <td>
                <button
                    type="button"
                    class="table-project-link"
                    data-project-id="${projectId}"
                >
                    ${projekt.naziv}
                </button>
            </td>

            <td>
                <span
                    class="status ${projekt.statusKlasa || "active"}"
                >
                    ${projekt.status}
                </span>
            </td>

            <td>
                ${projekt.kategorija || "—"}
            </td>

            <td class="table-technologies">
                ${tehnologije}
            </td>

            <td>
                ${projekt.pocetak || "—"}
            </td>

            <td>
                <span class="table-level">
                    ${razinaProjekta}
                </span>
            </td>
        `;

        projectsTableBody.appendChild(row);
    });

    if (tableProjectCount) {
        tableProjectCount.textContent =
            `${projekti.length} projekata`;
    }
}

/* =========================================
   KLIK NA PROJEKT U TABLICI
========================================= */

if (projectsTableBody) {
    projectsTableBody.addEventListener("click", function (event) {
        const projectLink = event.target.closest(
            ".table-project-link"
        );

        if (!projectLink) {
            return;
        }

        const projectId = projectLink.dataset.projectId;

        const detailButton = document.querySelector(
            '[data-page="project-cards-page"]'
        );

        if (detailButton) {
            detailButton.click();
        }

        setTimeout(function () {
            const projectCard = document.getElementById(projectId);

            if (projectCard) {
                projectCard.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                projectCard.classList.add(
                    "project-card-highlight"
                );

                setTimeout(function () {
                    projectCard.classList.remove(
                        "project-card-highlight"
                    );
                }, 1600);
            }
        }, 100);
    });
}

renderProjectTable();