import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import title from "../assets/images/title.png";
import notification from "../assets/images/button_notification.png";
import mypage from "../assets/images/button_mypage.png";
import { useNavigate } from "react-router-dom";

const HeaderMain = () => {
  const nav = useNavigate();

  return (
    <HeaderWrapper>
      <ContentWrapper>
        <Logo src={logo} />
        <Title src={title} />
      </ContentWrapper>
      <ContentWrapper>
        <Icon
          src={notification}
          onClick={() => {
            nav("/notification");
          }}
        />
        <Icon
          src={mypage}
          onClick={() => {
            nav("/mypage");
          }}
        />
      </ContentWrapper>
    </HeaderWrapper>
  );
};

export default HeaderMain;

const HeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  padding: 4px 24px;
  top: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 425px;
  height: 60px;
  background-color: #fff;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.img`
  width: 38px;
  height: 38px;
`;

const Title = styled.img`
  width: 48px;
  height: 24px;
`;

const Icon = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;
`;
