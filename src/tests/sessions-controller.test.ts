import { app } from "@/app";
import { prisma } from "@/database/prisma";
import request from "supertest";


describe("SessionController", () => {

    let user_id: string

    afterAll(async () => {
      await prisma.user.delete({ where: { id: user_id } });
    });

    it("should authenticate a and get acess token", async () => {
        const response = await request(app).post("/users").send({
          name: "Test User",
          email: "auth_test_user@gmail.com",
          password: "passtes12",
        });

        user_id = response.body.id

        const sessionResponse = await request(app).post("/sessions").send({
          email: "auth_test_user@gmail.com",
          password: "password123",
        });

        expect(sessionResponse.status).toBe(200)
        expect(sessionResponse.body.token).toEqual(expect.any(String))
    })
})