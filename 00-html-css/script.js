// const boton = document.querySelectorAll(".button-apply-job");
const jobsListingsSection = document.querySelector(".jobs-listings");
const seacrhInput = document.querySelector("#empleos-search-input");
const tecFilter = document.querySelector("#filter-technology");
const experienceFilter = document.querySelector("#filter-experience-level")
const locationFilter = document.querySelector("#filter-location");
const jobs = document.querySelectorAll(".job-listing-card");

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
  const selectedLocation = this.value;
  //console.log('Filtrando por ubicación:', selectedLocation);
  
  // Obtener la ubicación de cada oferta de trabajo y mostrar/ocultar según el filtro

  jobs.forEach((job) => {
    const modalidad = job.dataset.modalidad;
    if (selectedLocation === modalidad || selectedLocation === "") {
      job.classList.remove("is-hidden");
    } else {
      job.classList.add("is-hidden");
    }
  });
});

tecFilter?.addEventListener("change", function () {
  const selectedTech = this.value;
  //console.log('Filtrando por tecnología:', selectedTech);
  const jobListings = document.querySelectorAll(".job-listing-card");
  jobListings.forEach((job) => {
    const cardContent = job.textContent.toLowerCase();
    if (cardContent.includes(selectedTech) || selectedTech === "all") {
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
    if (cardContent.includes(selectedExperience) || selectedExperience === "all") {
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
  })
})
