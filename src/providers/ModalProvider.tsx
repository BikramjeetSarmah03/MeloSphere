"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/common/Modal";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Modal
        title="Test Modal "
        description="Test Description"
        isOpen={true}
        onChange={() => {}}>
        Test Children
      </Modal>
    </>
  );
}
