import Navbar from "../components/Navbar";

export default function CVPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-20 mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-semibold mb-4">Curriculum Vitae</h1>
        <div className="rounded-2xl overflow-hidden border border-border">
          <iframe
            src="/Felix_Bruckmeier_CV.pdf"
            className="w-full h-[80vh]"
            title="Felix Bruckmeier CV"
          />
        </div>
      </main>
    </div>
  );
}
