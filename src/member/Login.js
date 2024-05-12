import React, {useState} from 'react';
import './LoginStyle.css'; // CSS 파일을 import

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 여기에서 입력된 아이디와 비밀번호를 처리하는 로직을 추가할 수 있습니다.
        console.log('Username:', username);
        console.log('Password:', password);
        // 예를 들어, 서버로 로그인 요청을 보낼 수 있습니다.
    };
    return (
        <div>
            <header>
                <img src="/img/semohan-logo.png" alt="logo" />
            </header>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">아이디</label>
                <div>
                    <input className="blank" onChange={handleUsernameChange} type="text" id="username" value={username} />
                </div>

                <label htmlFor="password">비밀번호</label>
                <div>
                    <input className="blank" onChange={handlePasswordChange} type="password" id="password" value={password} />
                </div>

                <button onClick={handleSubmit} type="submit">로그인</button>

                <div>
                    <a href="findId.jsp">아이디 찾기</a>
                    <a href="newPassword.jsp">비밀번호 재설정</a>
                    <a href="registerForm.jsp">회원가입</a>
                </div>
            </form>
        </div>
    );
}
export default Login;
