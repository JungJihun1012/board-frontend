import { LinkButton } from "./styled";

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


export default Button;