import { useState } from "react";
import { FormContainer, FormTitle, Form, Input, TextArea, Content, InsertButton } from "./styled";
import { post, safeAsync } from "../../../utils";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";

const FetchInsert = () => {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    safeAsync(
      async () => await post(`/board/insert`, formData),
      () => {
        setFormData({ title: "", content: "" });
        alert("등록되었습니다.");
        navigate("/read");
      }
    );
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
        <InsertButton type="submit">등록하기</InsertButton>
      </Form>
      <Content>
        <Button backgroundColor="cornflowerblue" color="#fff" to="/">돌아가기</Button>
      </Content>
    </FormContainer>
  );
};

export default FetchInsert;
