// window.onload = pageLoad;

// function pageLoad(){ 
//     var pagealert = document.getElementById('changepage');
//    pagealert.onclick = fadeOutAndChangePage();
   
	
// }
function fadeOutAndChangePage() {
    // ใส่คลาส hidden เพื่อทำ fade out
    document.getElementById('bd').classList.add('hidden');

    // รอ 1 วินาที (1000 มิลลิวินาที) แล้วเปลี่ยนหน้า
    setTimeout(function() {
      window.location.href = 'P2.html';
    }, 1000);
  }


