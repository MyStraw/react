const FcstTable = ({ jsonData, selectedCategoryValue }) => {
    if (!jsonData) {
        return <div>Loading...</div>;
    }

    const filteredItems = jsonData.response.body.items.item.filter(item => item.category === selectedCategoryValue);


    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">항목명</th>
                    <th scope="col">예측일자</th>
                    <th scope="col">예측시간</th>
                    <th scope="col">예보 값</th>                    
                </tr>
            </thead>          
            <tbody>
                {filteredItems.map(item => (
                    <tr key={`${item.fcstDate}-${item.fcstTime}`}>
                        <td>{selectedCategoryValue}</td>
                        <td>{item.fcstDate}</td>
                        <td>{item.fcstTime}</td>
                        <td>{item.fcstValue}</td>
                    </tr>
                ))}
            </tbody>  
        </table>

    );
}

export default FcstTable;