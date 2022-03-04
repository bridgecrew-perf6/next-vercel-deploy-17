import Link from "next/link";
import { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <MainLayout>
      <h1 className="title">
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Increment counter +1
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        Decrement counter -1
      </button>
    </MainLayout>
  );
}
