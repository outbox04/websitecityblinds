import { DataTable } from "@/components/admin/DataTable";

type PartnerLead = {
  id: string;
  full_name: string;
  phone: string;
  company_name: string;
  province: string;
  business_model: string;
  source_page?: string | null;
  device_type?: string | null;
  created_at: string;
};

export function PartnerCRMTable({ rows }: { rows: PartnerLead[] }) {
  return (
    <DataTable
      rows={rows}
      columns={[
        { key: "name", header: "Họ tên", cell: (row) => <span className="font-semibold">{row.full_name}</span> },
        { key: "phone", header: "SĐT", cell: (row) => row.phone },
        { key: "company", header: "Công ty", cell: (row) => row.company_name },
        { key: "province", header: "Khu vực", cell: (row) => row.province },
        { key: "model", header: "Mô hình", cell: (row) => row.business_model },
        { key: "source", header: "Nguồn", cell: (row) => row.source_page || "-" },
        { key: "device", header: "Thiết bị", cell: (row) => row.device_type || "-" },
        { key: "created", header: "Ngày tạo", cell: (row) => new Date(row.created_at).toLocaleDateString("vi-VN") }
      ]}
    />
  );
}
