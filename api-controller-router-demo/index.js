const express = require('express');
const cors = require('cors');
require("dotenv").config();
const mongoose = require('mongoose');
const { roleRouter } = require('./src/routes/role.routes');
const { roomRouter } = require('./src/routes/room.routes')
const { orgRouter } = require('./src/routes/org.routes')
const { branchRouter } = require('./src/routes/branch.routes')
const { cameraRouter } = require('./src/routes/camera.routes')
const { departmentRouter } = require('./src/routes/department.routes.js')
const { userRouter } = require('./src/routes/user.routes.js')
const { sessionRouter } = require('./src/routes/session.routes.js')
const { emotionRouter } = require('./src/routes/emotion.routes')

const app = express();
const PORT = 8080 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');

  // Set up routes
app.use('/api/roles', roleRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/org', orgRouter);
app.use('/api/branch', branchRouter)
app.use('/api/camera', cameraRouter)
app.use('/api/department', departmentRouter)
app.use('/api/user', userRouter)
app.use('/api/session', sessionRouter)
app.use('/api/emotion', emotionRouter)
  // Welcome Screen
// app.get('/', (req, res) => res.sendStatus(200));

app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
    });
});