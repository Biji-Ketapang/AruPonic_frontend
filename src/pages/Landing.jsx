import React from "react";
import { 
  ArrowRight, 
  Activity, 
  Wifi, 
  Sprout, 
  Droplets, 
  Users, 
  Award, 
  CheckCircle,
  Play,
  BarChart3,
  BellRing,
  UserCheck,
  Cpu,
  Settings,
  ShoppingCart
} from "lucide-react";

const Landing = ({ onNavigate }) => {
  return (
    <div className="font-sans text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Aquaponics Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold mb-4 border border-green-500/30">
              Smart IoT Agriculture
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Revolusi <span className="text-aruponic-blue">Akuaponik</span> <br />
              Berbasis Teknologi Presisi
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
              Tingkatkan hasil panen dan efisiensi air dengan sistem monitoring otomatis real-time. 
              Solusi cerdas untuk pertanian masa depan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate("Home")}
                className="px-8 py-4 bg-aruponic-blue hover:bg-blue-600 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Mulai Monitoring
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => onNavigate("About Us")}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full font-bold transition-all backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <Play size={18} />
                Pelajari Sistem
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 relative -mt-20 z-20 rounded-t-[3rem]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: "IoT Connectivity",
                desc: "Koneksi sensor real-time 24/7 untuk pemantauan kualitas air tanpa henti.",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=60"
              },
              {
                icon: Activity,
                title: "AI Analysis",
                desc: "Algoritma cerdas yang memprediksi kesehatan tanaman dan kondisi air.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60"
              },
              {
                icon: Sprout,
                title: "Growth Optimization",
                desc: "Maksimalkan pertumbuhan tanaman dan ikan dengan data presisi.",
                img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=500&q=60"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="p-8 text-center relative">
                  <div className="w-16 h-16 bg-aruponic-blue rounded-full flex items-center justify-center text-white absolute -top-8 left-1/2 -translate-x-1/2 shadow-lg ring-4 ring-white dark:ring-slate-800">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-slate-800 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="aruponic_testing.png" 
                  alt="About Aruponic" 
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 bg-white dark:bg-slate-800 p-6 rounded-tr-2xl shadow-lg">
                  <p className="text-4xl font-bold text-aruponic-blue">98%</p>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Tingkat Keberhasilan</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-aruponic-green font-bold tracking-wide uppercase mb-2">Tentang Kami</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                Menggabungkan Alam dengan Teknologi Digital
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Aruponic hadir untuk menjawab tantangan ketahanan pangan. Kami menyediakan sistem yang tidak hanya memantau, 
                tetapi juga mengerti kebutuhan ekosistem akuaponik Anda.
              </p>
              <ul className="space-y-4 mb-8">
                {["Monitoring Kualitas Air Otomatis", "Peringatan Dini Penyakit", "Hemat Energi & Air"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="font-medium text-slate-700 dark:text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => onNavigate("About Us")} className="text-aruponic-blue font-bold hover:text-blue-700 flex items-center gap-2 group">
                Baca Selengkapnya 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COUNTER/STATS SECTION ================= */}
      <section className="py-20 bg-aruponic-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, val: "100+", label: "Mitra Petani" },
              { icon: CheckCircle, val: "127", label: "Sensor Terpasang" },
              { icon: Droplets, val: "500K+", label: "Data Teranalisis" },
              { icon: Award, val: "3", label: "Penghargaan" },
            ].map((stat, idx) => (
              <div key={idx} className="text-white">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-1">{stat.val}</h3>
                <p className="text-blue-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES/FEATURES LIST ================= */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Layanan Unggulan</h2>
            <p className="text-slate-500 mt-2">Solusi komprehensif untuk kebutuhan budidaya Anda</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Dashboard Monitoring", 
                icon: BarChart3, 
                desc: "Visualisasi data pH, Suhu, dan Kekeruhan yang mudah dipahami." 
              },
              { 
                title: "Notifikasi Cerdas", 
                icon: BellRing, 
                desc: "Terima peringatan via WA/Telegram jika kondisi air memburuk." 
              },
              { 
                title: "Konsultasi Ahli", 
                icon: UserCheck, 
                desc: "Dukungan langsung dari tim agronomi Aruponic." 
              },
              { 
                title: "Instalasi Hardware", 
                icon: Cpu, 
                desc: "Pemasangan sensor dan mikrokontroler di lokasi Anda." 
              },
              { 
                title: "Maintenance", 
                icon: Settings, 
                desc: "Layanan kalibrasi sensor berkala untuk akurasi data." 
              },
              { 
                title: "Marketplace", 
                icon: ShoppingCart, 
                desc: "Jual hasil panen langsung ke konsumen melalui platform kami." 
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-800 group">
                <div className="w-14 h-14 bg-aruponic-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-aruponic-blue/20 transition-colors">
                  <service.icon className="text-aruponic-blue" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER MINI ================= */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">ARUPONIC</h2>
            <p className="mb-8 max-w-lg mx-auto">Solusi teknologi untuk ketahanan pangan Indonesia. Bergabunglah bersama kami mewujudkan pertanian 4.0.</p>
            <div className="flex justify-center gap-6 mb-8">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
            </div>
            <p className="text-sm">© 2025 Aruponic. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Landing;