// CSS styled-components
import styled from "styled-components";

const Section = (props) => {
  return (
    <PrimarySection>
      <h2 className="sectionTitle">本日のメニュー</h2>
      <ul>
        <li>バターチキンカレー</li>
        <li>ハンバーグ</li>
        <li>グラタン</li>
        <li>ナポリタン</li>
        <li>鮭のホイル焼き</li>
      </ul>
    </PrimarySection>
  );
};

const PrimarySection = styled.section`
  margin: 16px auto;
  padding: 4%;
  background-color: #a7d9d0;

  .sectionTitle {
    color: blue;
  }
  ul {
    border: 1px solid white;
    border-radius: 8px;
  }
`;

export default Section;
