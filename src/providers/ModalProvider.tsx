"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/modal/AuthModal";
import UploadModal from "@/components/modal/UploadModal";
import SubscribeModal from "@/components/modal/SubscribeModal";
import { ProductWithPrice } from "@/types/types";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

export default function ModalProvider({ products }: ModalProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  );
}
