function sendKeys(el, text) {
    el.value = text;
    var evObj = document.createEvent('Events');
    evObj.initEvent('input', true, false);
    el.dispatchEvent(evObj);
}

module.exports = { sendKeys };