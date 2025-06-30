import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 3.1fr 2fr;
  background-color: #f8f8f8;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
`;

export const StyledAtag = styled.a`
  font-size: 14px;
  cursor: pointer;
`;

export const Content = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 8fr 5fr 1fr;
  /* display: flex;
  justify-content: space-between; */
  padding: 10px 20px;
  background-color: #fafafa;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f1f1;
  }
`;
export const Times = styled.div`
  cursor: pointer;
  font-size: 17px;
  width: 0;
  &:hover {
    color: red;
  }
`;
export const TableCell = styled.div`
  overflow-wrap: anywhere;
`;
