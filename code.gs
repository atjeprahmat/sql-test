// =========================================================================
// CONFIGURASI UTAMA (UBAH SESUAI KREDENSIAL ANDA)
// =========================================================================
const GEMINI_API_KEY = "AQ.Ab8RN6JhyvscSRg2F-IplmJjF9cENr2xYQWs_pjGmXNu0Y5_WQ";
const SPREADSHEET_ID = "1oNElVPAgXM7JGxJqQnWnjkTuyUJJ8DNh1LUOe_diyrc";

// =========================================================================
// URL GAMBAR SKEMA DATABASE (ERD) DARI GOOGLE DRIVE
// =========================================================================
const URL_GAMBAR_MINIMART = "https://drive.google.com/uc?export=view&id=1AimPD54ZoqUFYtTEY_MN-Wokd3R6zAZx";
const URL_GAMBAR_EMPLOYEES = "https://drive.google.com/uc?export=view&id=1OG5RGySo5uHWo1CSEr-bnEgDWmRzUCs4";

// =========================================================================
// REPOSITORI DATASET SOAL (3 MUDAH, 2 SEDANG)
// =========================================================================
const DAFTAR_PAKET_SOAL = {
  "PHI_Minimart": [
    { "tipe": "Mudah", "gambar": URL_GAMBAR_MINIMART, "tanya": "Tampilkan kolom kode_produk and nama_produk dari tabel ms_produk yang memiliki kode_kategori = 'KTG01'." },
    { "tipe": "Mudah", "gambar": URL_GAMBAR_MINIMART, "tanya": "Hitunglah total seluruh jumlah pembelian (gunakan fungsi SUM pada kolom jumlah_pembelian) yang tercatat di dalam tabel tr_penjualan." },
    { "tipe": "Mudah", "gambar": URL_GAMBAR_MINIMART, "tanya": "Tuliskan perintah SQL (DML) untuk menambahkan satu baris data kategori baru ke tabel ms_kategori dengan kode_kategori = 'KTG99' and nama_kategori = 'Elektronik'." },
    { "tipe": "Mudah", "gambar": URL_GAMBAR_MINIMART, "tanya": "Tampilkan semua kolom dari tabel ms_produk yang memiliki harga lebih dari 50000." },
    { "tipe": "Mudah", "gambar": URL_GAMBAR_MINIMART, "tanya": "Tampilkan kode_cabang and nama_cabang dari tabel ms_cabang yang berlokasi di kota Jakarta." },
    { "tipe": "Mudah", "gambar": URL_GAMBAR_MINIMART, "tanya": "Hitung jumlah seluruh baris data transaksi pada tabel tr_penjualan menggunakan fungsi COUNT." },
    { "tipe": "Mudah", "gambar": URL_GAMBAR_MINIMART, "tanya": "Tampilkan nilai pembelian terbesar dari kolom jumlah_pembelian pada tabel tr_penjualan menggunakan fungsi MAX." },
    { "tipe": "Mudah", "gambar": URL_GAMBAR_MINIMART, "tanya": "Tuliskan perintah SQL untuk mengubah nama_kategori menjadi 'Peralatan Rumah Tangga' pada tabel ms_kategori dengan kode_kategori = 'KTG02'." },
    { "tipe": "Sedang", "gambar": URL_GAMBAR_MINIMART, "tanya": "Tampilkan nama_produk beserta nama_kategori-nya dengan menggabungkan tabel ms_produk and ms_kategori menggunakan klausa INNER JOIN yang tepat." },
    { "tipe": "Sedang", "gambar": URL_GAMBAR_MINIMART, "tanya": "Tampilkan cabang beserta nama kotanya menggunakan fungsi inner join" },
    { "tipe": "Sedang", "gambar": URL_GAMBAR_MINIMART, "tanya": "Tampilkan produk beserta nama kategorinya menggunakan fungsi inner join" },
    { "tipe": "Sedang", "gambar": URL_GAMBAR_MINIMART, "tanya": "Tampilkan transaksi beserta nama produk menggunakan fungsi inner join." },
    { "tipe": "Sedang", "gambar": URL_GAMBAR_MINIMART, "tanya": "Hapus kategori yang kodenya KTG9999" },
    { "tipe": "Sedang", "gambar": URL_GAMBAR_MINIMART, "tanya": "Tambahkan data produk baru" }
  ],
  
  "Employees_Corporate": [
    { "tipe": "Mudah", "gambar": URL_GAMBAR_EMPLOYEES, "tanya": "Tampilkan semua kolom data karyawan dari tabel employees yang memiliki jenis kelamin laki-laki (gender = 'M')." },
    { "tipe": "Mudah", "gambar": URL_GAMBAR_EMPLOYEES, "tanya": "Tampilkan nilai nominal gaji tertinggi (gunakan fungsi MAX pada kolom salary) yang pernah tercatat di dalam tabel salaries." },
    { "tipe": "Mudah", "gambar": URL_GAMBAR_EMPLOYEES, "tanya": "Tuliskan perintah SQL untuk mengubah (UPDATE) nama depan (first_name) menjadi 'Budi' khusus untuk karyawan yang memiliki nomor pegawai emp_no = 10005." },
    { "tipe": "Mudah", "gambar": URL_GAMBAR_EMPLOYEES, "tanya": "Tampilkan emp_no, first_name, and last_name dari tabel employees yang lahir setelah tanggal 1965-01-01." },
    { "tipe": "Mudah", "gambar": URL_GAMBAR_EMPLOYEES, "tanya": "Hitung jumlah seluruh karyawan pada tabel employees menggunakan fungsi COUNT." },
    { "tipe": "Mudah", "gambar": URL_GAMBAR_EMPLOYEES, "tanya": "Tampilkan rata-rata gaji dari tabel salaries menggunakan fungsi AVG pada kolom salary." },
    { "tipe": "Mudah", "gambar": URL_GAMBAR_EMPLOYEES, "tanya": "Tuliskan perintah SQL untuk menambahkan satu data departemen baru ke tabel departments dengan dept_no = 'd999' and dept_name = 'Innovation'." },
    { "tipe": "Mudah", "gambar": URL_GAMBAR_EMPLOYEES, "tanya": "Tampilkan semua kolom dari tabel titles yang memiliki title = 'Senior Engineer'." },
    { "tipe": "Sedang", "gambar": URL_GAMBAR_EMPLOYEES, "tanya": "Tampilkan emp_no, first_name dan last_name dan salary menggunakan inner join" },
    { "tipe": "Sedang", "gambar": URL_GAMBAR_EMPLOYEES, "tanya": "Tampilkan nama depan (first_name), nama belakang (last_name), and jabatan (title) karyawan dengan menggabungkan tabel employees and titles berdasarkan kecocokan kolom emp_no." },
    { "tipe": "Sedang", "gambar": URL_GAMBAR_EMPLOYEES, "tanya": "Update first_nama dan last_name dari employees yang emp_no=1 " },
    { "tipe": "Sedang", "gambar": URL_GAMBAR_EMPLOYEES, "tanya": "Tampilkan first_name, last_name, and salary karyawan dengan menggabungkan employees dan salaries berdasarkan emp_no." },
    { "tipe": "Sedang", "gambar": URL_GAMBAR_EMPLOYEES, "tanya": "Hapus karyawan yang namanya 'Budi'" },
    { "tipe": "Sedang", "gambar": URL_GAMBAR_EMPLOYEES, "tanya": "Tambahkan data karyawan baru" }
  ]
};

