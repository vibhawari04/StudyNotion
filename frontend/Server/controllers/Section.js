const Section = require("../models/Section");
const Course = require("../models/Course");
const SubSection = require("../models/SubSection");
// creat3 section
exports.createSection = async (req, res) => {
  try {
    // fetch data
    console.log("section me aari hu");
    const { sectionName, courseId } = req.body;
    //data validation
    console.log(sectionName, courseId);
    if (!sectionName || !courseId) {
      return res.status(400).json({
        success: false,
        message: "Missing properties",
      });
    }
    //create section
    const newSection = await Section.create({ sectionName });
    //update course with section objectID
    const updatedCourseDetails = await Course.findByIdAndUpdate(
      courseId,
      {
        $push: {
          courseContent: newSection._id,
        },
      },
      { new: true }
    )
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();
    // use popute to replace section aub/section both in the updateCourse dETAILS
    // .populate(
    //   "courseName",
    //   "courseDescription",
    //   "instructor",
    //   "whatYouWillLearn",
    //   "ratingAndReviews",
    //   "price",
    //   "thumbnail",
    //   "Tag",
    //   "Category",
    //   "studentEntrolled"
    // )
    // .exec();

    // return res
    console.log(newSection);
    console.log("section created ");
    return res.status(200).json({
      success: true,
      message: "Section created Successfullly",
      updatedCourseDetails,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "unable to create section",
      error: err.message,
    });
  }
};

// update section
exports.updateSection = async (req, res) => {
  try {
    // fetch data
    const { sectionName, sectionId, courseId } = req.body;
    // update data
    const section = await Section.findByIdAndUpdate(
      sectionId,
      { sectionName },
      { new: true }
    );
    const course = await Course.findById(courseId)
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();
    //retun res
    return res.status(200).json({
      success: true,
      message: section,
      data: course,
    });
  } catch (err) {
    console.error("error updatinf section ", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

// delete section

exports.deleteSection = async (req, res) => {
  console.log("isme aara hu ky section ke delete me");
  try {
    const { sectionId, courseId } = req.body;
    console.log("sectionId ", sectionId);
    await Course.findByIdAndUpdate(courseId, {
      $pull: {
        courseContent: sectionId,
      },
    });
    const section = await Section.findById(sectionId);
    console.log("section ", section);
    console.log(sectionId, courseId);
    if (!section) {
      return res.status(404).json({
        success: false,
        message: "Section not Found",
      });
    }

    //delete sub section
    await SubSection.deleteMany({ _id: { $in: section.subSection } });

    await Section.findByIdAndDelete(sectionId);

    //find the updated course and return
    const course = await Course.findById(courseId)
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();

    res.status(200).json({
      success: true,
      message: "Section deleted",
      data: course,
    });
  } catch (error) {
    console.error("Error deleting section:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
