import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  Title,
  Table,
  TableHeader,
  TableRow,
  TableCell,
} from "./styled";
import { Link } from "react-router-dom";

const FetchSelect = ({ title, refreshTrigger }) => {
  const [select, setSelect] = useState([]);

  const handleList = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_LOCALHOST}/user`);
      setSelect(response.data);
    } catch (error) {
      console.error("error 메세지:", error);
    }
  };

  useEffect(() => {
    handleList();
  }, [refreshTrigger]);

  return (
    <Container>
      <Title>{title}</Title>
      <Table>
        <TableHeader>
          <TableCell>번호</TableCell>
          <TableCell>제목</TableCell>
        </TableHeader>
        {select.map((item) => (
          <TableRow key={item.index}>
            <TableCell>
                <Link to="/update">{item.index}</Link>
            </TableCell>
            <TableCell>{item.title}</TableCell>
          </TableRow>
        ))}
      </Table>
    </Container>
  );
};

export default FetchSelect;
