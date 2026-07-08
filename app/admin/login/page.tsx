import { loginAction } from "@/app/actions/admin";

type LoginPageProps = {
  searchParams: Promise<{ error?: string; next?: string }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;

  return (
    <main className="flex min-h-full flex-1 items-center justify-center bg-cream px-4 py-16">
      <div className="w-full max-w-md border border-hairline bg-cream p-8 shadow-sm">
        <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.28em] text-brown-muted">
          S.P. Enterprises
        </p>
        <h1 className="mb-2 font-serif text-3xl text-brown">Admin login</h1>
        <p className="mb-8 font-sans text-sm text-brown-muted">
          Enter the admin password to manage catalogue content and inquiries.
        </p>

        {params.error && (
          <p className="mb-4 font-sans text-sm text-red-700">
            Incorrect password. Try again.
          </p>
        )}

        <form action={loginAction} className="space-y-5">
          <input type="hidden" name="next" value={params.next || "/admin"} />
          <label className="flex flex-col gap-2">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brown-muted">
              Password
            </span>
            <input
              type="password"
              name="password"
              required
              autoFocus
              className="border border-hairline bg-transparent px-3 py-2.5 font-sans text-sm outline-none focus:border-brown"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-brown px-5 py-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-cream"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
