class Generator {
    managerGenerator = (user) => {
        return `
        <div class="col">
            <div class="card shadow-lg p-3 mb-5 border-dark" style="width: 18rem;">
                <div class="card-header text-white bg-primary mb-3">
                ${user.name}<br>
                ${user.role}
                </div>

                <div class="card bg-secondary" style="margin:10px;">
                    <ul class="list-group list-group-flush bg-light">
                        <li class="list-group-item">ID:${user.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${user.email}">${user.email}</a></li>
                        <li class="list-group-item">Office Number:${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>       
        `
    }

    engineerGenerator = (user) => {
        return `
        <div class="col">
            <div class="card shadow-lg p-3 mb-5 border-dark" style="width: 18rem;">
                <div class="card-header text-white bg-primary mb-3">
                ${user.name}<br>
                ${user.role}
                </div>
    
                <div class="card bg-secondary" style="margin:10px;">
                    <ul class="list-group list-group-flush bg-light">
                        <li class="list-group-item">ID:${user.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${user.email}">${user.email}</a></li>
                        <li class="list-group-item">GitHub:${engineer.github}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }

    internGenerator = (user) => {
        return `
        <div class="col">
            <div class="card shadow-lg p-3 mb-5 border-dark" style="width: 18rem;">
                <div class="card-header text-white bg-primary mb-3">
                ${user.name}<br>
                ${user.role}
                </div>
    
                <div class="card bg-secondary" style="margin:10px;">
                    <ul class="list-group list-group-flush bg-light">
                        <li class="list-group-item">ID:${user.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${user.email}">${user.email}</a></li>
                        <li class="list-group-item">School:${intern.school}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }
}

module.exports = Generator;