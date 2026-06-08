type SeoConfig = {
  title: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
};

const SITE_NAME = "DIA FESTIVO";
const SITE_URL = "https://diafestivoindia.com";

function updateMetaTag(selector: string, attribute: string, value: string) {
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");

    if (selector.includes("property=")) {
      const property = selector.match(/property="([^"]+)"/)?.[1];
      if (property) tag.setAttribute("property", property);
    } else {
      const name = selector.match(/name="([^"]+)"/)?.[1];
      if (name) tag.setAttribute("name", name);
    }

    document.head.appendChild(tag);
  }

  tag.setAttribute(attribute, value);
}

function updateCanonical(url: string) {
  let link = document.head.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

export function updateSeo({
  title,
  description,
  canonicalPath,
  image,
}: SeoConfig) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const pageUrl = `${SITE_URL}${canonicalPath ?? window.location.pathname}`;
  const previewImage = image ?? `${SITE_URL}/og-image.jpg`;

  document.title = fullTitle;

  if (description) {
    updateMetaTag('meta[name="description"]', "content", description);
    updateMetaTag('meta[property="og:description"]', "content", description);
    updateMetaTag('meta[name="twitter:description"]', "content", description);
  }

  updateMetaTag('meta[property="og:title"]', "content", fullTitle);
  updateMetaTag('meta[name="twitter:title"]', "content", fullTitle);

  updateMetaTag('meta[property="og:url"]', "content", pageUrl);
  updateMetaTag('meta[property="og:image"]', "content", previewImage);
  updateMetaTag('meta[name="twitter:image"]', "content", previewImage);

  updateCanonical(pageUrl);
}