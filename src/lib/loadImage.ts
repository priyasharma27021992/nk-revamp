async function loadImage(imageUrl: string){
   return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
        resolve({width: image.naturalWidth, height: image.naturalHeight, aspectRatio: image.naturalWidth/image.naturalHeight})
    }

    image.onerror = reject;

    image.src = imageUrl;
   });
}

export { loadImage };