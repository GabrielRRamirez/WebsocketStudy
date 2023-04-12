import mongoose from "mongoose";
import {DatabaseConnectionError} from "../errors/databaseConnectionError.js";

export async function setupDatabase() {

    try {
        await mongoose.connect(getUrlConnection());
        mongoose.connection.once("open", () => console.log("Database connected!"));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

function getUrlConnection() {
    let urlConnection = process.env.DATABASE_URL;

    if(!urlConnection) {
        throw new DatabaseConnectionError("database URL not found in environment configuration file");
    }

    return urlConnection;
}