// =========================================================================
// ENDPOINT API WEB APP (doGet, doPost, & doOptions)
// =========================================================================

function buatResponseJson(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return buatResponseJson({ status: "success", message: "SQL Testing Engine API is Active" });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return buatResponseJson({ status: "error", message: "Payload data tidak ditemukan" });
    }
    
    const dataSiswa = JSON.parse(e.postData.contents);
    
    if (dataSiswa.action === "getQuestions") {
      const paket = ambilPaketSoal();
      return buatResponseJson({ status: "success", data: paket });
    } 
    
    if (dataSiswa.action === "submitAnswers") {
      const hasilEvaluasi = analisisSemuaJawabanBatch(dataSiswa);
      return buatResponseJson({ status: "success", data: hasilEvaluasi });
    }
    
    return buatResponseJson({ status: "error", message: "Aksi tidak dikenali" });
                         
  } catch (err) {
    return buatResponseJson({ status: "error", message: err.toString() });
  }
}

function doOptions(e) {
  return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.TEXT);
}

function ambilPaketSoal() {
  const kunciTema = Math.random() > 0.5 ? "PHI_Minimart" : "Employees_Corporate";
  const bankSoalTema = DAFTAR_PAKET_SOAL[kunciTema];
  const soalMudah = acakArray(bankSoalTema.filter(soal => soal.tipe === "Mudah")).slice(0, 3);
  const soalSedang = acakArray(bankSoalTema.filter(soal => soal.tipe === "Sedang")).slice(0, 2);
  const paketSoal = acakArray(soalMudah.concat(soalSedang));

  return { tema: kunciTema, soal: paketSoal };
}

function acakArray(arrayInput) {
  const hasil = arrayInput.slice();
  for (let i = hasil.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const sementara = hasil[i];
    hasil[i] = hasil[j];
    hasil[j] = sementara;
  }
  return hasil;
}

