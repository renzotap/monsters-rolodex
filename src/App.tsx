import { useState, useEffect, ChangeEvent} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

import getData from './utils/data.utils'

export type Monster = {
  id: string;
  name:string;
  email: string;
}

//////////////////////FUNCTIONAL COMPONENT////////////////
const App = () =>{
  
  // const [title, setTitle] = useState('');
  const [searchField,setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  
  console.log('render');

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);


  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  },[monsters, searchField])


  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
  // const onTitleChange = (event) => {
  //   const searchFieldString = event.target.value.toLocaleLowerCase();
  //   setTitle(searchFieldString);
  // }
  
  
  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <br />
      {/*  <SearchBox 
        className='title-search-box'
        onChangeHandler={onTitleChange} 
        placeholder='search set title' 
      /> */}
      <CardList  monsters={filteredMonsters} />
    </div>
  );
} 
 /////////////////////////CLASS COMPONENT/////////////////
// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters:[],
//       searchField: '',
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => {
//           return{monsters: users};
//         })
//     );
    
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(()=>{
//       return{searchField};
//       }
//     ); 
//   }

//   render() {
//     // console.log('render from App.js')
//     const{monsters, searchField}= this.state;
//     const{onSearchChange}= this;
//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'> Monster's Rolodex</h1>
//         <SearchBox 
//           className='monsters-search-box'
//           onChangeHandler={onSearchChange} 
//           placeholder='search monsters'
//         />
//         <CardList monsters={filteredMonsters}  />
        
//       </div>
//     );

//   }
// }

export default App; 