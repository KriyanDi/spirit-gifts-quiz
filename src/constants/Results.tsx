export interface Column {
  title: string;
  description: string;
  questionsIds: number[];
}

export const ColumnResult: Column[] = [
  { title: "Пророкуване и назидание", description: "Да ти харесва да казваш истината в очите.", questionsIds: [1, 8, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78] },
  { title: "Учителство и проповядване", description: "Да ти харесва да учиш другите хора зa Бога.", questionsIds: [2, 9, 16, 23, 30, 37, 44, 51, 58, 65, 72, 79] },
  { title: "Насърчение и увещание", description: "Да умееш да виждаш доброто  в другите.", questionsIds: [3, 10, 17, 24, 31, 38, 45, 52, 59, 66, 73, 80] },
  { title: "Милосърдие и състрадание", description: "Да се интересуваш от чувствата на другите.", questionsIds: [4, 11, 18, 25, 32, 39, 46, 53, 60, 67, 74, 81] },
  { title: "Прислужване и шетане", description: "Да ти харесва да чистиш след другите хора.", questionsIds: [5, 12, 19, 26, 33, 40, 47, 54, 61, 68, 75, 82] },
  { title: "Раздаване и финанси", description: "Да умееш да работиш с пари.", questionsIds: [6, 13, 20, 27, 34, 41, 48, 55, 62, 69, 76, 83] },
  { title: "Администрация и управление", description: "Да ти харесва да ръководиш другите хора.", questionsIds: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84] },
];
