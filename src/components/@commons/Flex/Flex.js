import { FlexBox } from "./Flex.style";

export const Flex = (props) => {
  const { children, ...rest } = props;

  return <FlexBox {...rest}>{children}</FlexBox>;
};
