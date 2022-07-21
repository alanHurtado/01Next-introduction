import Link from "next/link";
import { ReactElement } from "react";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";
import type { NextPageWithLayout } from './_app'

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="title">
        Ir a<Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing
        <code className="code">pages/index.tsx</code>
      </p>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page} </DarkLayout>
    </MainLayout>
  );
};

export default AboutPage;
