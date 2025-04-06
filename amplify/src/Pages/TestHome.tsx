 import bgvideo from "../../src/assets/videobg.mp4";
 
const TestHome = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-[#000000c5] absolute top-0 left-0 w-screenh-screen"></div>
      <video
        src={bgvideo}
        muted
        autoPlay
        loop
        className="min-h-screen  min-w-screen object-cover"
      ></video>
    </div>
  );
};

export default TestHome;
