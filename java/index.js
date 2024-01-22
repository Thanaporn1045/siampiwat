// window.onload = pageLoad;

// function pageLoad(){ 
//     var pagealert = document.getElementById('changepage');
//    pagealert.onclick = fadeOutAndChangePage();
   
	
// }

  function buttonDown() {
    var confirmImg = document.querySelector('.comfirmimg');
    confirmImg.classList.add('clicked');
  }
  
  function buttonUp() {
    var confirmImg = document.querySelector('.comfirmimg');
    confirmImg.classList.remove('clicked');
    window.location.href = 'P2.html';
  }


///////////////// สำหรับรันเวลาไม่ได้แตะหน้าจอ ตั้งเวลาไว้ หนึ่งนาทีครึ่ง///////////////////////////
function randomscencewhennoonetouch() {
  var pagealert1 = document.getElementById('randomscence');
  var link = document.createElement('a');
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  // link.href = `./P2.html?SetStorageDeckA=S17P${randomNumber2}`;
  link.href = `./index.html?SetStorageDeckA=S17P${randomNumber2}`;
  pagealert1.appendChild(link);
  setTimeout(function() {
      link.click();
  }, 1000);
}
let touchedscreen = false;
document.addEventListener('touchstart', function() {
  touchedscreen = true;
});

setTimeout(function() {
  // ตรวจสอบว่าไม่มีการแตะหน้าจอไอแพด
  if (!touchedscreen) {
      randomscencewhennoonetouch();
  }
}, 5000);
///////////////// สำหรับรันเวลาไม่ได้แตะหน้าจอ ตั้งเวลาไว้ หนึ่งนาทีครึ่ง///////////////////////////
