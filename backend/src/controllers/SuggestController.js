const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { name, now, sendSuggest } = req.body;

    const post = { name, now, sendSuggest };

    let query = "INSERT INTO posts(name,data_post,suggest) VALUE (?,?,?)";

    await connection.query(
      query,
      [post.name, post.now, post.sendSuggest],
      (err, result) => {
        if (err) return res.status(400).json({ created: "NOT" });

        return res.status(201).json({ created: "OK" });
      }
    );
  },
  async show(req, res) {
    let query = "SELECT * FROM posts";

    await connection.query(query, (err, result) => {
      if (err) return res.status(400).json({ posts: [] });

      return res.status(200).json({ posts: result });
    });
  },
};
