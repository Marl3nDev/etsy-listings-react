interface MainImage {
  url_570xN: string;
}

interface Item {
  listing_id: number;
  url: string;
  MainImage: MainImage;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
  state: string;
  is_digital: boolean;
}

export type { Item };
