import React from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import Link from "next/link";

const PricingPage = () => {
  return (
    <MainLayout>
      <p> Pricing </p>
      <h1 className="title">
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/"> Home</Link>
      </h1>

      <p className="description">
        Get started by editing
        <code className="code">pages/PricingPage.tsx</code>
      </p>
    </MainLayout>
  );
};
export default PricingPage;
