import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';


const App = () => {

  const [ list, setList ] = useState( items );
  const [ filteredList, setFilteredList ] = useState<Item[]>( [] );
  const [ currentMonth, setCurrentMonth ] = useState( getCurrentMonth() );
  const [ income, setInCome ] = useState( 0 );
  const [ expense, setExpense ] = useState( 0 );

  useEffect( () => {
    setFilteredList( filterListByMonth( list, currentMonth ) )
  }, [ list, currentMonth ] );

  const handleMonthChange = ( newMonth: string ) => {
    setCurrentMonth( newMonth );
  };



  return(
    <C.Container>

      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        
        {/* Área de informações */}
        <InfoArea 
          currentMonth={ currentMonth } 
          onMonthChange={ handleMonthChange }
          income={ income }
          expense={ expense }
        />

        {/* Área de incerção */}

        {/* Tabela de itens */}
        <TableArea list={ filteredList } />

      </C.Body>

    </C.Container>
  );
};

export default App;