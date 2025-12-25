// Sayfa yüklendiğinde çalışacak ana fonksiyon
window.onload = function() {
    updateTable();
};

// --- LİNK YÖNLENDİRME SİSTEMİ ---
// Uzun linklerini BURADAKİ tırnakların içine yapıştır.
function git(hedef) {
    let url = "";

    switch(hedef) {
        case 'link1': url = "https://dosya.co/v8h6nxcvbloi/xann_sms_bomber.rar.html"; break;
        case 'link2': url = "https://discord.gg/aUsnEDQhkx"; break;
        case 'link3': url = "https://www.instagram.com/190xanny/"; break;
        case 'link4': url = "https://rentry.co/uc7n3wia"; break;
        case 'link5': url = "https://www.apponfly.com"; break;
        case 'link6': url = "https://justpaste.it/imxvv"; break;
        case 'link7': url = "https://justpaste.it/jsuqp"; break;
    }
    }

    if (url !== "" && url !== "BURAYA_UZUN_LINK_X") {
        window.open(url, '_blank');
    } else {
        alert("Bu buton için link henüz ayarlanmadı!");
    }


// --- GİRİŞ VE KAYIT MANTIĞI ---
function handleLogin() {
    const user = document.getElementById('username').value.trim();
    const key = document.getElementById('key').value.trim();
    const errorMsg = document.getElementById('error-msg');

    // Key kontrolü ve kullanıcı adı uzunluğu
    if (key === "bozovaEK" && user.length >= 3) {
        
        // LocalStorage'dan üyeleri çek
        let members = JSON.parse(localStorage.getItem('SİTE ÜYELERİ')) || [];

        // Eğer kullanıcı adı listede yoksa yeni kayıt olarak ekle
        const exists = members.some(m => m.name.toLowerCase() === user.toLowerCase());
        if (!exists) {
            members.push({
                name: user,
                date: new Date().toLocaleString('tr-TR')
            });
            localStorage.setItem('SİTE ÜYELERİ', JSON.stringify(members));
        }

        // Ekranları değiştir
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('dashboard').classList.remove('hidden');
        document.getElementById('dashboard').style.display = 'flex';
        
        // Kullanıcı ismini dashboard'a yaz
        document.getElementById('active-user').innerText = user;

        // Tabloyu güncelle
        updateTable();
    } else {
        errorMsg.innerText = "Hatalı Key  veya Geçersiz Kullanıcı Adı!";
        errorMsg.style.color = "#ff4444";
    }
}

// --- GERÇEK ÜYE TABLOSUNU GÜNCELLEME ---
function updateTable() {
    const members = JSON.parse(localStorage.getItem('SİTE ÜYELERİ')) || [];
    const tableBody = document.getElementById('user-table-body');
    const totalCount = document.getElementById('total-members');

    if (tableBody) {
        tableBody.innerHTML = ""; // Tabloyu temizle
        totalCount.innerText = members.length; // Toplam sayıyı yaz

        // Üyeleri en yeni en üstte olacak şekilde sırala ve ekle
        members.slice().reverse().forEach(m => {
            let row = `<tr>
                <td>${m.name}</td>
                <td>${m.date}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }
}

// --- MOBİL MENÜ AÇ/KAPAT ---
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}