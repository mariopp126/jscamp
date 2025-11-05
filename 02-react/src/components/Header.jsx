
function Header() {
  return (
    <header>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-brackets-angle"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 4l-5 8l5 8" />
          <path d="M16 4l5 8l-5 8" />
        </svg>

        <h2>DevJobs</h2>
      </div>

      <nav>
        <a href="">Empleos</a>
      </nav>

      <div>
        <devjobs-avatar
          service="instagram"
          username="itsme.mario126"
          size="32"
        ></devjobs-avatar>
        <devjobs-avatar username="netflix.com" size="32"></devjobs-avatar>
      </div>
    </header>
  );
}

export default Header;