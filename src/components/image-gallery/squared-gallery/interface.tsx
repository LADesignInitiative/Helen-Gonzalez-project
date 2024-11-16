type ImageItemType = {
  image: { src: any } | HTMLImageElement;
  altText: string;
  customStyle?: string;
  index: number;
};

type GalleryPropType = {
  images: Array<ImageItemType>;
  altText: string;
};

type LightBoxProps = {
  currentImg: { src: any } | HTMLImageElement | null;
  altText?: string;
};

type ContextType = {
  images: Array<ImageItemType>;
  currentImg?: { src: any } | HTMLImageElement;
  setCurrent: (c: any | undefined) => void;
  altText?: string;
  lightboxRef?: any;
  CloseLightBox: () => void;
  OpenLightBox: (c: { src: any }) => void;
  fadeIn: boolean;
  setFadeIn: (c: boolean) => void;
  currentIndex: number | null;
  setIndex: (c: number | null) => void;
  NextImage: () => void;
  PreviousImage: () => void;
};

type GalleryMarkdownType = {
  frontmatter: {
    layout: string;
    title: string;
    pubdate: string;
    description: string;
    author?: string;
    thumbnail: string;
    images: Array<string> | [];
  };
};

type GetThumbnailsPropType = {
  items: Array<GalleryMarkdownType>;
};

export type {
  ImageItemType,
  GalleryPropType,
  LightBoxProps,
  ContextType,
  GetThumbnailsPropType,
  GalleryMarkdownType,
};
