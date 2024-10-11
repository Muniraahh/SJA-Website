import React, { useState, useRef } from "react";
import NavbarMenu from "@/components/Navbar";

const categories = [
  {
    name: "Events",
    description: "Photos from past events",
    image: "/path-to-events-folder-image.jpg",
    images: [
      "/path-to-events-image1.jpg",
      "/path-to-events-image2.jpg",
      // Add more event images here
    ],
  },
  {
    name: "Classes",
    description: "Images from our tuition classes",
    image: "/path-to-classes-folder-image.jpg",
    images: [
      "/path-to-classes-image1.jpg",
      "/path-to-classes-image2.jpg",
      // Add more class images here
    ],
  },
  {
    name: "Workshops",
    description: "Workshops and skill development",
    image: "/path-to-workshops-folder-image.jpg",
    images: [
      "/path-to-workshops-image1.jpg",
      "/path-to-workshops-image2.jpg",
      // Add more workshop images here
    ],
  },
  {
    name: "Community Outreach",
    description: "Our outreach programs",
    image: "/path-to-outreach-folder-image.jpg",
    images: [
      "/path-to-outreach-image1.jpg",
      "/path-to-outreach-image2.jpg",
      // Add more outreach images here
    ],
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Reference for the section containing the images
  const gallerySectionRef = useRef(null);

  const openCategory = (category) => {
    setSelectedCategory(category);
    
    // Scroll into view when a category is clicked
    if (gallerySectionRef.current) {
      gallerySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavbarMenu />

      {/* Heading for the gallery section */}
      <div className="mt-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Explore Our Journey
        </h2>
        <p className="text-center text-lg mb-12 text-gray-600 dark:text-gray-400">
          Dive into our collection of memories and experiences that shaped our
          mission and community involvement.
        </p>

        {/* Adjusted top margin to add more space below the navbar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative cursor-pointer border-2 border-gray-300 dark:border-white/[0.2] bg-white dark:bg-black shadow-input flex justify-center transition-all duration-300 hover:border-indigo-500 hover:shadow-[0_0_15px_5px_rgba(99,102,241,0.6)] rounded-lg overflow-hidden"
              onClick={() => openCategory(category)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity">
                {category.name}
              </div>
            </div>
          ))}
        </div>

        {/* Display images for the selected category */}
        {selectedCategory && (
          <div ref={gallerySectionRef} className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-6">
              {selectedCategory.name} Gallery
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-center mb-6">
              {selectedCategory.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {selectedCategory.images.map((image, index) => (
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
