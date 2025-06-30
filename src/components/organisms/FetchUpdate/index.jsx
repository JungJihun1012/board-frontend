import { useEffect, useState } from "react";
import {
  FormContainer,
  FormTitle,
  Input,
  TextArea,
  UpdateButton,
} from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import { Content } from "./styled";
import { get, put, safeAsync } from "../../../utils";
import Button from "../../atoms/Button";

const FetchUpdate = () => {
  const { index } = useParams();
  const [formData, setFormData] = useState({});
  const naivgate = useNavigate();
  useEffect(() => {
    safeAsync(
      () => get(`/board/select/${index}`),
      (data) => setFormData(data)
    );
  }, [index]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSaveValue = (e) => {
    e.preventDefault();
    safeAsync(
      () => put(`/board/update/${index}`, formData),
      () => {
        alert("저장되었습니다.");
        naivgate("/");
      }
    );
  };

  return (
    <>
      {
        !formData
          ?
          <div>로딩중</div>
          :
          <FormContainer>
            <FormTitle></FormTitle>
              <FormTitle>게시글 수정</FormTitle>
            <form>
              <Input name="index" type="hidden" value={formData.index} />
              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <TextArea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
              />
                <UpdateButton type="submit" onClick={handleSaveValue}>저장하기</UpdateButton>
            </form>
            <Content>
              <Button backgroundColor="#ccc" color="#000" to="/select" onClick={() => naivgate(-1)}>돌아가기</Button>
            </Content>
          </FormContainer>
      }
    </>
  );
};

export default FetchUpdate;