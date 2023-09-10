function toggleDiseaseDrawer() {
    const diseaseDrawer = document.getElementById('diseaseDrawer');
    diseaseDrawer.classList.toggle('open');

    const diseaseSidebar = document.querySelector('.disease-sidebar');
    const containerForm = document.querySelector('.container-form');
    const footerContainer = document.querySelector('.footer-container');

    diseaseSidebar.classList.toggle('open');
    containerForm.classList.toggle('open');
    footerContainer.classList.toggle('open');
}
function hideDisaseDrawer() {
    const closeIcon = document.getElementById('closeIcon');
    closeIcon.classList.remove('open');
}