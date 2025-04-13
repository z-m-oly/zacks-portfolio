import styles from "./ProjectsStyles.module.css";
import pheonix from "../../assets/Phoenix.png";
import ilmchat from "../../assets/ilm-chat.png";
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
      </div>
    </section>
  );
}

export default Projects;
