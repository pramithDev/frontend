import { getStrapiMedia } from "../lib/media";

const Image = ({ image, style }) => {
  const stringToAdd = 'f_auto/';
  const imageUrlRaw = getStrapiMedia(image);
  
  function addStr(imageUrl, index, stringToAdd){
    return imageUrl.substring(0, index) + stringToAdd + imageUrl.substring(index, imageUrl.length);
  }

  // console.log(addStr(imageUrlRaw, 50, stringToAdd));
  const imageUrl = addStr(imageUrlRaw, 50, stringToAdd);
  // console.log(imageUrl); https://res.cloudinary.com/pramithex/image/upload/v1632671244/Home_2d2a93aee4.png
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
    />
  );
};

export default Image;