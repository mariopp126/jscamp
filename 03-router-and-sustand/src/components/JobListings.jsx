import JobCard from './JobCard';

function JobListings({ jobs }) {
    return (
        <section>
        <h2>Resultados de búsqueda</h2>

        <div className="jobs-listings">
          {
            jobs.length === 0 && (
              <p style={{textAlign: 'center', padding: '1rem', textWrap: 'balance'}}>No se encontraron empleos que coincidan con tus criterios.</p>
            )
          }
          {
            jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          }

        </div>
      </section>
    )
}


export default JobListings;