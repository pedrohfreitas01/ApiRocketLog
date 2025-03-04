import { app } from "@/app";
import "dotenv/config";


const PORT = 3333;

console.log("DB_link:", process.env.DATABASE_URL);

app.listen(PORT, () => console.log(`Serer is running on port ${PORT}`));
