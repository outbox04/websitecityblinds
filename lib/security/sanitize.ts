import DOMPurify from "isomorphic-dompurify";

// Sanitizes rich post HTML before rendering or saving CMS content.
export function sanitizeHtml(html: string) {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "h2",
      "h3",
      "h4",
      "p",
      "strong",
      "em",
      "ul",
      "ol",
      "li",
      "blockquote",
      "img",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "a",
      "iframe",
      "br"
    ],
    ALLOWED_ATTR: ["href", "src", "alt", "title", "target", "rel", "class", "width", "height", "loading", "allow", "allowfullscreen"],
    ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto):|\/|#)/i
  });
}
