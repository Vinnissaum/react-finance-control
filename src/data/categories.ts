import { CategoryType } from "../types/Category";

export const categories: CategoryType = {
  food: { title: 'Feeding', color: 'rgb(61, 183, 228)', expense: true },
  rent: { title: 'Rent', color: 'rgb(255, 136, 73)', expense: true },
  salary: { title: 'Salary', color: 'rgb(105, 190, 40)', expense: false },
}