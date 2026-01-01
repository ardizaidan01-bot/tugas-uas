function loadPage(page) {
    const content = document.getElementById("content");

    /* ================= HOME ================= */
    if (page === "home") {
        content.innerHTML = `
            <div class="card">
                <h2>Halo, Saya Imam Ardi Zaidan 👋</h2>
                <p>
                    Selamat datang di website sederhana saya</i>.
                </p>
                <p>
                    Di sini Anda dapat melihat profil saya, karya & project,
                    serta berbagai media yang pernah saya buat.
                </p>
            </div>

            <div class="grid">
                <div class="box">💻 Web Development</div>
                <div class="box">🎨 UI / UX Design</div>
                <div class="box">⚙️ JavaScript</div>
            </div>
        `;
    }

    /* ================= PROFILE ================= */
  if (page === "profile") {
    content.innerHTML = `
        <div class="card profile-card">
            <div class="profile-wrapper right-photo">
                
                <div class="profile-info">
                    <h2>Profile Saya</h2>
                    <p><b>Nama:</b> Imam Ardi Zaidan</p>
                    <p><b>Bidang:</b> Web Development</p>
                    <p><b>Pengalaman:</b> Pemula</p>
                    <p><b>Deskripsi:</b></p>
                    <p>
                        Saya adalah seorang mahasiswa yang tertarik pada dunia
                        pemrograman web dan desain antarmuka.
                        Saya senang membuat website yang sederhana, rapi,
                        dan mudah digunakan.
                    </p>
                </div>

                <img src="Foto Formal.jpeg" alt="Foto Profil" class="profile-img">

            </div>
        </div>

        <div class="card">
            <h2>Keahlian</h2>
            <div class="grid">
                <div class="box">HTML</div>
                <div class="box">CSS</div>
                <div class="box">JavaScript</div>
                <div class="box">Design</div>
            </div>
        </div>
    `;
}


    /* ================= PROJECT ================= */
   if (page === "project") {
    content.innerHTML = `
        <h2>Karya & Project</h2>

        <div class="grid">
            <div class="card project-card">
                <h3>Website Portfolio</h3>
                <p>
                    Website portfolio pribadi yang dibuat dengan
                    HTML, CSS, dan JavaScript.
                </p>
                <a href="https://ardizaidan01-bot.github.io/P17/l"

"
                   target="_blank"
                   class="project-link">
                   Lihat Project
                </a>
            </div>

            <div class="card project-card">
                <h3>Landing Page</h3>
                <p>
                    Halaman promosi produk dengan desain modern
                    dan responsif.
                </p>
                <a href="https://ardizaidan01-bot.github.io/P10/"
                   target="_blank"
                   class="project-link">
                   Lihat Project
                </a>
            </div>

            <div class="card project-card">
                <h3>UI Design</h3>
                <p>
                    Desain tampilan website dengan fokus
                    pada kenyamanan pengguna.
                </p>
                <a href="https://ardizaidan01-bot.github.io/P16/"
                   target="_blank"
                   class="project-link">
                   Lihat Design
                </a>
            </div>
        </div>
    `;
}


    /* ================= MEDIA ================= */
    if (page === "media") {
    content.innerHTML = `
        <h2>Media</h2>

        <!-- ===== GAMBAR ===== -->
        <div class="card">
            <h3>🖼️ Gambar</h3>
            <div class="grid">
                <img src="media/images/img1.jpeg" class="media-img">
                <img src="media/images/img2.jpeg" class="media-img">
                <img src="media/images/img3.jpeg" class="media-img">
            </div>
        </div>

        <!-- ===== VIDEO ===== -->
        <div class="card">
            <h3>🎬 Video</h3>
            <div class="grid">
                <video controls class="media-video">
                    <source src="media/videos/vid1.mp4" type="video/mp4">
                </video>
                <video controls class="media-video">
                    <source src="media/videos/vid2.mp4" type="video/mp4">
                </video>
                <video controls class="media-video">
                    <source src="media/videos/vid3.mp4" type="video/mp4">
                </video>
            </div>
        </div>

        <!-- ===== AUDIO ===== -->
        <div class="card">
            <h3>🎧 Audio</h3>
            <div class="grid">
                <audio controls class="media-audio">
                    <source src="media/audio/aud1.mp3" type="audio/mpeg">
                </audio>
                <audio controls class="media-audio">
                    <source src="media/audio/aud2.mp3" type="audio/mpeg">
                </audio>
                <audio controls class="media-audio">
                    <source src="media/audio/aud3.mp3" type="audio/mpeg">
                </audio>
            </div>
        </div>

        <!-- ===== DOKUMEN ===== -->
        <div class="card">
            <h3>📄 Dokumen</h3>
            <div class="grid">
                <a href="media/docs/doc1.pdf" target="_blank" class="doc-link">Dokumen 1</a>
                <a href="media/docs/doc2.pdf" target="_blank" class="doc-link">Dokumen 2</a>
                <a href="media/docs/doc3.pdf" target="_blank" class="doc-link">Dokumen 3</a>
            </div>
        </div>
    `;
}

}

/* ========== NAVBAR FUNCTION ========== */
function setActive(element) {
    document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
    });
    element.classList.add("active");

    document.getElementById("nav-menu").classList.remove("show");
}

function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show");
}

/* DEFAULT PAGE */
loadPage("home");


