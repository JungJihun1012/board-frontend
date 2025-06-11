import Button from "../../atoms/Button";
import { Container, Content, MainText } from "./styled";


const MainPage = () => {
    return(
        <>
        <Container>
            <MainText>메인 페이지</MainText>
            <Content>
                <Button backgroundColor="lightgray" to="/insert">추가하기</Button>
                <Button backgroundColor="lightgray" to="/read">조회하기</Button>
            </Content>
        </Container>
        </>
    )
}


export default MainPage;