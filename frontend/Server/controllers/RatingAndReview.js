const RatingAndReview = require("../models/RatingAndReview");
const Course = require("../models/Course");

// create reating
exports.createRating = async (req, res) => {
  try {
    // get user id
    const userId = req.user.id;
    console.log("user id in rating and review ", userId);
    // fetch data from req.body
    const { rating, review, courseId } = req.body;
    // check if user enrolled or not
    const courseDetails = await Course.findOne({
      _id: courseId,
      studentEnrolled: { $elemMatch: { $eq: userId } },
    });
    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: "Student is not enrolled in the course",
      });
    }
    // check if user already reviewd the course
    const allreadyReviewed = await RatingAndReview.findOne({
      user: userId,
      course: courseId,
    });

    if (allreadyReviewed) {
      return res.status(403).json({
        success: false,
        message: "course is already reviewd by the user",
      });
    }
    // create rating review
    const ratingReview = await RatingAndReview.create({
      rating,
      review,
      course: courseId,
      user: userId,
    });
    // update course with this rating review
    const updatedCourseDetails = await Course.findByIdAndUpdate(
      { _id: courseId },
      {
        $push: {
          ratingAndReviews: ratingReview._id,
        },
      },
      { new: true }
    );
    console.log(updatedCourseDetails);

    // return response
    return res.status(200).json({
      success: true,
      message: "rating and review create successfully",
      ratingReview,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// getAvgRating
exports.getAverageRating = async (req, res) => {
  try {
    // get course id
    const courseId = req.body.courseId;
    // data calc
    const result = await RatingAndReview.aggregate([
      { $match: { course: new mongoose.Types.ObjectId(courseId) } },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$rating" },
        },
      },
    ]);

    // return res
    if (result.length > 0) {
      return res.status(200).json({
        success: true,
        averageRating: result[0].averageRating,
      });
    }
    // if no rating and review exist
    return res.status(200).json({
      success: true,
      message: "avg rating is 0 , no ratings given till now",
      averageRating,
    });
  } catch (error) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get all rating and reviews
exports.getAllRating = async (req, res) => {
  try {
    const allReviews = await RatingAndReview.find({})
      .sort({ rating: "desc" })
      .populate({
        path: "user",
        select: "firstName  lastName email image",
      })
      .populate({
        path: "course",
        select: "courseName",
      })
      .exec();
    return res.status(200).json({
      success: true,
      message: "all reviews fetched  successfully",
      data: allReviews,
    });
  } catch (error) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