// =========================================================================
// LOGIKA UTAMA SISTEM UJIAN (BATCH ENGINE)
// =========================================================================

function analisisSemuaJawabanBatch(dataSiswa) {
  const tema = dataSiswa.tema;
  const daftarJawaban = dataSiswa.jawaban || [];
  const nis = dataSiswa.nis || "";
  const nama = dataSiswa.nama || "";
  const metadataUjian = {
    modeBackend: dataSiswa.modeBackend || "",
    waktuMulai: dataSiswa.waktuMulai || "",
    waktuSelesai: dataSiswa.waktuSelesai || "",
    durasiDetik: dataSiswa.durasiDetik || "",
    pelanggaranFullscreen: dataSiswa.pelanggaranFullscreen || 0,
    logKeamanan: Array.isArray(dataSiswa.logKeamanan) ? dataSiswa.logKeamanan : [],
    userAgent: dataSiswa.userAgent || ""
  };
  const soalPaket = Array.isArray(dataSiswa.soal) && dataSiswa.soal.length
    ? dataSiswa.soal
    : DAFTAR_PAKET_SOAL[tema];

  if (!soalPaket) {
    throw new Error("Tema soal tidak dikenali: " + tema);
  }
  
  let arrayBundlingAI = [];
  for (let i = 0; i < soalPaket.length; i++) {
    arrayBundlingAI.push({
      nomorSoal: i + 1,
      tipe: soalPaket[i].tipe,
      pertanyaan: soalPaket[i].tanya,
      jawabanSiswa: (daftarJawaban && typeof daftarJawaban[i] !== 'undefined') ? daftarJawaban[i].trim() : "",
      rubrikWajib: bangunRubrikSoal(soalPaket[i].tanya)
    });
  }

  const hasilAIBatch = panggilGeminiAIBatch(arrayBundlingAI);
  const hasilReviewBatch = hasilAIBatch.hasil;
  metadataUjian.statusGemini = hasilAIBatch.status;
  metadataUjian.pesanGemini = hasilAIBatch.pesan;
  
  let totalSkor = 0;
  let rincianEvaluasi = [];

  for (let i = 0; i < soalPaket.length; i++) {
    const reviewSoal = hasilReviewBatch.find(item => item.nomorSoal === (i + 1)) || { skor: 0, catatan: "Gagal memproses penilaian nomor ini." };
    const hasilValidasiKetat = validasiSkorKetat(arrayBundlingAI[i], Number(reviewSoal.skor) || 0, reviewSoal.catatan);
    const skorSoal = hasilValidasiKetat.skor;
    
    totalSkor += skorSoal;
    rincianEvaluasi.push({
      "nomorSoal": i + 1,
      "tipe": soalPaket[i].tipe,
      "pertanyaan": soalPaket[i].tanya,
      "jawabanSiswa": arrayBundlingAI[i].jawabanSiswa,
      "skor": skorSoal,
      "catatan": hasilValidasiKetat.catatan
    });
  }
  
  const skorAkhir = Math.round((totalSkor / soalPaket.length));
  simpanKeSpreadsheet(nis, nama, tema, skorAkhir, rincianEvaluasi, metadataUjian);
  
  return {
    nis: nis,
    nama: nama,
    tema: tema,
    skorAkhir: skorAkhir,
    detail: rincianEvaluasi,
    statusSpreadsheet: "tersimpan"
  };
}

// =========================================================================
// INTEGRASI SINGLE-BATCH API GEMINI AI (PERBAIKAN ENGINE PARSING & SCRUBBING)
// =========================================================================

