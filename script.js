const download = document.querySelector(".download-icon");

download.addEventListener("click", () => {
  downloadVideo();
});

function downloadVideo() {
  const link = document.createElement("a");
  link.href = "./ai-video.mp4"; // Update with your video file path
  link.download = "ai-video.mp4"; // Update with your desired file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
