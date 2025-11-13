function fitTooltip() {
    const rect = document.getElementById('page-1').getBoundingClientRect()
    const w = window.innerWidth

    const tooltip = document.getElementById('turn-tooltip')
    tooltip.style.top = rect.top + 15 + "px"
    tooltip.style.left = (rect.right + w)/2 - 55 + "px"

    const tooltip_line = document.getElementById('turn-tooltip-line')
    tooltip_line.style.top = rect.top + 32 + "px"
    tooltip_line.style.left = rect.right - 25 + "px"
    const tooltip_left = tooltip.style.left.substring(0, tooltip.style.left.length - 2)
    tooltip_line.style.width = tooltip_left - rect.right + 25 + "px"
}


window.addEventListener('resize', fitTooltip) //don't think this is needed with hiding on click, but doesn't hurt
fitTooltip()

function hideTooltips() {
    const tooltip_class = Array.from(this.document.getElementsByClassName('tooltip'))
    tooltip_class.forEach((e) => e.style.visibility = 'hidden')
}

window.addEventListener('click', hideTooltips)
window.addEventListener('keydown', hideTooltips)
window.addEventListener('touchstart', hideTooltips)

