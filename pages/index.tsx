import type { NextPage } from "next";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <h1 className="title">
        Ir a <Link href="/about"> About</Link>
      </h1>
      <p className="descriptio">
        Get started by editing
        <code className="code">pages/index.tsx</code>
      </p>
    </MainLayout>
  );
};

export default HomePage;
