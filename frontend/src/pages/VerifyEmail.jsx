import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineLockReset } from "react-icons/md";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, signupData } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };
  return (
    <div className="mx-auto my-auto ">
      <div className="text-white">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className=" p-5 ">
            <h1 className="text-3xl text-richblack-5 font-bold">
              Verify Email
            </h1>
            <p className="text-richblack-100 text-xl py-2">
              A verification code has been sent to you. Enter the code below.
            </p>
            <form onSubmit={handleOnSubmit}>
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => (
                  <input
                    {...props}
                    placeholder="-"
                    style={{
                      boxShadow: "inset 0px -1px 0prgba(255, 255, 255, 0.18)",
                    }}
                    className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                  />
                )}
                containerStyle={{
                  justifyContent: "space-between",
                  gap: "0 6px",
                }}
              />
              <button
                type="submit"
                className={`rounded-md text-xl bg-yellow-50 w-full mt-5 px-6 py-3 text-center text-[13px] font-bold text-richblack-900 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]`}
              >
                Verify And Register
              </button>
            </form>

            <div className="flex justify-between mt-5 ">
              <div>
                <Link to="/login" className="flex text-xl  gap-2 items-center">
                  <AiOutlineArrowLeft />
                  <p>Back To Login</p>
                </Link>
              </div>
              <div>
                <button
                  onClick={() => dispatch(sendOtp(signupData.email))}
                  className="flex gap-2 items-center text-xl text-blue-100 "
                >
                  <MdOutlineLockReset className="text-2xl " />
                  Resend it
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
