import React, {useEffect, useState} from "react";
import './RestaurantInfoStyle.css'; // CSS 파일을 import
import axios from 'axios';

function RestaurantInfo() {
    const [restaurant, setRestaurant] = useState({
        name: '',
        phoneNumber: '',
        address: '',
        businessHours: '',
        prices: ''
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // API 엔드포인트 및 필요한 매개변수 설정
        const apiUrl = 'http://localhost:8088/restaurant/info';
        const endpoint = '/restaurant/info';

        // Axios를 사용하여 GET 요청 보내기
        axios.get(apiUrl + endpoint)
            // 요청이 성공하면 가게 목록을 상태에 설정
            .then((res) => {
                setRestaurant(res.data);
                console.log(res.data); // 콘솔에서 데이터 제대로 들어오는지 확인
            })
            // 요청이 실패하면 오류를 처리
            .catch(err => {
                alert(err.response.data.message);
            });
    }, []);
        return (
            <div>
                <header>
                    <img src={`${process.env.PUBLIC_URL}/img/semohan-logo.png`} alt="logo"/>
                </header>
                <table>
                    <caption>식당 정보</caption>
                    <tbody>
                        <tr>
                            <th>상호명</th>
                            <td>{restaurant.name}</td>
                        </tr>
                        <tr>
                            <th>전화번호</th>
                            <td>{restaurant.phoneNumber}</td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>{restaurant.address}</td>
                        </tr>
                        <tr>
                            <th>영업 시간</th>
                            <td>{restaurant.businessHours}</td>
                        </tr>
                        <tr>
                            <th>가격</th>
                            <td>{restaurant.prices}</td>
                        </tr>
                    </tbody>
                </table>
                <input type="button" value="정보 수정" />
            </div>
        );

}

export default RestaurantInfo;
