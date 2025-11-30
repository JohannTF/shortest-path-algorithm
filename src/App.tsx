import type { JSX } from "react";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-blue-50 to-white">
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-semibold text-indigo-600 mb-2">Hola Mundo</h1>
      </div>
    </div>
  );
}