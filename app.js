// TicketNow - ข้อมูลและฟังก์ชันที่ใช้ร่วมกันทุกหน้า
const CONCERTS = [
  {
    id: 'c1',
    name: 'Midnight Echo Live',
    artist: 'Midnight Echo',
    date: '12 ธ.ค. 2569',
    venue: 'อิมแพ็ค อารีนา เมืองทองธานี',
    color: '#5b8def',
    price: 1500,
    genre: 'Pop / Rock',
    tag: 'บัตรเหลือน้อย',
    img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
    desc: 'คอนเสิร์ตใหญ่เต็มรูปแบบครั้งแรกในรอบ 5 ปี พร้อมโปรดักชันแสงสีเสียงระดับโลก'
  },
  {
    id: 'c2',
    name: 'Sunset Festival 2026',
    artist: 'หลายศิลปิน (Festival)',
    date: '20 ธ.ค. 2569',
    venue: 'สวนลุมพินี กรุงเทพฯ',
    color: '#ff5c8a',
    price: 1200,
    genre: 'Indie / Pop',
    tag: 'Early Bird',
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    desc: 'เทศกาลดนตรีกลางแจ้งใจกลางเมือง รับลมหนาวกับ 20 ศิลปินอินดี้แถวหน้า'
  },
  {
    id: 'c3',
    name: 'Acoustic Night with Pim',
    artist: 'Pim & The Strings',
    date: '9 ม.ค. 2570',
    venue: 'ธันเดอร์โดม เมืองทองธานี',
    color: '#2e8b73',
    price: 1800,
    genre: 'Acoustic / Jazz',
    tag: 'มาแรง',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    desc: 'ค่ำคืนสุดอบอุ่นกับบทเพลงคลาสสิกและอคูสติกบรรเลงสดร่วมกับวงเครื่องสาย'
  },
  {
    id: 'c4',
    name: 'Neon Horizon EDM Festival',
    artist: 'DJ Skyline & Guest Stars',
    date: '16 ม.ค. 2570',
    venue: 'ยูเนี่ยน ฮอลล์ ลาดพร้าว',
    color: '#9333ea',
    price: 2200,
    genre: 'EDM / Dance',
    tag: 'เปิดจองใหม่',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    desc: 'งานปาร์ตี้ดนตรีอิเล็กทรอนิกส์เลเซอร์ระดับสากล ปลดปล่อยพลังกับดีเจระดับโลก'
  },
  {
    id: 'c5',
    name: 'Bangkok Indie Symphony',
    artist: 'Indie Collective Orchestra',
    date: '24 ม.ค. 2570',
    venue: 'อิมแพ็ค อารีนา เมืองทองธานี',
    color: '#ea580c',
    price: 1600,
    genre: 'Indie / Orchestral',
    tag: 'รอบเดียวเท่านั้น',
    img: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    desc: 'การผสมผสานสุดล้ำระหว่างเพลงอินดี้ไทยร่วมสมัยกับวงออร์เคสตรากว่า 60 ชีวิต'
  },
  {
    id: 'c6',
    name: 'Retro Wave Night Party',
    artist: 'The 80s Revival Project',
    date: '7 ก.พ. 2570',
    venue: 'เซ็นทรัลเวิลด์ ไลฟ์ ฮอลล์',
    color: '#0284c7',
    price: 1400,
    genre: 'City Pop / Retro',
    tag: 'ขายดี',
    img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=800&q=80',
    desc: 'ย้อนรอยวันวานกับเสียงเพลงยุค 80s และ 90s ในบรรยากาศแสงนีออนสุดชิค'
  }
];

const ZONES = [
  { id: 'vip', name: 'VIP', desc: 'หน้าเวที พร้อมของที่ระลึก + สิทธิ์ Meet & Greet', price: 5500 },
  { id: 'a', name: 'โซน A', desc: 'ที่นั่งใกล้เวที ชั้น 1 วิวชัดเจน', price: 3500 },
  { id: 'b', name: 'โซน B', desc: 'ที่นั่งกลาง อัฒจันทร์ชั้น 2 เสียงดีเลิศ', price: 2500 },
  { id: 'c', name: 'โซน C', desc: 'ที่นั่งชั้น 3 บรรยากาศรวมภาพรวมเวที', price: 1500 }
];

