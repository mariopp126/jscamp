import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import SearchForm from "../components/SearchFormSection";
import JobListings from "../components/JobListings";
import SearchFormSection from "../components/SearchFormSection";
import { useRouter } from "../hooks/useRouter";

const RESULTS_PER_PAGE = 4;

const useFilters = () => {
  const [filters, setFilters] = useState({
    search: "",
    technology: "",
    location: "",
    experience: "",
  });
  const [textFilter, setTextFilter] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("text") || "";
  });
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const page = Number(params.get("page") || 1);

    return Number.isNaN(page) ? Number(page) : 1;
  });

  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const { navigateTo } = useRouter();

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);

        const params = new URLSearchParams();
        if (textFilter) params.append("text", textFilter);
        if (filters.technology) params.append("technology", filters.technology);
        if (filters.ubicacion) params.append("type", filters.ubicacion);
        if (filters.experience) params.append("level", filters.experience);
        const offset = (currentPage - 1) * RESULTS_PER_PAGE;
        params.append("offset", offset);
        params.append("limit", RESULTS_PER_PAGE);

        const queryParams = params.toString();

        const response = await fetch(
          `https://jscamp-api.vercel.app/api/jobs?${queryParams}`
        );
        const json = await response.json();

        setJobs(json.data);
        setTotal(json.total);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, [filters, textFilter, currentPage]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (textFilter) params.append("text", textFilter);
    if (filters.technology) params.append("technology", filters.technology);
    if (filters.ubicacion) params.append("type", filters.ubicacion);
    if (filters.experience) params.append("level", filters.experience);

    if (currentPage > 1) params.append("page", currentPage);

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

    navigateTo(newUrl);
  }, [filters, textFilter, currentPage, navigateTo]);

  const totalPages = Math.ceil(total / RESULTS_PER_PAGE);

  function handlePageChange(newPage) {
    console.log("Page changed to:", newPage);
    setCurrentPage(newPage);
  }

  const handleSearch = (filters) => {
    console.log(filters);
    setFilters(filters);
    setCurrentPage(1);
  };

  const handleTextFilter = (newText) => {
    setTextFilter(newText);
    setCurrentPage(1);
  };

  return {
    jobs,
    total,
    loading,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
    handleTextFilter,
  };
};

export function SearchPage() {
  const {
    jobs,
    total,
    loading,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
    handleTextFilter,
  } = useFilters();

  const title = loading
    ? `Cargando...`
    : `Resultados: ${total}, Página ${currentPage}`;

  return (
    <main>
      <title>{title}</title>
      <SearchFormSection
        onSearch={handleSearch}
        onTextFilter={handleTextFilter}
      />
      <section>
        {loading ? <p>Cargando empleos... </p> : <JobListings jobs={jobs} />}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
