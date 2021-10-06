import { Category } from "../types/Category";

export const categories: Category = {
  food: { title: 'Alimentação' , color: 'blue' , expense: true },
  rent: { title: 'Aluguel' , color: 'brown' , expense: true },
  salary: { title: 'Salário' , color: 'green' , expense: false },
  house: { title: 'Dispesa de casa' , color: 'orange' , expense: true },
  other: { title: 'Outros' , color: 'light-red' , expense: true },
}