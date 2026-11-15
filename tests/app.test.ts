import request from "supertest";
import app from "../src/app";

describe("API", () => {
  test("GET /health returns ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  test("GET /add returns the sum", async () => {
    const res = await request(app).get("/add?a=2&b=3");
    expect(res.body).toEqual({ result: 5 });
  });

  test("GET /add rejects invalid input", async () => {
    const res = await request(app).get("/add?a=x&b=3");
    expect(res.status).toBe(400);
  });
});
