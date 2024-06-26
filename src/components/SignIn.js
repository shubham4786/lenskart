"use client";
import React, { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useUserContext } from "@/app/theme-provider";

const SignIn = () => {
  const { isSignInModalOpen, setIsSignInModalOpen } = useUserContext();

  const openModal = () => setIsSignInModalOpen(true);
  const closeModal = () => setIsSignInModalOpen(false);
  return (
    <>
      <span className=" text-sm font-medium cursor-pointer" onClick={openModal}>
        Sign In
      </span>

      <Modal show={isSignInModalOpen} onClose={closeModal} />
    </>
  );
};

const Modal = ({ show, onClose }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [user, setUser] = useState("");
  const { setIsSignUpModalOpen, setIsSignInModalOpen } = useUserContext();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const openSignUp = () => {
    setIsSignInModalOpen(false);
    setIsSignUpModalOpen(true);
  };
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-500`}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div
        className={`bg-white rounded-xl transform transition-transform duration-500 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className=" w-[470px]">
          <div className="flex justify-end">
            <CloseOutlinedIcon
              className=" cursor-pointer items-end m-4 opacity-60 z-10 bg-white rounded-full"
              onClick={onClose}
            />
          </div>
          <img
            src="/images/Login.svg"
            className=" absolute top-0 rounded-t-xl "
          />
        </div>
        <div className=" mt-40 py-4 px-10">
          <h2 className="text-xl mb-4 font-serif text-[#333368]">Sign In</h2>
          <input
            type="text"
            className="w-full px-4 py-2 border border-[#e2e2ee] rounded-lg focus:outline-none text-sm"
            placeholder="Mobile / Email"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <div className="flex items-center space-x-3 py-4 ">
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

          <button
            className={`px-4 py-3 w-full rounded-full transition duration-300 text-[#000042] ${
              user
                ? "bg-[#11daace3]  hover:bg-[#11daac]"
                : "bg-[#ccc] text-[#000042] cursor-not-allowed"
            } text-sm`}
            disabled={!user}
          >
            Sign In
          </button>

          <div className="py-4 text-sm text-[#000042]">
            New Member?{" "}
            <span
              onClick={openSignUp}
              className=" font-semibold underline cursor-pointer"
            >
              Create an Account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
