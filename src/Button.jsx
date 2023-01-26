// CSS styled-components
import styled from "styled-components";

// 名前 = styled.要素名
const PrimaryButton = styled.button`
  background-color: "#A7D9D0";
  border: "none";
  padding: "4px 14px";
`;

const Button = (props) => {
  return (
    <PrimaryButton
    // className={props.className}
    // onClick={() => props.onClick(props.argument)}
    >
      {props.name}
    </PrimaryButton>
  );
};
export default Button;
