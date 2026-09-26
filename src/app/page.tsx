import { readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";

// Preview wrapper only: renders docs/ANSWER.md. The checklist stays a project
// file — the user asked not to publish the long regression table here.
// Environment-specific; the project never depends on it.
export const dynamic = "force-dynamic";

async function loadDoc(name: string): Promise<string> {
  try {
    const raw = await readFile(path.join(process.cwd(), "docs", name), "utf8");
    return await marked.parse(raw, { gfm: true });
  } catch {
    return `<p><em>docs/${name} не найден.</em></p>`;
  }
}

export default async function HomePage() {
  const answer = await loadDoc("ANSWER.md");

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <header className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
        <span className="rounded-full bg-slate-900 px-3 py-1 font-medium text-white">RVN Compare</span>
        <a href="#answer" className="hover:text-slate-900">Ответ</a>
      </header>
      <article id="answer" className="md rounded-2xl bg-white p-6 shadow-sm sm:p-10" dangerouslySetInnerHTML={{ __html: answer }} />
    </main>
  );
}
