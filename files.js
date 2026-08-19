app.get("/files/:filename", (req, res) => {
  fs.readFile(req.params.filename, (err, data) => {
    res.send(data);
  });
});
