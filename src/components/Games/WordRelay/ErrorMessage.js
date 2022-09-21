import { CLASSNAME, ERROR_MESSAGE } from "../../../constants";
import { P } from "../../@commons";

export const ErrorMessage = (props) => {
  let { message, loadingStatus, definition } = props;

  console.log(message);
  let template;

  if (loadingStatus) {
    template = <P className="" content={message} />;

    let template;

    if (loadingStatus) {
      // template = <P className='' content={message} />;

      let template;

      if (loadingStatus) {
        // template = <P className='' content={message} />;

        template = <P className={CLASSNAME.HIDE} content={message} />;
      } else {
        message = definition ? definition : ERROR_MESSAGE.EMPTY_INPUT;
      }

      return template;
    }
  }
};
