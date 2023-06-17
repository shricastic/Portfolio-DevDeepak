"use client";
import { motion } from "framer-motion";
import React, { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export default function Wrapper({ children }: Props): ReactElement {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0, transition: { duration: 0.5, type: "spring" } }}
    >
      {children}
    </motion.div>
  );
}
