import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useInfiniteScroll = ({ lastElement, allPosts }) => {
	const totalPages = Math.ceil(allPosts.length / 6);
	const [pageNum, setPageNum] = useState(1);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const elementRef = lastElement.current;
		console.log(elementRef);
		const handleObserver = (entries) => {
			const target = entries[0];
			if (
				target.isIntersecting &&
				(pageNum < totalPages || (pageNum === 0 && totalPages === 0))
			) {
				setLoading(true);
				setPageNum((prev) => prev + 1);
				setTimeout(() => setLoading(false), 1000);
			}
		};
		const observer = new IntersectionObserver(handleObserver);
		if (elementRef) {
			observer.observe(elementRef);
		}
		return () => {
			observer.unobserve(elementRef);
		};
	}, []);
	return { pageNum, loading };
};
