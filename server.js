const express = require("express");
const cors = require("cors");
const exec = require("youtube-dl-exec");
const app = express();

app.use(cors());

app.get("/download-video", (req, res) => {
  const videoId = req.query.videoId;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const args = [
    "--format=mp4",
    "-o",
    `movies/video-${videoId}.mp4`,
    "--no-check-certificate",
    videoUrl,
  ];
  exec(args)
    .then((output) => {
      return res.status(200).send({ result: output });
    })
    .catch((err) => {
      return res.status(401).json({ result: err });
    });
});

app.get("/download-playlist", (req, res) => {
  const playlistId = req.query.playlistId;
  const args = [
    "--format=mp4",
    // "--get-filename",
    "-o",
    `movies/playlist-${playlistId}/%(title)s.%(ext)s`,
    "--no-check-certificate",
    `https://www.youtube.com/playlist?list=${playlistId}`,
  ];
  exec(args)
    .then((output) => {
      return res.status(200).send({ result: output });
    })
    .catch((err) => {
      return res.status(401).send({ result: err });
    });
});

app.get("/download-channel", (req, res) => {
  const channelId = req.query.channelId;
  const args = [
    "--format=mp4",
    "-o",
    `movies/channel-${channelId}/%(title)s.%(ext)s`,
    "--no-check-certificate",
    `https://www.youtube.com/channel/${channelId}/videos`,
  ];
  exec(args)
    .then((output) => {
      return res.status(200).send({ result: output });
    })
    .catch((err) => {
      return res.status(401).send({ result: err });
    });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
