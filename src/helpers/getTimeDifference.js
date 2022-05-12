export const getTimeDifference = (postDate) => {
	const datePosted = new Date(postDate);
	const timeNow = new Date();
	const millisec = Math.floor(timeNow - datePosted);
	const sec = Math.floor(millisec / 1000);
	if (sec > 59) {
		const min = Math.floor(sec / 60);
		if (min > 59) {
			const hours = Math.floor(min / 60);
			if (hours > 23) {
				const days = Math.floor(hours / 24);
				if (days > 30) {
					const months = Math.floor(days / 30);
					if (months > 11) {
						console.log(
							datePosted.toLocaleDateString("en-us", {
								day: "numeric",
								year: "numeric",
								month: "short",
							})
						);
						return datePosted.toLocaleDateString("en-us", {
							day: "numeric",
							year: "numeric",
							month: "short",
						});
					} else {
						console.log(months);
						return `${months}mo ago`;
					}
				} else {
					console.log(days);
					return `${days}d ago`;
				}
			} else {
				console.log(hours);
				return `${hours}h ago`;
			}
		} else {
			console.log(min);
			return `${min}min ago`;
		}
	} else {
		return `${sec}s ago`;
	}
};
