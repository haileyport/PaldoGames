export const ModalHeader = ({ handleModal }) => {
  return (
    <header>
      <div>배경이미지</div>
      <button onClick={handleModal}>&times;</button>
    </header>
  );
};
