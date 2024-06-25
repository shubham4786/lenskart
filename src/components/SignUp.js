"use client";
import React, { useEffect, useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <span className=" text-sm font-medium cursor-pointer" onClick={openModal}>
        Sign Up
      </span>
      <Modal show={isModalOpen} onClose={closeModal} />
    </>
  );
};

const Modal = ({ show, onClose }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [referral, setReferral] = useState(false);
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    mNumber: "",
    email: "",
    password: "",
    refCode: "",
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const { fName, lName, mNumber, email, password, refCode } = user;
    if (
      fName.length > 0 &&
      lName.length > 0 &&
      mNumber.length == 10 &&
      email.length > 3 &&
      password.length > 5
    ) {
      setIsDisabled(true);
    }
  }, [user]);

  const handleSubmit = () => {};
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } `}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div
        className={`bg-white rounded-xl  ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className=" w-[470px]">
          <div className="flex justify-between pt-8 px-10 text-center">
            <div className=" font-serif text-2xl text-[#333368]">
              Create an Account
            </div>
            <CloseOutlinedIcon
              className=" cursor-pointer items-end opacity-60 bg-white rounded-full"
              onClick={onClose}
            />
          </div>
        </div>
        <div className=" py-4 px-10 w-[470px]">
          <input
            type="text"
            className="w-full px-4 py-2 my-2 border border-[#e2e2ee] rounded-xl focus:outline-none text-sm"
            placeholder="First Name*"
            value={user.fName}
            onChange={(e) => setUser({ ...user, fName: e.target.value })}
          />

          <input
            type="text"
            className="w-full px-4 py-2 my-2 border border-[#e2e2ee] rounded-xl focus:outline-none text-sm"
            placeholder="Last Name*"
            value={user.lName}
            onChange={(e) => setUser({ ...user, lName: e.target.value })}
          />

          <input
            type="text"
            className="w-full px-4 py-2 my-2 border border-[#e2e2ee] rounded-xl focus:outline-none text-sm"
            placeholder="Mobile*"
            value={user.mNumber}
            onChange={(e) => setUser({ ...user, mNumber: e.target.value })}
          />

          <input
            type="text"
            className="w-full px-4 py-2 my-2 border border-[#e2e2ee] rounded-xl focus:outline-none text-sm"
            placeholder="Email*"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <input
            type="password"
            className="w-full px-4 py-2 my-2 border border-[#e2e2ee] rounded-xl focus:outline-none text-sm"
            placeholder="Password*"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <input
            type="text"
            className={`w-full px-4 py-2 my-2 border border-[#e2e2ee] rounded-xl focus:outline-none text-sm ${
              referral ? "block" : "hidden"
            }`}
            placeholder="Referral Code (Optional)"
            value={user.refCode}
            onChange={(e) => setUser({ ...user, refCode: e.target.value })}
          />

          <div
            className={`py-2 text-sm text-[#333368] ${
              referral ? "hidden" : "block"
            }`}
          >
            <span
              onClick={() => setReferral(true)}
              className=" font-semibold underline cursor-pointer pr-1"
            >
              Get a Referral Code?
            </span>
            ( Optional )
          </div>

          <div className="flex items-center space-x-3 py-2 ">
            <input
              type="checkbox"
              id="animated-checkbox"
              className="form-checkbox text-[#333368] h-5 w-5 transition duration-150 ease-in-out cursor-pointer "
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="animated-checkbox"
              className={`transition-colors duration-300 text-sm flex`}
            >
              Get updates on Whatsapp
              <img className=" w-6 mx-2" src="/images/whatsapp.webp" alt="" />
            </label>
          </div>

          <div className="py-2 text-xs text-[#333368]">
            By creating this account, you agree to our
            <span className=" font-semibold underline cursor-pointer pl-1">
              Privacy Policy
            </span>
          </div>

          <button
            className={`px-4 py-3 w-full rounded-full transition duration-300 text-[#000042] ${
              isDisabled
                ? "bg-[#11daace3]  hover:bg-[#11daac]"
                : "bg-[#ccc] text-[#000042] cursor-not-allowed"
            } text-sm`}
            // disabled={!isDisabled}
            onClick={handleSubmit}
          >
            Create an Account
          </button>

          <div className="py-2 text-xs text-[#000042] justify-center flex">
            Have an account?
            <span className=" font-semibold underline cursor-pointer pl-1">
              Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