function panggilGeminiAIBatch(dataPaketUjian) {
  // Sediakan template balasan kosong jika terjadi kegagalan sistem total
  const fallbackError = buatEvaluasiLokal(dataPaketUjian, "Gemini gagal dihubungi atau responsnya tidak valid.");

  if (!GEMINI_API_KEY || GEMINI_API_KEY.includes("MASUKKAN_API_KEY")) {
    return {
      hasil: buatEvaluasiLokal(dataPaketUjian, "API Key Gemini belum dikonfigurasi di Code.gs server."),
      status: "fallback_lokal",
      pesan: "API Key Gemini belum dikonfigurasi."
    };
  }

  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + GEMINI_API_KEY;
  
  const promptSystem = `Anda adalah dosen dan mesin koreksi query database SQL otomatis yang sangat objektif dan teliti.
Tugas Anda adalah mengevaluasi satu paket array data jawaban ujian SQL siswa berikut:
${JSON.stringify(dataPaketUjian, null, 2)}

Aturan Penilaian per nomor soal:
1. Jika parameter jawabanSiswa kosong (""), wajib berikan skor: 0 dan catatan: "Siswa tidak mengisi jawaban".
2. Jika jawaban salah total, salah logika dasar, atau bukan sintaks SQL, beri rentang skor 0-39.
3. Jika logika SELECT sudah mengarah ke arah yang benar namun salah dalam penulisan nama tabel/kolom atau relasi klausa JOIN, beri rentang skor 40-69.
4. Jika query benar secara logika tapi terdapat typo minor (saltik) huruf atau penggunaan spasi, beri skor 70-90.
5. Jika query SQL benar, efisien, dan akurat sesuai instruksi pertanyaan, beri skor sempurna 100.
6. Wajib cocokkan jawaban dengan rubrikWajib pada setiap soal. rubrikWajib berisi operasi, tabel, kolom, fungsi agregasi, nilai kondisi, dan klausa yang harus muncul.
7. Jika tabel utama yang diminta tidak ada atau diganti tabel lain, skor maksimal 25 walaupun sintaks SQL benar.
8. Jika operasi utama salah (misalnya diminta UPDATE tetapi jawaban SELECT, atau diminta INSERT tetapi jawaban UPDATE), skor maksimal 25.
9. Jika soal meminta JOIN tetapi jawaban tidak memakai JOIN dan ON, skor maksimal 45.
10. Jika soal meminta GROUP BY tetapi jawaban tidak memakai GROUP BY, skor maksimal 55.
11. Jika fungsi agregasi wajib seperti SUM, MAX, AVG, atau COUNT tidak dipakai, skor maksimal 50.
12. Jika kondisi penting seperti kode, gender, tanggal, angka batas, atau nilai teks yang diminta tidak ada, skor maksimal 60.
13. Jangan memberi skor tinggi hanya karena jawaban mengandung SELECT dan FROM. Jawaban harus menjawab target soal secara spesifik.

Anda WAJIB memberikan analisis ulasan dalam Bahasa Indonesia dan mengembalikan output berupa array objek JSON murni (tanpa format pembungkus markdown backtick \`\`\`json) dengan struktur persis seperti contoh ini:
[
  { "nomorSoal": 1, "skor": 100, "catatan": "Ulasan analisis nomor 1" },
  { "nomorSoal": 2, "skor": 0, "catatan": "Ulasan analisis nomor 2" }
]`;

  const payload = {
    "contents": [{ "parts": [{ "text": promptSystem }] }],
    "generationConfig": { "responseMimeType": "application/json" }
  };
  
  const options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };
  
  try {
    const response = UrlFetchApp.fetch(url, options);
    const resText = response.getContentText();
    const resJson = JSON.parse(resText);
    
    // Validasi struktur JSON response dari Google API Studio sebelum diolah
    if (resJson && resJson.candidates && resJson.candidates[0] && resJson.candidates[0].content && resJson.candidates[0].content.parts && resJson.candidates[0].content.parts[0]) {
      
      let aiResponseText = resJson.candidates[0].content.parts[0].text;
      
      // Keamanan Tingkat Tinggi: Pastikan aiResponseText berupa string valid sebelum menjalankan fungsi string manipulation
      if (aiResponseText && typeof aiResponseText === 'string') {
        aiResponseText = aiResponseText.trim();
        
        // Pembersihan tanda backtick markdown jika Gemini membangkang aturan responseMimeType
        if (aiResponseText.indexOf("```") === 0) {
          aiResponseText = aiResponseText.replace(/^```json|```$/g, "").trim();
        }
        
        return {
          hasil: JSON.parse(aiResponseText),
          status: "gemini_ok",
          pesan: "Penilaian berhasil menggunakan Gemini."
        };
      }
    }
    return {
      hasil: fallbackError,
      status: "fallback_lokal",
      pesan: "Struktur respons Gemini tidak sesuai."
    };
  } catch (e) {
    // Jika gagal parsing, catat log error di Google Apps Script console untuk mempermudah audit dev
    Logger.log("Error Parsing Gemini Response: " + e.toString());
    return {
      hasil: fallbackError,
      status: "fallback_lokal",
      pesan: e.toString()
    };
  }
}

