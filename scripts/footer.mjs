import { appendStyle } from "./utils/appendStyle.mjs";

export const createFooter = () => {
  appendStyle("/styles/footer.css");
  const container = document.createElement("footer");
  container.innerHTML = ` 
<footer>
  <h3>Nordic Cycling</h3>
  <p>
    Welcome to our cycling blog, dedicated to inspiring and guiding cyclists to
    enhance their biking experience. We cover a wide range of categories within
    the cycling sport, so you can read about exactly what interests you most.
    Our authors come from diverse backgrounds, including national champions,
    enthusiasts, professionals, and daydreamers. On our blog, you can explore
    cycling tours, personal experiences, helpful cycling tips, and training
    advice. We are proud to operate this blog on behalf of the cycling chain
    Birk Sport, and we hope it will be a valuable resource for cyclists at all
    levels.
  </p>
  <p>Follow us on social media</p>

</footer>`;

  document.body.appendChild(container);
};
//ex.på fotter
//Thus, the section of content at the very bottom of a website is known as the footer. It often includes copyright disclosures, links to privacy policies, site maps, logos, contact details, social media icons, and email sign-up forms. In a nutshell, a footer includes details that enhance a website's overall usability.
