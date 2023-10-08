"use client";

import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types/types";
import Image from "next/image";

type Props = {
  data: Song;
  onClick?: (id: string) => void;
};

export default function MediaItem({ data, onClick }: Props) {
  const imageUrl = useLoadImage(data);
  const player = usePlayer();

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    return player.setId(data.id);
  };

  return (
    <div
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/90 w-full p-2 rounded-md"
      onClick={handleClick}>
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          src={imageUrl || "/images/liked.png"}
          alt="Image"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
}
