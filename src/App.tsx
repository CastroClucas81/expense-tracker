import React from "react";
import * as C from "./App.styles";

//components
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";

// types
import { Item } from "./types/Item";

// items
import { items } from "./data/items";
import { categories } from "./data/categories";

//helper
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { InputArea } from "./components/InputArea";

export default function App() {
  const [list, setList] = React.useState<Item[]>(items);
  //list com datas filtradas
  const [filteredList, setFilteredList] = React.useState<Item[]>([]);

  const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth());
  const [income, setIncome] = React.useState(0);
  const [expense, setExpense] = React.useState(0);

  React.useEffect(() => {
    //vai filtrar e gerar uma nova lista
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  React.useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  function handleMonthChange(newMonth: string) {
    setCurrentMonth(newMonth);
  }

  function handleAddItem(item: Item) {
    let newList = [...list];
    newList.push(item);
    console.log(newList);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* área de informações */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* área de inserção */}
        <InputArea onAdd={handleAddItem} />

        {/* área de itens */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}
