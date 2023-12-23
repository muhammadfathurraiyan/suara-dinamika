import Calendar from "@/components/admin/insight/Calendar";
import Line from "@/components/admin/insight/Line";
import Pie from "@/components/admin/insight/Pie";

export default function Insight() {
  return (
    <div className="px-4 py-12 flex flex-col gap-12">
      <h1 className="text-3xl font-black uppercase">Insight</h1>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-bold">Kontribusi</h2>
          <p>Jumlah kontribusi tahun ini</p>
        </div>
        <Calendar />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-bold">Kategori</h2>
          <p>Jumlah article perkategori</p>
        </div>
        <Pie />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-bold">View</h2>
          <p>Jumlah view perhari</p>
        </div>
        <Line />
      </div>
    </div>
  );
}
