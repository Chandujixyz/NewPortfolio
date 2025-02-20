
// togle the button nav bar
const HomeB = document.getElementById("Home-b");
const AboutB = document.getElementById("About-b");
const SkillB = document.getElementById("Skill-b");
const ContactB = document.getElementById("Contact-b");
const ProjectB = document.getElementById("Project-b");



const HomeSection = document.getElementById("Home-section");
const AboutSection = document.getElementById("About-section");
const SkillSection = document.getElementById("Skill-section");
const ContactSection = document.getElementById("Contact-section");
const ProjectSection = document.getElementById("Project-section");



HomeB.addEventListener("click", () => toggleSection(HomeSection, [AboutSection, SkillSection, ContactSection, ProjectSection]));
AboutB.addEventListener("click", () => toggleSection(AboutSection, [HomeSection, SkillSection, ContactSection, ProjectSection ]));
SkillB.addEventListener("click", () => toggleSection(SkillSection, [AboutSection, HomeSection, ContactSection, ProjectSection ]));
ContactB.addEventListener("click", () => toggleSection(ContactSection, [AboutSection, HomeSection, SkillSection, ProjectSection ]));
ProjectB.addEventListener("click", () => toggleSection(ProjectSection, [AboutSection, HomeSection, SkillSection, ContactSection ]));



function toggleSection(showSection, hideSections) {
    showSection.classList.remove("hide-show");
    hideSections.forEach(section => section.classList.add("hide-show"));
}


// /////////////////////////////////////////////////////////////////////////////
 const sideMenu=document.getElementById("side-manu")
 const menuIcon=document.getElementById("menu-icon")

 menuIcon.addEventListener("click",fun);

function fun(){
    sideMenu.classList.add("opacity-a");
}
 

 












