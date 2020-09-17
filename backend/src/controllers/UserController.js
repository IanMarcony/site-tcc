let users = [
  {
    name: "Ian Marcony",
    email: "admin@admin.com",
    password: "admin",
  },
];
var validation = false;

module.exports = {
  checkToken(req, res) {
    if (validation) {
      return res.status(200).json({ statusToken: validation });
    } else {
      return res.status(200).json({ statusToken: validation });
    }
  },
  async signin(req, res) {
    const { email, password } = await req.body;
    validation = false;
    users.forEach((value, index) => {
      if (value.email == email && value.password == password) {
        validation = true;
        return res.json({ status: validation });
      }
    });
    return res.json({ status: validation });
  },
  async logout(req, res) {
    validation = false;
    return res.json({ validation });
  },
  async create(req, res) {
    const { name, email, password } = req.body;

    const new_user = { name, email, password };
    users.push(new_user);

    return res.json({
      created: true,
      status: true,
      users,
    });
  },
};
