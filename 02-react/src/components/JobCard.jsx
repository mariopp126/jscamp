
function JobCard({ job }) {
    return (
        <article 
            className="job-listing-card"
            data-modalidad={job.modalidad}
            data-nivel={job.nivel}
            data-technology={job.technology}
        >
            <div>
            <h3>{job.titulo}</h3>
            <small>{job.empresa}</small>
            <p>{job.descripcion}</p>
            </div>
            <button className="button-apply-job">Aplicar</button>
        </article>
    );  
}

export default JobCard;