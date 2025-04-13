import styles from "./ProjectsStyles.module.css";
import pheonix from "../../assets/Phoenix.png";
import ilmchat from "../../assets/ilm-chat.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ilmchat}
          link="https://ilmchat.com"
          h3="Ilm-Chat"
          p="Rag AI chatbot for Muslim"
        />
        <ProjectCard
          src={pheonix}
          link="https://github.com/z-m-oly/pheonix-chatbot"
          h3="Pheonix"
          p="Full-stack Ai Chatbot"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
