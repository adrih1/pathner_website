export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 70; // Hauteur de la navbar
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
