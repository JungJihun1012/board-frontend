import styled from "styled-components";
import FetchUpdate from "../../organisms/FetchUpdate";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get, safeAsync } from "../../../utils";

const UpdatePage = () => {
  return (
    <>
        <Container>
            <FetchUpdate />
        </Container>
    </>
  );
};

export const Container = styled.div
``;
export default UpdatePage;