function buatEvaluasiLokal(dataPaketUjian, alasanFallback) {
  return dataPaketUjian.map(item => {
    const jawaban = normalisasiTeksSql(item.jawabanSiswa);
    const rubrik = item.rubrikWajib || bangunRubrikSoal(item.pertanyaan);
    let skor = 0;

    if (jawaban) {
      const operasiBenar = rubrik.operasi.length === 0 || rubrik.operasi.some(op => mengandungTokenSql(jawaban, op));
      const tabelCocok = hitungCocok(jawaban, rubrik.tabel);
      const kolomCocok = hitungCocok(jawaban, rubrik.kolom);
      const fungsiCocok = hitungCocok(jawaban, rubrik.fungsi);
      const klausaCocok = hitungCocok(jawaban, rubrik.klausa);
      const nilaiCocok = hitungCocok(jawaban, rubrik.nilaiKondisi);

      if (operasiBenar) skor += 20;
      if (rubrik.tabel.length) skor += Math.round((tabelCocok / rubrik.tabel.length) * 25);
      else skor += 25;
      if (rubrik.kolom.length) skor += Math.round((kolomCocok / rubrik.kolom.length) * 20);
      else skor += 20;
      if (rubrik.fungsi.length) skor += Math.round((fungsiCocok / rubrik.fungsi.length) * 15);
      else skor += 15;
      if (rubrik.klausa.length) skor += Math.round((klausaCocok / rubrik.klausa.length) * 10);
      else skor += 10;
      if (rubrik.nilaiKondisi.length) skor += Math.round((nilaiCocok / rubrik.nilaiKondisi.length) * 10);
      else skor += 10;

      skor = Math.max(0, Math.min(100, skor));
    }

    return {
      nomorSoal: item.nomorSoal,
      skor: skor,
      catatan: alasanFallback + " Skor sementara dihitung dari kecocokan operasi, tabel, kolom, fungsi, klausa, dan kondisi soal."
    };
  });
}

function normalisasiTeksSql(teks) {
  return String(teks || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function bangunRubrikSoal(pertanyaanAsli) {
  const pertanyaan = normalisasiTeksSql(pertanyaanAsli);
  const daftarTabel = [
    "ms_produk", "tr_penjualan", "ms_kategori", "ms_cabang",
    "employees", "salaries", "departments", "dept_emp", "titles"
  ];
  const daftarKolom = [
    "kode_produk", "nama_produk", "kode_kategori", "nama_kategori", "jumlah_pembelian",
    "kode_cabang", "nama_cabang", "harga", "gender", "salary", "emp_no", "first_name",
    "last_name", "birth_date", "dept_no", "dept_name", "title"
  ];

  const operasi = [];
  if (pertanyaan.indexOf("menambahkan") !== -1 || pertanyaan.indexOf("insert") !== -1) operasi.push("insert");
  else if (pertanyaan.indexOf("mengubah") !== -1 || pertanyaan.indexOf("update") !== -1) operasi.push("update");
  else operasi.push("select");

  const fungsi = [];
  if (pertanyaan.indexOf("sum") !== -1 || pertanyaan.indexOf("total seluruh jumlah pembelian") !== -1) fungsi.push("sum");
  if (pertanyaan.indexOf("max") !== -1 || pertanyaan.indexOf("tertinggi") !== -1 || pertanyaan.indexOf("terbesar") !== -1) fungsi.push("max");
  if (pertanyaan.indexOf("avg") !== -1 || pertanyaan.indexOf("rata-rata") !== -1) fungsi.push("avg");
  if (pertanyaan.indexOf("count") !== -1 || pertanyaan.indexOf("jumlah seluruh") !== -1 || pertanyaan.indexOf("jumlah karyawan") !== -1 || pertanyaan.indexOf("jumlah baris") !== -1) fungsi.push("count");

  const klausa = [];
  if (pertanyaan.indexOf("join") !== -1 || pertanyaan.indexOf("menggabungkan") !== -1 || pertanyaan.indexOf("hubungkan") !== -1) klausa.push("join", "on");
  if (pertanyaan.indexOf("kelompokkan") !== -1 || pertanyaan.indexOf("group by") !== -1) klausa.push("group", "by");
  if (pertanyaan.indexOf("having") !== -1) klausa.push("having");
  if (pertanyaan.indexOf("urutkan") !== -1) klausa.push("order", "by");
  if (pertanyaan.indexOf("memiliki") !== -1 || pertanyaan.indexOf("khusus") !== -1 || pertanyaan.indexOf("lebih dari") !== -1 || pertanyaan.indexOf("setelah") !== -1 || pertanyaan.indexOf("berlokasi") !== -1) klausa.push("where");
  if (operasi[0] === "insert") klausa.push("into", "values");
  if (operasi[0] === "update") klausa.push("set", "where");

  return {
    operasi: operasi,
    tabel: daftarTabel.filter(item => pertanyaan.indexOf(item) !== -1),
    kolom: daftarKolom.filter(item => pertanyaan.indexOf(item) !== -1),
    fungsi: fungsi.filter((item, index, array) => array.indexOf(item) === index),
    klausa: klausa.filter((item, index, array) => array.indexOf(item) === index),
    nilaiKondisi: ambilNilaiKondisiDariPertanyaan(pertanyaanAsli)
  };
}

function ambilNilaiKondisiDariPertanyaan(teks) {
  const hasil = [];
  const sumber = String(teks || "");
  const regexKutip = /'([^']+)'/g;
  let match;

  while ((match = regexKutip.exec(sumber)) !== null) {
    hasil.push(normalisasiTeksSql(match[1]));
  }

  const regexAngkaTanggal = /\b\d{4}-\d{2}-\d{2}\b|\b\d+\b/g;
  while ((match = regexAngkaTanggal.exec(sumber)) !== null) {
    hasil.push(normalisasiTeksSql(match[0]));
  }

  ["jakarta", "laki-laki"].forEach(kata => {
    if (normalisasiTeksSql(sumber).indexOf(kata) !== -1) hasil.push(kata);
  });

  return hasil.filter((item, index, array) => item && array.indexOf(item) === index);
}

