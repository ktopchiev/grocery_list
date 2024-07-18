import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from "react";
import apiRequest from './apiRequest';

function App() {
  const API_URL = 'http://localhost:3500/items';

  //The state that we initially load the project
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //If you’re not trying to synchronize with some external system, you probably don’t need an Effect.
  //To connect your component to some external system, call useEffect at the top level of your component.
   useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not received expect data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        console.log(err.message);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  
    (async () => await fetchItems())();
   }, [])

  //Adding new item to the list of items
  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  }

  //If some of the items is checked, this will change the checked property of the object, according to users action
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  //Delete an item from the items list
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  //Submit the additions through the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App" >
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p style={{ color: "red" }}>{ `Error: ${fetchError}` }</p>}
        {!fetchError && !isLoading &&
          <Content
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />}
      </main>
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
