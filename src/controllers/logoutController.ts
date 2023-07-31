import redis from "redis";

const redisClient = redis.createClient({
  host: "localhost",
  port: 6379,
});

export async function deleteSessionData(sessionId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    redisClient.del(sessionId, (error, result) => {
      if (error) {
        console.log(error);
        reject(new Error("Failed to delete session data"));
      } else {
        resolve();
      }
    });
  });
}
