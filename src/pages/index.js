import Layout from '../components/Layouts/Layout'
import styles from '../styles/Home.module.css'
import SearchInput from '../components/SearchInput/SearchInput'
import CountriesTable from '../components/CountriesTable/CountriesTable';
import { useState } from 'react';

export const getStaticProps = async ()=>{
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json()

  return {
    props:{
      countries,
    }
  }
}
export default function Home({countries}) {
  const [keyword, setKeyword] = useState("")
  const filteredCountries = countries.filter((country)=>
    country.name.toLowerCase().includes(keyword)||
    country.region.toLowerCase().includes(keyword)||
    country.subregion.toLowerCase().includes(keyword)
  )
  const onInputChange = (e)=>{
    setKeyword(e.target.value.toLowerCase())
  }
  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.input}>
          <SearchInput 
          onChange={onInputChange} 
          placeholder="Filter by name, region or sub-region 🌍" />
        </div>
        <div className={styles.count}>
        Found <span>{countries.length}</span> Countries in total 🥳
        </div>
      </div>
      
      <CountriesTable countries={filteredCountries} />
    </Layout>
  )
}
