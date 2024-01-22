function buttonDown() {
    var confirmImg = document.querySelector('.comfirmimg');
    confirmImg.classList.add('clicked');
}

function buttonUp() {
    var confirmImg = document.querySelector('.comfirmimg');
    confirmImg.classList.remove('clicked');
    window.location.href = 'Count.html';
}

window.addEventListener("orientationchange", function() {
    setTimeout(function(){
        window.scrollTo(0, 1);
    }, 0);
});


///////////////// สำหรับรันเวลาไม่ได้แตะหน้าจอ ตั้งเวลาไว้ หนึ่งนาทีครึ่ง///////////////////////////
function randomscencewhennoonetouch() {
    var pagealert1 = document.getElementById('randomscence');
    var link = document.createElement('a');
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    link.href = `./P2.html?SetStorageDeckA=S17P${randomNumber2}`;
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
}, 90000);
///////////////// สำหรับรันเวลาไม่ได้แตะหน้าจอ ตั้งเวลาไว้ หนึ่งนาทีครึ่ง///////////////////////////





function speedvalue(){
    var speedvalue = document.getElementById('slider');
    var slider = document.getElementById('slider');
    if (speedvalue.value == 0.1) {
        slider.value = 1;
    } else if (speedvalue.value == 0.3) {
        slider.value = 2;
    } else if (speedvalue.value == 0.6) { 
        slider.value = 3; 
    }else if (speedvalue.value == 0.9) { 
        slider.value = 4; 
    }else if (speedvalue.value == 1) { 
        slider.value = 5; 
    }else if (speedvalue.value == 2) { 
        slider.value = 6;
    }else if (speedvalue.value == 3) { 
        slider.value = 7; 
    }else if (speedvalue.value == 4) { 
        slider.value = 8; 
    }
    else if (myElement.value == 5) { 
        slider.value = 9; 
    }

}


function up() {
 
var myElement = document.getElementById('slider');
if (myElement.value == 1) {
            document.getElementById('a1').click(); 
        } else if (myElement.value == 2) {
            document.getElementById('a2').click(); 
        } else if (myElement.value == 3) { 
            document.getElementById('a3').click(); 
        }else if (myElement.value == 4) { 
            document.getElementById('a4').click(); 
        }else if (myElement.value == 5) { 
            document.getElementById('a5').click(); 
        }else if (myElement.value == 6) { 
            document.getElementById('a6').click(); 
        }else if (myElement.value == 7) { 
            document.getElementById('a7').click(); 
        }else if (myElement.value == 8) { 
            document.getElementById('a8').click(); 
        }
        else if (myElement.value == 9) { 
            document.getElementById('a9').click(); 
        }
        
}

// function random() {
//     var pagealert1 = document.getElementById('randomclick');
//     var link = document.createElement('a');

   
//     var randomNumber1 = Math.floor(Math.random() * 8) + 1;
//     var randomNumber2 = Math.floor(Math.random() * 8) + 1;
//     var randomNumber3 = (Math.random() * (5 - 0.1) + 0.1).toFixed(1);

    
//     link.href = `./P2.html?SetStorageDeckA=S${randomNumber1}P${randomNumber2}&&SetStorageSpeedDeckA=${randomNumber3}`;
    
    
//     pagealert1.appendChild(link);
//     setTimeout(function() {
//         link.click();
//     }, 500);
//     // alert("ok");
// }


// var noTouchTime = 0;

// // ฟังก์ชันที่จะถูกเรียกเมื่อไม่มีการแตะหน้าจอเป็นเวลา 10 วินาที
// function handleNoTouch() {
//     // ทำสิ่งที่คุณต้องการเมื่อไม่มีการแตะหน้าจอเป็นเวลา 10 วินาที
//     alert("ไม่มีการแตะหน้าจอเป็นเวลา 10 วินาที");
// }

// // เพิ่ม event listener สำหรับการแตะหน้าจอ
// document.addEventListener('touchstart', onTouchOrClick);

