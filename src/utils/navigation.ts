export const scrollToAboutMe = () => {
  const timeline = document.getElementById("about-me");
  timeline?.scrollIntoView({ behavior: "smooth" });
};

export const scrollToWorks = () => {
  const works = document.getElementById("works");
  works?.scrollIntoView({ behavior: "smooth" });
};