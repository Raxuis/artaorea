export const scrollToAboutMe = () => {
  const timeline = document.getElementById("about-me");
  timeline?.scrollIntoView({ behavior: "smooth" });
};

export const scrollToTypeOfWork = (type: 'mosaique' | 'ceramique') => {
  const typeEl = document.getElementById(type);
  typeEl?.scrollIntoView({ behavior: "smooth" });
}