"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { menuItems } from "./data";
import MenuCard from "./_components/MenuCard";

type CategoryKey = keyof typeof menuItems;

const Menu = () => {
  const menuCategories = Object.keys(menuItems) as CategoryKey[];
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("Kebab Wraps");
  const selectedItems = menuItems[selectedCategory];
  const isGrid = selectedItems.length >= 3;

  return (
    <section id="menu" className="bg-charcoal text-offwhite py-24 sm:py-36 px-4">
      <div className="container mx-auto max-w-screen-xl flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mb-10">
          <p className="text-primary text-base sm:text-lg font-normal mb-2 tracking-widest uppercase">
            Featured Items
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
            Explore Our Menu
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 sm:px-6 py-2 rounded-full font-semibold border text-sm sm:text-base transition-all duration-300
                ${selectedCategory === cat
                  ? "bg-primary text-black border-primary"
                  : "bg-white text-charcoal border-charcoal hover:bg-primary hover:text-black"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          layout
          className={`w-full ${
            isGrid
              ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              : "flex justify-center flex-wrap gap-x-6 gap-y-10"
          }`}
        >
          {selectedItems.map((item, index) => (
            <MenuCard key={index} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
