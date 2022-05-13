import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useInfiniteScroll = ({ lastElement, allPosts }) => {
	const totalPages = Math.ceil(allPosts.length / 6);
	const [pageNum, setPageNum] = useState(0);
	const { pathName } = useLocation();
	useEffect(() => {
		const elementRef = lastElement.current;
		const handleObserver = (entries) => {
			const target = entries[0];
			if (
				target.isIntersecting &&
				(pageNum < totalPages || (pageNum === 0 && totalPages === 0))
			) {
				setPageNum((prev) => prev + 1);
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
	return { pageNum };
};
