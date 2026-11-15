import express from "express";
import { add } from "./math";

const app = express();

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b =   Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: "a and b must be numbers" });
    return;
  }

  res.json({ result: add(a, b) });
});

export default app;
