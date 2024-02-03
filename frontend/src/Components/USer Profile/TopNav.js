import React from "react";
import styled from "styled-components";

const TopNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px 10px;
  border-bottom: 1px solid #151515;
`;

const AccountNav = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileName = styled.h4`
  color:#62AC43;
  margin: 0;
  font-size: 20px;
`;

function TopNav() {
  return (
    <TopNavWrapper>
      <AccountNav>
        <ProfileName>Virtual Art Gallery</ProfileName>
      </AccountNav>
    </TopNavWrapper>
  );
}
export default TopNav;