// // เพิ่ม event listener สำหรับคลิก
// document.addEventListener('click', onTouchOrClick);

// // ใช้ setInterval เพื่อตรวจสอบเวลาที่ไม่มีการแตะหน้าจอทุก 1 วินาที
// setInterval(function() {
//     // เพิ่มเวลาที่ไม่มีการแตะหน้าจอทุก 1 วินาที
//     noTouchTime++;

//     // ตรวจสอบว่าไม่มีการแตะหน้าจอเป็นเวลา 10 วินาทีหรือไม่
//     if (noTouchTime >= 10) {
//         // เรียกฟังก์ชันที่จะทำงานเมื่อไม่มีการแตะหน้าจอเป็นเวลา 10 วินาที
//         handleNoTouch();
//     }
// }, 1000); // ตรวจสอบทุก 1 วินา




function p1click() {
   
    var pagealert1 = document.getElementById('p1');

    var pagealert2 = document.getElementById('p2');
 
    var pagealert3 = document.getElementById('p3');

    var pagealert4 = document.getElementById('p4');
   
    var pagealert5 = document.getElementById('p5');
 
    var pagealert6 = document.getElementById('p6');

    var pagealert7 = document.getElementById('p7');
   
    var pagealert8 = document.getElementById('p8');
   
}
function p2click() {
   
    var pagealert2 = document.getElementById('p2');

    var pagealert1 = document.getElementById('p1');
 
    var pagealert3 = document.getElementById('p3');

    var pagealert4 = document.getElementById('p4');

    var pagealert5 = document.getElementById('p5');
  
    var pagealert6 = document.getElementById('p6');

    var pagealert7 = document.getElementById('p7');

    var pagealert8 = document.getElementById('p8');
 
}
function p3click() {
   
    var pagealert3 = document.getElementById('p3');
   
    var pagealert1 = document.getElementById('p1');
    
    var pagealert2 = document.getElementById('p2');
   
    var pagealert4 = document.getElementById('p4');
  
    var pagealert5 = document.getElementById('p5');
   
    var pagealert6 = document.getElementById('p6');
   
    var pagealert7 = document.getElementById('p7');
  
    var pagealert8 = document.getElementById('p8');}
   
function p4click() {
   
    var pagealert4 = document.getElementById('p4');
 
    var pagealert1 = document.getElementById('p1');
  
    var pagealert3 = document.getElementById('p3');
    
    var pagealert2 = document.getElementById('p2');
    
    var pagealert5 = document.getElementById('p5');
    
    var pagealert6 = document.getElementById('p6');
    
    var pagealert7 = document.getElementById('p7');
    
    var pagealert8 = document.getElementById('p8');
   
}
function p5click() {
   
    var pagealert5 = document.getElementById('p5');
    
    var pagealert1 = document.getElementById('p1');
   
    var pagealert3 = document.getElementById('p3');
    
    var pagealert4 = document.getElementById('p4');
    
    var pagealert2 = document.getElementById('p2');
    
    var pagealert6 = document.getElementById('p6');
    
    var pagealert7 = document.getElementById('p7');
    
    var pagealert8 = document.getElementById('p8');
    
}
function p6click() {
   
    var pagealert6 = document.getElementById('p6');
    
    var pagealert1 = document.getElementById('p1');
    
    var pagealert3 = document.getElementById('p3');
    
    var pagealert4 = document.getElementById('p4');
    
    var pagealert5 = document.getElementById('p5');
    
    var pagealert2 = document.getElementById('p2');
    
    var pagealert7 = document.getElementById('p7');
    
    var pagealert8 = document.getElementById('p8');}
    
