const registerCustomer = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const existingUser = await Customer.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: 'Email already registered' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newCustomer = new Customer({
    name,
    email,
    password: hashedPassword,
  });

  await newCustomer.save();
  res.status(201).json({ message: 'User registered successfully' });
};
