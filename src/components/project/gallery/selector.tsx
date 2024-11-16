import { useContext } from "react";
import { GalleryContext } from "./contextItem";
import type { ProjectType } from "@/util/interface";
import uuid from "react-uuid";

type SelectorType = {};
const Selector = (props: SelectorType) => {
  const { ProjectGallery } = useContext(GalleryContext);
  const AllCategories = [
    ...new Set(ProjectGallery.map((project: ProjectType) => project.category)),
  ];
  AllCategories.unshift("all");
  return (
    <div className="md:mt-[16px]">
      <ul className="filter-tabs filter-btns md:float-right md:mt-[16px]">
        {AllCategories &&
          AllCategories.length > 0 &&
          AllCategories.map((item, index) => (
            <CategoryLink category={item as string} key={uuid()} />
          ))}
      </ul>
    </div>
  );
};

type LinkType = {
  category: string;
};

const CategoryLink = (props: LinkType) => {
  const { category } = props;
  const { SelectedCategory, select } = useContext(GalleryContext);
  const ClickEvent = ({ category }: { category: string }) => {
    if (SelectedCategory !== category) {
      select(category);
    }
  };
  return (
    <li
      className={`filter ${SelectedCategory == category ? "active" : ""}`}
      onClick={() => {
        ClickEvent({ category });
      }}
    >
      {category}
    </li>
  );
};

export default Selector;
