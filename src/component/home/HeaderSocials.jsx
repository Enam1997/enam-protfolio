import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/Enam1997"
        className="home__social_link"
        target="_blank"
      >
        <i class="fa-brands fa-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/md-enam-ahamed-chowdhury-937196171/"
        className="home__social_link"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a href="" className="home__social_link" target="_blank">
        <i className="fa-brands fa-twitter"></i>
      </a>

      <a href="" className="home__social_link" target="_blank">
        <i className="fa-brands fa-dribbble"></i>
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=100004805746435"
        className="home__social_link"
        target="_blank"
      >
        <i class="fa-brands fa-facebook"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
