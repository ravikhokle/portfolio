export type Plan = {
  id: string; // slug
  name: string;
  price: number; // INR
};

export const PLANS: Plan[] = [
  {
    id: 'wordpress',
    name: 'WordPress Business Website',
    price: 10000,
  },
  {
    id: 'nextjs-mernn',
    name: 'Custom Business Website (Next.js/MERN)',
    price: 15000,
  },
];

export function getPlanById(id?: string | null): Plan | undefined {
  if (!id) return undefined;
  return PLANS.find((p) => p.id === id);
}
