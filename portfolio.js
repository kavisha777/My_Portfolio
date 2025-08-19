document.addEventListener("DOMContentLoaded", () => {
    // Bio & About
    const bioElement = document.getElementById("bio");
    const aboutElement = document.getElementById("about");

    bioElement.textContent = "Motivated and detail-oriented Full Stack Web Developer (MERN) with expertise in backend development. Skilled in building scalable web applications using JavaScript, MongoDB, Express.js, React.js, and Node.js. Knowledgeable in Python with a passion for creating clean, efficient code.";

    aboutElement.textContent = "I am a passionate developer specializing in building modern, scalable web applications. I love coding, designing, and solving real-world problems through technology.";

    // Skills
    const skills = [
        "JavaScript (ES6+)",
        "Python (basic)",
        "HTML5 & CSS3",
        "React.js",
        "Node.js & Express.js",
        "MongoDB",
        "Git & GitHub",
        "REST APIs",
        "npm",
        "VS Code",
        "TypeScript"
    ];

    const skillsList = document.getElementById("skills-list");
    skills.forEach(skill => {
        const div = document.createElement("div");
        div.className = "bg-white p-5 rounded-lg shadow-md border border-pink-300 hover:bg-pink-100 transition";
        div.textContent = skill;
        skillsList.appendChild(div);
    });

    // Projects
    const projects = [
        {
            title: "ROLO",
            description: "Designed and developed a full-stack MERN application with user authentication and REST APIs.",
            link: "https://github.com/kavisha777/ROLO"
        },
        {
            title: "User Management System",
            description: "A simple application to manage users, part of UKI assignments.",
            link: "https://github.com/kavisha777/UKI_Assignment_User_Management"
        },
        {
            title: "Daily Habit Tracker",
            description: "A habit tracking app to build daily routines, part of UKI assignments.",
            link: "https://github.com/kavisha777/UKI_Assignment_Habit_Tracker"
        }
    ];

    const projectsList = document.getElementById("projects-list");
    projects.forEach(project => {
        const div = document.createElement("div");
        div.className = "bg-white p-6 rounded-lg shadow-lg border border-purple-300 hover:shadow-pink-300 transition";
        div.innerHTML = `
            <h3 class="text-xl font-bold text-pink-700">${project.title}</h3>
            <p class="text-gray-600 mt-2">${project.description}</p>
            <a href="${project.link}" target="_blank" class="text-pink-500 mt-3 inline-block btn-glow">View Project</a>
        `;
        projectsList.appendChild(div);
    });
});
