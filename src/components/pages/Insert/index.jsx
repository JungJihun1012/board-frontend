import { useState } from "react";
import FetchInsert from "../../organisms/FetchInsert";

const InsertPage = () => {
    const [refresh, setRefresh] = useState(false);
    const toggleRefresh = () => setRefresh(prev => !prev);
    return (
        <>
            <div>
                <FetchInsert onInsertSuccess={toggleRefresh} />
            </div>
        </>
    )
}

export default InsertPage;