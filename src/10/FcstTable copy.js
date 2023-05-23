


const FcstTable = ({ address = [], values }) => {
    console.log("address", address);
    console.log("values",values);

    const filteredItems = address.filter(item => item.category === values);

    const baseTime = filteredItems.map((item)=> item.baseTime);
    const baseDate = filteredItems.map((item)=> item.baseDate);
    console.log(baseTime);



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
                <tr>
                    <td></td>
                    <td>{baseDate}</td>
                    <td>{baseTime}</td>
                    <td></td>
                </tr>
            </tbody>

        </table>

    );
}

export default FcstTable;


{/* <tbody>
                <tr>
                    <td>{item.항목명}</td>
                    <td>{item.항목명}</td>
                    <td>{item.항목명}</td>
                    <td>{item.항목명}</td>
                </tr>

            </tbody> */}








//<tbody>
//                {filteredItems.map(item => (
//                    <tr key={`${item.fcstDate}-${item.fcstTime}`}>
//                        <td>{selectedCategoryValue}</td>
//                        <td>{item.fcstDate}</td>
//                        <td>{item.fcstTime}</td>
//                        <td>{item.fcstValue}</td>
//                    </tr>
//                ))}
//            </tbody>  


    //    if (!jsonData) {
    //        return <div>Loading...</div>;
    //    }

    //   const filteredItems = jsonData.response.body.items.item.filter(item => item.category === selectedCategoryValue);