import { useState } from "react";
import FetchSelect from "../../organisms/FetchSelect";
import { Container } from "./styled";

const ReadPage = () => {
    const [refresh, setRefresh] = useState(false);
    return(
        <>
            <Container>
                <FetchSelect title={"읽기 페이지"}refreshTrigger={refresh} />
            </Container>
        </>
    )
}

export default ReadPage;