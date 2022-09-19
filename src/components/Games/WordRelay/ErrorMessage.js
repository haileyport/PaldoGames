import { CLASSNAME, ERROR_MESSAGE } from '../../../constants';
import { P } from '../../@commons';

export const ErrorMessage = (props) => {
  let { message, loadingStatus, definition } = props;

<<<<<<< HEAD
  console.log(message);
  let template;

  if (loadingStatus) {
    template = <P className='' content={message} />;
=======
  let template;

  if (loadingStatus) {
    // template = <P className='' content={message} />;
>>>>>>> d32da6bdc80ce39c7353d5f690a71c2a09523fed
    template = <P className={CLASSNAME.HIDE} content={message} />;
  } else {
    message = definition ? definition : ERROR_MESSAGE.EMPTY_INPUT;
  }

  return template;
};
