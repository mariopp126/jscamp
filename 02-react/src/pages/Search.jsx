import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import SearchForm from "../components/SearchFormSection";
import JobListings from "../components/JobListings";
import jobsData from "../data.json";
import SearchFormSection from "../components/SearchFormSection";

const RESULTS_PER_PAGE = 4;

const useFilters = () => {
  const [filters, setFilters] = useState({
    search: "",
    technology: "",
    location: "",
    experience: "",
  });
  const [textFilter, setTextFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsFilteredByFilters = jobsData.filter((job) => {
    // Condition 1: Technology Filter
    const technologyCondition =
      filters.technology === "" || job.data.technology === filters.technology;

    // Condition 2: Location Filter
    // Note: job.ubicacion is the correct property name from your data.json
    // const locationCondition =
    //   filters.location === "" ||
    //   job.data.modalidad === filters.location;

    // // Condition 3: Experience/Nivel Filter
    // // Note: job.data.nivel is the correct property name from your data.json
    // const experienceCondition =
    //   filters.experience === "" || job.data.nivel === filters.experience;

    // // A job passes the filter ONLY IF all conditions are met (using &&)
    // // AND if the filter value is set, the job's value must match it.

    // console.log(technologyCondition, locationCondition, experienceCondition);
    return technologyCondition
  });

  const jobsFilteredByText =
    textFilter === ""
      ? jobsFilteredByFilters
      : jobsFilteredByFilters.filter((job) => {
          const text = textFilter.toLowerCase();
          return job.titulo.toLowerCase().includes(text.toLowerCase());
        });

  const totalPages = Math.ceil(jobsFilteredByText.length / RESULTS_PER_PAGE);

  const pagesResults = jobsFilteredByText.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );


  function handlePageChange(newPage) {
    console.log("Page changed to:", newPage);
    setCurrentPage(newPage);
  }

  const handleSearch = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  };

  const handleTextFilter = (newText) => {
    setTextFilter(newText);
    setCurrentPage(1);
  };

  return {
    jobsFilteredByText,
    pagesResults,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
    handleTextFilter
  };
}

export function SearchPage() {
  const {
    jobsFilteredByText,
    pagesResults,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
    handleTextFilter
  } = useFilters();

  useEffect(() => {
    document.title = `Resultados: ${jobsFilteredByText.length}, Página ${currentPage}`;
  }, [jobsFilteredByText, currentPage]);

  return (
    <main>
      <SearchFormSection
        onSearch={handleSearch}
        onTextFilter={handleTextFilter}
      />
      <JobListings jobs={pagesResults} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
}
