export default function pageHeading(heading, subheading = "") {
  return `
    <h1 class="text-4xl text-center font-bold mt-5">
      ${heading}
    </h1>
    <p class="text-lg text-center text-slate-700 mt-1">${subheading}</p>
  `;
}
