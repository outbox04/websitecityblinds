"use client";

import { useState } from "react";

export function MediaUploader() {
  const [fileName, setFileName] = useState("");

  return (
    <form className="grid gap-3">
      <input
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="rounded-md border border-slate-300 p-3"
        onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
      />
      {fileName ? <p className="text-sm text-slate-600">{fileName}</p> : null}
      <button type="button" className="rounded-md bg-city-700 px-5 py-3 font-bold text-white">Upload</button>
    </form>
  );
}
