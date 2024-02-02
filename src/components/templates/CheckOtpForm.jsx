import PropTypes from "prop-types";
import { checkOtp } from "services/auth";
import { setCookie } from "utils/cookie";

const CheckOtpForm = ({ mobile, setStep, code, setCode }) => {
  CheckOtpForm.propTypes = {
    mobile: PropTypes.string,
    setStep: PropTypes.func,
    code: PropTypes.string,
    setCode: PropTypes.func,
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);

    if (response) {
      setCookie(response.data);
    }
    if (error) console.log(error.message);
  };

  return (
    <form className="w-full lg:max-w-sm" onSubmit={submitHandler}>
      <h4>تایید شماره موبایل</h4>
      <p>کد پیامک شده به شماره {mobile} را وارد نمایید.</p>
      <input
        name="code"
        type="text"
        value={code}
        id="code"
        onChange={(e) => setCode(e.target.value)}
        className="w-full rounded focus:border-gray-900"
        placeholder="کد تایید"
      />
      <button type="submit">تایید کد</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
};

export default CheckOtpForm;
