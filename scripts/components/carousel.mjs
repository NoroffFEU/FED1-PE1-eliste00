import { appendStyle } from "../utils/appendStyle.mjs";

const image1 = {
  id: 1,
  url: "https://images.unsplash.com/photo-1714676982703-0c51440c6c1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const image2 = {
  id: "2",
  url: "https://images.unsplash.com/photo-1714745455353-f47a2e2b5647?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const image3 = {
  id: "3",
  url: "https://images.unsplash.com/photo-1714573807917-13f24897f13b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const images = [image1, image2, image3];

export const renderCarousel = () => {
  appendStyle("/styles/carousel.css");
  const buttonsHtml = `
      <div class="carousel-buttons">
          <button class="arrow" id="prevButton">&#8249;</button>
          <button class="arrow" id="nextButton">&#8250;</button>
      </div>
  `;

  let currentIndex = 0;
  const imgs = images
    .map((image, index) => {
      if (!image.url) {
        return "";
      }
      return `<img class="carousel-image ${
        currentIndex === index ? "carousel-image--active" : ""
      }"  src="${image.url}"></img>`;
    })
    .join("");

  const html = `<div id="carousel">${buttonsHtml}${imgs}</div>`;
  const container = document.createElement("div");

  container.innerHTML = html;
  document.body.append(container);

  const prevButton = container.querySelector("#prevButton");
  const nextButton = container.querySelector("#nextButton");
  const carouselImages = container.querySelectorAll(".carousel-image");

  prevButton.addEventListener("click", () => updateIndex(-1));
  nextButton.addEventListener("click", () => updateIndex(1));

  const updateIndex = (amount) => {
    currentIndex = (currentIndex + amount + images.length) % images.length;
    changeCurrentImage();
  };

  const changeCurrentImage = () => {
    carouselImages.forEach((image, index) => {
      image.classList.toggle("carousel-image--active", currentIndex === index);
    });
  };
};
