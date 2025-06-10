import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
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
  grid-template-columns: 1fr 2fr;
  background-color: #f8f8f8;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 10px 20px;
  background-color: #fafafa;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableCell = styled.div`
  overflow-wrap: anywhere;
`;
