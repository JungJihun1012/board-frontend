import { useEffect, useState } from "react";
import {
  Container,
  Title,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  Times,
  Content,
  StyledAtag,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { del, get, safeAsync } from "../../../utils";
import Button from "../../atoms/Button";

const FetchSelect = ({ title }) => {
  const [select, setSelect] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = (index) => {
    navigate(`/update/${index}`);
  }

  const handleList = () => safeAsync(() => get("/board/select"), setSelect);

  const handleDelete = (index) => {
    if(!confirm("삭제 하실건가요?")) return;
    safeAsync(
      async () => {
        await del(`/board/delete/${index}`);
        return handleList();
      }
    ); 
  };

  useEffect(() => {
    handleList();
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
      <Table>
        <TableHeader>
          <TableCell>번호</TableCell>
          <TableCell>제목</TableCell>
          <TableCell>작성일</TableCell>
        </TableHeader>
        {select.map((item) => (
          <TableRow key={item.index}>
            <TableCell>
              <StyledAtag onClick={() => handleNavigate(item.index)}>{item.index}</StyledAtag>
            </TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.createYmd}</TableCell>
            <Times onClick={() => handleDelete(item.index)}>&times;</Times>
          </TableRow>
        ))}
      </Table>
      <Content>
        <Button to="/" backgroundColor="lightgray">돌아가기</Button>
        <Button to="/insert" backgroundColor="lightgray">추가하기</Button>
      </Content>
    </Container>
  );
};

export default FetchSelect;
