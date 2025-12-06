import Link from "next/link";

export default function Success() {
  return (
    <main className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">Thanks — request received.</h1>
      <p className="mt-3 text-neutral-700">
        We’ll reply within 24 hours to schedule your free consultation.
      </p>
      <div className="mt-6">
        <Link href="/" className="rounded-lg px-5 py-3 border">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