function validasiSkorKetat(item, skorAwal, catatanAwal) {
  const jawaban = normalisasiTeksSql(item.jawabanSiswa);
  const rubrik = item.rubrikWajib || bangunRubrikSoal(item.pertanyaan);
  let skor = Math.max(0, Math.min(100, Number(skorAwal) || 0));
  const alasan = [];

  if (!jawaban) {
    return { skor: 0, catatan: "Siswa tidak mengisi jawaban." };
  }

  if (!rubrik.operasi.some(op => mengandungTokenSql(jawaban, op))) {
    skor = Math.min(skor, 25);
    alasan.push("operasi utama tidak sesuai");
  }

  if (rubrik.tabel.length) {
    const tabelCocok = hitungCocok(jawaban, rubrik.tabel);
    if (tabelCocok === 0) {
      skor = Math.min(skor, 25);
      alasan.push("tabel utama tidak sesuai");
    } else if (tabelCocok < rubrik.tabel.length) {
      skor = Math.min(skor, 70);
      alasan.push("sebagian tabel wajib belum digunakan");
    }
  }

  if (rubrik.kolom.length) {
    const kolomCocok = hitungCocok(jawaban, rubrik.kolom);
    if (kolomCocok === 0) {
      skor = Math.min(skor, 35);
      alasan.push("kolom target tidak sesuai");
    } else if (kolomCocok < rubrik.kolom.length) {
      skor = Math.min(skor, 75);
      alasan.push("sebagian kolom target belum digunakan");
    }
  }

  if (rubrik.fungsi.length && hitungCocok(jawaban, rubrik.fungsi) < rubrik.fungsi.length) {
    skor = Math.min(skor, 50);
    alasan.push("fungsi agregasi wajib tidak lengkap");
  }

  if ((rubrik.klausa.indexOf("join") !== -1 || rubrik.klausa.indexOf("on") !== -1) && (!mengandungTokenSql(jawaban, "join") || !mengandungTokenSql(jawaban, "on"))) {
    skor = Math.min(skor, 45);
    alasan.push("JOIN atau ON tidak lengkap");
  }

  if ((rubrik.klausa.indexOf("group") !== -1 || rubrik.klausa.indexOf("by") !== -1) && (!mengandungTokenSql(jawaban, "group") || !mengandungTokenSql(jawaban, "by"))) {
    skor = Math.min(skor, 55);
    alasan.push("GROUP BY tidak lengkap");
  }

  if (rubrik.klausa.indexOf("having") !== -1 && !mengandungTokenSql(jawaban, "having")) {
    skor = Math.min(skor, 60);
    alasan.push("HAVING tidak digunakan");
  }

  if (rubrik.klausa.indexOf("order") !== -1 && (!mengandungTokenSql(jawaban, "order") || !mengandungTokenSql(jawaban, "by"))) {
    skor = Math.min(skor, 70);
    alasan.push("ORDER BY tidak lengkap");
  }

  if (rubrik.nilaiKondisi.length && hitungCocok(jawaban, rubrik.nilaiKondisi) < rubrik.nilaiKondisi.length) {
    skor = Math.min(skor, 60);
    alasan.push("nilai kondisi yang diminta belum sesuai");
  }

  const catatan = alasan.length
    ? String(catatanAwal || "") + " Koreksi sistem: skor dibatasi karena " + alasan.join(", ") + "."
    : String(catatanAwal || "");

  return { skor: Math.round(skor), catatan: catatan };
}

function hitungCocok(jawaban, daftar) {
  return daftar.filter(item => mengandungTokenSql(jawaban, item)).length;
}

function mengandungTokenSql(teks, token) {
  const bersih = normalisasiTeksSql(token).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp("(^|[^a-z0-9_])" + bersih + "([^a-z0-9_]|$)", "i").test(teks);
}

