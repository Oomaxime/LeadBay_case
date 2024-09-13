import express from "express";
import ky from "ky";
import * as cheerio from "cheerio";

const app = express();
const port = 3000;

const cache = []; // Storage place for urls already

/****** Middleware *******/

//catch the url and store them in cache
app.use((req, res, next) => {
  const url = req.query.url;
  if (url) {
    cache.push(url);
  }
  next();
});

/****** EntryPoint ******/

//Use Ky to get the HTML then cheerio to extract src <img> attribute from it
app.get("/images", async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const response = await ky.get(url).text();
    const $ = cheerio.load(response);
    const images = $("img")
      .map((i, el) => $(el).attr("src"))
      .get();

    return res.json({ images });
  } catch (error) {
    return res.status(500).json({ error: "Failed to extract images" });
  }
});

//Return the list of url already used
app.get("/urls", (req, res) => {
  return res.json(cache);
});

app.listen(port, () => {
  console.log("Server listening on port 3000");
});
