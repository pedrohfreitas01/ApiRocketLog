
import { Request, Response } from "express";
import z from "zod";

class UserController {
    create(request: Request, response: Response) {

        // const requiredEmail = user.required({
        //   email: true,
        // });

        const bodySchema = z.object({
            name: z.string().trim().min(2),
            email: z.string().email(),
            password: z.string().min(5)
        })

        // vai no insomia e pega as info dada no json  
        const {name, email, password} = bodySchema.parse(request.body)


        return response.json({message: "ok"})
    }
}

export { UserController}