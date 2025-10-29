const jobsListingsSection = document.querySelector(".jobs-listings");
const seacrhInput = document.querySelector("#empleos-search-input");
const tecFilter = document.querySelector("#filter-technology");
const experienceFilter = document.querySelector("#filter-experience-level");
const locationFilter = document.querySelector("#filter-location");


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
  const jobs = document.querySelectorAll(".job-listing-card");
  const selectedTech = this.value;
  //console.log('Filtrando por tecnología:', selectedTech);
  jobs.forEach(job => {
    const tecnologia = job.dataset.technology;
    const insShown = selectedTech === tecnologia || selectedTech === "";
    job.classList.toggle("is-hidden", !insShown);
  });
});

experienceFilter?.addEventListener("change", function () {
  const jobs = document.querySelectorAll(".job-listing-card");
  const selectedExperience = this.value;
  //Filtrando por experiencia
  jobs.forEach((job) => {
    const experiencia = job.dataset.nivel;
    const isShown = selectedExperience === experiencia || selectedExperience === "";
    job.classList.toggle("is-hidden", !isShown);
  });
});

// seacrhInput?.addEventListener("input", function () {
//   const searchTerm = this.value.toLowerCase();
//   //console.log('Buscando:', searchTerm);
//   const jobListings = document.querySelectorAll(".job-listing-card");

//   jobListings.forEach((job) => {
//     const cardContent = job.textContent.toLowerCase();
//     if (cardContent.includes(searchTerm)) {
//       job.classList.remove("is-hidden");
//     } else {
//       job.classList.add("is-hidden");
//     }
//   });
// });