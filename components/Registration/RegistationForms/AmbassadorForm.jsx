import React, { useRef } from "react";
import naijaXbyState from "naija-xbystate";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().required("FullName is required*"),
  email: yup.string().email().required("Email Address is required*"),
  number: yup.string().required("Number is required*"),
  gender: yup.string().required("Gender is required*"),
  age: yup.string().required("Age is required*"),
  occupation: yup.string().required("Occupation is required*"),
  lga: yup.string().required("LGA is required*"),
});
function Ambassador() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // submisiion
  const onSubmit = data => {
    console.log(data);
    reset();
  }
  const lgas = naijaXbyState.lgas("ebonyi");
  return (
    <div>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center text-xl text-gray-500 font-bold">
          Become a MEN Ambassador
        </div>

        <div className="bg-gray-lighter shadow-lg h-full rounded-md w-full flex flex-col-1">
          <div className="px-2">
            <div className="bg-white px-6 py-8  mt-2 text-black w-full">
              <label className="text-gray-500 m-2">Full Name</label>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="fullName"
                {...register("fullName")}
              />
                <p className="text-sm mb-2 text-red-500">
                {errors.fullName?.message}
              </p>
              <label className="text-gray-500 m-2">Email Address</label>

              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
                <p className="text-sm mb-2 text-red-500">
                {errors.email?.message}
              </p>
              <label className="text-gray-500 m-2">Phone Number</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="number"
                {...register("number")}
              />
                <p className="text-sm mb-2 text-red-500">
                {errors.number?.message}
              </p>
              <label className="text-gray-500 m-2">Gender</label>

              <select
                name="gender"
                type="select"
                className="block border bg-white text-gray-400 border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                {...register("gender" ,  {required: true})}
              >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <p className="text-sm mb-2 text-red-500">
                {errors.gender?.message}
              </p>
              <label className="text-gray-500 m-2">Age</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="age"
                {...register("age")}
              />
                <p className="text-sm mb-2 text-red-500">
                {errors.age?.message}
              </p>
              <label className="text-gray-500 m-2">Occupation</label>

              <select
                name="occupation"
                type="select"
                className="block border bg-white text-gray-400 border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                {...register("occupation" , {required: true})}
              >
                <option value=""></option>
                <option value="civil servant">Civil Servant</option>
                <option value="private sector">Private Sector</option>
                <option value="umeployed">Umeployed</option>
                <option value="self employed">Self employed</option>
                <option value="business">Business</option>
                <option value="others">Others</option>
              </select>
              <p className="text-sm mb-2 text-red-500">
                {errors.occupation?.message}
              </p>

              <label className="text-gray-500 m-2">Local Goverment Area</label>

              <select
                name="lga"
                type="select"
                className="block border bg-white text-gray-400 border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                {...register("lga")}
              >
                {lgas.map((lga, index) => (
                  <option key={index} value={lga}>
                    {lga}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-white hover:text-green-600 focus:outline-none my-1"
              >
                Register
              </button>
              <span className="text-center text-gray-400 text-base mt-12">
                By clicking Register, I agree to our terms
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Ambassador;
