   
    (function () {
      const btn = document.querySelector('.menu-btn');
      const links = document.querySelector('.navlinks');
      btn.addEventListener('click', () => {
        links.classList.toggle('show');
      });
    })(); 
    document.getElementById("resumeBtn").addEventListener("click", function () {
      document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("contactBtn").addEventListener("click", function () {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });

    
    const skills = [
      { name: "HTML", level: "Semantic & Accessible Markup" },
      { name: "CSS", level: "Flexbox, Grid, Responsive Design" },
      { name: "JavaScript", level: "DOM Manipulation & Logic" },
      { name: "C Programming", level: "Problem Solving & Basics" },
      { name: "DBMS", level: "MySQL & Database Concepts" },
      { name: "Git & GitHub", level: "Version Control Basics" }
    ];

    const skillsGrid = document.getElementById("skillsGrid");

    skills.forEach(skill => {
      const div = document.createElement("div");
      div.className = "skill-card";
      div.innerHTML = `
        <div class="skill-title">${skill.name}</div>
        <div class="skill-level">${skill.level}</div>
      `;
      skillsGrid.appendChild(div);
    });
