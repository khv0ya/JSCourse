const { describe, it } = require('mocha');
const { assert } = require('chai');
const wait = require('../utils/wait.util.js');

describe('Wait Test', () => {
    it('Should wait for true', () => {
        return wait.forTrue(() => true, 5, 1000).then((result) => assert.isTrue(result));
    });

    it('Should wait for true and return false in case the expected value didnt appear', () => {
        return wait.forTrue(() => false, 5, 1000).then((result) => assert.isFalse(result));
    });

    it('Should wait for false', () => {
        return wait.forFalse(() => false, 5, 1000).then((result) => assert.isTrue(result));
    });

    it('Should wait for false and return false in case the expected value didnt appear', () => {
        return wait.forFalse(() => true, 5, 1000).then((result) => assert.isFalse(result));
    });

    it('Should wait for multiple false values', async () => {
        const resuls = await Promise.all([
            wait.forFalse(() => false, 5, 1000),
            wait.forFalse(() => true, 5, 1000)
        ]);
        return assert.deepEqual([true, false], resuls);
    });
}); 