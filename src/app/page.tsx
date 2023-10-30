import Link from 'next/link';

export default function Page() {
  return (
    <section className="text-center flex text-white flex-col gap-6 items-center">
      <h1 className="text-5xl font-bold">Добро пожаловать!</h1>
      <Link
        href="/users"
        className="w-max py-2 px-4 bg-orange-600 hover:opacity-80 transition-all duration-[250] rounded-lg shadow-2xl"
      >
        Перейти к пользователям
      </Link>
    </section>
  );
}
