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
    pagealert1.style.backgroundColor = 'white';
    pagealert1.style.opacity = 1;
    pagealert1.style.color = "black";
    var pagealert2 = document.getElementById('p2');
    pagealert2.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert2.style.opacity = 0.3;
    pagealert2.style.color = 'rgb(241, 232, 232)';
    var pagealert3 = document.getElementById('p3');
    pagealert3.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert3.style.opacity = 0.3;
    pagealert3.style.color = 'rgb(241, 232, 232)';
    var pagealert4 = document.getElementById('p4');
    pagealert4.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert4.style.opacity = 0.3;
    pagealert4.style.color = 'rgb(241, 232, 232)';
    var pagealert5 = document.getElementById('p5');
    pagealert5.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert5.style.opacity = 0.3;
    pagealert5.style.color = 'rgb(241, 232, 232)';
    var pagealert6 = document.getElementById('p6');
    pagealert6.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert6.style.opacity = 0.3;
    pagealert6.style.color = 'rgb(241, 232, 232)';
    var pagealert7 = document.getElementById('p7');
    pagealert7.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert7.style.opacity = 0.3;
    pagealert7.style.color = 'rgb(241, 232, 232)';
    var pagealert8 = document.getElementById('p8');
    pagealert8.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert8.style.opacity = 0.3;
    pagealert8.style.color = 'rgb(241, 232, 232)';
}
function p2click() {
   
    var pagealert2 = document.getElementById('p2');
    pagealert2.style.backgroundColor = 'white';
    pagealert2.style.opacity = 1;
    pagealert2.style.color = "black";
    var pagealert1 = document.getElementById('p1');
    pagealert1.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert1.style.opacity = 0.3;
    pagealert1.style.color = 'rgb(241, 232, 232)';
    var pagealert3 = document.getElementById('p3');
    pagealert3.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert3.style.opacity = 0.3;
    pagealert3.style.color = 'rgb(241, 232, 232)';
    var pagealert4 = document.getElementById('p4');
    pagealert4.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert4.style.opacity = 0.3;
    pagealert4.style.color = 'rgb(241, 232, 232)';
    var pagealert5 = document.getElementById('p5');
    pagealert5.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert5.style.opacity = 0.3;
    pagealert5.style.color = 'rgb(241, 232, 232)';
    var pagealert6 = document.getElementById('p6');
    pagealert6.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert6.style.opacity = 0.3;
    pagealert6.style.color = 'rgb(241, 232, 232)';
    var pagealert7 = document.getElementById('p7');
    pagealert7.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert7.style.opacity = 0.3;
    pagealert7.style.color = 'rgb(241, 232, 232)';
    var pagealert8 = document.getElementById('p8');
    pagealert8.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert8.style.opacity = 0.3;
    pagealert8.style.color = 'rgb(241, 232, 232)';
}
function p3click() {
   
    var pagealert3 = document.getElementById('p3');
    pagealert3.style.backgroundColor = 'white';
    pagealert3.style.opacity = 1;
    pagealert3.style.color = "black";
    var pagealert1 = document.getElementById('p1');
    pagealert1.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert1.style.opacity = 0.3;
    pagealert1.style.color = 'rgb(241, 232, 232)';
    var pagealert2 = document.getElementById('p2');
    pagealert2.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert2.style.opacity = 0.3;
    pagealert2.style.color = 'rgb(241, 232, 232)';
    var pagealert4 = document.getElementById('p4');
    pagealert4.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert4.style.opacity = 0.3;
    pagealert4.style.color = 'rgb(241, 232, 232)';
    var pagealert5 = document.getElementById('p5');
    pagealert5.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert5.style.opacity = 0.3;
    pagealert5.style.color = 'rgb(241, 232, 232)';
    var pagealert6 = document.getElementById('p6');
    pagealert6.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert6.style.opacity = 0.3;
    pagealert6.style.color = 'rgb(241, 232, 232)';
    var pagealert7 = document.getElementById('p7');
    pagealert7.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert7.style.opacity = 0.3;
    pagealert7.style.color = 'rgb(241, 232, 232)';
    var pagealert8 = document.getElementById('p8');
    pagealert8.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert8.style.opacity = 0.3;
    pagealert8.style.color = 'rgb(241, 232, 232)';
}
function p4click() {
   
    var pagealert4 = document.getElementById('p4');
    pagealert4.style.backgroundColor = 'white';
    pagealert4.style.opacity = 1;
    pagealert4.style.color = "black";
    var pagealert1 = document.getElementById('p1');
    pagealert1.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert1.style.opacity = 0.3;
    pagealert1.style.color = 'rgb(241, 232, 232)';
    var pagealert3 = document.getElementById('p3');
    pagealert3.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert3.style.opacity = 0.3;
    pagealert3.style.color = 'rgb(241, 232, 232)';
    var pagealert2 = document.getElementById('p2');
    pagealert2.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert2.style.opacity = 0.3;
    pagealert2.style.color = 'rgb(241, 232, 232)';
    var pagealert5 = document.getElementById('p5');
    pagealert5.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert5.style.opacity = 0.3;
    pagealert5.style.color = 'rgb(241, 232, 232)';
    var pagealert6 = document.getElementById('p6');
    pagealert6.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert6.style.opacity = 0.3;
    pagealert6.style.color = 'rgb(241, 232, 232)';
    var pagealert7 = document.getElementById('p7');
    pagealert7.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert7.style.opacity = 0.3;
    pagealert7.style.color = 'rgb(241, 232, 232)';
    var pagealert8 = document.getElementById('p8');
    pagealert8.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert8.style.opacity = 0.3;
    pagealert8.style.color = 'rgb(241, 232, 232)';
}
function p5click() {
   
    var pagealert5 = document.getElementById('p5');
    pagealert5.style.backgroundColor = 'white';
    pagealert5.style.opacity = 1;
    pagealert5.style.color = "black";
    var pagealert1 = document.getElementById('p1');
    pagealert1.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert1.style.opacity = 0.3;
    pagealert1.style.color = 'rgb(241, 232, 232)';
    var pagealert3 = document.getElementById('p3');
    pagealert3.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert3.style.opacity = 0.3;
    pagealert3.style.color = 'rgb(241, 232, 232)';
    var pagealert4 = document.getElementById('p4');
    pagealert4.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert4.style.opacity = 0.3;
    pagealert4.style.color = 'rgb(241, 232, 232)';
    var pagealert2 = document.getElementById('p2');
    pagealert2.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert2.style.opacity = 0.3;
    pagealert2.style.color = 'rgb(241, 232, 232)';
    var pagealert6 = document.getElementById('p6');
    pagealert6.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert6.style.opacity = 0.3;
    pagealert6.style.color = 'rgb(241, 232, 232)';
    var pagealert7 = document.getElementById('p7');
    pagealert7.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert7.style.opacity = 0.3;
    pagealert7.style.color = 'rgb(241, 232, 232)';
    var pagealert8 = document.getElementById('p8');
    pagealert8.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert8.style.opacity = 0.3;
    pagealert8.style.color = 'rgb(241, 232, 232)';
}
function p6click() {
   
    var pagealert6 = document.getElementById('p6');
    pagealert6.style.backgroundColor = 'white';
    pagealert6.style.opacity = 1;
    pagealert6.style.color = "black";
    var pagealert1 = document.getElementById('p1');
    pagealert1.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert1.style.opacity = 0.3;
    pagealert1.style.color = 'rgb(241, 232, 232)';
    var pagealert3 = document.getElementById('p3');
    pagealert3.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert3.style.opacity = 0.3;
    pagealert3.style.color = 'rgb(241, 232, 232)';
    var pagealert4 = document.getElementById('p4');
    pagealert4.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert4.style.opacity = 0.3;
    pagealert4.style.color = 'rgb(241, 232, 232)';
    var pagealert5 = document.getElementById('p5');
    pagealert5.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert5.style.opacity = 0.3;
    pagealert5.style.color = 'rgb(241, 232, 232)';
    var pagealert2 = document.getElementById('p2');
    pagealert2.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert2.style.opacity = 0.3;
    pagealert2.style.color = 'rgb(241, 232, 232)';
    var pagealert7 = document.getElementById('p7');
    pagealert7.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert7.style.opacity = 0.3;
    pagealert7.style.color = 'rgb(241, 232, 232)';
    var pagealert8 = document.getElementById('p8');
    pagealert8.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert8.style.opacity = 0.3;
    pagealert8.style.color = 'rgb(241, 232, 232)';
}
function p7click() {
   
    var pagealert7 = document.getElementById('p7');
    pagealert7.style.backgroundColor = 'white';
    pagealert7.style.opacity = 1;
    pagealert7.style.color = "black";
    var pagealert1 = document.getElementById('p1');
    pagealert1.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert1.style.opacity = 0.3;
    pagealert1.style.color = 'rgb(241, 232, 232)';
    var pagealert3 = document.getElementById('p3');
    pagealert3.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert3.style.opacity = 0.3;
    pagealert3.style.color = 'rgb(241, 232, 232)';
    var pagealert4 = document.getElementById('p4');
    pagealert4.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert4.style.opacity = 0.3;
    pagealert4.style.color = 'rgb(241, 232, 232)';
    var pagealert5 = document.getElementById('p5');
    pagealert5.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert5.style.opacity = 0.3;
    pagealert5.style.color = 'rgb(241, 232, 232)';
    var pagealert6 = document.getElementById('p6');
    pagealert6.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert6.style.opacity = 0.3;
    pagealert6.style.color = 'rgb(241, 232, 232)';
    var pagealert2 = document.getElementById('p2');
    pagealert2.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert2.style.opacity = 0.3;
    pagealert2.style.color = 'rgb(241, 232, 232)';
    var pagealert8 = document.getElementById('p8');
    pagealert8.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert8.style.opacity = 0.3;
    pagealert8.style.color = 'rgb(241, 232, 232)';
}
function p8click() {
   
    var pagealert8 = document.getElementById('p8');
    pagealert8.style.backgroundColor = 'white';
    pagealert8.style.opacity = 1;
    pagealert8.style.color = "black";
    var pagealert1 = document.getElementById('p1');
    pagealert1.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert1.style.opacity = 0.3;
    pagealert1.style.color = 'rgb(241, 232, 232)';
    var pagealert3 = document.getElementById('p3');
    pagealert3.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert3.style.opacity = 0.3;
    pagealert3.style.color = 'rgb(241, 232, 232)';
    var pagealert4 = document.getElementById('p4');
    pagealert4.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert4.style.opacity = 0.3;
    pagealert4.style.color = 'rgb(241, 232, 232)';
    var pagealert5 = document.getElementById('p5');
    pagealert5.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert5.style.opacity = 0.3;
    pagealert5.style.color = 'rgb(241, 232, 232)';
    var pagealert6 = document.getElementById('p6');
    pagealert6.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert6.style.opacity = 0.3;
    pagealert6.style.color = 'rgb(241, 232, 232)';
    var pagealert7 = document.getElementById('p7');
    pagealert7.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert7.style.opacity = 0.3;
    pagealert7.style.color = 'rgb(241, 232, 232)';
    var pagealert2 = document.getElementById('p2');
    pagealert2.style.backgroundColor = 'rgb(103, 101, 101)';
    pagealert2.style.opacity = 0.3;
    pagealert2.style.color = 'rgb(241, 232, 232)';
}
function d1click() {
   
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/active/act1.png";
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/deactive/de2.png";
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/deactive/de3.png";
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/deactive/de4.png";
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/deactive/de5.png";
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/deactive/de6.png";
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/deactive/de7.png";
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/deactive/de8.png";
  
}
function d2click() {
   
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/active/act2.png";
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/deactive/de1.png";
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/deactive/de3.png";
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/deactive/de4.png";
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/deactive/de5.png";
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/deactive/de6.png";
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/deactive/de7.png";
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/deactive/de8.png";
  
}

