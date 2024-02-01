import PropTypes from "prop-types";
import { sendOtp } from "../../services/auth";

const SendOtpForm = ({ setStep, mobile, setMobile }) => {
  SendOtpForm.propTypes = {
    setStep: PropTypes.func,
    mobile: PropTypes.string,
    setMobile: PropTypes.func,
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);
    console.log(mobile);

    if (response) setStep(2);
    if (error) console.log(error.message);
  };

  return (
    <form className="w-full lg:max-w-sm" onSubmit={submitHandler}>
      <h2>ورود به حساب کاربری</h2>
      <p>
        برای استفاده از امکانات و ورود به حساب کاربری شماره موبایل خود را وارد
        نمایید ، کد تایید به این شماره ارسال خواهد شد.
      </p>
      <input
        name="mobile"
        type="text"
        value={mobile}
        id="mobile"
        onChange={(e) => setMobile(e.target.value)}
        className="w-full rounded focus:border-gray-900"
        placeholder="شماره موبایل"
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
};

export default SendOtpForm;
