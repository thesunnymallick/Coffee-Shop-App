import { ImageProps } from 'react-native';

export interface Categories {
  id: number;
  name: string;
}

export interface Prices {
  size: string;
  price: string;
  currency: string;
}

export interface CARDITEM {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: ImageProps;
  imagelink_portrait: ImageProps;
  ingredients: string;
  special_ingredient: string;
  prices: Prices[],
  average_rating: number;
  ratings_count: number | string;
  favourite: boolean;
  type: string;
  index: number;
}
