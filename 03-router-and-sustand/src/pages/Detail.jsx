import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "../components/Link";
import snarkdown from "snarkdown";
import styles from "./Detail.module.css";

function JobSection({ title, content }) {
  const html = snarkdown(content);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div
        style={styles.sectionContent}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </section>
  );
}

export function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jscamp-api.vercel.app/api/jobs/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setJob(json);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div >
      <div className={styles.loading}>
        <p className={styles.loadingText}>Cargando...</p>
      </div>
    </div>
  }

  if (error || !job) {
    return (
      <div className={styles.error}>
        <h2 className={styles.errorTitle}>Oferta no encontrada</h2>

        <button onClick={() => navigate("/")} className={styles.errorButton}>
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0" }}>
      {/* <div className={styles.container}>
        <nav className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadcrumbLink}>
            Inicio
          </Link>{" "}
          &gt;{" "}
          <Link href="/search" className={styles.breadcrumbLink}>
            Empleos
          </Link>{" "}
          &gt; <span className={styles.breadcrumbCurrent}>{job.title}</span>
        </nav>
      </div>

      <header className={styles.header}>
        <h1 className={styles.jobTitle}>{job.title}</h1>
        <p className={styles.jobLocation}>{job.location}</p>
      </header> */}

      <button className={styles.applyButton}>Aplicar ahora</button>
      <JobSection title="Descripción del puesto" content={job.content.description} />
      <JobSection title="Responsabilidades" content={job.content.responsibilities} />
      <JobSection title="Requisitios" content={job.content.requirements} />
      <JobSection title="Acerca de la empresa" content={job.content.about} />
    </div>
  );
}
