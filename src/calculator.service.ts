import { IncomingMessage, ServerResponse } from "http";
import { parse } from "url";
import { Calculator } from "./calculator";
import { resolveNaptr } from "dns";

let calc = new Calculator();

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
            res.write(JSON.stringify({ result: calc.add(input1, input2).toString() }));
            res.end();
            break;
        case '/substract':
            res.write(JSON.stringify({ result: calc.substract(input1, input2).toString() }));
            res.end();
            break;
        case '/multiple':
            res.write(JSON.stringify({ result: calc.multiple(input1, input2).toString() }));
            res.end();
            break;
        case '/divide':
            res.write(JSON.stringify({ result: calc.divide(input1, input2).toString() }));
            res.end();
            break;
    }

}

export { addService }