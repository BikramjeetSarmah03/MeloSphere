"use client";

import { Song } from "@/utils/types";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";

type Props = {
  songs: Song[];
};

export default function SearchContent({ songs }: Props) {
  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No Songs Found
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div className="flex items-center gap-x-4 w-full" key={song.id}>
          <div className="flex-1">
            <MediaItem data={song} onClick={() => {}} />
          </div>

          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
}
