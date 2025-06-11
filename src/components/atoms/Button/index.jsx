import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = (
    {
        to,
        onClick = () => {},
        children,
        backgroundColor,
        color
    }
) => {
    return(
        <LinkButton
        to={to}
        onClick={onClick}
        style={{
            backgroundColor: backgroundColor,
            color: color
        }}
        >
            {children}
        </LinkButton>
    )
}

const LinkButton = styled(Link) `
    padding: 7px 12px;
    border-radius: 6px;
    transition: background-color 0.3s ease;
`;
export default Button;