// const boton = document.querySelectorAll(".button-apply-job");
const jobsListingsSection = document.querySelector(".jobs-listings");
const seacrhInput = document.querySelector("#empleos-search-input");

jobsListingsSection?.addEventListener("click", function (event) {
  const element = event.target;
  if (element.classList.contains("button-apply-job")) {
    element.textContent = "¡Aplicado!";
    element.disabled = true;
    element.classList.add("is-applied");
  }
});

const locationFilter = document.querySelector("#filter-location");

locationFilter?.addEventListener("change", function () {
  // Aquí puedes agregar la lógica para filtrar las ofertas de trabajo según la ubicación seleccionada
  const selectedLocation = this.value;
  //console.log('Filtrando por ubicación:', selectedLocation);

  // Obtener la ubicación de cada oferta de trabajo y mostrar/ocultar según el filtro
  const jobListings = document.querySelectorAll(".job-listing-card");
  const jobsInfo = document.querySelectorAll(".job-info");

  jobListings.forEach((job) => {
    const jobInfo = job.querySelector(".job-info");
    const jobInfoContent = jobInfo.textContent.toLowerCase();

    if (jobInfoContent.includes(selectedLocation) || selectedLocation === "all") {
      job.classList.remove("is-hidden");
    } else {
      job.classList.add("is-hidden");
    }
  });
  // jobsInfo.forEach((jobInfo) => {
  //   const jobInfoContent = jobInfo.textContent.toLowerCase();
  //   //console.log(jobInfoContent.includes(selectedLocation));

  //   jobListings.forEach((job) => {
  //     if (!jobInfoContent.includes(selectedLocation)) {
  //       console.log("no incluye la ubicación");
  //       job.classList.add("is-hidden");
  //     } else {
  //       job.classList.remove("is-hidden")

  //     }
  //   });
  // });
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
