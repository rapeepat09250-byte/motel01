// ข้อมูลและฟังก์ชันที่ใช้ร่วมกันทุกหน้า
const CONCERTS=[
 {id:'c1',name:'Midnight Echo Live',artist:'Midnight Echo',date:'12 ธ.ค. 2569',venue:'อิมแพ็ค อารีนา เมืองทองธานี',color:'#5b8def'},
 {id:'c2',name:'Sunset Festival 2026',artist:'หลายศิลปิน',date:'20 ธ.ค. 2569',venue:'สวนลุมพินี กรุงเทพฯ',color:'#ff5c8a'},
 {id:'c3',name:'Acoustic Night',artist:'Pim & The Strings',date:'9 ม.ค. 2570',venue:'ธันเดอร์โดม',color:'#2e8b73'}
];
const ZONES=[
 {id:'vip',name:'VIP',desc:'หน้าเวที พร้อมของที่ระลึก',price:5500},
 {id:'a',name:'โซน A',desc:'ที่นั่งใกล้เวที',price:3500},
 {id:'b',name:'โซน B',desc:'ที่นั่งกลาง',price:2500},
 {id:'c',name:'โซน C',desc:'ที่นั่งหลัง',price:1500}
];
const fmt=n=>'฿'+n.toLocaleString('th-TH');
const getConcert=id=>CONCERTS.find(c=>c.id===id)||CONCERTS[0];
function saveOrder(o){try{sessionStorage.setItem('order',JSON.stringify(o))}catch(e){}}
function loadOrder(){try{return JSON.parse(sessionStorage.getItem('order'))}catch(e){return null}}
const FONTS='<link href="https://fonts.googleapis.com/css2?family=Prompt:wght@500;700&family=Sarabun:wght@400;600&display=swap" rel="stylesheet">';
document.head.insertAdjacentHTML('beforeend',FONTS);
document.querySelector('header')&&(document.querySelector('header').innerHTML=`<div class="wrap"><a class="logo" href="index.html">TicketNow</a><nav><a href="index.html">หน้าหลัก</a><a href="index.html#concerts">คอนเสิร์ต</a></nav></div>`);
document.querySelector('footer')&&(document.querySelector('footer').textContent='© 2026 TicketNow – โปรเจกต์ตัวอย่างสำหรับงานกลุ่ม');
