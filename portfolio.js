
        document.addEventListener("DOMContentLoaded", () => {
            const nameElement = document.getElementById("name");
            const aboutElement = document.getElementById("about");
            const skillsList = document.getElementById("skills-list");
            const projectsList = document.getElementById("projects-list");

            nameElement.textContent = "Sophia Doe";
            aboutElement.textContent = "I am a full-stack developer with a passion for creating elegant and responsive web applications.";
            
            const newSkill = document.createElement("div");
            newSkill.className = "bg-white p-5 rounded-lg shadow-md border border-pink-300 hover:bg-pink-100 transition";
            newSkill.textContent = "TypeScript";
            skillsList.appendChild(newSkill);
            
            const newProject = document.createElement("div");
            newProject.className = "bg-white p-6 rounded-lg shadow-lg border border-purple-300 hover:shadow-pink-300 transition";
            newProject.innerHTML = `
                <h3 class="text-xl font-bold text-pink-700">New JavaScript Project</h3>
                <p class="text-gray-600 mt-2">An interactive project showcasing JavaScript capabilities.</p>
                <a href="#" class="text-pink-500 mt-3 inline-block btn-glow">View Project</a>
            `;
            projectsList.appendChild(newProject);
        });
