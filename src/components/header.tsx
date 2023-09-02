import { jetbrains_mono } from '@/app/fonts';

function Header() {
  return (
    <div className="w-full bg-transparent flex justify-center items-center">
      <h1
        className={`${jetbrains_mono.className} text-2xl font-bold tracking-wide text-slate-800 bg-indigo-500 px-6 py-2 my-8 rounded-full`}
      >
        webdevpro
      </h1>
    </div>
  );
}

export default Header;
