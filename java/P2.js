// window.addEventListener('load', function() {
//     var buttonElement = document.querySelector('#tt .button');

//     // ตรวจสอบว่าอ็อบเจ็กต์ที่ค้นหามีค่าเป็น null หรือไม่
//     if (buttonElement !== null) {
//         // ตรวจสอบว่า buttonElement มี property 'style' หรือไม่
//         if (buttonElement.style !== undefined) {
//             // ตั้งค่าสีพื้นหลังของปุ่ม
//             buttonElement.style.backgroundColor = 'blue';
//         } else {
//             console.error('Property "style" is undefined');
//         }
//     } else {
//         console.error('Element not found');
//     }
// });





// สร้างฟังก์ชันเพื่อเปลี่ยนสีปุ่มเป็นสีขาว
// function changeButtonColor() {
//     var button = document.getElementById('p1');
    
//     button.style.backgroundColor = 'white';
//     // บันทึกสถานะใน localStorage
//     localStorage.setItem('buttonColor', 'white');
// }

// // สร้างฟังก์ชันเพื่อรีเซ็ตสีปุ่มกลับไปเป็นสีดำ
// function resetButtonColor() {
//     var button = document.getElementById('p1');
//     button.style.backgroundColor = 'black';
//     // บันทึกสถานะใน localStorage
//     localStorage.setItem('buttonColor', 'black');
// }

// // สร้างฟังก์ชันเมื่อคลิกที่ปุ่ม
// function handleClick() {
//     changeButtonColor();
//     // ทำสิ่งที่คุณต้องการเมื่อคลิกปุ่ม, เช่น การเปลี่ยนหน้า
//     // ตัวอย่าง: window.location.href = 'yourNewPage.html';
// }

// // เช็คสถานะที่บันทึกไว้ใน localStorage เมื่อโหลดหน้า
// document.addEventListener('DOMContentLoaded', function() {
//     var storedColor = localStorage.getItem('buttonColor');
//     if (storedColor === 'white') {
//         // ถ้าสีใน localStorage เป็นสีขาว ให้เปลี่ยนสีปุ่มเป็นสีขาว
//         changeButtonColor();
//     }
// });

// // เพิ่ม event listener สำหรับเหตุการณ์ onclick ที่ปุ่ม
// document.getElementById('p1').addEventListener('click', function() {
//     handleClick();
//     setTimeout(function() {
//         resetButtonColor();
//     }, 1000); // 1000 มิลลิวินาที (1 วินาที) หลังจากที่คลิก
// });









// function randomscencewhennoonetouch() {
//     var pagealert1 = document.getElementById('randomscence');
//     var link = document.createElement('a');
//     var randomNumber2 = Math.floor(Math.random() * 8) + 1;
//     link.href = `./P2.html?SetStorageDeckA=S9P${randomNumber2}`;
//     pagealert1.appendChild(link);
//     setTimeout(function() {
//         link.click();
//     }, 1000);
// }



// let touchedscreen = false;

// // เพิ่ม event listener สำหรับเหตุการณ์ ontouchstart
// document.addEventListener('touchstart', function() {
//     touchedscreen = true;
// });

// // ตั้งเวลา 10 วินาที
// setTimeout(function() {
//     // ตรวจสอบว่าไม่มีการแตะหน้าจอไอแพด
//     if (!touchedscreen) {
//         randomscencewhennoonetouch();
//     }
// }, 180000);






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
function d1click() {
   
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

