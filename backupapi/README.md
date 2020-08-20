We can't have both a root api/ folder (with python) AND a /pages/api folder (with js api endpoints).

Pick one.

If we want to use serverless functions in anything other than Node, then they should be in the root folder, api/.
It's possible to add a requirements.txt and use libraries like Django.

To view these on localhost, don't run `npm run dev`, but instead run `vercel dev`.

[https://vercel.com/docs/serverless-functions/introduction#local-development](https://vercel.com/docs/serverless-functions/introduction#local-development)
