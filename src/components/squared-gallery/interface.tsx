type ImageItemType = {
  image: {
    main: string | HTMLImageElement | { src: any };
    thumbnail?: string | HTMLImageElement | null;
    url?: string;
  };
  altText: string;
  customStyle?: string;
  index: number;
};

export type PairedArrayType = {
  main: string;
  thumbnail?: string | null | undefined;
  url?: string;
};

type GalleryPropType = {
  images: Array<PairedArrayType>;
  altText: string;
};

type LightBoxProps = {
  currentImg: {
    main: string | HTMLElement | { src: any };
    thumbnail?: string | HTMLImageElement | { src: any } | null | undefined;
  } | null;
  altText?: string;
};

type ContextType = {
  images: Array<PairedArrayType>;
  currentImg?: {
    main: string | { src: any };
    thumbnail?: string | HTMLImageElement | { src: any } | null | undefined;
  } | null;
  setCurrent: (c: any | undefined) => void;
  altText?: string;
  lightboxRef?: any;
  CloseLightBox: () => void;
  OpenLightBox: () => void;
  OpenLightBoxAndSetImg: (c: { src: any }) => void;
  fadeIn: boolean;
  setFadeIn: (c: boolean) => void;
  currentIndex: number | null;
  setIndex: (c: number | null) => void;
  NextImage: () => void;
  PreviousImage: () => void;
};

export type { ImageItemType, GalleryPropType, LightBoxProps, ContextType };
