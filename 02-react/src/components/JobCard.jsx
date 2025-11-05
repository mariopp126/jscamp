import data from '../data.json';

function JobCard({ data }) {
    return (
        <div className="job-listing-card">
            <h3>{data.title}</h3>
            <p>{data.company}</p>
            <p>{data.location}</p>
            <p>Nivel: {data.level}</p>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
                Ver oferta
            </a>
        </div>
    );  
}

export default JobCard;