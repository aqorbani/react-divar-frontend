import PropTypes from "prop-types";
import { sendOtp } from "services/auth";

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
    <form
      className="w-1/3 lg:max-w-sm flex-col p-3 shadow-md rounded"
      onSubmit={submitHandler}
    >
      <h2 className="text-lg font-bold">ورود به حساب کاربری</h2>
      <p className="text-sm font-extralight text-gray-400 mt-2">
        برای استفاده از امکانات و ورود به حساب کاربری شماره موبایل خود را وارد
        نمایید ، کد تایید به این شماره ارسال خواهد شد.
      </p>
      <input
        name="mobile"
        type="text"
        value={mobile}
        id="mobile"
        onChange={(e) => setMobile(e.target.value)}
        className="w-full rounded focus:border-gray-900 mt-6"
        placeholder="شماره موبایل"
      />
      <button
        type="submit"
        className="mt-5 text-white bg-red-950 rounded-md p-2 text-sm"
      >
        ارسال کد تایید
      </button>
    </form>
  );
};

export default SendOtpForm;
