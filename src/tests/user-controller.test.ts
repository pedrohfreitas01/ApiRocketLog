import { app } from "@/app";
import { prisma } from "@/database/prisma";
import request  from "supertest";

describe("UsersController", () => {
  let user_id: string

  afterAll(async() => {
    await prisma.user.delete({where: {id:user_id}})
  })

  it("should create a new user successfully", async () => {
    const response = await request(app).post("/users").send({
      name: "Test User",
      email: "teste@gmail.com",
      password: "passtes12",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Test User");


    user_id = response.body.id
  });

  it("should throw an error if user with same emai l alredr existes", async () => {
    const response = await request(app).post("/users").send({
      name: "Test User",
      email: "teste@gmail.com",
      password: "passtes12",
    });
  
    expect(response.status).toBe(400)
    expect(response.body.message).toBe("User with same email already exists")
  })

  it ("should throw a validation error if email is invalid", async () => {
    const response = await request(app).post("/users").send({
      name: "Test User",
      email: "teste@gmail.com",
      password: "passtes12",
    });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("validation error");
  })
});
