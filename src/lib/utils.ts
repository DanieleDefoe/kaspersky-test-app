import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { groups } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFullName({ first, last }: { first: string; last: string }) {
  return `${first} ${last}`;
}

export function getRandomGroup() {
  const randIndex = Math.floor(Math.random() * (groups.length + 1));

  return groups[randIndex];
}
