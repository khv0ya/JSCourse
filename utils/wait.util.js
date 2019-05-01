const logger = require('../utils/log.util');

function doWait(action, interval, expectedValue) {
    return new Promise((resolve, reject) => {
        if(action() === expectedValue) {
            setTimeout(() => resolve(), interval); 
        } 
        setTimeout(() => reject(), interval); 
    });
}

 function retrier(action, maxCount, interval, expectedValue) {
    maxCount--;
    return doWait(action, interval, expectedValue).then(() => { 
        logger.info('Able to reach the expected condition');
        return true;
}, () => {
        if(maxCount <= 0) {
            logger.warn(`Not able to reach the expected condition as actual value ${action()} isn't equal to expected value ${expectedValue}`);
            return false;
        } else {
            return retrier(action, maxCount, interval, expectedValue);
        }
    });
}

async function retrierAwait(action, maxCount, interval, expectedValue) {
    maxCount--;
    try {
        await doWait(action, interval, expectedValue);
        logger.info('Able to reach the expected condition');
        return true;
    } catch(failedWaitResult) {
        if(maxCount <= 0) {
            logger.warn(`Not able to reach the expected condition as actual value ${action()} isn't equal to expected value ${expectedValue}`);
            return false;
        } else {
            return retrier(action, maxCount, interval, expectedValue);
        }
    }
}

class Wait {
    forTrue(action, maxCount, interval) {
        return retrierAwait(action, maxCount, interval, true);
    }

    forFalse(action, maxCount, interval) {
        return retrierAwait(action, maxCount, interval, false);
    }
}

module.exports = new Wait();