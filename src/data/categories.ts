import { Category } from "./../types/Category";

// expense -- false
export const categories: Category = {
  food: { title: "Alimentação", color: "blue", expense: true },
  rent: { title: "Aluguel", color: "brown", expense: true },
  salary: { title: "Salário", color: "green", expense: false },
};
