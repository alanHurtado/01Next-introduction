import { NextPage } from "next";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

const ContacPage: NextPage = () => {
  return (
    <MainLayout>
      <p> Contact </p>
      <h1 className="title">
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/"> Home</Link>
      </h1>

      <p className="description">
        Get started by editing
        <code className="code">pages/index.tsx</code>
      </p>
    </MainLayout>
  );
};

export default ContacPage;
