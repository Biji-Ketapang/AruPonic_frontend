import React, { useEffect, useState } from "react";
import {
  Droplets,
  Thermometer,
  Zap,
  Activity,
  Waves,
  Gauge,
} from "lucide-react";
import Navbar from "./components/Navbar";
import SensorCard from "./components/SensorCard";
import HistoryChart from "./components/HistoryChart";
import PredictionPanel from "./components/PredictionPanel";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import AboutPopup from "./components/AboutPopup";
import { getHistory, getPredictions } from "./lib/api";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [history, setHistory] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("Home");
  const [aboutPopupOpen, setAboutPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted untuk animasi
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle Dark Mode Class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Fetch Data
  const fetchData = async () => {
    try {
      const [histRes, predRes] = await Promise.all([
        getHistory(),
        getPredictions(),
      ]);
      setHistory(histRes);
      setPrediction(predRes);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 300000); // Refresh setiap 5 menit
    return () => clearInterval(interval);
  }, []);

  // Sensor Configuration dengan tooltip yang lebih detail
  const sensors = prediction
    ? [
        {
          title: "pH Level",
          key: "pH",
          unit: "",
          icon: Droplets,
          color: "text-purple-500",
          tooltip: {
            title: "pH Level",
            description: "Tingkat keasaman atau kebasaan air",
            ideal: "6.5 - 7.5",
            impact: "Mempengaruhi penyerapan nutrisi tanaman dan kesehatan ikan",
            low: "< 6.0: Asam, berbahaya untuk ikan",
            high: "> 8.0: Basa, menghambat penyerapan nutrisi"
          },
        },
        {
          title: "Temperature",
          key: "temperature",
          unit: "°C",
          icon: Thermometer,
          color: "text-orange-500",
          tooltip: {
            title: "Suhu Air",
            description: "Suhu air dalam sistem akuaponik",
            ideal: "24°C - 28°C",
            impact: "Mempengaruhi metabolisme ikan dan pertumbuhan tanaman",
            low: "< 20°C: Metabolisme melambat",
            high: "> 30°C: Stres pada ikan, oksigen menurun"
          },
        },
        {
          title: "Turbidity",
          key: "turbidity",
          unit: "NTU",
          icon: Waves,
          color: "text-amber-600",
          tooltip: {
            title: "Kekeruhan Air",
            description: "Tingkat kekeruhan air akibat partikel tersuspensi",
            ideal: "< 5 NTU",
            impact: "Mempengaruhi penetrasi cahaya dan kesehatan ikan",
            low: "Jernih: Optimal untuk fotosintesis",
            high: "> 10 NTU: Mengganggu insang ikan, mengurangi cahaya"
          },
        },
        {
          title: "Dissolved Oxygen",
          key: "do",
          unit: "mg/L",
          icon: Activity,
          color: "text-blue-500",
          tooltip: {
            title: "Oksigen Terlarut",
            description: "Jumlah oksigen yang terlarut dalam air",
            ideal: "5.0 - 8.0 mg/L",
            impact: "Vital untuk pernapasan ikan dan bakteri nitrifikasi",
            low: "< 3.0 mg/L: Stres pada ikan, proses nitrifikasi terhambat",
            high: "> 10 mg/L: Optimal untuk pertumbuhan"
          },
        },
        {
          title: "EC",
          key: "ec",
          unit: "mS/cm",
          icon: Zap,
          color: "text-yellow-500",
          tooltip: {
            title: "Electrical Conductivity",
            description: "Konsentrasi nutrisi terlarut dalam air",
            ideal: "1.2 - 2.0 mS/cm",
            impact: "Mengindikasikan tingkat nutrisi untuk tanaman",
            low: "< 1.0 mS/cm: Kekurangan nutrisi",
            high: "> 2.5 mS/cm: Kelebihan nutrisi, stres osmotik"
          },
        },
        {
          title: "ORP",
          key: "orp",
          unit: "mV",
          icon: Gauge,
          color: "text-cyan-500",
          tooltip: {
            title: "Oxidation Reduction Potential",
            description: "Kemampuan air untuk membersihkan kontaminan",
            ideal: "250 - 400 mV",
            impact: "Menunjukkan kondisi sanitasi air",
            low: "< 200 mV: Kondisi anaerob, berpotensi racun",
            high: "> 400 mV: Oksidasi kuat, mungkin berlebihan"
          },
        },
      ]
    : [];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 flex">
      <Sidebar
        active={activePage}
        onNavigate={setActivePage}
        onClose={() => setSidebarOpen(false)}
        isOpen={sidebarOpen}
      />
      
      {/* HAPUS FLOATING BUTTON DI SINI - hanya gunakan tombol di Navbar */}
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'md:ml-0'}`}>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          toggleSidebar={() => setSidebarOpen((v) => !v)}
          sidebarOpen={sidebarOpen}
        />

        <main className="container mx-auto px-4 py-8 space-y-8">
          {activePage === "About Us" ? (
            <About />
          ) : (
            <>
              {/* Header Section dengan animasi */}
              <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-4 transition-all duration-500 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
                    Dashboard Monitoring
                  </h1>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">
                    Real-time analysis & AI Forecasting
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 transition-all hover:scale-105">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    System Online
                  </span>
                </div>
              </div>

              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aruponic-blue"></div>
                </div>
              ) : (
                <>
                  {/* Current Status Grid dengan animasi bertahap */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative z-10">
                    {sensors.map((sensor, index) => (
                      <div
                        key={sensor.key}
                        className={`transition-all duration-500 ${
                          mounted 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <SensorCard
                          title={sensor.title}
                          value={prediction.current_conditions[sensor.key]}
                          unit={sensor.unit}
                          icon={sensor.icon}
                          colorClass={sensor.color}
                          tooltip={sensor.tooltip}
                        />
                      </div>
                    ))}
                  </div>

                  {/* AI Prediction Panel dengan animasi */}
                  {prediction && prediction.predictions && (
                    <div className={`transition-all duration-700 relative z-0 ${
                      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      <PredictionPanel predictions={prediction.predictions} />
                    </div>
                  )}

                  {/* Historical Charts dengan animasi */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {[
                      { dataKey: "pH", color: "#8b5cf6", title: "pH Trend (6 Hours)" },
                      { dataKey: "temperature", color: "#f97316", title: "Temperature Trend" },
                      { dataKey: "turbidity", color: "#d97706", title: "Turbidity Trend" },
                      { dataKey: "do", color: "#3b82f6", title: "Dissolved Oxygen Trend" },
                    ].map((chart, index) => (
                      <div
                        key={chart.dataKey}
                        className={`transition-all duration-500 ${
                          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${400 + index * 100}ms` }}
                      >
                        <HistoryChart
                          data={history}
                          dataKey={chart.dataKey}
                          color={chart.color}
                          title={chart.title}
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </main>

        {/* Footer dengan animasi */}
        <footer className={`border-t border-slate-200 dark:border-slate-800 mt-12 py-8 text-center transition-all duration-500 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2025 Aruponic AI. Boost Your Harvest Success.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;