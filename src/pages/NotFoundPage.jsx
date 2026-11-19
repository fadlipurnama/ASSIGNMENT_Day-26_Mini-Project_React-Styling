import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang kamu cari tidak ada.</p>
      <Link to="/">Kembali ke Beranda</Link>
    </div>
  );
}
export default NotFoundPage;
