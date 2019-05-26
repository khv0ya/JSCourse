function eventFire(el, evType) {
    if(el.fireEvent) {
        el.fireEvent('on' + evType);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(evType, true, false);
        el.dispatchEvent(evObj);
    }
}

module.exports = { eventFire };