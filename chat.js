const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "WhatsApp_Image_2024-06-11_at_19.24.56_4881a8e6-removebg-preview.png";
const PERSON_IMG = "images-removebg-preview.png";
const BOT_NAME = "Posper";
const PERSON_NAME = "USHER";
const Prompts = [
    ["Beri kan saya pantun pembuka"],
    ["apakah ada pantun pembuka lagi?"],
    ["Ahoy"],
    ["hi", "pagi", "selamat siang", "selamat malam", "selamat sore",  "horas", "Salam wari erpagi-pagi"],
    ["apa kabar", "Gimana hari ini?", "Uga beritandu", "Boha do baritamu", "Apah magen"],
    ["Siapa nama kamu?", "Ise gelarndu?", "Ise Goarmu", "Bisa kah aku tau nama mu", "kenalan yuk"],
    ["bisahkah aku mengetahui tugasmu", "Aha Karejomu","Kai pendahinndu?"],
    ["saya ingin tahu tentang materi peningkatan produktivitas mahasiswa", "apa itu materi peningkatan produktivitas mahasiswa", "apa si materi peningkatan produktivitas mahasiswa"],
    ["Apa saja faktor-faktor yang memengaruhi produktivitas mahasiswa?", "aku pengen tau apa si faktornya", "Beri tau saya faktor-faktor yang memengaruhi produktivitas mahasiswa?"],
    ["Bagaimana cara meningkatkan produktivitas mahasiswa?", "coba speel dong cara meningkatkan produktifitas", "beri saya saran dong agar makin menyala dan produktif"],
    ["Apa peran pemangku kepentingan dalam meningkatkan produktivitas mahasiswa?"],
    ["Apa saja tantangan dan solusi dalam meningkatkan produktivitas mahasiswa?", "apa kah ada tantangan dan solusi nya?"],
    ["Bagaimana kita dapat meningkatkan kesadaran mahasiswa atau generasi muda tentang pentingnya SDGs No 8?"],
    ["Bagaimana tingkat produktivitas tenaga kerja di Indonesia saat ini dibandingkan dengan negara-negara lain?"],
    ["Apa yang dimaksud dengan pekerjaan layak dalam konteks SDGs No 8?"],
    ["Apa saja tantangan utama dalam mencapai SDGs No 8 di Indonesia?"],
    ["Apa peran mahasiswa dalam mencapai SDGs No 8 dan Apa saja program atau inisiatif yang terkait dengan SDGs No 8 di Indonesia?"],
    ["Terima kasih atas informasinya, Sangat bermanfaat!", "Good sangat membantu", "makasih", "mauliate", "bujur melala", "bujur", "matur nuwun", "nuwun"],
    ["Tidak, untuk saat ini tidak ada", "mungkin Tidak"],
    ["Berikan saya pantun penutup"],
    ["Baiklah, terima kasih,by", "bye", "Dadah", "Horas Modong", "mejuah juah"]
];

