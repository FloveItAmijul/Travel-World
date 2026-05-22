



export function scrollToSectionById(id: string, offset = 92) {
  const element = document.getElementById(id);
  if (!element) return false;

  const elementTop = element.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: elementTop - offset,
    behavior: "smooth",
  });

  return true;
}