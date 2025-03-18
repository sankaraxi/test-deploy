function convertYouTubeLink(youtubeUrl) {
    const url = new URL(youtubeUrl);
    let videoId = "";
    
    // Check if it's a youtu.be short link
    if (url.hostname.includes("youtu.be")) {
        videoId = url.pathname.substring(1);
    } 
    // Check if it's a normal youtube.com watch URL
    else if (url.hostname.includes("youtube.com") && url.searchParams.has("v")) {
        videoId = url.searchParams.get("v");
    }
    
    // Construct the embed URL
    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1`;
    } else {
        return "Invalid YouTube URL";
    }
}

export default convertYouTubeLink;