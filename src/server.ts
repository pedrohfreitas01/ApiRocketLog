import { app } from "@/app";
import "dotenv/config";
import { env } from "./env";



const PORT = env.PORT;

console.log("DB_link:", process.env.DATABASE_URL);

app.listen(PORT, () => console.log(`Serer is running on port ${PORT}`));
