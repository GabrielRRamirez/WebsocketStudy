import express from "express";
import url from "url";
import path from "path";

export function startServer() {
    let server = express();

    loadPublicContent(server);

    let port = loadPortConfiguration();
    server.listen(port,() => console.log(`server started at port ${port}`));
}

function loadPortConfiguration() {
    return process.env.APPLICATION_PORT || 3000;
}

function loadPublicContent(server) {
    let actualPath = url.fileURLToPath(import.meta.url);
    let publicDirectory = path.join(actualPath, "../../..", "public");
    server.use(express.static(publicDirectory));
}