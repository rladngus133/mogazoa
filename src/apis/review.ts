import { Images, Review, ReviewDelete } from "@/types/review";

import instance from "./axiosInstance";

export async function postReviewLike(reviewid: number) {
	await instance.post<Review>(`reviews/${reviewid}/like`);
}

export async function deleteReviewLike(reviewid: number) {
	await instance.delete<Review>(`reviews/${reviewid}/like`);
}

export async function createReview(
	productId: number,
	images: string[],
	content: string,
	rating: number,
) {
	const res = await instance.post<Review>("reviews", {
		productId,
		images,
		content,
		rating,
	});

	return res.data;
}

export async function deleteReview(reviewid: number | undefined) {
	await instance.delete<ReviewDelete>(`reviews/${reviewid}`);
}

export async function modifyReview(
	reviewId: number,
	images: Images,
	content: string,
	rating: number,
) {
	const res = await instance.patch<Review>(`reviews/${reviewId}`, {
		images,
		content,
		rating,
	});

	return res.data;
}
