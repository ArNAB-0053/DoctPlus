function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    const iconWrapper = document.getElementById('iconWrapper');

    drawer.classList.toggle('open');

    if (drawer.classList.contains('open')) {
        iconWrapper.classList.add('open');
    } else {
        iconWrapper.classList.remove('open');
    }
}

function hideDrawer() {
    const drawer = document.getElementById('drawer');
    const iconWrapper = document.getElementById('iconWrapper');

    drawer.classList.remove('open');
    iconWrapper.classList.remove('open');
}