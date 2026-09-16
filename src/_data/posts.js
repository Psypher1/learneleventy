import "dotenv/config";

const { DEV_API_KEY, DEV_TO_API_URL, API_PER_PAGE_MAX } = process.env;

export default async function () {
  const url = `${DEV_TO_API_URL}articles/me/published?per_page=${API_PER_PAGE_MAX}`;
  const res = await fetch(url, {
    headers: {
      "api-key": DEV_API_KEY,
      Accept: "application/vnd.forem.api-v1+json",
    },
  });

  const posts = await res.json();
  //   console.log(posts);
  return posts;
}

// import "dotenv/config";

// const { DEV_API_KEY, DEV_TO_API_URL, API_PER_PAGE_MAX } = process.env;

// export default async function () {
//   const url = `${DEV_TO_API_URL}articles/me/published?per_page=${API_PER_PAGE_MAX}`;

//   const res = await fetch(url, {
//     headers: {
//       "api-key": DEV_API_KEY,
//       "Accept": "application/vnd.forem.api-v1+json",
//     },
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to fetch posts from Dev.to: ${res.statusText}`);
//   }

//   const posts = await res.json();
//   return posts;
// }

/* 
export default async function () {
  const response = await fetch(
    "https://dev.to/api/articles?username=psypher1&per_page=10",
  );
  const posts = await response.json();
  console.log(posts);
  return posts;
}
*/
