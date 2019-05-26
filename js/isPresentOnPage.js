function isPresentOnPage(el) {
    const bodyEl = document.querySelector('body');
    return bodyEl.contains(el);
}

module.exports = { isPresentOnPage };