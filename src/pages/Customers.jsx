import PageHeader from "../components/PageHeader";

const daftarIsu = [
    { id: 1, isu: "Evaluasi & Standarisasi Anggaran Makan Bergizi Gratis (MBG)", kategori: "Kebijakan Publik", status: "Kritis", tren: "Naik" },
    { id: 2, isu: "Fluktuasi Nilai Tukar Rupiah & Pembatasan Threshold Valas", kategori: "Ekonomi", status: "Waspada", tren: "Naik" },
    { id: 3, isu: "Penyelenggaraan & Fasilitas Haji 2026 Ramah Lansia", kategori: "Sosial Keagamaan", status: "Stabil", tren: "Stabil" },
    { id: 4, isu: "Restrukturisasi BUMN (Pemangkasan Anak Usaha Telkom oleh BP BUMN)", kategori: "Ekonomi / Bisnis", status: "Waspada", tren: "Naik" },
    { id: 5, isu: "Potensi Cuaca Ekstrem & Kondisi El Niño di Wilayah Timur", kategori: "Lingkungan / BMKG", status: "Waspada", tren: "Stabil" },
    { id: 6, isu: "Pemberantasan TPPO & Penguatan Imigrasi di Luar Negeri", kategori: "Hukum / Keamanan", status: "Kritis", tren: "Naik" },
    { id: 7, isu: "Pencegahan Penyelundupan Satwa Liar (Kasus Sisik Trenggiling)", kategori: "Lingkungan / Hukum", status: "Stabil", tren: "Turun" },
    { id: 8, isu: "Usulan Moratorium Perluasan Lahan Sawah Dilindungi (LSD)", kategori: "Agraria / DPR", status: "Waspada", tren: "Naik" },
    { id: 9, isu: "Modernisasi Sistem Navigasi Penerbangan Nasional oleh Kemenhub", kategori: "Infrastruktur", status: "Stabil", tren: "Stabil" },
    { id: 10, isu: "Antisipasi Kamtibmas Menjelang Hari Raya Idul Adha", kategori: "Sosial Keamanan", status: "Stabil", tren: "Naik" },
];

const statusStyle = {
    Kritis:  "bg-red-100 text-red-700",
    Waspada: "bg-amber-100 text-amber-700",
    Stabil:  "bg-green-100 text-green-700",
};

const trenConfig = {
    Naik:   { icon: "▲", style: "text-red-500" },
    Turun:  { icon: "▼", style: "text-green-500" },
    Stabil: { icon: "●", style: "text-gray-400" },
};

export default function FiturXyz() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <PageHeader
                title="Isu Terhangat Indonesia"
                breadcrumb={["Dashboard", "Isu Terhangat Indonesia"]}
            />

            <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Header Card */}
                <div className="px-6 py-4 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-gray-800">
                        10 Isu Terhangat di Indonesia
                    </h2>
                    <p className="text-sm text-gray-400 mt-0.5">
                        Topik dan kebijakan yang sedang ramai diperbincangkan — Mei 2026
                    </p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                                <th className="px-6 py-3 w-12 text-center">No</th>
                                <th className="px-6 py-3">Topik Isu</th>
                                <th className="px-6 py-3">Kategori</th>
                                <th className="px-6 py-3 text-center">Status</th>
                                <th className="px-6 py-3 text-center">Tren</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {daftarIsu.map((item) => {
                                const tren = trenConfig[item.tren];
                                return (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 text-center text-gray-400 font-medium">
                                            {item.id}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-800">
                                            {item.isu}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full text-xs font-medium">
                                                {item.kategori}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${statusStyle[item.status]}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className={`px-6 py-4 text-center text-xs font-bold ${tren.style}`}>
                                            {tren.icon} {item.tren}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-400 text-right">
                    Total {daftarIsu.length} isu terpantau
                </div>
            </div>
        </div>
    );
}