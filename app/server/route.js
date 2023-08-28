import net from "net";
import { send } from "micro";

const serverAdress = '92.205.17.6';
const serverPort = 25565;

export async function GET(req, res) {
    const client = new net.Socket();

    try {
        await new Promise((resolve, reject) => {
            client.connect(serverPort, serverAdress, () => {
                resolve();
            });

            client.on('error', (error) => {
                reject(error);
            });
        });

        return new Response(JSON.stringify({ status: 'online' }));
    } catch (error) {
        return new Response(JSON.stringify({ status: 'offline' }));
    } finally {
        client.end();
    }
};