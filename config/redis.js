// const Redis = require("ioredis");

// const redisPublisher = new Redis({
//   host: "localhost",
//   port: 6379,
// });

// const redisSubscriber = new Redis({
//   host: "localhost",
//   port: 6379,
// });

// redisSubscriber.on("connect", () => console.log("Redis subscriber connected"));
// redisPublisher.on("connect", () => console.log("Redis publisher connected"));

// module.exports = { redisPublisher, redisSubscriber };
const Redis = require("ioredis");

const redisPublisher = new Redis({
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD || null,
});

const redisSubscriber = new Redis({
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD || null,
});

redisSubscriber.on("connect", () => console.log("✅ Redis Subscriber connected"));
redisPublisher.on("connect", () => console.log("✅ Redis Publisher connected"));

module.exports = { redisPublisher, redisSubscriber };
