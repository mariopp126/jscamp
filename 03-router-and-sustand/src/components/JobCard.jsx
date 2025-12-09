import { Link } from "./Link";
import { useState } from "react";
import styles from "./JobCard.module.css";

function JobCard({ job }) {
  const [isApplied, setIsApplied] = useState(false);
  const handleApplyClick = () => {
    setIsApplied(true);
  };

  const buttonClasses = isApplied
    ? "button-apply-job applied"
    : "button-apply-job";
  const buttonText = isApplied ? "Aplicado" : "Aplicar";

  return (
    <article
      className="job-listing-card"
      data-modalidad={job.modalidad}
      data-nivel={job.nivel}
      data-technology={job.technology}
    >
      <div>
        <h3>
          <Link className={styles.title} href={`/jobs/${job.id}`}>{job.titulo}</Link>
        </h3>
        <small>
          {job.empresa} | {job.ubicacion}
        </small>
        <p>{job.descripcion}</p>
      </div>
      <div className={styles.actions}>
        <Link href={`/jobs/${job.id}`} className={styles.details}>
          Ver detalles
        </Link>
        <button className={buttonClasses} onClick={handleApplyClick}>
          {buttonText}
        </button>
      </div>
    </article>
  );
}

export default JobCard;
