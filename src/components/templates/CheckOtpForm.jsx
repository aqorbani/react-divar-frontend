import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "services/auth";
import { getProfile } from "src/services/user";
import { setCookie } from "src/utils/cookie";

const CheckOtpForm = ({ mobile, setStep, code, setCode }) => {
  CheckOtpForm.propTypes = {
    mobile: PropTypes.string,
    setStep: PropTypes.func,
    code: PropTypes.string,
    setCode: PropTypes.func,
  };

  const navigate = useNavigate();

  const { refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const submitHandler = async (event) => {
    event.preventDefault();

    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);

    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
    }
    if (error) console.log(error.message);
  };

  return (
    <form
      className="w-1/3 lg:max-w-sm flex-col p-3 shadow-md rounded"
      onSubmit={submitHandler}
    >
      <h2 className="text-lg font-bold">تایید شماره موبایل</h2>
      <p className="text-sm font-extralight text-gray-400 mt-2">
        کد پیامک شده به شماره {mobile} را وارد نمایید.
      </p>
      <input
        name="code"
        type="text"
        value={code}
        id="code"
        onChange={(e) => setCode(e.target.value)}
        className="w-full rounded focus:border-gray-900 mt-6"
        placeholder="کد تایید"
      />
      <span className="flex justify-between">
        <button
          type="submit"
          className="mt-5 text-white bg-red-950 rounded-md p-2 text-sm"
        >
          تایید کد
        </button>
        <button
          className="mt-5 text-red-950 bg-white rounded-md p-2 text-sm"
          onClick={() => setStep(1)}
        >
          تغییر شماره موبایل
        </button>
      </span>
    </form>
  );
};

export default CheckOtpForm;