const replies = [
    ["Pekerjaan layak perlu disyukuri, Hidup sejahtera tak perlu dirisaukan. Mari wujudkan pembangunan inklusi, SDG kedelapan, jangan dilupakan."],
    ["Pergi berlayar ke Pulau Jawa, Membawa perahu dengan layar sutra. Mari wujudkan pekerjaan layak bawa,SDG 8, ekonomi pun sejahtera."],
    ["Yoo abang ku ada yang bisa dibantu"],
    ["hi juga, ada yang bisa di bantu?", "pagi teman, ada yang bisa di bantu?","siang teman cuaca hari ini panas yah, BTW ada yang bisa dibantu", "malam ada yang bisa di bantu?", "sore, ada yang bisa di bantu?", "Horas pra, adong boi tumpaki","Horas pra, adong boi tumpaki", "Salam wari erpagi-pagi"],
    ["kabar baik", "Hari ini sedikit happy", "Medan", "Sehat pra", "Medan"],
    ["Nama ku Posper", "Gelarku Posper", "Goar hi Pospor", "Kamu bisa memanggil ku dengan nama Pospor", "Boleh nama aku posper"],
    ["aku akan Memberitau mu tentang peningkatan produktivitas mahasiswa", "kerja ku itu ngasih tau kau tentang produktivitas mahasiswa","kerja ku itu ngasih tau kau tentang produktivitas mahasiswa"],
    ["Materi peningkatan produktivitas mahasiswa bertujuan untuk membantu mahasiswa mencapai tujuan mereka dengan lebih efektif dan efisien, sehingga dapat berkontribusi pada kesejahteraan dan pertumbuhan ekonomi di Indonesia"],
    ["Faktor-faktor yang memengaruhi produktivitas mahasiswa antara lain:Manajemen waktu yang efektif: Kemampuan untuk mengatur waktu dengan baik dan fokus pada tugas yang dihadapi.Keterampilan belajar yang mumpuni: Kemampuan untuk memahami dan menerapkan berbagai metode belajar yang efektif.Kesehatan fisik dan mental yang optimal: Menjaga kesehatan fisikdan mental yang baik dapat meningkatkan fokus dan konsentrasi.Motivasi dan disiplin diri yang tinggi: Memiliki motivasi yang kuat dan disiplin diri yang tinggi untuk menyelesaikan tugas.Keterlibatan aktif dalam kegiatan akademik dan non-akademik: Berpartisipasi dalam kegiatan akademik dan non-akademik dapat membantu mahasiswa mengembangkan berbagai keterampilan dan pengalaman.", "Faktor-faktor yang memengaruhi produktivitas mahasiswa antara lain:Manajemen waktu yang efektif: Kemampuan untuk mengatur waktu dengan baik dan fokus pada tugas yang dihadapi.Keterampilan belajar yang mumpuni: Kemampuan untuk memahami dan menerapkan berbagai metode belajar yang efektif.Kesehatan fisik dan mental yang optimal: Menjaga kesehatan fisikdan mental yang baik dapat meningkatkan fokus dan konsentrasi.Motivasi dan disiplin diri yang tinggi: Memiliki motivasi yang kuat dan disiplin diri yang tinggi untuk menyelesaikan tugas.Keterlibatan aktif dalam kegiatan akademik dan non-akademik: Berpartisipasi dalam kegiatan akademik dan non-akademik dapat membantu mahasiswa mengembangkan berbagai keterampilan dan pengalaman.", "Faktor-faktor yang memengaruhi produktivitas mahasiswa antara lain:Manajemen waktu yang efektif: Kemampuan untuk mengatur waktu dengan baik dan fokus pada tugas yang dihadapi.Keterampilan belajar yang mumpuni: Kemampuan untuk memahami dan menerapkan berbagai metode belajar yang efektif.Kesehatan fisik dan mental yang optimal: Menjaga kesehatan fisikdan mental yang baik dapat meningkatkan fokus dan konsentrasi.Motivasi dan disiplin diri yang tinggi: Memiliki motivasi yang kuat dan disiplin diri yang tinggi untuk menyelesaikan tugas.Keterlibatan aktif dalam kegiatan akademik dan non-akademik: Berpartisipasi dalam kegiatan akademik dan non-akademik dapat membantu mahasiswa mengembangkan berbagai keterampilan dan pengalaman."],
    ["Ada banyak strategi yang dapat digunakan untuk meningkatkan produktivitas mahasiswa, di antaranya: Meningkatkan keterampilan belajar: Mempelajari teknik manajemen waktu, strategi belajar yang tepat, dan memanfaatkan teknologi informasi dan komunikasi untuk mendukung pembelajaran. Membangun kebiasaan sehat: Menjaga pola makan dan olahraga teratur, tidur yang cukup, dan mengelola stres dengan baik. Meningkatkan motivasi dan disiplin diri: Menetapkan tujuan yang jelas, membuat jadwal dan komitmen belajar, serta mencari motivasi dari role model dan komunitas belajar yang positif. Meningkatkan keterlibatan dalam kegiatan akademik dan non-akademik: Mengikuti perkuliahan dengan aktif, berpartisipasi dalam organisasi kemahasiswaan, mengikuti seminar dan workshop, serta melakukan penelitian dan pengabdian masyarakat. Membangun jaringan dan koneksi: Membangun hubungan baik dengan dosen, teman, dan alumni, mengikuti kegiatan networking dan mentorship, serta memanfaatkan media sosial dan platform online untuk membangun personal branding"],
    ["Pemangku kepentingan seperti pemerintah, perguruan tinggi, masyarakat, dan keluarga memiliki peran penting dalam meningkatkan produktivitas mahasiswa. Pemerintah: Meningkatkan kualitas pendidikan, menyediakan infrastruktur yang memadai, memberikan beasiswa, dan menciptakan lapangan kerja yang layak.Perguruan Tinggi: Menyediakan kurikulum yang relevan, meningkatkan kualitas dosen, memfasilitasi kegiatan kemahasiswaan, dan memberikan layanan konseling dan bimbingan karir.Masyarakat dan Keluarga: Memberikan dukungan dan motivasi, menanamkan nilai-nilai disiplin, kerja keras, dan etos kerja yang baik, serta membangun lingkungan yang kondusif untuk belajar dan berkarya."],
    ["Tantangan yang dihadapi dalam meningkatkan produktivitas mahasiswa yaitu Kurangnya motivasi dan disiplin diri, Beban belajar yang berat, Keterbatasan akses informasi dan teknologi, Keterbatasan biaya pendidikan, Kurangnya lapangan kerja yang sesuai dengan kualifikasi. Solusi untuk mengatasi tantangan yaitu dengan cara Meningkatkan motivasi melalui program mentoring dan role model, Meningkatkan efektivitas belajar dengan teknik manajemen waktu dan strategi belajar yang tepat, Meningkatkan akses internet dan menyediakan fasilitas belajar yang memadai, Memperluas akses beasiswa dan program bantuan keuangan, Meningkatkan kerjasama antara perguruan tinggi dengan dunia industri dan mendorong wirausaha muda","Tantangan yang dihadapi dalam meningkatkan produktivitas mahasiswa yaitu Kurangnya motivasi dan disiplin diri, Beban belajar yang berat, Keterbatasan akses informasi dan teknologi, Keterbatasan biaya pendidikan, Kurangnya lapangan kerja yang sesuai dengan kualifikasi. Solusi untuk mengatasi tantangan yaitu dengan cara Meningkatkan motivasi melalui program mentoring dan role model, Meningkatkan efektivitas belajar dengan teknik manajemen waktu dan strategi belajar yang tepat, Meningkatkan akses internet dan menyediakan fasilitas belajar yang memadai, Memperluas akses beasiswa dan program bantuan keuangan, Meningkatkan kerjasama antara perguruan tinggi dengan dunia industri dan mendorong wirausaha muda"],
    ["Untuk meningkatkan kesadaran mahasiswa atau generasi muda tentang pentingnya SDGs No 8 (Pekerjaan Layak dan Pertumbuhan Ekonomi), berikut adalah beberapa langkah yang dapat dilakukan:Edukasi dan Informasi: Sediakan informasi yang jelas dan terstruktur tentang SDGs No 8, termasuk tujuan-tujuan utamanya seperti menciptakan pekerjaan layak, mendukung ekonomi yang inklusif, dan meningkatkan produktivitas. Kampanye Kampanye: Lakukan kampanye sadar SDGs di kampus atau komunitas mahasiswa untuk meningkatkan pemahaman tentang betapa pentingnya pencapaian SDGs No 8 bagi kesejahteraan sosial dan ekonomi. Kegiatan dan Workshop: Selenggarakan kegiatan seperti seminar, workshop, atau diskusi panel yang fokus pada topik pekerjaan layak dan pertumbuhan ekonomi. Undang pembicara yang ahli di bidang ini untuk memberikan wawasan dan inspirasi. Kolaborasi dengan Organisasi: Kerja sama dengan organisasi yang berfokus pada pengembangan ekonomi dan penciptaan lapangan kerja. Ini dapat membuka kesempatan bagi mahasiswa untuk terlibat langsung dalam inisiatif yang mendukung SDGs No 8. Kompetisi dan Proyek: Adakan kompetisi ide atau proyek yang mempromosikan solusi inovatif untuk menciptakan pekerjaan layak atau meningkatkan pertumbuhan ekonomi secara berkelanjutan. Integrasi dalam Kurikulum: Upayakan agar topik SDGs, termasuk No 8, diintegrasikan dalam kurikulum akademik. Ini dapat dilakukan melalui kursus, tugas, atau proyek yang menuntut mahasiswa untuk mempertimbangkan implikasi sosial dan ekonomi dari tindakan mereka. Sosialisasi melalui Media Sosial: Gunakan platform media sosial untuk membagikan informasi, studi kasus, dan cerita inspiratif tentang bagaimana pencapaian SDGs No 8 mempengaruhi masyarakat secara positif. Advokasi dan Tindakan Aktif: Dorong mahasiswa untuk menjadi advokat SDGs No 8 dengan mengambil tindakan nyata, seperti terlibat dalam organisasi sosial atau proyek sukarela yang mendukung penciptaan lapangan kerja dan pembangunan ekonomi yang berkelanjutan"],
    ["Produktivitas tenaga kerja di Indonesia saat ini masih tergolong rendah jika dibandingkan dengan negara-negara maju maupun beberapa negara berkembang lainnya. Beberapa faktor yang mempengaruhi tingkat produktivitas tenaga kerja antara lain infrastruktur yang terbatas, tingkat pendidikan yang bervariasi, teknologi yang belum merata, serta efisiensi dalam penggunaan sumber daya. Produktivitas tenaga kerja di Indonesia saat ini masih tergolong rendah jika dibandingkan dengan negara-negara maju maupun beberapa negara berkembang lainnya. Beberapa faktor yang mempengaruhi tingkat produktivitas tenaga kerja antara lain infrastruktur yang terbatas, tingkat pendidikan yang bervariasi, teknologi yang belum merata, serta efisiensi dalam penggunaan sumber daya. Secara umum, berikut adalah perbandingan tingkat produktivitas tenaga kerja Indonesia dengan beberapa negara lain: Negara Maju (misalnya Amerika Serikat, Jepang, dan negara-negara Eropa Barat): Produktivitas tenaga kerja di negara-negara maju ini umumnya jauh lebih tinggi dibandingkan dengan Indonesia. Hal ini disebabkan oleh adopsi teknologi yang lebih maju, infrastruktur yang lebih baik, dan keahlian tenaga kerja yang lebih tinggi. Negara-Negara Asia Tenggara (misalnya Singapura, Malaysia, Thailand): Produktivitas tenaga kerja di beberapa negara Asia Tenggara seperti Singapura dan Malaysia cenderung lebih tinggi daripada di Indonesia. Negara-negara ini telah berhasil menarik investasi asing, memperbaiki infrastruktur, dan meningkatkan kualitas pendidikan serta keterampilan tenaga kerja. Negara-Negara Berkembang Lainnya (misalnya Brasil, India, dan China): Meskipun ada variasi di antara negara-negara ini, beberapa dari mereka memiliki tingkat produktivitas tenaga kerja yang lebih tinggi dibandingkan dengan Indonesia, terutama karena ukuran ekonomi yang lebih besar, investasi dalam teknologi, dan fokus pada peningkatan infrastruktur. Untuk meningkatkan produktivitas tenaga kerja di Indonesia, perlu dilakukan berbagai upaya seperti investasi dalam pendidikan dan pelatihan untuk meningkatkan keterampilan tenaga kerja, peningkatan infrastruktur yang mendukung pertumbuhan ekonomi, penggunaan teknologi informasi dan komunikasi yang lebih luas, serta reformasi kebijakan untuk meningkatkan efisiensi dan daya saing industri. Dengan demikian, Indonesia dapat mengurangi kesenjangan produktivitasnya dengan negara-negara lain dan mendorong pertumbuhan ekonomi yang lebih berkelanjutan."],
    ["Pekerjaan layak dalam konteks SDGs No 8 mengacu pada pekerjaan yang aman, produktif, dan menghasilkan upah yang layak bagi pekerjanya. Konsep ini didefinisikan oleh Organisasi Buruh Internasional (ILO) dan menggambarkan kriteria-kriteria berikut 1. Upah yang layak: Pekerjaan layak harus memberikan penghasilan yang cukup bagi pekerja dan keluarganya untuk memenuhi kebutuhan dasar seperti makanan, perumahan, dan pendidikan. 2. Kondisi kerja yang aman dan sehat: Pekerjaan layak harus memastikan lingkungan kerja yang aman, bebas dari risiko yang dapat membahayakan kesehatan atau keselamatan pekerja. 3. Keamanan sosial: Pekerjaan layak juga mencakup jaminan sosial, perlindungan dari diskriminasi, dan keadilan dalam hubungan kerja. 4. Peluang untuk pengembangan pribadi: Pekerjaan layak seharusnya memberikan peluang bagi pekerja untuk berkembang secara pribadi dan profesional, termasuk akses terhadap pelatihan dan pendidikan. 5. Stabilitas pekerjaan: Pekerjaan layak sebaiknya memberikan stabilitas dalam hubungan kerja, misalnya melalui kontrak kerja yang jelas dan perlindungan hukum yang memadai. Tujuan SDGs No 8 adalah untuk mempromosikan pertumbuhan ekonomi yang inklusif dan berkelanjutan, serta menciptakan lapangan kerja yang layak bagi semua orang. Oleh karena itu, mencapai pekerjaan layak tidak hanya mencakup aspek ekonomi, tetapi juga sosial, lingkungan, dan hak asasi manusia dalam konteks dunia kerja. Secara keseluruhan, pekerjaan layak adalah inti dari upaya untuk mengurangi kemiskinan, meningkatkan kesejahteraan sosial, dan mewujudkan pembangunan ekonomi yang berkelanjutan sesuai dengan prinsip-prinsip SDGs"],
    ["Ada beberapa tantangan utama yang perlu dihadapi dalam mencapai SDGs No 8 (Pekerjaan Layak dan Pertumbuhan Ekonomi) di Indonesia: 1. Ketenagakerjaan yang tidak terstruktur: Banyaknya pekerja informal dan sektor informal yang besar menjadi tantangan utama. Pekerja informal sering kali tidak memiliki akses yang memadai terhadap perlindungan sosial, pendidikan dan pelatihan, serta sering kali tidak menerima upah yang layak. 2. Kualitas pendidikan dan keterampilan tenaga kerja: Meskipun jumlah lulusan pendidikan meningkat, kualitas pendidikan dan relevansi keterampilan dengan kebutuhan pasar kerja masih menjadi masalah. Ini dapat menghambat integrasi pemuda ke dalam pasar kerja yang produktif. 3. Ketimpangan regional: Indonesia memiliki ketimpangan ekonomi dan pembangunan antarwilayah yang signifikan. Beberapa daerah, terutama di luar pulau Jawa, menghadapi tantangan infrastruktur dan akses pasar yang dapat membatasi pertumbuhan ekonomi dan penciptaan lapangan kerja. 4. Ketergantungan pada sektor primer: Sektor pertanian dan sumber daya alam masih menjadi tulang punggung ekonomi di banyak wilayah di Indonesia. Tantangan terkait dalam meningkatkan produktivitas dan nilai tambah dari sektor-sektor ini mempengaruhi pertumbuhan ekonomi secara keseluruhan. 5. Perlindungan tenaga kerja dan hak buruh: Meskipun ada regulasi yang melindungi tenaga kerja, implementasi dan penegakan hukum masih menjadi masalah. Kondisi kerja yang tidak aman, upah yang tidak layak, serta diskriminasi masih menjadi masalah serius di beberapa sektor industri. 6. Pengelolaan pertumbuhan ekonomi yang inklusif: Tantangan untuk memastikan bahwa pertumbuhan ekonomi tidak hanya berdampak pada kelompok yang sudah mapan atau sektor tertentu, tetapi juga pada kelompok masyarakat yang rentan seperti perempuan, anak-anak, dan orang-orang dengan disabilitas. 7. Perubahan iklim dan keberlanjutan lingkungan: Meningkatkan pertumbuhan ekonomi yang berkelanjutan dan menciptakan pekerjaan layak juga harus sejalan dengan perlindungan lingkungan dan mitigasi perubahan iklim, yang merupakan tantangan tambahan. Untuk mengatasi tantangan-tantangan ini, diperlukan upaya yang komprehensif dan terkoordinasi antara pemerintah, sektor swasta, masyarakat sipil, dan organisasi internasional untuk memperkuat infrastruktur, meningkatkan akses terhadap pendidikan dan pelatihan, serta memperbaiki kondisi kerja dan perlindungan sosial bagi semua pekerja di Indonesia."],
    ["Mahasiswa memiliki peran penting dalam mencapai SDGs No 8 (Pekerjaan Layak dan Pertumbuhan Ekonomi). Berikut ini peran mahasiswa dan beberapa program serta inisiatif terkait di Indonesia: Peran Mahasiswa dalam SDGs No 8 yaitu 1). Mengembangkan Kemampuan dan Keterampilan : - Memperkuat kemampuan akademik dan profesional.  - Meningkatkan keterampilan interpersonal, komunikasi, dan kepemimpinan.  - Berpartisipasi dalam magang, penelitian, dan entrepreneurship. 2). Mendorong Kewirausahaan dan Inovasi:  - Mengembangkan ide-ide kreatif untuk menciptakan lapangan kerja  - Membangun startup ramah lingkungan.  - Berpartisipasi dalam program inkubasi bisnis dan kompetisi kewirausahaan. 3). Meningkatkan Kesadaran dan Advokasi:  - Memahami isu-isu seperti pengangguran dan kemiskinan. - Menyebarkan informasi tentang SDGs No 8. - Berpartisipasi dalam kampanye advokasi kebijakan pro-SDGs No 8. 4). Melakukan Penelitian dan Pengabdian: - Mengidentifikasi tantangan dan solusi terkait SDGs No 8. - Mengembangkan program pengabdian masyarakat. - Berkolaborasi dengan pemerintah dan LSM untuk kebijakan efektif. 5). Menjadi Teladan dan Influencer: - Menunjukkan perilaku mendukung SDGs No 8. - Menjadi influencer dalam mengadopsi etos kerja dan kewirausahaan. - Berbagi pengalaman SDGs No 8 melalui media sosial. Program dan Inisiatif Terkait SDGs No 8 di Indonesia: - Program Keluarga Harapan (PKH): Bantuan sosial untuk akses pendidikan dan kesehatan. - Kartu Prakerja: Pelatihan keterampilan untuk daya saing tenaga kerja.- Gerakan Nasional Kewirausahaan (Gernas): Dukung UMKM. - Dana Desa: Infrastruktur dan kesejahteraan masyarakat.- Program Tenaga Kerja Mandiri (TKM) dan Program Padat Karya Infrastruktur (PKI): Ciptakan lapangan kerja.- Kerja Sama dengan Swasta dan Lembaga Internasional: Investasi dan dukungan finansial. Organisasi seperti Yayasan Lembaga Indonesia, Dompet Dhuafa, Yayasan Kemitraan Indonesia, Hivos Indonesia, dan ActionAid Indonesia juga aktif dalam mendukung SDGs No 8 melalui inisiatif ekonomi dan sosial. Dengan peran aktif mahasiswa dan dukungan berbagai program ini, diharapkan Indonesia dapat mencapai SDGs No 8 dengan lebih efektif dan inklusif."],
    ["Senang bisa membantu, apa kah ada pertanyaan lain?", "Saya senang dengan respon ada, apa kah ada pertanyaan lain?", "Saya senang dengan respon ada, apa kah ada pertanyaan lain?", "Mauliate muse, Adong na asing?","Bujur terimakasih Ue iaLang enggak", "Bujur terimakasih Ue iaLang enggak","sama sama mas, ada pertanyaan lain?","sama sama mas, ada pertanyaan lain?"],
    ["Baiklah","ok"],
    ["Bekerja layak dan pertumbuhan ekonomi, Semua warga ikut berkontribusi. SDG kedelapan tak bisa sendiri, Mari bersatu wujudkan mimpi ini."],
    ["terima kasih juga sudah mengunjungi kami, jangan lupa follow sosmed developer kami yah link klik di About", "bye, jangan lupa follow sosmed developer kami yah link klik di About", "Horas pra!, Jalo Asi Ale sebelum pisah follow kan dulu sosmed ini yah link klik di About", "mejuah juah, follow kan dulu sosmed ini yah link klik di About"]
];


