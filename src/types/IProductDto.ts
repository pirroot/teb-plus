export interface IProductCategoryDto {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  Is_active: boolean;
  is_deleted: boolean;
  product?: IProductDto[];
}

export interface IProductDto {
  id: string;
  id_product: string;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  model_name: string;
  images: string[];
  price: number;
  is_offer: boolean;
  offer_percent?: number;
  rating: number;
  size: string[];
  colors: string[];
  features: IFeaturesDto[];
  comments?: IProductCommentDto[];
  favorites_number: number;
  is_active: boolean;
  is_deleted: boolean;
  category: IProductCategoryDto;
}

interface IFeaturesDto {
  title: string;
  value: string[];
}

export interface IProductCommentDto {
  id: string;
  name: string;
  email: string;
  description: string;
  rate: number;
  is_active: boolean;
  is_deleted: boolean;
}
