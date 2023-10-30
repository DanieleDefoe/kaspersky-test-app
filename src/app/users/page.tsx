import { getFullName, getRandomGroup } from '@/lib/utils';
import { columns } from './columns';
import { DataTable } from './data-table';
import { getUsersFromApi } from '@/lib/users';
import { type Metadata } from 'next';

export const revalidate = 86400; // кеш становится невалидным спустя 24 часа, запрос за пользователями отправляется заново

export const metadata: Metadata = {
  title: 'Users page',
  description: 'Страница с пользователями',
};

export default async function Page() {
  const users: Array<User> = await getUsersFromApi();

  const newUsers = users.map((el) => ({
    ...el,
    id: el.login.sha256,
    login: el.login.username,
    name: getFullName(el.name),
    group: getRandomGroup() ?? 'No group',
  }));

  return (
    <section className="container py-10">
      <DataTable columns={columns} data={newUsers} />
    </section>
  );
}
