document.getElementById('start-button').addEventListener('click', function() {
    document.querySelector('.page-1').style.display = 'none';
    document.querySelector('.page-2').style.display = 'flex';
});

document.getElementById('button-1').addEventListener('click', function() {
    displayInfo('info-1');
});

document.getElementById('next-button-1').addEventListener('click', function() {
    document.querySelector('.page-2').style.display = 'none';
    document.querySelector('.page-3').style.display = 'flex';
});

document.getElementById('button-2').addEventListener('click', function() {
    displayInfo('info-2');
});

document.getElementById('next-button-2').addEventListener('click', function() {
    document.querySelector('.page-3').style.display = 'none';
    document.querySelector('.page-4').style.display = 'flex';
});

function displayInfo(infoId) {
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(box => box.style.display = 'none');
    document.getElementById(infoId).style.display = 'block';
}