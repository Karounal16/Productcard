// تحديد موضع الكرة بشكل عشوائي
let ballPosition = Math.floor(Math.random() * 4) + 1;

// رمز البوت الخاص بك من BotFather
const botToken = '7893297870:AAHyE3XJNUk4kvOtoi5sJJ4HpxM7szHMmfA';
// معرف الدردشة الخاص بالمستخدم (يمكن الحصول عليه عند بدء المحادثة مع البوت)
const chatId = '7391218825';

// دالة لإرسال الرسائل إلى تليجرام
function sendToTelegram(message) {
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });
}

// استخراج معرف الإحالة من الـ URL
const urlParams = new URLSearchParams(window.location.search);
const referrerId = urlParams.get('ref');

// تسجيل الإحالة (يمكنك إرسالها إلى تليجرام)
if (referrerId) {
  sendToTelegram(`تمت الإحالة بواسطة المستخدم: ${referrerId}`);
}

// دالة التحقق من الكوب المختار
function checkCup(cupNumber) {
  let message;
  if (cupNumber === ballPosition) {
    message = "مبروك! لقد وجدت الكرة.";
  } else {
    message = "خطأ! حاول مرة أخرى.";
  }
  document.getElementById("message").innerText = message;
  sendToTelegram(message);  // إرسال النتيجة إلى تليجرام
}

// إعادة تشغيل اللعبة وتوليد موضع جديد للكرة
function resetGame() {
  ballPosition = Math.floor(Math.random() * 4) + 1;
  document.getElementById("message").innerText = "";
}

// مشاركة رابط الإحالة
function shareReferral() {
  const referralLink = `https://yourgame.com/?ref=${chatId}`;
  sendToTelegram(`شارك هذا الرابط مع أصدقائك: ${referralLink}`);
  alert(`رابط الإحالة الخاص بك: ${referralLink}`);
}
