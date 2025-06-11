import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #5b76f7;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  resize: none;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #5b76f7;
  }
`;

export const UpdateButton = styled.button`
  width: 100%;
  padding: 14px;
  text-align: center;
  background-color: #5b76f7;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #4a65d4;
  }
`;

export const Content = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`;