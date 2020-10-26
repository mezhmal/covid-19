import { useSelector } from 'react-redux'
import Country from '../components/Country'

export default function Countries() {
  const countries = useSelector(state => state.countries)
  return (
    <section>
      <h2>Countries</h2>
      { countries.map(country => <Country data={country} />) }
    </section>
  )
}