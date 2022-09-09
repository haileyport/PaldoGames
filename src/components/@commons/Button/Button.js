export const Button = (props) => {
  const { className, type, content, onClickEvent } = props;

  return (
    <button className={className} type={type} onClick={onClickEvent}>
      {content}
    </button>
  );
};