function tentukanKataKunciSql(pertanyaan) {
  let kataKunci = ["select", "from"];

  if (pertanyaan.indexOf("insert") !== -1 || pertanyaan.indexOf("menambahkan") !== -1) {
    kataKunci = ["insert", "into", "values"];
  } else if (pertanyaan.indexOf("update") !== -1 || pertanyaan.indexOf("mengubah") !== -1) {
    kataKunci = ["update", "set", "where"];
  }

  if (pertanyaan.indexOf("where") !== -1 || pertanyaan.indexOf("memiliki") !== -1 || pertanyaan.indexOf("khusus") !== -1) kataKunci.push("where");
  if (pertanyaan.indexOf("sum") !== -1 || pertanyaan.indexOf("total") !== -1) kataKunci.push("sum");
  if (pertanyaan.indexOf("max") !== -1 || pertanyaan.indexOf("tertinggi") !== -1 || pertanyaan.indexOf("terbesar") !== -1) kataKunci.push("max");
  if (pertanyaan.indexOf("avg") !== -1 || pertanyaan.indexOf("rata-rata") !== -1) kataKunci.push("avg");
  if (pertanyaan.indexOf("count") !== -1 || pertanyaan.indexOf("jumlah") !== -1) kataKunci.push("count");
  if (pertanyaan.indexOf("join") !== -1 || pertanyaan.indexOf("menggabungkan") !== -1) kataKunci.push("join", "on");
  if (pertanyaan.indexOf("group") !== -1 || pertanyaan.indexOf("kelompokkan") !== -1) kataKunci.push("group", "by");
  if (pertanyaan.indexOf("having") !== -1) kataKunci.push("having");
  if (pertanyaan.indexOf("urutkan") !== -1) kataKunci.push("order", "by");

  return kataKunci.filter((kata, index, array) => array.indexOf(kata) === index);
}

// =========================================================================
// MANIPULASI DATABASE SPREADSHEET
// =========================================================================

function pastikanHeaderSheet(sheet) {
  const headerWajib = [
    "Timestamp",
    "NIS",
    "Nama Siswa",
    "Paket Soal",
    "Skor Akhir",
    "Log Evaluasi",
    "Waktu Mulai",
    "Waktu Selesai",
    "Durasi Detik",
    "Pelanggaran Fullscreen/Tab",
    "Log Keamanan",
    "Mode Backend",
    "Status Gemini",
    "Pesan Gemini",
    "User Agent",
    "Detail JSON"
  ];

  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  const headerSaatIni = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].filter(Boolean);

  if (headerSaatIni.length === 0) {
    sheet.getRange(1, 1, 1, headerWajib.length).setValues([headerWajib]);
    return headerWajib;
  }

  const headerFinal = headerSaatIni.slice();
  headerWajib.forEach(namaHeader => {
    if (headerFinal.indexOf(namaHeader) === -1) {
      headerFinal.push(namaHeader);
    }
  });

  sheet.getRange(1, 1, 1, headerFinal.length).setValues([headerFinal]);
  return headerFinal;
}

function simpanKeSpreadsheet(nis, nama, tema, skorAkhir, detail, metadataUjian) {
  if (!SPREADSHEET_ID || SPREADSHEET_ID.includes("MASUKKAN_ID_SPREADSHEET")) return;

  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName("Nilai_Ujian_SQL");
    
    if (!sheet) {
      sheet = ss.insertSheet("Nilai_Ujian_SQL");
    }

    const headers = pastikanHeaderSheet(sheet);
    
    const timestamp = new Date();
    const logEvaluasiSingkat = detail.map(d => `[Soal ${d.nomorSoal} (${d.tipe}): Skor ${d.skor}]`).join(" | ");
    const nilaiPerHeader = {
      "Timestamp": timestamp,
      "NIS": nis,
      "Nama Siswa": nama,
      "Paket Soal": tema,
      "Skor Akhir": skorAkhir,
      "Log Evaluasi": logEvaluasiSingkat,
      "Waktu Mulai": metadataUjian.waktuMulai,
      "Waktu Selesai": metadataUjian.waktuSelesai,
      "Durasi Detik": metadataUjian.durasiDetik,
      "Pelanggaran Fullscreen/Tab": metadataUjian.pelanggaranFullscreen,
      "Log Keamanan": JSON.stringify(metadataUjian.logKeamanan),
      "Mode Backend": metadataUjian.modeBackend,
      "Status Gemini": metadataUjian.statusGemini,
      "Pesan Gemini": metadataUjian.pesanGemini,
      "User Agent": metadataUjian.userAgent,
      "Detail JSON": JSON.stringify(detail)
    };

    sheet.appendRow(headers.map(header => Object.prototype.hasOwnProperty.call(nilaiPerHeader, header) ? nilaiPerHeader[header] : ""));
    sinkronkanRekapDariNilai(ss, nis);
  } catch (err) {
    Logger.log("Gagal menulis data ke Spreadsheet: " + err.toString());
    throw err;
  }
}

