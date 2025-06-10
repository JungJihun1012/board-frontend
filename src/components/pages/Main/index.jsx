import styled from "styled-components";
import Button from "../../atoms/Button";


const MainPage = () => {
    return(
        <>
        <Container>
            <MainText>메인 페이지</MainText>
            <Content>
                <Button to="/insert">추가하기</Button>
                <Button to="/read">조회하기</Button>
            </Content>
        </Container>
        </>
    )
}

const Container = styled.div`
    display: grid;
    place-content: center;
    height: 90vh;
`;
const MainText = styled.div`
    text-align: center;
    /* margin-top: 3em; */
    font-size: 33px;
    color: #333;
    font-weight: bold;
`;
const Content = styled.div`
    margin-top: 3em;
    display: flex;
    justify-content: center;
    gap: 2em;
`;
export default MainPage;