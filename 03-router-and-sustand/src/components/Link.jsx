import { useRouter } from "../hooks/useRouter";

export function Link({ href, children, ...props }) {
    const { navigateTo } = useRouter();

    function handleClick(event) {
        event.preventDefault();
        
        navigateTo(href);
    }

    return (
        <a href={href} {...props} onClick={handleClick}>
            {children}
        </a>
    )
}