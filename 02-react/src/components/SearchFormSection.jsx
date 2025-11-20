import React, { useState } from "react";
import { useId } from "react";

const useSearchForm = ({ idTechnology, idExperience, idLocation, onSearch, onTextFilter }) => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const filters = {
      technology: formData.get(idTechnology),
      ubicacion: formData.get(idLocation),
      experience: formData.get(idExperience),
    };
    //console.log(filters);
    
    onSearch(filters);
  };

  const handleTextChange = (event) => {
    event.preventDefault();
    const searchText = event.target.value;
    setSearchText(searchText);
    onTextFilter(searchText);    
  } 

  return { 
    handleSubmit,
    handleTextChange,
    searchText
  };
}

function SearchFormSection( { onSearch, onTextFilter } ) {
  const idText = useId();
  const idTechnology = useId();
  const idLocation = useId();
  const idExperience = useId();

  const {
    handleSubmit,
    handleTextChange,
  } = useSearchForm({
    idTechnology,
    idExperience,
    idLocation,
    onSearch,
    onTextFilter
  });

  return (
    <section className="jobs-search">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico</p>

      <form onChange={handleSubmit}>
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <input
            type="text"
            id="empleos-search-input"
            placeholder="Buscar ofertas de empleo por titulo, habilidad o empresa"
            name={idText}
            onChange={handleTextChange}
          />
        </div>

        <div className="search-filters">
          <select name={idTechnology} id="filter-technology">
            <option value="" selected>
              Selecciona una tecnología
            </option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="mobile">Mobile</option>
            <option value="java">Java</option>
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
            <option value="csharp">C#</option>
            <option value="go">Go</option>
            <option value="typescript">TypeScript</option>
            <option value="swift">Swift</option>
            <option value="kotlin">Kotlin</option>
          </select>

          <select name={idLocation} id="filter-location">
            <option value="" selected>
              Selecciona una ubicación
            </option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de Mexico</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="buenos-aires">Buenos Aires</option>
            <option value="lima">Lima</option>
            <option value="bogota">Bogotá</option>
            <option value="santiago">Santiago</option>
            <option value="madrid">Madrid</option>
            <option value="valencia">Valencia</option>
          </select>

          <select name={idExperience} id="filter-experience-level">
            <option value="" selected>
              Selecciona experiencia
            </option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-Level</option>
            <option value="senior">Senior</option>
          </select>
        </div>
      </form>

      <span id="filter-selected-value"></span>
    </section>
  );
}

export default SearchFormSection;
