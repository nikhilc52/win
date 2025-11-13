function resizeBook() {
    const h = window.innerHeight
    const w = window.innerWidth
    if (h > w) {
        $("#flipbook").turn('display', 'single')
        $("#flipbook").turn('size', 0.65 * window.innerWidth, 2 * 0.65 * 0.65 * window.innerWidth)
    }
    else {
        $("#flipbook").turn('display', 'double')
        $("#flipbook").turn('size', 0.65 * window.innerWidth, 0.65 * 0.65 * window.innerWidth)
    }
}

function setBookSize() {
    const h = window.innerHeight
    const w = window.innerWidth
    if (h > w) {
        //make all pages soft for mobile viewing
        //not possible to do when resizing after loading, very small issue
        $("#page-1").removeClass('hard')
        $("#page-2").removeClass('hard')
        $("#page-31").removeClass('hard')
        $("#page-32").removeClass('hard')
        $("#flipbook").turn({
            width: 0.65 * window.innerWidth,
            height: 2 * 0.65 * 0.65 * window.innerWidth,
            display: 'single'
        });
    }
    else {
        $("#flipbook").turn({
            width: 0.65 * window.innerWidth,
            height: 0.65 * 0.65 * window.innerWidth,
            display: 'double'
        });
    }
}

setBookSize()
window.addEventListener('resize', resizeBook)