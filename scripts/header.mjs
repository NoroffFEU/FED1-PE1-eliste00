import { renderCarousel } from "./components/carousel.mjs";

export const createHeader = () => {
  const link = document.createElement("link");
  (link.rel = "stylesheet"),
    (link.type = "text/css"),
    (link.href = "../styles/header.css");
  document.head.appendChild(link);
  const container = document.createElement("header");
  container.innerHTML = ` <div class="header">
      <div class="title">
        <h2>Explore nature through cycling</h1>
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          eveniet quaerat, incidunt 
        </h2>

      </div>
      <div class="info">
 
    
        
    <div class="author"><div class="authorimage">  
    </div>
        <p>Rhett Riley</p> </div>
    <div class="date"><p>18.04.2024 </p>   <p>10 min read </p></div>
  

      </div>
    </div>`;

  document.body.appendChild(container);
  renderCarousel();
};
