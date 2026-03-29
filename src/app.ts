import express from "express";
import meetingRoutes from "./modules/meeting/meeting.route";

const app = express();

app.use(express.json());
app.use("/api/meetings", meetingRoutes);

app.get("/", (_, res) => {
  res.send("API running");
});

export default app;