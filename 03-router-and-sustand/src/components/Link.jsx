import { Link as NavLink } from "react-router";

export function Link({ href, children, ...props }) {
  return (
    <NavLink href={href} {...props}>
      {children}
    </NavLink>
  );
}
