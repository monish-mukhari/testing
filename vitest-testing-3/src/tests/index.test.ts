import { describe, it, expect, vi } from "vitest";
import request from "supertest";
import { app } from "..";

vi.mock("../db");

describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
        const res = await request(app).post("/sum").send({
          a: 1,
          b: 2
        });

        console.log(res);
        
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
      });

      it("should return invalid input message", async () => {
        const res = await request(app).post("/sum").send({
          a: ["asdasd"],
          b: 2
        });

        console.log(res);
        
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Incorrect inputs");
      });

});