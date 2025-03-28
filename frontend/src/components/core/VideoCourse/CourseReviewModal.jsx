import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import IconBtn from "../../common/IconBtn";
import { createRating } from "../../../services/operations/courseDetailsAPI";
import ReactStars from "react-rating-stars-component";
import { FaRegWindowClose } from "react-icons/fa";

const CourseReviewModal = ({ setReviewModal }) => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { courseEntireData } = useSelector((state) => state.viewCourse);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("courseExperience", "");
    setValue("courseRating", 0);
  }, []);

  const ratingChanged = (newRating) => {
    setValue("courseRating", newRating);
  };

  const onSubmit = async (data) => {
    await createRating(
      {
        courseId: courseEntireData._id,
        rating: data.courseRating,
        review: data.courseExperience,
      },
      token
    );
    setReviewModal(false);
  };

  return (
    <div className="text-richblack-300 w-fit ">
      <div className="border p-5 rounded-md bg-richblack-800">
        {/* Modal header */}
        <div className="flex flex-row justify-around p-5 items-center">
          <p className="text-yellow-50  font-bold text-3xl">Add Review</p>
          <button
            className="text-3xl text-yellow-50"
            onClick={() => setReviewModal(false)}
          >
            <FaRegWindowClose />
          </button>
        </div>

        {/* Modal Body */}
        <div>
          <div className="flex flex-col gap-2 text-center items-center">
            <img
              src={user?.image}
              alt="user Image"
              className="aspect-square  w-[100px] rounded-full object-cover"
            />
            <div className="text-xl">
              <p>
                {user?.firstName} {user?.lastName}
              </p>
              <p>Posting Publicly</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex gap-2 text-xl flex-col items-center"
          >
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />

            <div>
              <label htmlFor="courseExperience" className="p-3">
                Add Your Experience*
              </label>
              <textarea
                id="courseExperience"
                placeholder="Add Your Experience here"
                {...register("courseExperience", { required: true })}
                className="form-style min-h-[130px] w-full rounded p-3 my-2"
              />
              {errors.courseExperience && (
                <span>Please add your experience</span>
              )}
            </div>
            {/* Cancel and Save button */}
            <div className="flex gap-20 items-center">
              <button
                onClick={() => setReviewModal(false)}
                className="text-richblack-5"
              >
                Cancel
              </button>
              <IconBtn text="save" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseReviewModal;
