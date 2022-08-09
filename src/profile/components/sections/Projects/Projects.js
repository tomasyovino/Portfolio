import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "../../pagesElements/ProjectCard";
import projImg1 from "../../../../assets/images/Captura.JPG"
import colorSharp2 from "../../../../assets/images/color-sharp2.png";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            repositoryUrl: "https://github.com/tomasyovino/flixxus-app",
            siteUrl: "https://flixxus-ayt7ov3w5-tomasyovino.vercel.app"
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            repositoryUrl: "https://github.com/tomasyovino/flixxus-app",
            siteUrl: "https://flixxus-ayt7ov3w5-tomasyovino.vercel.app"
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            repositoryUrl: "https://github.com/tomasyovino/flixxus-app",
            siteUrl: "https://flixxus-ayt7ov3w5-tomasyovino.vercel.app"
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            repositoryUrl: "https://github.com/tomasyovino/flixxus-app",
            siteUrl: "https://flixxus-ayt7ov3w5-tomasyovino.vercel.app"
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            repositoryUrl: "https://github.com/tomasyovino/flixxus-app",
            siteUrl: "https://flixxus-ayt7ov3w5-tomasyovino.vercel.app"
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            repositoryUrl: "https://github.com/tomasyovino/flixxus-app",
            siteUrl: "https://flixxus-ayt7ov3w5-tomasyovino.vercel.app"
        }
    ];

    return(
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="projects-listbx">
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard 
                                            key={index}
                                            {...project}
                                        />
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}

export default Projects;