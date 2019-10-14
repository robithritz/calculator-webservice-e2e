import { expect } from 'chai';
import { get } from 'request-promise-native';

import { StatusCodeError } from 'request-promise-native/errors'

describe('Calculator', function () {
    describe('Add', function () {
        this.timeout(5000);
        this.slow(5000);

        it('should do number additions', async function () {
            let result = await get("http://localhost:3000/add?i1=2&i2=4", { json: true });
            expect(result).to.be.deep.eq({
                result: 6
            })
        })
        it('should error if not a number', async function () {
            let error = null;
            try {
                let result = await get("http://localhost:3000/add?i1=2&i2=haha", { json: true });
            } catch (err) {
                error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        })
    })

})