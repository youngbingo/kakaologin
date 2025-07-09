import { useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
    margin-top: 181px;
    margin-left: 512px;
    height: 662px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 417px;
    padding: 10px;
    gap: 10px;
`;

const TitleFrame = styled.div`
    flex-direction: row;
    display: flex;
    height: 164px;
    width: 397px;
    padding-top: 70px;
    padding-bottom: 70px;
    gap: 10px;
`

const Title = styled.h1`
    font-size: 32px;
    font-weight: 800;
`;

const Text = styled.h2`
    font-size: 24px;
    font-weight: 600;
`;

const Form = styled.form`
    flex-direction: column;
    display: flex;
    height: 192px;
    width: 397px;
    gap: 20px;
`;

const FormFrame = styled.div`
  flex-direction: column;
  display: flex;
  height: 86px;
  width: 397px;
  gap: 10px;
`;

const Input = styled.input`
  flex-direction: row;
  display: flex;
  height: 52px;
  width: 397px;
  border-radius: 12px;
  border: 1px solid #cfd9e8;
  padding: 15px;
  background-color: #f7fafc;
  justify-content: center;
  align-items: center;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #4a709c;
  }
`;

const LoginFrame = styled.div`
    flex-direction: column;
    height: 106px;
    width: 397px;
    padding: 30px 0px;
    gap: 10px;
`;

const LoginButton = styled.button`
  flex-direction: column;
  height: 46px;
  width: 397px;
  border-radius: 12px;
  border: 0px;
  background-color: #0d78f2;
  justify-content: center;
  align-items: center;
`;

const LoginText = styled.span`
  width: 42px;
  height: 24px;
  font-size: 16px;
  font-weight: 600;

  color: white;
`;

const KakaoLoginFrame = styled.div`
  flex-direction: column;
  height: 106px;
  width: 397px;
  padding-top: 70px;
  gap: 10px;
`;

const KakaoLoginButton = styled.button`
  flex-direction: column;
  height: 46px;
  width: 397px;
  border-radius: 12px;
  border: 0px;
  background-color: #fee500;
  justify-content: center;
  align-items: center;
`;

const KakaoLoginText = styled.span`
  width: 127px;
  height: 24px;
  font-size: 16px;
  font-weight: 600;

  color: #000000;
`;

const FindPasswordFrame = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 397px;
  gap: 10px;
`;

const FindPasswordText = styled.span`
  height: 24px;
  width: 128px;
  font-size: 16px;
  font-weight: 400;
  color: #4a709c;
`;

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const onChange = (e) => {
    const {target: {name, value}} = e;
    if(name === "아이디"){
        setName(value);
    } else if (name === "비밀번호"){
        setPassword(value);
    }
  }; 

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      // 로그인
      // 로그인 성공 페이지로 보내기
    } catch(e) {
      // setError
    } finally {
        setLoading(false);
    }
  };

  return (
    <Wrapper>
      <TitleFrame>
        <Title>9roomthonUNIV_4th_UOU</Title>
      </TitleFrame>
      <Form onSubmit={onSubmit}>
        <FormFrame>
          <Text>아이디</Text>
          <Input
            onChange={onChange}
            name="아이디"
            value={name}
            placeholder="아이디를 입력하세요."
            type="text"
            required
          />
        </FormFrame>
        <FormFrame>
          <Text>비밀번호</Text>
          <Input
            onChange={onChange}
            name="비밀번호"
            value={password}
            placeholder="비밀번호를 입력하세요."
            type="password"
            required
          />
        </FormFrame>
      </Form>
      <LoginFrame>
        <LoginButton type="submit">
          <LoginText>로그인</LoginText>
        </LoginButton>
      </LoginFrame>
      <KakaoLoginFrame>
        <KakaoLoginButton type="submit">
          <KakaoLoginText>Login With Kakao</KakaoLoginText>
        </KakaoLoginButton>
      </KakaoLoginFrame>
      <FindPasswordFrame>
        <FindPasswordText>Forgot password?</FindPasswordText>
      </FindPasswordFrame>
    </Wrapper>
  );
}