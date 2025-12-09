import { NavLink } from 'react-router'
import { Link } from './Link'

export function Header() {
  return (
    <header>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <h1 style={{ color: 'white' }}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            DevJobs
        </h1>
      </Link>

      <nav>
        <Link href="/search" >Empleos</Link>
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
