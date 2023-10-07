"use client";

import Box from "@/components/common/Box";
import { BounceLoader } from "react-spinners";

export default function loading() {
  return (
    <Box className="h-full flex items-center justify-center">
      <BounceLoader color="#22c55e" size={40} />
    </Box>
  );
}
