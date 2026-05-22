type SeoOptions = {
  title: string;
  description: string;
};

export function updateSeo({ title, description }: SeoOptions) {
  document.title = title;

  let descriptionTag = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]'
  );

  if (!descriptionTag) {
    descriptionTag = document.createElement("meta");
    descriptionTag.name = "description";
    document.head.appendChild(descriptionTag);
  }

  descriptionTag.content = description;
}