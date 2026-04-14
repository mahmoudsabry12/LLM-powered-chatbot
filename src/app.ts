import express from "express";
import meetingRoutes from "./modules/meeting/meeting.route";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Strict-Transport-Security", "max-age=31536000");

  next();
});

app.use("/api/meetings", meetingRoutes);

app.get("/", (_, res) => {
  res.send("API running");
});

export default app;