function p7click() {
   
    var pagealert7 = document.getElementById('p7');
    
    var pagealert1 = document.getElementById('p1');
    
    var pagealert3 = document.getElementById('p3');
    
    var pagealert4 = document.getElementById('p4');
    
    var pagealert5 = document.getElementById('p5');
    
    var pagealert6 = document.getElementById('p6');
    
    var pagealert2 = document.getElementById('p2');
    
    var pagealert8 = document.getElementById('p8');
    
}
function p8click() {
   
    var pagealert8 = document.getElementById('p8');
    
    var pagealert1 = document.getElementById('p1');
    
    var pagealert3 = document.getElementById('p3');
    
    var pagealert4 = document.getElementById('p4');
    
    var pagealert5 = document.getElementById('p5');
    
    var pagealert6 = document.getElementById('p6');
   
    var pagealert7 = document.getElementById('p7');
    
    var pagealert2 = document.getElementById('p2');
    
}
function k() {
   
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/directdeac/active/act2.png";
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/directdeac/2.png";
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/directdeac/3.png";
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/directdeac/4.png";
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/directdeac/5.png";
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/directdeac/6.png";
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/directdeac/7.png";
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/directdeac/8.png";
  
}
function d2click() {
   
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/directdeac/active/act1.png";
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/directdeac/1.png";
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/directdeac/3.png";
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/directdeac/4.png";
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/directdeac/5.png";
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/directdeac/6.png";
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/directdeac/7.png";
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/directdeac/8.png";
  
}

function d3click() {
   
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/directdeac/active/act3.png";
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/directdeac/1.png";
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/directdeac/2.png";
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/directdeac/4.png";
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/directdeac/5.png";
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/directdeac/6.png";
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/directdeac/7.png";
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/directdeac/8.png";
  
}
function d4click() {
   
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/directdeac/active/act4.png";
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/directdeac/1.png";
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/directdeac/2.png";
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/directdeac/3.png";
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/directdeac/5.png";
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/directdeac/6.png";
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/directdeac/7.png";
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/directdeac/8.png";
  
}
function d5click() {
   
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/directdeac/active/act5.png";
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/directdeac/1.png";
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/directdeac/2.png";
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/directdeac/3.png";
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/directdeac/4.png";
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/directdeac/6.png";
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/directdeac/7.png";
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/directdeac/8.png";
}
function d6click() {
   
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/directdeac/active/6.png";
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/directdeac/1.png";
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/directdeac/2.png";
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/directdeac/3.png";
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/directdeac/4.png";
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/directdeac/5.png";
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/directdeac/7.png";
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/directdeac/8.png";
}
function d7click() {
   
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/directdeac/active/act7.png";
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/directdeac/1.png";
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/directdeac/2.png";
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/directdeac/3.png";
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/directdeac/4.png";
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/directdeac/5.png";
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/directdeac/6.png";
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/directdeac/8.png";
}
function d8click() {
   
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/directdeac/active/act8.png";
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/directdeac/1.png";
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/directdeac/2.png";
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/directdeac/3.png";
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/directdeac/4.png";
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/directdeac/5.png";
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/directdeac/6.png";
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/directdeac/7.png" }

    // function fadeOutAndChangePage() {
    //     document.getElementById('bd').classList.add('hidden');
    //     setTimeout(function() {
    //         window.location.href = 'Count.html';
    //     }, 1000);
    //   }


    function updateOnClick(value) {
        let clickValue;
        
    
        switch (parseInt(value)) {
            case 1:
                
                clickValue = 0.1;
                break;
            case 2:
                clickValue = 0.3;
                break;
            case 3:
                clickValue = 0.6;
                break;
            case 4:
                clickValue = 0.9;
                break;
            case 5:
                clickValue = 1;
                break;
            case 6:
                clickValue = 2;
                break;
            case 7:
                clickValue = 3;
                break;
            case 8:
                clickValue = 3;
                break;
            case 9:
                clickValue = 4;
                break;
            case 10:
                clickValue = 5;
                break;
            default:
                clickValue = 0;
        }
    
        const clickLink = document.getElementById('clickLink');
        clickLink.setAttribute('onclick', `clickS(${clickValue})`);
        clickLink.click();
    }
    
    

  