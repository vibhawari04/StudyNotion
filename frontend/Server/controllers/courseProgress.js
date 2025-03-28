const mongoose = require("mongoose");
const Section = require("../models/Section");
const SubSection = require("../models/SubSection");
const CourseProgress = require("../models/CourseProgress");
const Course = require("../models/Course");

exports.updateCourseProgress = async (req, res) => {
  console.log("aaya me course progress me");
  const { courseId, subsectionId } = req.body;
  console.log("req body ", req.body);
  const userId = req.user.id;

  console.log("Found id ", courseId, subsectionId, userId);

  try {
    // check if the subsection is valid
    const subSection = await SubSection.findById(subsectionId);

    console.log("spotted subSection ", subSection);

    if (!subSection) {
      return res.status(404).json({ error: "INVALID SUBSECTION" });
    }
    let courseProgress = await CourseProgress.findOne({
      courseID: courseId,
      userId: userId,
    });
    console.log("spotted courseProgress ", courseProgress);

    if (!courseProgress) {
      return res.status(404).json({
        success: false,
        message: "Course progress Does Not Exist",
      });
    } else {
      // If course progress exists, check if the subsection is already completed
      if (courseProgress.completedVideos.includes(subSectionId)) {
        return res.status(400).json({ error: "Subsection already completed" });
      }
      courseProgress.completedVideos.push(subSectionId);
    }
    await courseProgress.save();

    return res.status(200).json({ message: "Course progress updated" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
