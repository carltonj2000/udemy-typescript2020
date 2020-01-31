console.log("Drag and drop project/assignment");

class Project {
  title: string;
  description: string;
  people: number;

  constructor(title: string, description: string, people: number) {
    this.title = title;
    this.description = description;
    this.people = people;
  }
}

const projects: Project[] = [];
let selectedProject: number = -1;
projects.push(new Project("a", "ab", 1));
projects.push(new Project("b", "bc", 2));
selectedProject = 1;

const app = document.getElementById("app") as HTMLDivElement;
const inputT = document.getElementById("project-input") as HTMLTemplateElement;
app?.appendChild(inputT.content.cloneNode(true));

const form = app.querySelector("form") as HTMLFormElement;
const title = app.querySelector("#title") as HTMLInputElement;
const description = app.querySelector("#description") as HTMLInputElement;
const people = app.querySelector("#people") as HTMLInputElement;

form.addEventListener("submit", e => {
  e.preventDefault();
  projects.push(new Project(title.value, description.value, +people.value));
  console.log("form submitted", title.value);
  showProjects();
});

const projectListT = document.getElementById(
  "project-list"
) as HTMLTemplateElement;
const projectListC = projectListT.content.cloneNode(true) as HTMLDivElement;
const h2 = projectListC.querySelector("h2");
if (h2) h2.innerText = "Project List";
const plcUl = projectListC.querySelector("ul");

const projectClicked = (e: MouseEvent) => {
  const t = e.target as HTMLUListElement;
  const id = t.getAttribute("data-id");
  if (!id) return;
  selectedProject = +id - 1;
  showSingleProject();
};

const showProjects = () => {
  if (!projects) return;
  showSingleProject();
  if (plcUl) plcUl.innerHTML = "";
  projects.forEach((p, i) => {
    const li = document.createElement("li");
    li.setAttribute("data-id", (i + 1).toString());
    li.addEventListener("click", projectClicked);
    li.innerText = p.title;
    if (plcUl) plcUl.appendChild(li);
  });
  app.appendChild(projectListC);
};

const projectT = document.getElementById(
  "single-project"
) as HTMLTemplateElement;
const projectC = projectT.content.cloneNode(true) as HTMLDivElement;
const pUl = projectC.querySelector("ul");

const showSingleProject = () => {
  if (selectedProject < 0) return;
  const p = projects[selectedProject];
  const li = document.createElement("li");
  li.innerText = p.title;
  if (pUl) {
    pUl.innerHTML = "";
    pUl.appendChild(li);
  }
  app.appendChild(projectC);
};

showProjects();
