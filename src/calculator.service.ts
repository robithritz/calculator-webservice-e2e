import { IncomingMessage, ServerResponse } from "http";
import { parse } from "url";
import { add, divide, multiple, substract } from "./calculator";

function addService(req: IncomingMessage, res: ServerResponse) {
    const url = parse(req.url, true);
    console.log(url.query);
    console.log(url.pathname);
    if (!url.query['i1'] || !url.query['i2']) {
        res.statusCode = 400;
        res.end();
        return;
    }

    const input1 = parseInt(url.query.i1 as string, 10);
    const input2 = parseInt(url.query.i2 as string, 10);

    if (isNaN(input1) || isNaN(input2)) {
        res.statusCode = 400;
        res.end();
        return;
    }
    // const result = ;
    res.setHeader("Content-Type", "application/json");
    switch (url.pathname) {
        case '/add':
            res.write(JSON.stringify({ result: add(input1, input2) }));
            res.end();
            break;
        case '/substract':
            res.write(JSON.stringify({ result: substract(input1, input2) }));
            res.end();
            break;
        case '/multiple':
            res.write(JSON.stringify({ result: multiple(input1, input2) }));
            res.end();
            break;
        case '/divide':
            res.write(JSON.stringify({ result: divide(input1, input2) }));
            res.end();
            break;
    }

}

export { addService }