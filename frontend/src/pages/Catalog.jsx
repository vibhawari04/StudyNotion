import React, { useEffect, useState } from "react";
import { apiConnector } from "../services/apiconnector";
import { categories } from "../services/apis";
import { useParams } from "react-router-dom";
import { getCatalogPageData } from "../services/operations/pageAndComponentData";
import CourseSlider from "../components/core/Catalog/CourseSlider";
import Course_Card from "../components/core/Catalog/Course_Card";
import Footer from "../components/common/Footer";

const Catalog = () => {
  const { catalogName } = useParams();
  const [catalogPageData, setCatalogPageData] = useState(null);
  const [categoryId, setCategoryId] = useState("");

  // fetch all categories

  useEffect(() => {
    const getCategories = async () => {
      const res = await apiConnector("GET", categories.CATEGORIES_API);
      console.log("effect ka res ", res);
      const category_id = res?.data?.allCategory?.filter(
        (ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName
      )[0]._id;
      setCategoryId(category_id);
    };
    getCategories();
  }, [catalogName]);

  useEffect(() => {
    const getCategoryDetails = async () => {
      try {
        const res = await getCatalogPageData(categoryId);
        console.log("PRinting res: ", res);
        setCatalogPageData(res);
      } catch (error) {
        console.log(error);
      }
    };
    if (categoryId) {
      getCategoryDetails();
    }
  }, [categoryId]);

  return (
    <div className="text-white font-inter">
      <div className="flex flex-col gap-3 bg-richblack-800 py-20 px-10">
        <p className="text-richblack-500 text-lg">
          {`Home / Catalog / `}{" "}
          <span className="text-yellow-25 text-lg capitalize">
            {catalogPageData?.data?.selectedCategory?.name}
          </span>
        </p>
        <p className="text-richblack-5 capitalize text-3xl">
          {catalogPageData?.data?.selectedCategory?.name}
        </p>
        <p className="text-lg text-richblack-500">
          {" "}
          {catalogPageData?.data?.selectedCategory?.description}
        </p>
      </div>
      <div>
        {/* section 1 */}
        <div className="my-10 mx-10 flex flex-col gap-5">
          <div className="text-richblack-5 text-3xl font-bold ">
            Courses to get you started
          </div>
          <div className="text-richblack-500  hover:pointer flex flex-row gap-5  border-b">
            <p className="  hover:cursor-pointer hover:border-b hover:text-yellow-50 p-2">
              Most Popular
            </p>
            <p className=" hover:border-b hover:cursor-pointer hover:text-yellow-50   p-2">
              New
            </p>
          </div>
          <div>
            <CourseSlider
              Courses={catalogPageData?.data?.selectedCategory?.courses}
            />
          </div>
        </div>

        {/* section 2 */}
        <div className="my-10 mx-10">
          <div className="text-3xl text-richblack-5 font-bold my-5">
            Top Courses in {catalogPageData?.data?.selectedCategory?.name}
          </div>
          <div>
            <CourseSlider
              Courses={catalogPageData?.data?.differentCategory?.courses}
            />
          </div>
        </div>

        {/* section 3  */}
        <div className="my-10 mx-10">
          <div className="text-3xl text-richblack-5 font-bold my-5">
            Frequently Bought
          </div>
          <div className="py-8">
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
              {catalogPageData?.data?.mostSellingCourses
                ?.slice(0, 4)
                .map((course, index) => (
                  <Course_Card
                    course={course}
                    key={index}
                    Height={"h-[400px]"}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
