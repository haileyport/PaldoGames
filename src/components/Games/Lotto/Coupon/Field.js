import * as Fieldstyle from "./Field.style";

const Field = ({ number, select }) => {
  return (
    <>
      <Fieldstyle.Fieldbox onClick={select.bind(this, number)}>
        {number}
      </Fieldstyle.Fieldbox>
    </>
  );
};

export default Field;
