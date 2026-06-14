const frontendRazine = {
    0: "Hello World faza",
    1: "Static Frontend Beginner",
    2: "Interactive Frontend Beginner",
    3: "Structured Frontend Developer",
    4: "Real World Application Developer",
    5: "System Architecture Mindset",
    6: "Full Stack Systems",
    7: "Advanced Engineering / Product Systems"
};

const backendRazine = {
    0: "Backend Hello World",
    1: "Backend Beginner",
    2: "Data & API Backend",
    3: "Database Backend Developer",
    4: "Secure Application Backend",
    5: "Backend Architecture Mindset",
    6: "Full Stack Systems",
    7: "Advanced Engineering / Product Systems"
};

function napraviRazinuHtml(projekt) {
    /*
        Podržava stari zapis:
        razina: "3"

        i novi zapis:
        frontendRazina: 3,
        backendRazina: 1
    */

    const frontend =
        projekt.frontendRazina !== undefined
            ? projekt.frontendRazina
            : projekt.razina;

    const backend = projekt.backendRazina;

    /*
        Razina 6 je objedinjeni full-stack prikaz.
    */

    if (Number(frontend) === 6 || Number(backend) === 6) {
        return `
            <strong>
                6 — Full Stack Systems
            </strong>
        `;
    }

    let html = "";

    if (
        frontend !== null &&
        frontend !== undefined &&
        frontendRazine[frontend]
    ) {
        html += `
            <div class="project-level-row">
                <span class="project-level-type">
                    Frontend
                </span>

                <strong>
                    ${frontend} — ${frontendRazine[frontend]}
                </strong>
            </div>
        `;
    }

    if (
        backend !== null &&
        backend !== undefined &&
        backendRazine[backend]
    ) {
        html += `
            <div class="project-level-row">
                <span class="project-level-type backend-level-type">
                    Backend
                </span>

                <strong>
                    ${backend} — ${backendRazine[backend]}
                </strong>
            </div>
        `;
    }

    return html || `
        <strong>
            Razina nije navedena
        </strong>
    `;
}