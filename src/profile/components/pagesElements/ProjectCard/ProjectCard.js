const ProjectCard = ({ title, description, imgUrl, repositoryUrl, siteUrl }) => {
    return (
        <div className="project-imgbx">
            <img src={imgUrl} alt={title} />
            <div className="project-info">
                <div className="project-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                <div className="project-reference">
                    <a target="_blank" href={repositoryUrl} rel="nofollow noreferrer noopener">Repositorio</a>
                    <a target="_blank" href={siteUrl} rel="nofollow noreferrer noopener">Ir al sitio</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;