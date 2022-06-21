/**
 *@param {string} title
 *@param {string} subtitle
 *@return {string}
 */
const pageHeading = (title, subtitle) => {
  return `
    <h1 class='text-4xl font-semibold mt-2'>${title}</h1>
        <p class='text-lg '>${subtitle}</p>
    `;
};

module.exports = pageHeading;
