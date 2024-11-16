import type {
  GetThumbnailsPropType,
  GalleryMarkdownType,
} from "./interface.tsx";

const GetThumbnails = ({ items }: GetThumbnailsPropType): Array<any> | [] => {
  if (items) {
    let thumbnails: Array<any> = [];
    for (let i = 0; i < items.length; i++) {
      thumbnails.push(items[i].frontmatter.thumbnail);
    }
    return thumbnails;
  }
  return [];
};

export { GetThumbnails };
