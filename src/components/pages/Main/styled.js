import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
    from {opacity: 0;};
    to {opacity: 1;};
`;
export const Container = styled.div`
    animation: ${fadeInOut} .8s ease-in;
    display: grid;
    place-content: center;
    height: 90vh;
`;
export const MainText = styled.div`
    text-align: center;
    /* margin-top: 3em; */
    font-size: 33px;
    color: #333;
    font-weight: bold;
`;
export const Content = styled.div`
    margin-top: 3em;
    display: flex;
    justify-content: center;
    gap: 2em;
`;