const fmt = n => '฿' + Number(n).toLocaleString('th-TH');
const getConcert = id => CONCERTS.find(c => c.id === id) || CONCERTS[0];

function saveOrder(o) {
  try { sessionStorage.setItem('order', JSON.stringify(o)); } catch (e) {}
}

function loadOrder() {
  try { return JSON.parse(sessionStorage.getItem('order')); } catch (e) { return null; }
}

// Google Fonts
const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700&family=Sarabun:wght@300;400;500;600;700&display=swap" rel="stylesheet">';
document.head.insertAdjacentHTML('beforeend', FONTS);

// Navigation & Header
function setupHeader() {
  const header = document.querySelector('header');
  if (!header) return;
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  header.innerHTML = `
    <div class="wrap header-wrap">
      <a class="logo" href="index.html">
        <span class="logo-badge">🎟️</span> TicketNow
      </a>
      <button class="nav-toggle" aria-label="เมนู" onclick="document.querySelector('.nav-menu').classList.toggle('open')">☰</button>
      <nav class="nav-menu">
        <a href="index.html" class="${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">หน้าหลัก</a>
        <a href="events.html" class="${currentPath === 'events.html' ? 'active' : ''}">คอนเสิร์ตทั้งหมด</a>
        <a href="venues.html" class="${currentPath === 'venues.html' ? 'active' : ''}">สถานที่จัดแสดง</a>
        <a href="faq.html" class="${currentPath === 'faq.html' ? 'active' : ''}">คำถามที่พบบ่อย</a>
        <a href="contact.html" class="${currentPath === 'contact.html' ? 'active' : ''}">ติดต่อเรา</a>
      </nav>
      <div class="header-actions">
        <a href="events.html" class="btn btn-sm btn-nav">จองบัตร</a>
      </div>
    </div>
  `;
}

// Footer
function setupFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  
  footer.innerHTML = `
    <div class="wrap footer-content">
      <div class="footer-grid">
        <div class="footer-col brand-col">
          <a class="logo" href="index.html">
            <span class="logo-badge">🎟️</span> TicketNow
          </a>
          <p class="footer-desc">แพลตฟอร์มจองบัตรคอนเสิร์ตและเทศกาลดนตรีออนไลน์อันดับหนึ่ง จองง่าย บัตรแท้ 100% สแกน E-ticket เข้างานได้ทันที</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook">📘 Facebook</a>
            <a href="#" aria-label="Instagram">📸 Instagram</a>
            <a href="#" aria-label="Twitter">🐦 X (Twitter)</a>
            <a href="#" aria-label="Line">💬 LINE Official</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>เมนูแนะนำ</h4>
          <ul class="footer-links">
            <li><a href="index.html">หน้าหลัก</a></li>
            <li><a href="events.html">คอนเสิร์ตที่เปิดจอง</a></li>
            <li><a href="venues.html">สถานที่และแผนผัง</a></li>
            <li><a href="faq.html">คำถามที่พบบ่อย</a></li>
            <li><a href="contact.html">ติดต่อฝ่ายบริการ</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>นโยบายและความปลอดภัย</h4>
          <ul class="footer-links">
            <li><a href="faq.html#e-ticket">วิธีการใช้งาน E-Ticket</a></li>
            <li><a href="faq.html#refund">นโยบายการคืนเงินและโอนสิทธิ์</a></li>
            <li><a href="faq.html#rules">กฎและข้อห้ามในงาน</a></li>
            <li><a href="#">นโยบายความเป็นส่วนตัว</a></li>
            <li><a href="#">ข้อตกลงและเงื่อนไข</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>ศูนย์ช่วยเหลือ</h4>
          <p class="support-text">📞 02-123-4567<br>(จันทร์ - อาทิตย์ 09:00 - 21:00 น.)</p>
          <p class="support-text">✉️ support@ticketnow.example.com</p>
          <div class="payment-badges">
            <span class="badge-pay">💳 Visa / Master</span>
            <span class="badge-pay">📱 PromptPay QR</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 TicketNow. All rights reserved. เว็บไซต์นี้เป็นส่วนหนึ่งของโปรเจกต์งานกลุ่ม</p>
        <p class="designer-credit">Designed with ❤️ for Concert Lovers</p>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  setupHeader();
  setupFooter();
});
