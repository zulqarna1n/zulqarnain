// ======= Elements =======
const projectsSection = document.getElementById("projects");
const skillsSection = document.getElementById("skills");
const projectsBtn = document.getElementById("projects-btn");
const skillsBtn = document.getElementById("skills-btn");
const toggleThemeButton = document.getElementById("toggleTheme");
const themeIcon = document.querySelector('img[alt="theme icon"]');
const githubLogo = document.querySelector('img[alt="github logo"]');
const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
const emailLogo = document.querySelector('img[alt="email logo"]');

// ======= Logo Paths =======
const logos = {
  light: {
    theme: "assets/theme_light.png",
    github: "assets/github_light.png",
    linkedin: "assets/linkedin_light.png",
    email: "assets/email_light.png",
  },
  dark: {
    theme: "assets/theme_dark.png",
    github: "assets/github_dark.png",
    linkedin: "assets/linkedin_dark.png",
    email: "assets/email_dark.png",
  },
};

// ======= Section Toggle =======
function showSection(section) {
  if (section === "projects") {
    projectsSection.style.display = "flex";
    skillsSection.style.display = "none";
    projectsBtn.classList.add("active-btn");
    skillsBtn.classList.remove("active-btn");
  } else {
    projectsSection.style.display = "none";
    skillsSection.style.display = "flex";
    skillsBtn.classList.add("active-btn");
    projectsBtn.classList.remove("active-btn");
  }
}

// Event listeners for toggle buttons
projectsBtn.addEventListener("click", () => showSection("projects"));
skillsBtn.addEventListener("click", () => showSection("skills"));

// ======= Theme Toggle =======
function applyTheme(isDark) {
  document.body.classList.toggle("dark-theme", isDark);
  themeIcon.src = isDark ? logos.dark.theme : logos.light.theme;
  githubLogo.src = isDark ? logos.dark.github : logos.light.github;
  linkedinLogo.src = isDark ? logos.dark.linkedin : logos.light.linkedin;
  emailLogo.src = isDark ? logos.dark.email : logos.light.email;
  localStorage.setItem("isDark", isDark);
}

function initTheme() {
  const isDark = localStorage.getItem("isDark") === "true";
  applyTheme(isDark);
}

// Event listener for theme button
toggleThemeButton.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-theme");
  applyTheme(isDark);
});

// ======= DOM Loaded =======
document.addEventListener("DOMContentLoaded", () => {
  showSection("projects"); // default visible section
  initTheme(); // apply saved theme
});