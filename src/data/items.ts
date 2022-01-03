// em teoria, isso deve vir do banco de dados
import { Item } from "./../types/Item";

//tipando um array
export const items: Item[] = [
  {
    date: new Date(2022, 1, 15),
    category: "food",
    title: "McDonalds",
    value: 32.12,
  },
  {
    date: new Date(2022, 1, 15),
    category: "food",
    title: "Burguer King",
    value: 28,
  },
  {
    date: new Date(2022, 1, 16),
    category: "rent",
    title: "Aluguel do mês",
    value: 2300,
  },
  {
    date: new Date(2022, 2, 18),
    category: "salary",
    title: "Salário ACME",
    value: 4500,
  },
];
