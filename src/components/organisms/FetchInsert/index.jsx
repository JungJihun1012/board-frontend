import axios from "axios";
import { useState } from "react";
import { FormContainer, FormTitle, Form, Input, TextArea, Button } from "./styled";

const FetchInsert = ({ onInsertSuccess }) => {
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_LOCALHOST}/save`, formData);
      setFormData({ title: "", content: "" });
      if (onInsertSuccess) {
          onInsertSuccess();
          alert("등록되었습니다.");
          location.href='/';
      };
    } catch (err) {
      console.error("등록 실패:", err);
    }
  };

  return (
    <FormContainer>
      <FormTitle>게시글 등록</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          name="title"
          placeholder="제목을 입력하세요"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <TextArea
          name="content"
          placeholder="내용을 입력하세요"
          value={formData.content}
          onChange={handleChange}
          required
        />
        <Button type="submit">등록하기</Button>
      </Form>
    </FormContainer>
  );
};

export default FetchInsert;
