import React, { useState, useRef } from "react";
import NavbarMenu from "@/components/Navbar";
import * as Felicitation from "@/assets/Felicitation";
import * as Activities from "@/assets/activities";
import * as ChildrensDay from "@/assets/childrensday";
import * as IndependenceDay from "@/assets/indeday";
import * as Picnic from "@/assets/picnic";
import * as TeachersDay from "@/assets/teachersday";

const categories = [
  {
    name: "Felicitation Ceremonies",
    description:
      "Celebrate the recognition and achievements of students, staff, and community members in various ceremonies held throughout the year.",
    src: Felicitation.pic6,
    imag: Object.values(Felicitation),
  },
  {
    name: "Activities",
    description:
      "Explore the vibrant activities organized for students, including workshops, cultural events, competitions, and creative learning sessions.",
    src: Activities.pic6,
    imag: Object.values(Activities),
  },
  {
    name: "Children's Day",
    description:
      "Relive the joy and fun-filled moments from our Children's Day celebrations, where kids enjoy games, music, and various entertaining programs.",
    src: ChildrensDay.pic2,
    imag: Object.values(ChildrensDay),
  },
  {
    name: "Independence Day & Republic Day",
    description:
      "Honor the spirit of patriotism through our celebrations of Independence Day and Republic Day, with flag hoisting, speeches, and cultural performances.",
    src: IndependenceDay.pic6,
    imag: Object.values(IndependenceDay),
  },
  {
    name: "Picnic",
    description:
      "Enjoy the memories of our picnics, where students and staff come together for a day of recreation, fun activities, and bonding.",
    src: Picnic.pic1,
    imag: Object.values(Picnic),
  },
  {
    name: "Teacher's Day",
    description:
      "A special day dedicated to our teachers, expressing gratitude and celebrating their dedication with heartfelt performances and activities by students.",
    src: TeachersDay.pic4,
    imag: Object.values(TeachersDay),
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const gallerySectionRef = useRef(null);

  const openCategory = (category) => {
    setSelectedCategory(category);

    if (gallerySectionRef.current) {
      gallerySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavbarMenu />

      <div className="mt-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Explore Our Journey
        </h2>
        <p className="text-center text-lg mb-12 text-gray-600 dark:text-gray-400">
          Dive into our collection of memories and experiences that shaped our
          mission and community involvement.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative cursor-pointer border-2 border-gray-300 dark:border-white/[0.2] bg-white dark:bg-black shadow-input flex justify-center transition-all duration-300 hover:border-indigo-500 hover:shadow-[0_0_15px_5px_rgba(99,102,241,0.6)] rounded-lg overflow-hidden"
              onClick={() => openCategory(category)}
            >
              <img
                src={category.src}
                alt={category.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
                {category.name}
              </div>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div ref={gallerySectionRef} className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-6">
              {selectedCategory.name} Gallery
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-center mb-6">
              {selectedCategory.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {selectedCategory.imag.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedCategory.name} Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
