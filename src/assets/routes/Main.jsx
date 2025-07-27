import styled from "styled-components";
import HomeIconImg from "../images/MainIcon.svg";
import ProfileIconImg from "../images/ProfileIcon.svg";
import { useNavigate } from "react-router-dom";


const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  width: 100%;
  min-height: 6.875rem; /* font-size 16px 기준 */
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HomeButton = styled.button`
  all: unset;
  width: 5rem;
  height: 2.8125rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
`

const HomeIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const HomeText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: black;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MyPageText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: black;
  cursor: pointer;
`;

const LogoutText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: black;
  cursor: pointer;
`;

const ProfileIcon = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  cursor: pointer;
`;

const Content = styled.div`
  width: 100%;
  min-width: 1100px;
  min-height: 23.375rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  margin-top: 15rem;
  gap: 5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
`

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 1000px;
  min-height: 10.625rem;
  gap: 2.5rem;
  flex-direction: row;
  justify-content: center;
`;

const CategoryButton = styled.div`
  display: flex;
  width: 18.75rem;
  height: 9.375rem;
  border-radius: 3.125rem;
  background-color: #d9d9d9;
  box-shadow: 0 0 3.125rem 0 #00000040 inset , 0.625rem 0.625rem 1.875rem 0 #f7fafc inset;
  align-items: center;
  justify-content: center;
`;

const CategoryText = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`

export default function Main() {
  const navigate = useNavigate();

  const handleLogout = async => {
    localStorage.removeItem("accessToken");

    alert("로그아웃되었습니다.");

    navigate("/");
  }

  return (
    <Wrapper>
      <Header>
        <HomeButton>
          <HomeIcon src={HomeIconImg} />
            <HomeText>HOME</HomeText>
        </HomeButton>

        <NavLinks>
          <MyPageText>마이페이지</MyPageText>
          <LogoutText onClick={handleLogout}>로그아웃</LogoutText>
          <ProfileIcon src={ProfileIconImg} />
        </NavLinks>
      </Header>
      <Content>
        <Title>9oormthonUNIV_4th_UOU</Title>

        <CategoryContainer>
          <CategoryButton>
            <CategoryText>Project</CategoryText>
          </CategoryButton>

          <CategoryButton>
            <CategoryText>Study</CategoryText>
          </CategoryButton>

          <CategoryButton>
            <CategoryText>Community</CategoryText>
          </CategoryButton>
        </CategoryContainer>
      </Content>
    </Wrapper>
  );
}
