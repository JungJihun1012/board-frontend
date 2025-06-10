import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = (
    {
        to,
        onClick = () => {},
        children,
        ...args
    }
) => {
    return(
        <LinkButton
        to={to}
        onClick={onClick}
        {...args}
        >
            {children}
        </LinkButton>
    )
}

const LinkButton = styled(Link) `
    background-color: lightgray;
    padding: 7px 12px;
    border-radius: 6px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #f1f1f1;
    }
`;
export default Button;