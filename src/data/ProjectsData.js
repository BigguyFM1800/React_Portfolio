import AlumniApp from "../assets/images/portfolio/alumni-app.png";
import EmployeeApp from "../assets/images/portfolio/emp-app2.png";


const ProjectsPreviewData = [
  {
    id: "alumni-app",
    img: AlumniApp,
    name: "Alumni App",
    stack: ["< Angular />", "< Tailwind CSS />", "< RESTful API />", "< Typescript />"],
    src: "https://glistening-cassata-8664fa.netlify.app/",
    source: "https://gitlab.thedigitalacademy.co.za/Adelaide/alumniapp",
    description:
      "Full-Stack CRUD(Create, Read, Update, Delete) Application built using AngularJS with NodeJS for backend and PostgresSQL to store data. Its purpose is to help companies track their alumni(formeremployees) employment status.",
  },
  {
    id: "employee-management-app",
    img: EmployeeApp,
    name: "Employee Management App",
    stack: ["< RESTful API />", "< Bootstrap />", "< Angular />", "< Typescript />"],
    src: "",
    source: "https://gitlab.thedigitalacademy.co.za/Fhatuwani/employee_management_system",
    description:
      "Full-Stack CRUD(Create, Read, Update, Delete) Application built using AngularJS with NodeJS for backend and PostgresSQL to store employee information. Also has a register and login for authentication.",
  }
];

const ProjectsData = [
  {
    id: "alumni-app",
    img: AlumniApp,
    name: "Alumni App",
    stack: ["< Angular />", "< Tailwind CSS />", "< RESTful API />", "< Typescript />"],
    src: "https://glistening-cassata-8664fa.netlify.app/",
    source: "https://gitlab.thedigitalacademy.co.za/Adelaide/alumniapp",
    description:
      "Full-Stack CRUD(Create, Read, Update, Delete) Application built using AngularJS with NodeJS for backend and PostgresSQL to store data. Its purpose is to help companies track their alumni(formeremployees) employment status.",
  },
  {
    id: "employee-management-app",
    img: EmployeeApp,
    name: "Employee Management App",
    stack: ["< RESTful API />", "< Bootstrap />", "< Angular />", "< Typescript />"],
    src: "",
    source: "https://gitlab.thedigitalacademy.co.za/Fhatuwani/employee_management_system",
    description:
      "Full-Stack CRUD(Create, Read, Update, Delete) Application built using AngularJS with NodeJS for backend and PostgresSQL to store employee information. Also has a register and login for authentication.",
  }
];

export { ProjectsData, ProjectsPreviewData };