// const boton = document.querySelectorAll(".button-apply-job");
const jobsListingsSection = document.querySelector(".jobs-listings");
const seacrhInput = document.querySelector("#empleos-search-input");
const tecFilter = document.querySelector("#filter-technology");
const experienceFilter = document.querySelector("#filter-experience-level");
const locationFilter = document.querySelector("#filter-location");

jobsListingsSection?.addEventListener("click", function (event) {
  const element = event.target;
  if (element.classList.contains("button-apply-job")) {
    element.textContent = "¡Aplicado!";
    element.disabled = true;
    element.classList.add("is-applied");
  }
});

locationFilter?.addEventListener("change", function () {
  // Aquí puedes agregar la lógica para filtrar las ofertas de trabajo según la ubicación seleccionada
  const jobs = document.querySelectorAll(".job-listing-card");
  const selectedLocation = this.value;

  // Obtener la ubicación de cada oferta de trabajo y mostrar/ocultar según el filtro

  jobs.forEach((job) => {
    const modalidad = job.dataset.modalidad;
    const isShown = selectedLocation === modalidad || selectedLocation === "";
    job.classList.toggle("is-hidden", !isShown);
  });
});

tecFilter?.addEventListener("change", function () {
  const selectedTech = this.value;
  //console.log('Filtrando por tecnología:', selectedTech);
  jobs.forEach((job) => {
    const tecnologia = job.dataset.modalidad;
    if (selectedTech === tecnologia || selectedTech === "") {
      job.classList.remove("is-hidden");
    } else {
      job.classList.add("is-hidden");
    }
  });
});

experienceFilter?.addEventListener("change", function () {
  const selectedExperience = this.value;
  //Filtrando por experiencia
  const jobListings = document.querySelectorAll(".job-listing-card");
  jobListings.forEach((job) => {
    const cardContent = job.textContent.toLowerCase();
    if (
      cardContent.includes(selectedExperience) ||
      selectedExperience === "all"
    ) {
      job.classList.remove("is-hidden");
    } else {
      job.classList.add("is-hidden");
    }
  });
});

seacrhInput?.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  //console.log('Buscando:', searchTerm);
  const jobListings = document.querySelectorAll(".job-listing-card");

  jobListings.forEach((job) => {
    const cardContent = job.textContent.toLowerCase();
    if (cardContent.includes(searchTerm)) {
      job.classList.remove("is-hidden");
    } else {
      job.classList.add("is-hidden");
    }
  });
});

const container = document.querySelector(".jobs-listings");

fetch("data.json")
  .then((response) => response.json())
  .then((jobs) => {
    // Aquí puedes agregar la lógica para mostrar las ofertas de trabajo en la página
    jobs.forEach((job) => {
      const article = document.createElement("article");
      article.className = "job-listing-card";

      article.dataset.modalidad = job.data.modalidad;
      article.dataset.nivel = job.data.nivel;
      article.dataset.technology = job.data.technology;

      article.innerHTML = `<div>
              <h3>${job.titulo}</h3>
              <small>${job.empresa} | ${job.ubicacion}</small>
              <p>${job.descripcion}</p>
            </div>
            <button class="button-apply-job">Aplicar</button>`;

      container.appendChild(article);
    });
  });
