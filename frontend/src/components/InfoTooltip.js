import errorImage from "../images/error.svg";
import successImage from "../images/success.svg";

function InfoTooltip(props) {
  return (
    <div
      className={`popup popup_type_info-tooltip ${
        props.isOpen && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <div className="popup__info-tooltip">
          {props.onResult ? (
            <>
              <div
                className="popup__info-image"
                style={{ backgroundImage: `url(${successImage})` }}
              ></div>

              <h2 className="popup__info-title">
                Вы успешно зарегистрировались!
              </h2>
            </>
          ) : (
            <>
              <div
                className="popup__info-image"
                style={{ backgroundImage: `url(${errorImage})` }}
              ></div>

              <h2 className="popup__info-title">
                Что-то пошло не так! Попробуйте ещё раз.
              </h2>
            </>
          )}
        </div>
        <button
          type="button"
          className="button button_type_close"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}
export default InfoTooltip;
