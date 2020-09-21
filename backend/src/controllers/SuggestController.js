const firebase = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { name, now, sendSuggest } = req.body;

    const post = { name, now, sendSuggest };

    const posts = await firebase.database().ref("posts");

    let key = posts.push().key;

    posts
      .child(key)
      .set(post)
      .then((result) => {
        return res.status(201).json({ created: "OK" });
      })
      .catch((err) => {
        return res.status(400).json({ created: "NOT" });
      });
  },
  async show(req, res) {
    await firebase
      .database()
      .ref("posts")
      .once("value", (snapshot) => {
        let arrayPost = [];

        snapshot.forEach((childItem) => {
          let postItem = {
            author: childItem.val().name,
            data_post: childItem.val().now,
            suggest: childItem.val().sendSuggest,
          };
          arrayPost.push(postItem);
        });
        if (arrayPost.length < 0) return res.status(400).json({ posts: [] });
        return res.status(200).json({ posts: arrayPost });
      });

    //

    // return res.status(200).json({ posts: result });
  },
};
