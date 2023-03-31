This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## API Mashup Project

This is a JavaScript-based application that uses the Famous Quotes API and the Yahoo Weather API to display a random quote and the current weather data of one city.

## Features

- Displays a random quote and weather data of one city on the homepage.
- The city used in the weather data is currently set to London, but this can be easily changed by modifying the woeid parameter in the Yahoo Weather API endpoint URL in the code.

## Installation

To run this application locally, follow these steps:

- Clone the repository to your local machine using git clone https://github.com/MahamDev/API-Mashup-Project.git.
- Install dependencies by running `npm install.`
- Create a .env.local file in the root directory of the project.
- Add your RapidAPI key to the .env.local file as follows:
```
Mashup_APP_API_KEY=your_rapidapi_key_here
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
