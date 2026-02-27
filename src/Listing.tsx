import { Item } from './types'

interface ListingProps {
  items: Item[]
}

function Listing({ items }: ListingProps) {
  const formatPrice = (price: string, currency: string) => {
    switch (currency) {
      case 'USD':
        return `$${price}`
      case 'EUR':
        return `€${price}`
      case 'GBP':
        return `£${price}`
      default:
        return `${currency} ${price}`
    }
  }

  const getStockClass = (quantity: number) => {
    if (quantity <= 10) return 'stock-low'
    if (quantity <= 20) return 'stock-medium'
    return 'stock-high'
  }

  const truncateTitle = (title: string) => {
    if (title.length > 50) {
      return title.substring(0, 50) + '...'
    }
    return title
  }

  const activeItems = items.filter(item => item.state === 'active')

  return (
    <>
      {activeItems.map((item) => (
        <div key={item.listing_id} className="product-card">
          {item.is_digital && <span className="digital-badge">Digital</span>}
          <img src={item.MainImage.url_570xN} alt={item.title} className="product-image" />
          <div className="product-info">
            <h3 className="product-title">{truncateTitle(item.title)}</h3>
            <div className="price-container">
              <div className="product-price">{formatPrice(item.price, item.currency_code)}</div>
              <span className={`stock-badge ${getStockClass(item.quantity)}`}>{item.quantity} left</span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Listing
