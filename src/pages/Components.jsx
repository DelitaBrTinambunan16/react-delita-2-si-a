import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";

const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];

const products = [
  { id: 1, name: "Laptop Asus", category: "Elektronik", price: "Rp 8.000.000" },
  { id: 2, name: "Sepatu Sport", category: "Fashion", price: "Rp 450.000" },
  { id: 3, name: "Jam Tangan", category: "Aksesoris", price: "Rp 799.000" },
];

export default function Components() {
  return (
    <div>

      {/* HEADER */}
      <PageHeader
        title="Components"
        breadcrumb={["Dashboard", "Components"]}
      />

      <section className="mt-6 bg-white rounded-xl shadow p-6 space-y-4">

        {/* Button */}
        <div>
          <h3 className="font-semibold mb-2">Button</h3>
          <div className="flex gap-2 flex-wrap">
            <Button type="secondary">Edit</Button>
            <Button type="success">Simpan</Button>
            <Button type="danger">Hapus</Button>
          </div>
        </div>

        {/* Badge */}
        <div>
          <h3 className="font-semibold mb-2">Badge</h3>
          <div className="flex gap-2 flex-wrap">
            <Badge type="primary">Primary</Badge>
            <Badge type="secondary">Secondary</Badge>
            <Badge type="success">Aktif</Badge>
            <Badge type="danger">Nonaktif</Badge>
            <Badge type="warning">Pending</Badge>
          </div>
        </div>

        {/* Avatar */}
        <div>
          <h3 className="font-semibold mb-2">Avatar</h3>
          <div className="flex gap-2">
            <Avatar name="Fajar" />
            <Avatar name="Hendra" />
            <Avatar name="Sinta" />
          </div>
        </div>

      </section>

      <section className="mt-6 bg-white rounded-xl shadow p-6 space-y-4">

        <div>
          <h3 className="font-semibold mb-2">Container</h3>
          <Container className="bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">
              Daftar Produk
            </h1>
            <p className="text-gray-600">
              Berikut adalah daftar produk terbaru.
            </p>
          </Container>
        </div>

      </section>

      <section className="mt-6 bg-white rounded-xl shadow p-6 space-y-4">

        {/* Card */}
        <div>
          <h3 className="font-semibold mb-2">Card</h3>
          <Card>
            <h2 className="text-xl font-bold">Judul Card</h2>
            <p className="text-gray-600">
              Ini adalah isi dari card.
            </p>
          </Card>
        </div>

        {/* ProductCard */}
        <div>
          <h3 className="font-semibold mb-2">ProductCard</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProductCard
              image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              title="Sepatu Sport"
              category="Fashion"
              price="Rp 450.000"
              description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
            />

            <ProductCard
              image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              title="Smartphone"
              category="Elektronik"
              price="Rp 4.500.000"
              description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
            />
          </div>
        </div>

        {/* Table */}
        <div>
          <h3 className="font-semibold mb-2">Table</h3>

          <Table headers={headers}>
            {products.map((product, index) => (
              <tr key={product.id} className="hover:bg-gray-50">

                <td className="border px-4 py-3">
                  {index + 1}
                </td>

                <td className="border px-4 py-3">
                  {product.name}
                </td>

                <td className="border px-4 py-3">
                  {product.category}
                </td>

                <td className="border px-4 py-3">
                  {product.price}
                </td>

                <td className="border px-4 py-3">
                  <Button type="secondary">
                    Detail
                  </Button>
                </td>

              </tr>
            ))}
          </Table>
        </div>

      </section>
      <Footer />

    </div>
  );
}