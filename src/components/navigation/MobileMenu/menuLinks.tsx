import { useRef, useEffect } from "react";
import { menu_links } from "@/config/navigation-map.js";
import type { LinkItemType } from "@/util/interface.tsx";
import uuid from "react-uuid";
import "./style.css";
import DownArrow from "@/assets/icons/down-chevron.webp";

type MenuLinksType = {
  currentPage: string;
};

const MenuLinks = () => {
  return (
    menu_links.length > 0 &&
    menu_links.map((link: LinkItemType, index: number) => (
      <div
        className="mobile-menu-links text-left"
        key={`${link.label}-${index}`}
      >
        <LinkItem {...link} />
      </div>
    ))
  );
};

export default MenuLinks;

const LinkItem = (props: LinkItemType) => {
  const { url, label, subDirectory } = props;

  const arrowRef = useRef<HTMLImageElement>(null);
  const subDirRef = useRef<HTMLDivElement>(null);
  const dirRef = useRef<HTMLDivElement>(null);
  const toggleEvent = (event: MouseEvent) => {
    if (
      arrowRef.current &&
      arrowRef?.current?.contains(event.target as HTMLDivElement)
    ) {
      if (arrowRef?.current?.classList.contains("menu-arrow-open")) {
        arrowRef?.current?.classList.remove("menu-arrow-open");
        subDirRef?.current?.classList.add("subDirectory-closed");
      } else {
        arrowRef?.current?.classList.add("menu-arrow-open");
        subDirRef?.current?.classList.remove("subDirectory-closed");
      }
    }
  };
  useEffect(() => {
    if (dirRef.current && window.location.pathname == url) {
      dirRef.current.classList.add("currentPage");
    } else {
      if (dirRef.current && dirRef?.current.classList.contains("currentPage"))
        dirRef.current.classList.remove("currentPage");
    }
  }, [dirRef.current]);

  useEffect(() => {
    if (arrowRef.current) {
      arrowRef.current.addEventListener("mousedown", toggleEvent);
    }
    return () => {
      arrowRef?.current?.removeEventListener("mousedown", toggleEvent);
    };
  }, [arrowRef.current]);

  useEffect(() => {
    if (subDirRef.current && subDirectory && subDirectory?.length > 0) {
      var maxHeight = subDirectory?.length * 45;
      subDirRef.current.style.maxHeight = `${maxHeight}px`;
    }
  }, [subDirRef.current]);

  return (
    <>
      <div
        ref={dirRef}
        className={`relative flex flex-row border-t-[1px] border-t-[#686868] py-[10px] pl-[25px] hover:bg-slate-800 text-slate-300 cursor-pointer`}
      >
        <a href={url} className="leader-[24px] relative !my-auto block">
          {label}
        </a>
        {subDirectory && subDirectory.length > 0 && (
          <div className="leader-[32px] absolute right-[-15px] z-[5] mr-5 h-[32px] w-[32px] cursor-pointer rounded-[2px] text-center text-[16px]">
            <img
              src={DownArrow.src}
              alt="navigation arrow"
              ref={arrowRef}
              className="menu-arrow my-auto inline-flex relative text-center p-1 bg-slate-700 w-[24px] aspect-square rounded-[5px] before:m-auto before:flex before:font-bold before:items-center before:justify-center"
            />
          </div>
        )}
      </div>
      {subDirectory && subDirectory.length > 0 && (
        <div className="subDirectoryDiv subDirectory-closed" ref={subDirRef}>
          {subDirectory.map((sub, index) => (
            <LinkItem {...sub} key={uuid()} />
          ))}
        </div>
      )}
    </>
  );
};
