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

