import { useState } from 'react';
import useSearchFilter from './useSearchFilter.jsx';
import './Namelist.css'

function Namelist() {
  const [items, setItems] = useState(['Лимара', 'Сара', 'Асыл']);
  const [newItem, setNewItem] = useState('');
  const { search, setSearch, filteredItems } = useSearchFilter(items);

  const handleAdd = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  return (
    <div className="namelist-container">
        <p><strong>👥Қолданышулар тізімі</strong></p>
      <div className="input-group">
        <input
          type="text"
          placeholder="Жаңа ат енгізіңіз..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAdd}>Қосу</button>
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Іздеу..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Іздеу</button> 
      </div>
      {filteredItems.map((item)=>{

        return(
            <div>
                <p>{item}</p>
            </div>
        )
      })}
    </div>
  );
}

export default Namelist;
