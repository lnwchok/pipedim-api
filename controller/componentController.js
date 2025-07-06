
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

const getComps = (req, res) => {
  try {
    // const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
};

const getCompbyNPS = (req, res) => {
  try {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }

}


module.exports = { getComps, getCompbyNPS };
// // GET - Retrieve all users
// router.get('/', (req, res) => {
//   res.json(users);
// });
//
// // GET - Retrieve a specific user
// router.get('/:id', (req, res) => {
//   const user = users.find(u => u.id === parseInt(req.params.id));
//   if (!user) return res.status(404).json({ message: 'User not found' });
//   res.json(user);
// });
//
// // POST - Create a new user
// router.post('/', (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name,
//     email: req.body.email
//   };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });
//
// // PUT - Update a user completely
// router.put('/:id', (req, res) => {
//   const user = users.find(u => u.id === parseInt(req.params.id));
//   if (!user) return res.status(404).json({ message: 'User not found' });
//
//   user.name = req.body.name;
//   user.email = req.body.email;
//
//   res.json(user);
// });
//
// // DELETE - Remove a user
// router.delete('/:id', (req, res) => {
//   const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
//   if (userIndex === -1) return res.status(404).json({ message: 'User not found' });
//
//   const deletedUser = users.splice(userIndex, 1);
//   res.json(deletedUser[0]);
// });

