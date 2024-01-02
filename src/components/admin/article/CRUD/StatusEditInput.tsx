"use client";
import { ChangeEvent, useEffect, useState } from "react";

export default function StatusEditInput({
  statusValue,
}: {
  statusValue: boolean;
}) {
  const [selectedStatus, setSelectedStatus] = useState("");

  return (
    <div className="flex flex-col">
      <label className="font-semibold text-sm">Status</label>
      <select
        required
        name="status"
        id="select"
        defaultValue={selectedStatus}
        className={`bg-transparent w-1/2 focus:outline-none p-2 border border-neutral-900/30 focus:border-2 focus:border-neutral-900/50`}
      >
        <option className="text-neutral-900" value="1">
          Public
        </option>
        <option className="text-neutral-900" value="2">
          Private
        </option>
      </select>
    </div>
  );
}
