import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
// import { get, safeAsync } from "../../../utils";
import { BtnContainer, Container, Content, Title, UpdateYmd, UpdateYmdContent } from "./styled";
import Button from "../../atoms/Button";
import { get, safeAsync } from "../../../utils";

const FetchRead = () => {
    const { index } = useParams();
    const [select, setSelect] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        safeAsync(
            () => get(`/board/select/${index}`),
            (data) => setSelect(data)
        )
    }, [index]);

    const handleNavigate = (idx) => {
        navigate(`/update/${idx}`);
    }

    return (
        <>
            <Container>
                <UpdateYmdContent>
                    <UpdateYmd>수정일 : {select.updateYmd}</UpdateYmd>
                </UpdateYmdContent>
                <Title>{select.title}</Title>
                <Content>
                    {select.content}
                </Content>
                <BtnContainer>
                    <Button onClick={() => navigate(-1)}>돌아가기</Button>
                    <Button onClick={() => handleNavigate(index)}>수정하기</Button>
                </BtnContainer>
            </Container>
        </>
    )
}

export default FetchRead;