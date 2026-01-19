// --- DATA KONSTRUKTOR ---
const profileData = {
    description: "Perkenalkan nama saya Favian Rifqiziwani, saya adalah seorang graphic designer, video editor, dan Web Designer. Saat ini saya adalah Mahasiswa dari Universitas Negeri Jakarta Jurusan Pendidikan Teknik Informatika Komputer penjurusan Multimedia.",
    skills: [
        { title: "Graphic Design", desc: "Fokus pada branding, desain logo, materi promosi, dan layout cetak.", icon: "fa-palette" },
        { title: "Video Editing", desc: "Produksi konten video kreatif, motion graphics, dan color grading.", icon: "fa-video" },
        { title: "Web Design", desc: "Perancangan UI/UX yang responsif dan modern menggunakan Figma.", icon: "fa-globe" }
    ],
    software: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Figma", "Canva"],
    education: [
        { school: "SMK Negeri 34 Jakarta", period: "2020-2023", img: "img/34.png" },
        { school: "Universitas Negeri Jakarta", period: "S1 PTIK (Sekarang)", img: "img/UNJLOGO.png" }
    ],
    portfolio: [
        { title: "Project Brand Naga Gendut", desc: "Branding toko fiktif Boardgame Center ke ranah FnB.", img: "img/ng.png", link: "https://drive.google.com/drive/folders/1BW9OLt2Xuyt8po0U3hy086-dlry_ZeF-" },
        { title: "Leadership Starts Within", desc: "Weekly Content FSI Al-Biruni mengenai kepemimpinan.", img: "img/leader.jpg", link: "https://www.instagram.com/p/DKW-wXRzBPc/" },
        { title: "Poster Mengenang Korban Demo", desc: "Feeds Instagram untuk mengenang demo Agustus 2025.", img: "img/poster.jpg", link: "https://www.instagram.com/p/DOJNx2Sk7vT/" },
        { title: "Website Museum Fatahillah", desc: "Prototype design website menggunakan Figma.", img: "img/wmf.png", link: "https://www.figma.com/design/q6Zk2RqscOurcdGOyBMHMu/" },
        { title: "Website Kreatif Event Indonesia", desc: "Project tim membangun website resmi perusahaan.", img: "img/kei.png", link: "https://kreatifeventindonesia.co.id" },
        { title: "Video Iklan Muslim Adventure", desc: "Video sneak peek keseruan Proker Muslim Adventure.", img: "img/iklanMA.jpeg", link: "https://www.instagram.com/reel/C_3A1qyy25H/" }
    ],
    contact: [
        { name: "WhatsApp", icon: "fa-whatsapp", link: "https://wa.link/f0350i" },
        { name: "Instagram", icon: "fa-instagram", link: "https://www.instagram.com/favian.rz" },
        { name: "LinkedIn", icon: "fa-linkedin-in", link: "https://www.linkedin.com/in/favian-rifqiziwani-0a37a621a" },
        { name: "Email", icon: "fas fa-envelope", link: "mailto:favrifqiziwani@gmail.com" }
    ]
};

// --- FUNGSI RENDER DATA ---
function renderApp() {
    // 1. About
    document.getElementById('about-description').innerText = profileData.description;

    // 2. Skills
    const skillsHTML = profileData.skills.map((s, i) => `
        <div class="skill-card reveal reveal-delay-${i+1}">
            <div class="skill-icon-bg"><i class="fas ${s.icon}"></i></div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
        </div>
    `).join('');
    document.getElementById('skills-container').innerHTML = skillsHTML;

    // 3. Software
    const softwareHTML = `
        <h3 class="soft-title">Software Andalan</h3>
        <div class="capsule-container">
            ${profileData.software.map(soft => `<span class="capsule">${soft}</span>`).join('')}
        </div>
    `;
    document.getElementById('software-container').innerHTML = softwareHTML;

    // 4. Education
    const eduHTML = profileData.education.map((e, i) => `
        <div class="edu-card reveal reveal-delay-${i+1}">
            <img src="${e.img}" alt="${e.school}">
            <div class="edu-overlay">
                <div class="edu-info">
                    <h3>${e.school}</h3>
                    <p>${e.period}</p>
                </div>
            </div>
        </div>
    `).join('');
    document.getElementById('education-container').innerHTML = eduHTML;

    // 5. Portfolio
    const portHTML = profileData.portfolio.map((p, i) => `
        <a href="${p.link}" target="_blank" class="portfolio-item reveal reveal-delay-${(i % 2) + 1}">
            <img src="${p.img}" alt="${p.title}">
            <div class="portfolio-desc">
                <h3>${p.title}</h3>
                <h5>${p.desc}</h5>
            </div>
        </a>
    `).join('');
    document.getElementById('portfolio-container').innerHTML = portHTML;

    // 6. Contact
    const contactHTML = profileData.contact.map(c => `
        <a href="${c.link}" target="_blank" class="contact-card">
            <i class="fab ${c.icon}"></i><span>${c.name}</span>
        </a>
    `).join('');
    document.getElementById('contact-container').innerHTML = contactHTML;
}

// --- LOGIC BAWAAN (Loader, Scroll, Reveal) ---
window.addEventListener('load', () => {
    renderApp(); // Panggil data
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 800);
    }, 1000);
});

window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});