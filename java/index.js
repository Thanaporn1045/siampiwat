// window.onload = pageLoad;

// function pageLoad(){ 
//     var pagealert = document.getElementById('changepage');
//    pagealert.onclick = fadeOutAndChangePage();
   
	
// }
function fadeOutAndChangePage() {
    // ใส่คลาส hidden เพื่อทำ fade out
    // document.getElementById('bd').classList.add('hidden');

    // // รอ 1 วินาที (1000 มิลลิวินาที) แล้วเปลี่ยนหน้า
    // setTimeout(function() {
    //   window.location.href = 'P2.html';
    // }, 1000);
 
  }
  function buttonDown() {
    var confirmImg = document.querySelector('.comfirmimg');
    confirmImg.classList.add('clicked');
  }
  
  function buttonUp() {
    var confirmImg = document.querySelector('.comfirmimg');
    confirmImg.classList.remove('clicked');
    window.location.href = 'P2.html';
  }

