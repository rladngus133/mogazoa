import { Response } from "./common";

export type ReviewResponsePage = {
	pageParams: [];
	pages: ReviewResponse[];
};

export type ReviewResponse = Response<Review>;

export type Review = {
	user: {
		image: string | null;
		nickname: string;
		id: number;
	};
	reviewImages: ReviewImages[];
	productId: number;
	userId: number;
	updatedAt: string;
	createdAt: string;
	isLiked: boolean;
	likeCount: number;
	content: string;
	rating: number;
	id: number;
};

export type ReviewImages = {
	source: string;
	id: number;
};

export type ReviewDelete = {
	productId: number;
	userId: number;
	updatedAt: string;
	createdAt: string;
	isLiked: boolean;
	likeCount: number;
	content: string;
	rating: number;
	id: number;
};

export type img = { id: number } | { source: string };

export type Images = img[];