function sinkronkanRekapDariNilai(ss, nisTarget) {
  const sheetNilai = ss.getSheetByName("Nilai_Ujian_SQL");
  const sheetRekap = ss.getSheetByName("REKAP");

  if (!sheetNilai || !sheetRekap) {
    Logger.log("Sinkron REKAP dilewati: sheet Nilai_Ujian_SQL atau REKAP tidak ditemukan.");
    return;
  }

  const dataNilai = sheetNilai.getDataRange().getValues();
  const dataRekap = sheetRekap.getDataRange().getValues();

  if (dataNilai.length < 2 || dataRekap.length < 2) return;

  const headerNilai = dataNilai[0].map(normalisasiHeader);
  const headerRekap = dataRekap[0].map(normalisasiHeader);
  const indeksNisNilai = cariIndeksHeader(headerNilai, ["nis", "nomor induk siswa", "no induk"]);
  const indeksNisRekap = cariIndeksHeader(headerRekap, ["nis", "nomor induk siswa", "no induk"]);

  if (indeksNisNilai === -1 || indeksNisRekap === -1) {
    Logger.log("Sinkron REKAP dilewati: kolom NIS tidak ditemukan.");
    return;
  }

  const sumberPerNis = {};
  for (let i = 1; i < dataNilai.length; i++) {
    const nis = normalisasiNis(dataNilai[i][indeksNisNilai]);
    if (!nis) continue;
    sumberPerNis[nis] = dataNilai[i];
  }

  const nisFilter = normalisasiNis(nisTarget);
  let jumlahUpdate = 0;

  for (let baris = 1; baris < dataRekap.length; baris++) {
    const nisRekap = normalisasiNis(dataRekap[baris][indeksNisRekap]);
    if (!nisRekap || (nisFilter && nisRekap !== nisFilter)) continue;

    const barisSumber = sumberPerNis[nisRekap];
    if (!barisSumber) continue;

    for (let kolom = 0; kolom < headerRekap.length; kolom++) {
      if (kolom === indeksNisRekap || !isSelKosong(dataRekap[baris][kolom])) continue;

      const indeksSumber = cariKolomSumberUntukRekap(headerRekap[kolom], headerNilai);
      if (indeksSumber === -1 || isSelKosong(barisSumber[indeksSumber])) continue;

      sheetRekap.getRange(baris + 1, kolom + 1).setValue(barisSumber[indeksSumber]);
      jumlahUpdate++;
    }
  }

  Logger.log("Sinkron REKAP selesai. Sel terisi: " + jumlahUpdate);
}

function sinkronkanSemuaRekap() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  sinkronkanRekapDariNilai(ss, "");
}

function cariKolomSumberUntukRekap(headerRekap, headerNilai) {
  const aliasHeader = {
    "nama": ["nama siswa", "nama"],
    "nama siswa": ["nama siswa", "nama"],
    "paket": ["paket soal", "paket"],
    "paket soal": ["paket soal", "paket"],
    "skor": ["skor akhir", "skor", "nilai"],
    "nilai": ["skor akhir", "nilai", "skor"],
    "nilai sql": ["skor akhir", "nilai sql", "skor"],
    "skor akhir": ["skor akhir", "nilai", "skor"],
    "timestamp": ["timestamp", "waktu selesai", "tanggal"],
    "tanggal": ["timestamp", "waktu selesai", "tanggal"],
    "waktu mulai": ["waktu mulai"],
    "waktu selesai": ["waktu selesai", "timestamp"],
    "durasi": ["durasi detik", "durasi"],
    "durasi detik": ["durasi detik", "durasi"],
    "pelanggaran": ["pelanggaran fullscreen/tab", "pelanggaran"],
    "pelanggaran fullscreen/tab": ["pelanggaran fullscreen/tab", "pelanggaran"],
    "log evaluasi": ["log evaluasi"],
    "log keamanan": ["log keamanan"],
    "mode backend": ["mode backend"],
    "status gemini": ["status gemini"],
    "pesan gemini": ["pesan gemini"],
    "user agent": ["user agent"],
    "detail json": ["detail json"]
  };

  const kandidat = aliasHeader[headerRekap] || [headerRekap];
  return cariIndeksHeader(headerNilai, kandidat);
}

function cariIndeksHeader(headers, kandidat) {
  for (let i = 0; i < kandidat.length; i++) {
    const dicari = normalisasiHeader(kandidat[i]);
    const index = headers.indexOf(dicari);
    if (index !== -1) return index;
  }
  return -1;
}

function normalisasiHeader(teks) {
  return String(teks || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function normalisasiNis(nilai) {
  return String(nilai || "").trim();
}

function isSelKosong(nilai) {
  return nilai === "" || nilai === null || typeof nilai === "undefined";
}