const imageSets = {
  m416: 'm416.png',
  akm: 'akm.png',
  ump45: 'ump45.png'
};

function showPattern(gun) {
  const img = document.getElementById('pattern');
  img.src = imageSets[gun];
}
