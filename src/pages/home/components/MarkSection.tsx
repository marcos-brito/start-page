import styled from "styled-components";

interface bookMark {
  [name: string]: string;
}

interface props {
  title: string;
  marks: bookMark;
}

const Title = styled.h1`
  color: #a9b665;
  font-size: 1.2rem;
`;

const MarksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BookMark = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: currentColor;
`;

function MarkSection({ title, marks }: props) {
  const bookMarks = Object.keys(marks).map((key) => (
    <BookMark href={marks[key]} rel="noopener noreferrer">
      {key}
    </BookMark>
  ));

  return (
    <>
      <MarksContainer>
        <Title>{title}</Title>
        <ListContainer>{bookMarks}</ListContainer>
      </MarksContainer>
    </>
  );
}

export default MarkSection;
