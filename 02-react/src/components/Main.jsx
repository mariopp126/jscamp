function Main() {
  return (
    <main>
      <section className="jobs-search">
        <h1>Encuentra tu próximo trabajo</h1>
        <p>Explora miles de oportunidades en el sector tecnológico</p>

        <form>
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
              required
              placeholder="Buscar ofertas de empleo por titulo, habilidad o empresa"
            />
          </div>

          <div className="search-filters">
            <select name="tecnology" id="filter-technology">
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

            <select name="location" id="filter-location">
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

            <select name="experience" id="filter-experience-level">
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

      <section>
        <h2>Resultados de búsqueda</h2>

        <div className="jobs-listings"></div>

        <nav className="pagination">
          <a href="#">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </a>
          <a className="is-active" href="#">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </a>
        </nav>
      </section>
    </main>
  );
}

export default Main;