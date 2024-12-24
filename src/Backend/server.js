require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
const cors = require('cors');
app.use(cors()); 



  



app.get('/task',async(req,res)=>{

})
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
