# How to use ?

this API is build with **Node.js** and **Express**. She use **Ky** for HTTP request and **cheerio** for parsing HTML.

## run

```cli
npm i
node index.js
```

## Entrypoint

### Get the images

**<http://localhost:3000/images?url=https//www.exemple.fr>**

#### Some URL example to use

<http://localhost:3000/images?url=https://commons.wikimedia.org>
<http://localhost:3000/images?url=https://unsplash.com/>
<http://localhost:3000/images?url=https://www.imdb.com/chart/top/?ref_=nv_mv_250>

### See already use URL

**<http://localhost:3000/urls>**
