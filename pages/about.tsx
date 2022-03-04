import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import DarkLayout from "../components/layouts/DarkLayout";
import { ReactElement } from "react";

export default function About() {
  return (
    <>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/about.js</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout(page:ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
