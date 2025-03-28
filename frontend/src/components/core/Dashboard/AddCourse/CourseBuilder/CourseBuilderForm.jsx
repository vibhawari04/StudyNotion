import React from "react";
import IconBtn from "../../../../common/IconBtn";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiSolidRightArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  setCourse,
  setEditCourse,
  setStep,
} from "../../../../../slices/courseSlice";
import {
  createSection,
  updateSection,
} from "../../../../../services/operations/courseDetailsAPI";
import { toast } from "react-hot-toast";
import NestedView from "./NestedView";

const CourseBuilderForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [editSectionName, setEditSectionName] = useState(null);
  const { course } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log("data onSubmit ", data);
    setLoading(true);
    let result;
    if (editSectionName) {
      result = await updateSection(
        {
          sectionName: data.sectionName,
          sectionId: editSectionName,
          courseId: course._id,
        },
        token
      );
    } else {
      result = await createSection(
        {
          sectionName: data.sectionName,
          courseId: course._id,
        },
        token
      );
    }
    // update value
    if (result) {
      dispatch(setCourse(result));
      setEditSectionName(null);
      setValue("sectionName", "");
    }

    //loading fasle
    setLoading(false);
  };
  // useEffect(() => {
  //   console.log("UPDATED", course.courseContent);
  // }, [course.courseContent.length]);

  const cancelEdit = () => {
    setEditSectionName(null);
    setValue("sectionName", "");
  };
  const goBack = () => {
    dispatch(setStep(1));
    dispatch(setEditCourse(true));
  };
  const goToNext = () => {
    if (course.courseContent.length === 0) {
      toast.error("Please add atleast one section");
      return;
    }
    if (
      course.courseContent.some((section) => section.subSection.length === 0)
    ) {
      toast.error("please add atleast one lecture in each subsection");
      return;
    }

    dispatch(setStep(3));
  };

  const handleChangeEditSectionName = (sectionId, sectionName) => {
    console.log("section , sectionName ", sectionId, sectionName);
    if (editSectionName === sectionId) {
      cancelEdit();
      return;
    }
    setEditSectionName(sectionId);
    setValue("sectionName", sectionName);
  };

  return (
    <div className="bg-richblack-800 rounded-md p-5 flex flex-col space-y-2">
      <p className="text-richblack-5 text-2xl font-bold  ">Course Builder</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2">
          <label className="text-richblack-5 text-md " htmlFor="sectionName">
            Section Name <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="sectionName"
            placeholder="Add Section Name"
            {...register("sectionName", { required: true })}
            className="w-full bg-richblack-700 p-2 rounded-md text-richblack-300 outline-none"
          />
          {errors.sectionName && <span>Section Name is required</span>}
        </div>
        <div className="mt-10 flex gap-5 mb-5">
          <IconBtn
            type="Submit"
            disabled={loading}
            text={editSectionName ? "Edit Section Name" : "Create Section"}
            outline={true}
          >
            <IoAddCircleOutline className="text-yellow-50 " size={20} />
          </IconBtn>

          {editSectionName && (
            <button
              type="button"
              onClick={cancelEdit}
              className="text-sm text-richblack-300 underline"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {course?.courseContent?.length > 0 && (
        <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
      )}

      {/* back btn */}

      <div className="flex justify-end gap-5">
        <button
          onClick={goBack}
          className="rounded-md cursor-pointer flex items-center text-white"
        >
          Back
        </button>
        {/* next btn */}
        <IconBtn disabled={loading} text="Next" onClick={goToNext}>
          <BiSolidRightArrow />
        </IconBtn>
      </div>
    </div>
  );
};

export default CourseBuilderForm;
