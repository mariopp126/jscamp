const jobsListingsSection = document.querySelector(".jobs-listings");

jobsListingsSection?.addEventListener("click", function (event) {
  const element = event.target;
  if (element.classList.contains("button-apply-job")) {
    element.textContent = "¡Aplicado!";
    element.disabled = true;
    element.classList.add("is-applied");
  }
});