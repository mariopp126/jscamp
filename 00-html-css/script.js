// const boton = document.querySelectorAll(".button-apply-job");
const jobsListingsSection = document.querySelector(".jobs-listings");

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

  jobsInfo.forEach((jobInfo) => {
    const jobInfoContent = jobInfo.textContent.toLowerCase();
    console.log(jobInfoContent.includes(selectedLocation));

    jobListings.forEach((job) => {
      if (!jobInfoContent.includes(selectedLocation)) {
        job.classList.add("is-hidden");
      } else {
        job.classList.remove("is-hidden")

      }
    });
  });
});
