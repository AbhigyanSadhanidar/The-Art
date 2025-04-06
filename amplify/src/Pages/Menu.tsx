  import InfiniteMenu from "../Animations/InfiniteMenu";
const items = [
  {
    image: "https://images.unsplash.com/photo-1470162656305-6f429ba817bf",
    link: "https://google.com/",
    title: "Item 1",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://images.unsplash.com/photo-1547825407-2d060104b7f8",
    link: "https://google.com/",
    title: "Item 2",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://images.unsplash.com/photo-1567922045116-2a00fae2ed03",
    link: "https://google.com/",
    title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291",
    link: "https://google.com/",
    title: "Item 4",
    description: "This is pretty cool, right?",
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen  min-w-screen">
      <InfiniteMenu items={items} />
    </div>
  );
};

export default Menu;
