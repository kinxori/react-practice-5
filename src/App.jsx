import { useState } from 'react'
import "./App.css"
import SearchBar from './components/SearchBar';
import Table from './components/Table'
import getPeople from './utils/getPeople'
import './components/SearchBar.css';

const users = getPeople();

export default function App() {

  const [showTable, setShowTable] = useState(users)

const handleSearch = (string)=>{
  const filteredUsers = users.filter((user)=>{
    const lowerCaseString = string.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(lowerCaseString) 
      || 
      user.lastName.toLowerCase().includes(lowerCaseString)
      ||
      user.email.toLowerCase().includes(lowerCaseString)
      ||
      user.amount.toLowerCase().includes(lowerCaseString)
    )
  })
  setShowTable(filteredUsers)
}

  return (
    <>
    <SearchBar>
      <div className="searchBar">
        <div>
          <input type="text" placeholder="Search" onChange={({target:{value}})=>{handleSearch(value)}} />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i> 
          </button>
        </div>
        <span>Results: {showTable.length}</span>
      </div>
    </SearchBar>

    <Table>
      {showTable.map((user,i)=>{
        const isEven = i%2===0
        return (
          <>
            <p className={isEven ? 'even':'odd'}>
              {user.firstName}
            </p>
            <p className={isEven ? 'even':'odd'}>
              {user.lastName}
            </p>
            <p className={isEven ? 'even':'odd'}>
              {user.email}
            </p>
            <p className={isEven ? 'even':'odd'}>
              $ {user.amount} MXN
            </p>
          </>
        )
      })}
    </Table>
    </>
  )
}

