const express = require("express");
 const http = require("http");
const dotenv = require("dotenv");
const cors = require("cors");
// Import routes
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoute");

// const { connectKafka } = require("./config/kafka");
// const { redisPublisher, redisSubscriber } = require("./config/redis");
// const initializeSocketServer = require("./socket/socketServer");
// const { initializeKafkaConsumer } = require("./socket/consumer");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// // Create HTTP server and attach Socket.IO
// const server = http.createServer(app);
// initializeSocketServer(server);

// // // Start Kafka connection
// connectKafka();
// initializeKafkaConsumer(); // Initialize and run the consumer
// // Routes
app.use("/api/auth", authRoutes);

app.use("/api/profile", profileRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


