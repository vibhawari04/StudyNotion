import React, { useState } from "react";
import { useEffect } from "react";
import { GrClose, GrFormClose } from "react-icons/gr";
const RequirementField = ({
  name,
  label,
  register,
  errors,
  setValue,
  getValue,
}) => {
  const [requirement, setRequirement] = useState("");
  const [requirementList, setRequirementList] = useState([]);

  useEffect(() => {
    register(name, {
      required: true,
      // , validate: (value) => value.length > 0
    });
  }, []);

  useEffect(() => {
    setValue(name, requirementList);
  }, [requirementList]);

  const handleAddRequirement = () => {
    if (requirement) {
      //  purana requirement data me new requiremnet add kr do
      setRequirementList([...requirementList, requirement]);
      // next requirement ko set krne ke liye setRequirement function ko empty kr diya
      //   setRequirement("");
    }
  };
  const handleRemoveRequirement = (index) => {
    const updateedRequirementList = [...requirementList];
    updateedRequirementList.splice(index, 1);
    setRequirementList(updateedRequirementList);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-md text-richblack-5">
        {label}
        <sup className="text-pink-200">*</sup>
      </label>
      <div>
        <input
          type="text"
          id={name}
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className="w-full bg-richblack-700 p-2 rounded-md text-richblack-300 outline-none"
        />
        <button
          type="button"
          onClick={handleAddRequirement}
          className="font-semibold text-yellow-50 m-2"
        >
          Add
        </button>
      </div>
      {requirementList.length > 0 && (
        <ul>
          {requirementList.map((requirement, index) => (
            <li
              key={index}
              className="flex items-center  text-richblack-300  text-md gap-2"
            >
              <span>{requirement}</span>
              <button
                type="button"
                onClick={() => handleRemoveRequirement(index)}
                className="text-md bg-richblack-700 rounded-full p-1 "
              >
                <GrFormClose className="text-md" />
              </button>
            </li>
          ))}
        </ul>
      )}
      {errors[name] && <span>{label} is required</span>}
    </div>
  );
};

export default RequirementField;
