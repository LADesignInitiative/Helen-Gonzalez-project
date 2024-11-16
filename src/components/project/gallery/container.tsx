import { type ReactElement, useState, lazy, Suspense } from "react";
//import GalleryReact from "./gallery-react.tsx";
import "./gallery.css";
import Selector from "./selector.tsx";
import type { ProjectType } from "@/util/interface.tsx";
import { GalleryContext } from "./contextItem.js";
import LoadingIndicator from "./loading-indicator.tsx";
const GalleryReact = lazy(() => import("./gallery-react.tsx"));
const Container = (props: {
  ProjectGallery: Array<ProjectType>;
  customIcon: HTMLImageElement | string | null;
}): ReactElement => {
  const { ProjectGallery, customIcon } = props;
  const [SelectedCategory, select] = useState<string>("all");
  const context = {
    ProjectGallery,
    SelectedCategory,
    select,
    customIcon,
  };
  return (
    <GalleryContext.Provider value={context}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center sm:text-left">
        <div className="mb-[12px] sec-title leading-[65px] text-center sm:[&>*]:text-left">
          <h1 className="sub-title font-primaryF">Projects</h1>
          <h2 className="text-lg sm:text-6xl font-secondaryF block">
            Check Some Of Our Recent Work.
          </h2>
        </div>
        <Selector />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative">
        <Suspense fallback={<LoadingIndicator />}>
          <GalleryReact ProjectGallery={ProjectGallery} />
        </Suspense>
      </div>
    </GalleryContext.Provider>
  );
};

export default Container;
