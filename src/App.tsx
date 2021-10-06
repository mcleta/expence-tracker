import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';


const App = () => {

  const [ list, setList ] = useState( items );
  const [ filteredList, setFilteredList ] = useState<Item[]>( [] );
  const [ currentMonth, setCurrentMonth ] = useState( getCurrentMonth() );

  useEffect( () => {
    setFilteredList( filterListByMonth( list, currentMonth ) )
  }, [ list, currentMonth ] );

  return(
    <C.Container>

      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        
        {/* Área de informações */}

        {/* Área de incerção */}

        {/* Tabela de itens */}

      </C.Body>

    </C.Container>
  );
};

export default App;