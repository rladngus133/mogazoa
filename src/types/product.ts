import { CategoryList, Response } from "./common";

export type ProductDetail = {
	id: number;
	name: string;
	description: string;
	image: string;
	rating: number;
	reviewCount: number;
	favoriteCount: number;
	categoryId: number;
	createdAt: string;
	updatedAt: string;
	writerId: number;
	isFavorite: boolean;
	category: {
		id: number;
		name: CategoryList;
	};
	categoryMetric: {
		rating: number;
		favoriteCount: number;
		reviewCount: number;
	};
};

export type Product = {
	id: number;
	name: string;
	image: string;
	rating: number;
	reviewCount: number;
	favoriteCount: number;
	categoryId: number;
	createdAt: string;
	updatedAt: string;
	writerId: number;
};

export type ProductNames = {
	name: string;
};

export type ProductNamesResponse = {
	list: ProductNames[];
	nextCursor: any;
};

export type PostProducts = {
	categoryId: number;
	image: string;
	description: string;
	name: string;
};

export type ProductsResponse = Response<Product>;

export type UserProductType =
	| "created-products"
	| "reviewed-products"
	| "favorite-products";

export type GetProductsParams = {
	keyword?: string;
	category?: number;
	order?: Order;
	cursor?: number;
};

export type Order = "recent" | "rating" | "reviewCount";
