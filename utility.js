function updateBarFromBar() {
    const bar = document.getElementById('progress_bar')
    bar.style.background = `linear-gradient(to right, #ffdf0169 ${100 * bar.value / bar.max}%, #d3d3d3 ${100 * bar.value / bar.max}%)`
}

function updateBarFromPage() {
    const bar = document.getElementById('progress_bar')
    bar.value = $('#flipbook').turn('view')[0]
    bar.style.background = `linear-gradient(to right, #ffdf0169 ${100 * bar.value / bar.max}%, #d3d3d3 ${100 * bar.value / bar.max}%)`
}

$('#flipbook').bind('turned', updateBarFromPage);

document.getElementById('l-arrow').addEventListener('click', function () {
    $('#flipbook').turn('previous');
})

document.getElementById('l-arrow-end').addEventListener('click', function () {
    $('#flipbook').turn('page', 1);
})

document.getElementById('r-arrow').addEventListener('click', function () {
    $('#flipbook').turn('next');
})

document.getElementById('r-arrow-end').addEventListener('click', function () {
    $('#flipbook').turn('page', 30);
})

addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight'){
        $('#flipbook').turn('next');
    }
    if (event.key === 'ArrowLeft'){
        $('#flipbook').turn('previous');
    }
})