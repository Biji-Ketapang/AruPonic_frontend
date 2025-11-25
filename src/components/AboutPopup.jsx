import React, { useEffect, useState } from "react";
import { Info, CheckCircle, X } from "lucide-react";

const AboutPopup = ({ open, onClose }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (open) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-xl w-full p-8 relative animate-fade-in">
        <button
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <Info size={48} className="text-aruponic-blue animate-bounce mb-4" />
            <span className="text-lg text-slate-500 dark:text-slate-300 animate-pulse">Loading About...</span>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <Info size={32} className="text-aruponic-blue" />
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">ABOUT ARUPONIC</h2>
            </div>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              ARUPONIC adalah startup agri-tech yang mempercepat adopsi akuaponik soilless melalui IoT presisi. Nilai utama produk kami yaitu menurunkan risiko gagal budidaya, menstabilkan kualitas air, menghemat air/energi, dan menghadirkan keputusan berbasis data.
            </p>
            <ul className="mb-4 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Modern</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} className="text-blue-500" /> Efficiency</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} className="text-emerald-500" /> Sustainability</li>
            </ul>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Model bisnis: penjualan perangkat (Rp15 jt/unit) dan bundle berlangganan alat+layanan (Rp13.000/tahun) termasuk monitoring, kalibrasi, dan garansi. ARUPONIC plug-and-play, tangguh di lapangan, dengan histori, analitik, dan kendali jarak jauh membuat panen lebih pasti bagi petani, komunitas, dan lembaga pendidikan, sekaligus berkontribusi pada Ketahanan Pangan (SDG 2, 8, 9, 12 dan 17).
            </p>
            <h3 className="text-lg font-semibold text-aruponic-blue mb-2">OUR Services</h3>
            <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300">
              <li>Paket Berlangganan (Alat + Layanan): Rp. 13.000.000 / tahun</li>
              <li>Penjualan Perangkat (CapEx): ARUPONIC Kit (Rp 13.000.000/unit)</li>
              <li>Instalasi & Pelatihan: Survei lokasi, setup ambang batas, training operator</li>
              <li>Kalibrasi & Perawatan Berkala: Paket kalibrasi sensor, pengecekan performa</li>
              <li>Pilot Project / Proof of Value: Uji coba skala penuh di lokasi mitra</li>
              <li>Integrasi & Kustomisasi: Integrasi aktuator/IoT, API, dashboard khusus</li>
            </ul>
            <h3 className="text-lg font-semibold text-aruponic-blue mb-2">Testimonial</h3>
            <blockquote className="border-l-4 border-aruponic-blue pl-4 italic text-slate-500 dark:text-slate-400 mb-2">
              “Dari pemasangan sampai pendampingan, tim ARUPONIC responsif. Sistemnya praktis dan bermanfaat nyata di lapangan.”<br />
              <span className="font-semibold">Pak Riyono</span>, Pembina Kelompok Tani Serpis Kita
            </blockquote>
            <blockquote className="border-l-4 border-aruponic-blue pl-4 italic text-slate-500 dark:text-slate-400">
              “Dengan ARUPONIC, kami bisa melihat kondisi air seketika dan bertindak lebih cepat. Operasional jadi lebih rapi dan mudah dipantau.”<br />
              <span className="font-semibold">Mas Ardhan</span>, Pembina Komunitas Tani Inisiatif Bangkalan
            </blockquote>
          </>
        )}
      </div>
    </div>
  );
};

export default AboutPopup;
