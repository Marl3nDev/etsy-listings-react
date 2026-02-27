import Listing from './Listing'
import data from './data/etsy.json'
import { Item } from './types'

function App() {
  const items: Item[] = data as Item[]
  return (
    <div className="container">
      <div className="product-grid">
        <Listing items={items} />
      </div>
    </div>
  )
}

export default App
