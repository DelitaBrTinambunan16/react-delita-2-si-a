// 1. PASTIKAN BARIS INI ADA DI PALING ATAS
import React, { useState } from 'react';

export default function TailWindcss() {
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 space-y-8">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 gap-4">
                <div>
                    <h1 className="text-3xl font-black text-gray-800 tracking-tight">Belajar Tailwind CSS 4</h1>
                    <p className="text-gray-500 text-sm">Projek PFL Delita • Dashboard Overview</p>
                </div>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all active:scale-95">
                    Click Me
                </button>
            </header>

            {/* Grid untuk Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard label="Total Revenue" value="$12,840" change="+12.5%" iconBg="bg-blue-600" />
                <StatCard label="New Users" value="1,240" change="+18.2%" iconBg="bg-purple-600" />
                {/* Komponen ini sekarang sudah aktif kembali */}
                <InteractiveToggle title="Sistem Notifikasi" />
            </div>

            <FlexboxGrid />

            {/* Layout Utama */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <Typography />
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <span className="text-sm font-semibold text-gray-600">Action:</span>
                        <BorderRadius />
                    </div>
                </div>

                <div className="space-y-6">
                    <Spacing title="Project Card" content="Database ID: ABCDFGH" />
                    <BackgroundColors />
                    <ShadowEffects />
                </div>
            </div>
        </div>
    )
}

function Spacing(props) {
    return (
        <div className="bg-white shadow-xl p-6 rounded-2xl border-t-4 border-blue-500 transform hover:-translate-y-1 transition-all">
            <h2 className="text-lg font-bold text-gray-800">{props.title}</h2>
            <p className="mt-2 text-gray-600 font-mono text-sm tracking-widest">{props.content}</p>
        </div>
    )
}

function Typography() {
    return (
        <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h1 className="text-4xl font-extrabold text-blue-600 tracking-tighter">Tailwind Typography</h1>
            <p className="text-gray-500 text-lg mt-3 leading-relaxed">
                Belajar Tailwind sangat <span className="text-pink-500 font-bold underline">menyenangkan</span> dan cepat!
            </p>
        </div>
    )
}

function BorderRadius() {
    return (
        <button className="border-2 border-blue-500 text-blue-500 font-black px-6 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-md active:ring-4 active:ring-blue-200">
            KLIK SAYA
        </button>
    )
}

function BackgroundColors() {
    return (
        <div className="bg-gradient-to-br from-pink-500 to-rose-400 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
                <h3 className="text-2xl font-black italic">Tailwind Colors</h3>
                <p className="mt-2 font-medium opacity-90 text-sm">Belajar Tailwind itu seru dan fleksibel!</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white opacity-10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
        </div>
    )
}

function FlexboxGrid() {
    return (
        <nav className="flex flex-col md:flex-row justify-between items-center bg-gray-900 p-5 rounded-2xl text-white shadow-2xl gap-4">
            <h1 className="text-xl font-black tracking-tighter text-blue-400">DELITA.APPS</h1>
            <ul className="flex space-x-8 text-sm font-bold">
                <li><a href="#" className="hover:text-blue-400 transition-colors uppercase tracking-widest">Home</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors uppercase tracking-widest">About</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors uppercase tracking-widest">Contact</a></li>
            </ul>
        </nav>
    )
}

function ShadowEffects() {
    return (
        <div className="bg-white shadow-md p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-50 group cursor-pointer text-center">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-500 transition-colors">Hover me!</h3>
            <p className="text-gray-400 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}

function StatCard({ label, value, change, iconBg }) {
    const isPositive = change.startsWith('+');
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-blue-200 transition-colors">
            <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center text-white text-xl shadow-inner`}>
                📈
            </div>
            <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{label}</p>
                <p className="text-2xl font-black text-gray-900 leading-none mt-1">{value}</p>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mt-2 ${isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {change}
                </span>
            </div>
        </div>
    );
}

function InteractiveToggle({ title }) {
    const [isOn, setIsOn] = useState(false);
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center transition-all hover:bg-gray-50">
            <span className="font-bold text-gray-700 text-sm">{title}</span>
            <button 
                onClick={() => setIsOn(!isOn)} 
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${isOn ? 'bg-blue-500' : 'bg-gray-300'}`}
            >
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isOn ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
        </div>
    );
}