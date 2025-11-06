function resizeBook() {
    const h = window.innerHeight
    const w = window.innerWidth
    if (h > w) {
        $("#flipbook").turn('display','single')
        $("#flipbook").turn('size', 0.65 * window.innerWidth, 2 * 0.65 * 0.65 * window.innerWidth)
    }
    else {
        $("#flipbook").turn('display','double')
        $("#flipbook").turn('size', 0.65 * window.innerWidth, 0.65 * 0.65 * window.innerWidth)
    }
}

function setBookSize() {
    const h = window.innerHeight
    const w = window.innerWidth
    if (h > w) {
        $("#flipbook").turn({
            width: 0.65 * window.innerWidth,
            height: 2 * 0.65 * 0.65 * window.innerWidth,
            pages: 12,
            display: 'single'
        });
    }
    else {
        $("#flipbook").turn({
            width: 0.65 * window.innerWidth,
            height: 0.65 * 0.65 * window.innerWidth,
            pages: 12,
            display: 'double'
        });
    }
}

setBookSize()
window.addEventListener('resize', resizeBook)