function d3click() {
   
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/active/act3.png";
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/deactive/de1.png";
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/deactive/de2.png";
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/deactive/de4.png";
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/deactive/de5.png";
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/deactive/de6.png";
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/deactive/de7.png";
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/deactive/de8.png";
  
}
function d4click() {
   
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/active/act4.png";
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/deactive/de1.png";
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/deactive/de2.png";
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/deactive/de3.png";
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/deactive/de5.png";
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/deactive/de6.png";
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/deactive/de7.png";
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/deactive/de8.png";
  
}
function d5click() {
   
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/active/act5.png";
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/deactive/de1.png";
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/deactive/de2.png";
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/deactive/de3.png";
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/deactive/de4.png";
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/deactive/de6.png";
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/deactive/de7.png";
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/deactive/de8.png";
}
function d6click() {
   
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/active/act6.png";
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/deactive/de1.png";
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/deactive/de2.png";
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/deactive/de3.png";
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/deactive/de4.png";
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/deactive/de5.png";
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/deactive/de7.png";
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/deactive/de8.png";
}
function d7click() {
   
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/active/act7.png";
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/deactive/de1.png";
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/deactive/de2.png";
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/deactive/de3.png";
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/deactive/de4.png";
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/deactive/de5.png";
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/deactive/de6.png";
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/deactive/de8.png";
}
function d8click() {
   
    var pagealert8 = document.getElementById('direction8');
    pagealert8.src = "./images/active/act8.png";
    var pagealert1 = document.getElementById('direction1');
    pagealert1.src = "./images/deactive/de1.png";
    var pagealert2 = document.getElementById('direction2');
    pagealert2.src = "./images/deactive/de2.png";
    var pagealert3 = document.getElementById('direction3');
    pagealert3.src = "./images/deactive/de3.png";
    var pagealert4 = document.getElementById('direction4');
    pagealert4.src = "./images/deactive/de4.png";
    var pagealert5 = document.getElementById('direction5');
    pagealert5.src = "./images/deactive/de5.png";
    var pagealert6 = document.getElementById('direction6');
    pagealert6.src = "./images/deactive/de6.png";
    var pagealert7 = document.getElementById('direction7');
    pagealert7.src = "./images/deactive/de7.png";
}




function fadeOutAndChangePage() {
    // ใส่คลาส hidden เพื่อทำ fade out
    // document.getElementById('bd2').classList.add('hidden');

    // // รอ 1 วินาที (1000 มิลลิวินาที) แล้วเปลี่ยนหน้า
    // setTimeout(function() {
    //   window.location.href = 'count.html';
    // }, 1000);
    window.location.href = 'count.html';
  }


