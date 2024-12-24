require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
const cors = require('cors');
app.use(cors()); 



  



app.get('/task',async(req,res)=>{
  
})











app.get('/', async (req, res) => {
    try {
        const airbnbs = await Airbnb.find(); 
        res.status(200).json(airbnbs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Airbnb data', error });
    }
});












app.get('/airbnbs', async (req, res) => {
    try {
        const airbnbs = await Airbnb.find();
        res.status(200).json(airbnbs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Airbnb data', error });
    }
});
app.get('/airbnbs/:roomno', async (req, res) => {
    try {
        
        const roomno = Number(req.params.roomno); 

       
        const airbnb = await Airbnb.findOne({ roomno: roomno }); 

        if (!airbnb) {
            return res.status(404).json({ message: 'Airbnb not found' });
        }

        res.status(200).json(airbnb); 
    } catch (error) {
        console.error('Error fetching Airbnb data:', error);
        res.status(500).json({ message: 'Error fetching Airbnb data', error });
    }
});
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
app.post('/airbnbs', async (req, res) => {
    try {
        const newAirbnb = new Airbnb(req.body); 
        await newAirbnb.save();
        res.status(201).json(newAirbnb);
    } catch (error) {
        res.status(500).json({ message: 'Error creating Airbnb listing', error });
    }
});
app.get('/airbnbs/search', (req, res) => {
    const { query } = req.query; 
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    
    const filteredRooms = rooms.filter(room =>
        room.title.toLowerCase().includes(query.toLowerCase())
    );

    res.json(filteredRooms);
});
  
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    try {
      // Check if user already exists
      const existingUser = await client.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new client({
        name,
        email,
        password: hashedPassword,
      });
  
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating user' });
    }
  });
  

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Find the user by email
    const user = await client.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
  
    // Compare the password with the hashed password stored in DB
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Incorrect password' });
    }
  
    // Generate a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
    // Send the token in the response
    res.status(200).json({ token });
  });
  
  const authenticateUser = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(401).json({ message: 'Authorization token required' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      req.userId = decoded.userId;
      next();
    });
  };
  

  app.put('/airbnbs/:roomno/book', async (req, res) => {
    const { roomno } = req.params;
    const { userId } = req;
  
    try {
      const airbnb = await Airbnb.findOne({ roomno });
  
      if (!airbnb) {
        return res.status(404).json({ message: 'Room not found' });
      }
  
      if (airbnb.booked) {
        return res.status(400).json({ message: 'Room is already booked' });
      }
  
      // Update room booking status and associate user with the booking
      airbnb.booked = true;
      airbnb.userId = userId;
      await airbnb.save();
  
      res.status(200).json({ message: 'Room booked successfully', room: airbnb });
    } catch (error) {
      res.status(500).json({ message: 'Error booking room', error });
    }
  });






const updateBookedField = async () => {
    try {
      const result = await Airbnb.updateMany({}, { $set: { booked: false } });
      console.log(`✅ Updated ${result.nModified} records with the booked field.`);
    } catch (error) {
      console.error('❌ Error updating records:', error);
    }
  };
  
  
  updateBookedField();



app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
