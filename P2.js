
// window.onload = checkInputValue();
// checkInputValue();
// function checkInputValue() {
   
//     const queryString = window.location.search;
// 	const urlParams = new URLSearchParams(queryString);
// 	const StorageDeckA = urlParams.get('SetStorageDeckA');
//     if(StorageDeckA =="P1"){
//     var pagealert1 = document.getElementById('p1');
    
//     alert(pagealert1.style.backgroundColor );
//     }


//     // alert(Username);
// 	// const Password = urlParams.get('password');
 
//     }


// window.onload = function() {
//     // หา input range ในเอกสาร
//     var rangeInput = document.querySelector('input[type="range"]');

//     // หาลิงก์ทั้งหมด
//     var links = document.querySelectorAll('a');

//     // เพิ่ม event listener สำหรับการเปลี่ยนค่า input range
//     rangeInput.addEventListener('input', function(event) {
//         // แสดงค่าที่ถูกตั้งค่า
//         var currentValue = rangeInput.value;

//         // ควบคุมลิงก์ตามค่าที่ถูกตั้งค่า
//         controlLinks(currentValue, event);
//     });

//     // ตรวจสอบค่าเริ่มต้น
//     controlLinks(rangeInput.value, null);
// };

// function controlLinks(value, event) {
//     // ถ้าค่าเท่ากับ 1, ให้ควบคุมลิงก์ที่มี id เท่ากับ "a1" เป็นต้น
//     // คุณสามารถเพิ่มเงื่อนไขไปเรื่อย ๆ ตามค่าที่คุณต้องการ
//     if (value == 1) {
//         if (event) {
//             event.preventDefault(); // ป้องกันการรีโหลดหน้าเว็บ
//         }
//         document.getElementById('a1').click(); // ทำการคลิกลิงก์ a1
//     } else if (value == 2) {
//         if (event) {
//             event.preventDefault(); // ป้องกันการรีโหลดหน้าเว็บ
//         }
//         document.getElementById('a2').click(); // ทำการคลิกลิงก์ a2
//     } else if (value == 3) {
//         if (event) {
//             event.preventDefault(); // ป้องกันการรีโหลดหน้าเว็บ
//         }
//         document.getElementById('a3').click(); // ทำการคลิกลิงก์ a3
//     }
//     // เพิ่มเงื่อนไขไปเรื่อย ๆ ตามค่าที่คุณต้องการ
// }
function random() {
    var pagealert1 = document.getElementById('randomclick');
    var link = document.createElement('a');

   
    var randomNumber1 = Math.floor(Math.random() * 8) + 1;
    var randomNumber2 = Math.floor(Math.random() * 8) + 1;
    var randomNumber3 = (Math.random() * (5 - 0.1) + 0.1).toFixed(1);

    
    link.href = `./P2.html?SetStorageDeckA=S${randomNumber1}P${randomNumber2}&&SetStorageSpeedDeckA=${randomNumber3}`;
    
    
    pagealert1.appendChild(link);
    setTimeout(function() {
        link.click();
    }, 500);
    // alert("ok");
}


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
    document.getElementById('bd2').classList.add('hidden');

    // รอ 1 วินาที (1000 มิลลิวินาที) แล้วเปลี่ยนหน้า
    setTimeout(function() {
      window.location.href = 'count.html';
    }, 1000);
  }