msgerForm.addEventListener("submit", event => {
    event.preventDefault();
    const msgText = msgerInput.value.trim();
    if (!msgText) return;
    msgerInput.value = "";
    addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
    output(msgText);
});

function output(input) {
    let text = input.toLowerCase().trim();

    // Mencari respons dari prompt dan reply
    let product = compare(Prompts, replies, text);

    // Jika tidak ada respons dari prompt, cek respons tambahan
    if (!product) {
        if (text.match(/thank/gi)) {
            product = "you're welcome";
        } else if (text.match(/(robot|bot|robo)/gi)) {
            product = robot[Math.floor(Math.random() * robot.length)];
        }
    }

    // Menambahkan pesan dari bot ke tampilan chat
    const delay = input.split(" ").length * 100;
    setTimeout(() => {
        addChat(BOT_NAME, BOT_IMG, "left", product);
    }, delay);
}


function compare(PromptsArray, repliesArray, string) {
    let reply = "";
    let replyFound = false;
    for (let x = 0; x < PromptsArray.length; x++) {
        for (let y = 0; y < PromptsArray[x].length; y++) {
            if (PromptsArray[x][y].toLowerCase() === string) {
                let replies = repliesArray[x];
                reply = replies[Math.floor(Math.random() * replies.length)];
                replyFound = true;
                break;
            }
        }
        if (replyFound) {
            break;
        }
    }
    return reply;
}


function addChat(name, img, side, text) {
    const msgHTML = `
    <div class="msg ${side}-msg">
        <div class="msg-img" style="background-image: url('${img}')"></div>
        <div class="msg-bubble">
            <div class="msg-info">
                <div class="msg-info-name">${name}</div>
                <div class="msg-info-time">${formatDate(new Date())}</div>
            </div>
            <div class="msg-text">${text}</div>
        </div>
    </div>`;

    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += msgerChat.scrollHeight;
}


function get(selector, root = document) {
    return root.querySelector(selector);
}

function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
    return `${h.slice(-2)}:${m.slice(-2)}`;
}

