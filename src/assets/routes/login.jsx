import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

// --- 기본 컨테이너 ---
const Wrapper = styled.div`
  margin: 5vh auto;
  width: 90%;
  max-width: 417px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; /* 10px */
`;

// --- 제목 ---
const TitleFrame = styled.div`
  padding: 5rem 0; /* 50px */
`;

const Title = styled.h1`
  font-size: 3.2rem; /* 32px */
  font-weight: 800;
`;

// --- 폼 요소 ---
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem; /* 20px */
`;

const FormFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 10px */
`;

const Text = styled.h2`
  font-size: 2.4rem; /* 24px */
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  height: 5.2rem; /* 52px */
  padding: 1.5rem; /* 15px */
  border-radius: 1.2rem; /* 12px */
  border: 1px solid #cfd9e8;
  background-color: #f7fafc;
  font-size: 1.6rem;

  &::placeholder {
    font-size: 1.6rem;
    font-weight: 400;
    color: #4a709c;
  }
`;

// --- 버튼 ---
const LoginFrame = styled.div`
  width: 100%;
  padding: 3rem 0 1rem 0; /* 상단 30px, 하단 10px 패딩 */
`;

const LoginButton = styled.button`
  width: 100%;
  height: 4.6rem;
  border-radius: 1.2rem;
  border: none;
  background-color: #0d78f2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LoginText = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
`;

const KakaoLoginFrame = styled.div`
  width: 100%;
`;

const KakaoLoginButton = styled.button`
  width: 100%;
  height: 4.6rem;
  border-radius: 1.2rem;
  border: none;
  background-color: #fee500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const KakaoLoginText = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: #000000;
`;

// --- 비밀번호 찾기 ---
const FindPasswordFrame = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const FindPasswordText = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: #4a709c;
  cursor: pointer;
`;

export default function Login() {
  const navigate = useNavigate();

  const REST_API_KEY = "";
  const REDIRECT_URL = 'http://localhost:8080/api/auth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if(code) {
      const KakaoLogin = async () => {
        try{
          const response = await axios.post('http://localhost:8080/api/auth/kakao', {
            code: code,
          });

          const accessToken = response.data.accessToken;
          localStorage.setItem('accessToken', accessToken);

          navigate('/');
        } catch {
          console.error("카카오 로그인 실패", error);
          navigate('/');
        }
      };

      KakaoLogin();
    }
  }, [navigate]);

  return (
    <Wrapper>
      <TitleFrame>
        <Title>9roomthonUNIV_4th_UOU</Title>
      </TitleFrame>
      <Form>
        <FormFrame>
          <Text>아이디</Text>
          <Input name="아이디" placeholder="아이디를 입력하세요." type="text" />
        </FormFrame>
        <FormFrame>
          <Text>비밀번호</Text>
          <Input
            name="비밀번호"
            placeholder="비밀번호를 입력하세요."
            type="password"
          />
        </FormFrame>
      </Form>
      <LoginFrame>
        <LoginButton type="submit">
          <LoginText>로그인</LoginText>
        </LoginButton>
      </LoginFrame>
      <KakaoLoginFrame>
        <KakaoLoginButton onClick={handleLogin}>
          <KakaoLoginText>Login With Kakao</KakaoLoginText>
        </KakaoLoginButton>
      </KakaoLoginFrame>
      <FindPasswordFrame>
        <FindPasswordText>Forgot password?</FindPasswordText>
      </FindPasswordFrame>
    </Wrapper>
  );
}