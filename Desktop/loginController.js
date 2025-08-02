const registerCustomer = async (req, res) => {
    // your existing code
};

const loginCustomer = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password required' });
        }

        // Dummy user for testing
        const dummyUser = {
            email: 'sindhu@example.com',
            password: 'secure123'
        };

        if (email === dummyUser.email && password === dummyUser.password) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports = { registerCustomer, loginCustomer };
