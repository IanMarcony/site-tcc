posts = [];

module.exports = {
  posts,
  async create(req, res) {
    const { name, date, suggest } = req.body;

    const post = { name, date, suggest };

    await posts.push(post);

    return res.status(200).json({ status: "ok" });
  },
  async show(req, res) {
    return res.json(posts);
  },
};
