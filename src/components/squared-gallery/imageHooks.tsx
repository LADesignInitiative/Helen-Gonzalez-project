import type { PairedArrayType } from "@/util/interface";

//This function pairs the file paths of images with their thumbnails and return the pairs in an array.
const FormatProjectImages = (
  images: Array<string> | null,
  thumbnails: Array<string> | null,
) => {
  const PairedArray: Array<PairedArrayType> | null = [];
  try {
    images?.forEach((img) => {
      let tempArr = img.split("/");
      let fileName = tempArr[tempArr.length - 1];
      let expression = new RegExp(`/${fileName}/`, "g");
      let thumbnailPath = thumbnails?.find((thumb, index) =>
        thumb.match(fileName),
      );
      let obj = {
        main: img,
        thumbnail: thumbnailPath,
      };
      PairedArray.push(obj);
    });
    return PairedArray;
  } catch (e) {
    console.log("FormatProjectImages error: ", e);
    return [];
  }
};
export { FormatProjectImages };
