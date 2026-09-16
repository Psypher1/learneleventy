import markdownIt from "markdown-it";
const md = markdownIt({
  html: true,
  breaks: false,
  linkify: true,
  typographer: true,
});
export default function Markdown(content) {
  return md.render(content || "");
}
