import Header from "@/components/layout/Header";

export default function About() {
    return (
        <>
            <Header />
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    About me
                </h1>
                <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Hello, my name is Alex and I'm a software engineer from
                    Ukraine. I'm passionate about building web applications with
                    modern technologies like Next.js, TypeScript, and Tailwind
                    CSS.
                </p>
            </main>
        </>
    );
}
