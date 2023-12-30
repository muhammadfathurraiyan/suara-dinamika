"use client";
import Image from "next/image";
import { useState } from "react";
export default function ImageInput({ src }: { src: string }) {
  const [base64, setBase64] = useState(`${src}`);

  const handleImageInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // 'e.target.result' contains the Base64 string representation of the image
        if (typeof e.target?.result === "string") {
          setBase64(e.target.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      {base64 !== "" && (
        <Image
          className="w-full"
          width={0}
          height={0}
          src={base64}
          alt="profile pic"
        />
      )}
      <label className="font-semibold" htmlFor="image">
        Foto
      </label>
      <input type="hidden" value={base64} name="image" />
      <input
        className="bg-transparent text-sm focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-neutral-900/50"
        type="file"
        accept="image/*"
        onChange={(e) => handleImageInputChange(e)}
      />
    </div>
  );
}
