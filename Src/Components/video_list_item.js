import React from 'react';

const VideoListItem = ({video}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		<li className="video-group-item">
			<div className="video-list media">
				<div classname="media-left">
					<img className="media-object" />
				</div>	
				<div className="media-body">
				<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
	
};

export default VideoListItem;