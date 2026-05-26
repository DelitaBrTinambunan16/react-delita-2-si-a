import PageHeader from "../components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
    { id: 10, isu: "Antisipasi Kamtibmas Menjelang Hari Raya Idul Adha", kategori: "Sosial Keamanan", status: "Stabil", tren: "Naik" }
];

export default function FiturXyz() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <PageHeader
                title="Fitur Xyz"
                breadcrumb={["Dashboard", "Fitur Xyz"]}
            >
                <Button className="bg-green-500 hover:bg-green-600 text-white">+ Add Isu</Button>
            </PageHeader>

            <div className="flex gap-2 my-4">
                <Button variant="outline">Batal</Button>
                <Button variant="ghost">Batal</Button>
                <Button variant="destructive">Batal</Button>
            </div>

            {/* CARD */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Isu</CardTitle>
                        <CardDescription>Jumlah isu yang dipantau</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-gray-800">{daftarIsu.length}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Status Kritis</CardTitle>
                        <CardDescription>Isu dengan level kritis</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-red-600">
                            {daftarIsu.filter(i => i.status === "Kritis").length}
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Tren Naik</CardTitle>
                        <CardDescription>Isu dengan tren meningkat</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-amber-600">
                            {daftarIsu.filter(i => i.tren === "Naik").length}
                        </p>
                    </CardContent>
                </Card>
            </div>
            
            <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="p-5 border-b border-gray-100 bg-gray-50">
                    <h2 className="text-xl font-bold text-gray-800">10 Isu Terhangat di Indonesia</h2>
                    <p className="text-sm text-gray-500 mt-1">Data terkini mengenai topik dan kebijakan yang sedang ramai diperbincangkan.</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700 text-sm font-semibold uppercase tracking-wider">
                                <th className="py-3 px-6 w-12 text-center">No</th>
                                <th className="py-3 px-6">Topik Isu</th>
                                <th className="py-3 px-6">Kategori</th>
                                <th className="py-3 px-6 text-center">Status</th>
                                <th className="py-3 px-6 text-center">Tren</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm divide-y divide-gray-200">
                            {daftarIsu.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6 text-center font-medium text-gray-400">{index + 1}</td>
                                    <td className="py-4 px-6 font-semibold text-gray-800">{item.isu}</td>
                                    <td className="py-4 px-6">
                                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                            {item.kategori}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <span className={`px-3 py-1 rounded-md text-xs font-bold ${
                                            item.status === "Kritis" ? "bg-red-100 text-red-700" :
                                            item.status === "Waspada" ? "bg-amber-100 text-amber-700" :
                                            "bg-green-100 text-green-700"
                                        }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-center font-medium">
                                        <span className={
                                            item.tren === "Naik" ? "text-red-500 font-bold" :
                                            item.tren === "Turun" ? "text-green-500 font-bold" :
                                            "text-gray-400"
                                        }>
                                            {item.tren === "Naik" ? "▲ " : item.tren === "Turun" ? "▼ " : "● "}
                                            {item.tren}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}