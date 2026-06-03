import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="bg-city-900 py-12 text-white">
      <div className="container-page grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src="/images/city-blinds-logo.png" alt="City Blinds Vietnam" className="mb-4 h-16 w-auto" />
          <p className="max-w-xl text-sm leading-6 text-city-100">
            Sản xuất và phân phối rèm B2B cho đại lý, showroom nội thất, nhà thầu và kiến trúc sư trên toàn quốc.
          </p>
        </div>
        <div>
          <div className="mb-3 font-bold">Danh mục</div>
          <div className="grid gap-2 text-sm text-city-100">
            <Link href="/san-pham">Sản phẩm</Link>
            <Link href="/doi-tac-ban-hang">Đối tác bán hàng</Link>
            <Link href="/tin-tuc">Tin tức</Link>
          </div>
        </div>
        <div>
          <div className="mb-3 font-bold">Liên hệ B2B</div>
          <p className="text-sm leading-6 text-city-100">Email: partner@cityblinds.vn<br />Hotline: 0900 000 000</p>
        </div>
      </div>
    </footer>
  );
}
