import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const FormTitle = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  font-size: 24px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  &:focus {
    border-color: #0077ff;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  min-height: 150px;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  resize: none;
  &:focus {
    border-color: #0077ff;
    outline: none;
  }
`;

export const InsertButton = styled.button`
  background-color: #0077ff;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #005fcc;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;