import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { get, safeAsync } from "../../../utils";
import { Container, Content, Title } from "./styled";
import Button from "../../atoms/Button";

const FetchRead = () => {
    const { index } = useParams();
    const [select, setSelect] = useState({});
    const navigate = useNavigate();

    const handleNavigate = (idx) => {
        navigate(`/update/${idx}`);
    }
    const handlePatchSelect = () => safeAsync(() => get(`/board/select/${index}`), setSelect);
    
    return (
        <>
            <Container>
                <Title>{select.title}</Title>
                <Content>
                    {select.content}
                </Content>
                <Button to='/patchSelect'>돌아가기</Button>
                <Button to=''>수정하기</Button>
            </Container>
        </>
    )
}

export default FetchRead;