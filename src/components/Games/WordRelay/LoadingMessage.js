import { P } from '../../@commons';

export const LoadingMessage = (props) => {
  const { className, message } = props;

  return <P className={className} content={message} />;
};
