// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



const gallery = document.querySelector(".gallery")
gallery.addEventListener("click", imagesGallry)

function imagesGallry(evnt) {

  evnt.preventDefault()
  const evntValue = evnt.target.nodeName
  
  if (evntValue !== "IMG") {
    return console.log("не картинка")
  }

  const fullSizeImg = evnt.target.getAttribute("data-source")
    const instance = basicLightbox.create(`
    <img
      src="${fullSizeImg}"
    />
`,
     {
	
	onShow: (instance) => {document.addEventListener("keydown",clickOnEsc )},
	onClose: (instance) => {document.removeEventListener("keydown",clickOnEsc)}
})
  instance.show();
  console.log(evnt)
  
  function clickOnEsc() {
    if (evnt.key !== "Escape") {
      return
    }
  instance.close()

  }

}


const allImg = galleryItems.map(({ preview, original, description }) => 
  `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join("")

gallery.innerHTML = allImg