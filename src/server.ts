import { createServer } from 'http';
import { parse } from 'url';
import { addService } from './calculator.service';

const server = createServer((req, res) => {
    const url = parse(req.url);
    addService(req, res);
})

server.listen(3000, () => {
    console.log("server listen on 3000");
});