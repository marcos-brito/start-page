import ConfigIcon from "./ConfigIcon.tsx";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
`;

const TopLeftText = styled.span`
  font-weight: 700;
  font-size: 3rem;
`;

function Header() {
  return (
    <>
      <Container>
        <div>
          <TopLeftText>your</TopLeftText>
          <TopLeftText>/home</TopLeftText>
        </div>
        <ConfigIcon width={50} height={50} />
      </Container>
    </>
  );
}

export default Header;
