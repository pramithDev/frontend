import { getStrapiURL } from "./api";

// export function getStrapiMedia(media) {
//   const imageUrl = media.url.startsWith('/')
//     ? getStrapiURL(media.url)
//     : media.url;
//   return imageUrl;
// }

export function getStrapiMedia(media) {
  const stringToAdd = 'f_auto/';
  let imageUrlRaw = media.url;
    
  function addStr(imageUrl, index, stringToAdd){
    return imageUrl.substring(0, index) + stringToAdd + imageUrl.substring(index, imageUrl.length);
  }

  // console.log(addStr(imageUrlRaw, 50, stringToAdd));

  imageUrlRaw = addStr(imageUrlRaw, 50, stringToAdd);
 
  if(typeof media !== "undefined"){
    if(media == null){
      return ""
    }
    const imageUrl = media.url.startsWith("/") ? getStrapiURL(imageUrlRaw) : imageUrlRaw;
    return imageUrl;
  }
}