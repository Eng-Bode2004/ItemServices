// Connect To DataBase
require('./Config/DataBase');
const express = require('express');


// Set Up Port and Make Server listen To requests
const app = express();
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
app.use(express.json()); // Middleware to parse JSON



                                // Main Routes
                            // MamasKitchen Item Routes  //
const MamasKitchenItemRoutes = require('./Routes/MamasKitchenItemRoutes');
app.use('/api/mamas-kitchen-items', MamasKitchenItemRoutes);


