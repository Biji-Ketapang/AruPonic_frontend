import React from "react";
import { Info, CheckCircle, Users, Target, Leaf, Shield, Award, Star } from "lucide-react";

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-12">
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-3 mb-6 bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg border border-slate-200 dark:border-slate-700">
          <Info size={24} className="text-aruponic-blue" />
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Tentang ARUPONIC</h1>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
          Mempercepat Revolusi <span className="font-semibold text-aruponic-green">Akuaponik</span> Digital dengan Teknologi IoT Presisi untuk Pertanian Berkelanjutan
        </p>
      </div>

      {/* Mission & Values Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Mission Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-aruponic-blue" size={28} />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Misi Kami</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            ARUPONIC adalah startup agri-tech yang mempercepat adopsi akuaponik soilless melalui IoT presisi. 
            Nilai utama produk kami yaitu menurunkan risiko gagal budidaya, menstabilkan kualitas air, 
            menghemat air/energi, dan menghadirkan keputusan berbasis data.
          </p>
        </div>

        {/* Values Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-aruponic-blue" size={28} />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Nilai Inti</h2>
          </div>
          <div className="space-y-4">
            {[
              { icon: Leaf, text: "Modern", desc: "Teknologi terkini untuk pertanian masa depan", color: "text-green-500" },
              { icon: Shield, text: "Efisiensi", desc: "Optimalkan sumber daya, maksimalkan hasil", color: "text-blue-500" },
              { icon: Users, text: "Berkelanjutan", desc: "Ramah lingkungan untuk generasi mendatang", color: "text-emerald-500" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 group hover:bg-slate-50 dark:hover:bg-slate-700 p-3 rounded-lg transition-all">
                <item.icon size={22} className={`${item.color} mt-1 group-hover:scale-110 transition-transform`} />
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.text}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Model Section */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 mb-16">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">Model Bisnis & Layanan</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-aruponic-blue border-b pb-2">Paket Utama</h3>
            {[
              { title: "Paket Berlangganan", price: "Rp 13.000.000/tahun", desc: "Bundle alat + layanan termasuk monitoring, kalibrasi, dan garansi" },
              { title: "Penjualan Perangkat", price: "Rp 15.000.000/unit", desc: "ARUPONIC Kit lengkap dengan sistem IoT" }
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-aruponic-blue pl-4 hover:border-aruponic-green transition-all">
                <h4 className="font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                <p className="text-lg font-bold text-aruponic-blue my-1">{item.price}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-aruponic-blue border-b pb-2">Layanan Pendukung</h3>
            {[
              "Instalasi & Pelatihan: Survei lokasi, setup ambang batas, training operator",
              "Kalibrasi & Perawatan Berkala: Paket kalibrasi sensor, pengecekan performa",
              "Pilot Project / Proof of Value: Uji coba skala penuh di lokasi mitra",
              "Integrasi & Kustomisasi: Integrasi aktuator/IoT, API, dashboard khusus"
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                <p className="text-slate-600 dark:text-slate-300">{service}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-slate-700 rounded-xl p-6 border border-blue-200 dark:border-slate-600">
          <p className="text-slate-700 dark:text-slate-300 text-center">
            <span className="font-semibold">ARUPONIC plug-and-play</span> yang tangguh di lapangan, dengan histori, 
            analitik, dan kendali jarak jauh membuat panen lebih pasti bagi petani, komunitas, dan lembaga pendidikan, 
            sekaligus berkontribusi pada <span className="font-semibold text-aruponic-blue">Ketahanan Pangan (SDG 2, 8, 9, 12 dan 17)</span>.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">Apa Kata Mereka?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              quote: "Dari pemasangan sampai pendampingan, tim ARUPONIC responsif. Sistemnya praktis dan bermanfaat nyata di lapangan.",
              name: "Pak Riyono",
              role: "Pembina Kelompok Tani Serpis Kita",
              rating: 5
            },
            {
              quote: "Dengan ARUPONIC, kami bisa melihat kondisi air seketika dan bertindak lebih cepat. Operasional jadi lebih rapi dan mudah dipantau.",
              name: "Mas Ardhan", 
              role: "Pembina Komunitas Tani Inisiatif Bangkalan",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-600 dark:text-slate-300 italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t pt-4 border-slate-200 dark:border-slate-600">
                <p className="font-semibold text-slate-800 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gradient-to-r from-aruponic-blue to-aruponic-green rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Berkontribusi untuk Masa Depan yang Lebih Baik</h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Bersama ARUPONIC, kita mewujudkan pertanian berkelanjutan yang efisien, modern, 
          dan ramah lingkungan untuk ketahanan pangan Indonesia.
        </p>
      </div>
    </div>
  </div>
);

export default About;