import Link from "next/link";

// Footer provides public navigation and contact cues while omitting admin links.
export function PublicFooter() {
  return (
    <footer className="bg-city-900 py-12 text-white">
      <div className="container-page grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-3 text-xl font-bold">City Blinds Vietnam</div>
          <p className="max-w-xl text-sm leading-6 text-city-100">
            San xuat va phan phoi rem B2B cho dai ly, showroom noi that, nha thau va kien truc su tren toan quoc.
          </p>
        </div>
        <div>
          <div className="mb-3 font-bold">Danh muc</div>
          <div className="grid gap-2 text-sm text-city-100">
            <Link href="/san-pham">San pham</Link>
            <Link href="/doi-tac-ban-hang">Doi tac ban hang</Link>
            <Link href="/tin-tuc">Tin tuc</Link>
          </div>
        </div>
        <div>
          <div className="mb-3 font-bold">Lien he B2B</div>
          <p className="text-sm leading-6 text-city-100">Email: partner@cityblinds.vn<br />Hotline: 0900 000 000</p>
        </div>
      </div>
    </footer>
  );
}
