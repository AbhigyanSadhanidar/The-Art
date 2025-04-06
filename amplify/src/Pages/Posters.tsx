import FlyingPosters from "../Animations/FlyingPosters";

 const items = [
  "https://images.unsplash.com/photo-1547891654-e66ed7ebb968",
  "https://plus.unsplash.com/premium_photo-1672287578309-2a2115000688",
  "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119",
  "https://images.unsplash.com/photo-1579541814924-49fef17c5be5",
];
const Posters = () => {
  return (
    <>
   
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div style={{ height: "100vh", position: "relative" }}>
          <FlyingPosters className="bg-[#39e0d25d]" items={items} />
        </div>
      </div>
      ;
    </>
  );
};

export default Posters;
