import coldStorage from "./cold-storage.png";
import doorToDoor from "./door-to-door.png";
import road from "./road.png";
import warehouse from "./warehouse.png";

const ImgServices1 = [
   { id: 1, title: "Packaging & Storage", description: "Packaging is the technology of enclosing and protecting product.", image: warehouse, alt: "packages" },
   { id: 2, title: "Cold Storage", description: "Special Storage.", image: coldStorage, alt: "cold storage" },
];

const ImgServices2 = [
   { id: 1, title: "Delivery", description: "Bring products anywhere in the Philippines", image: doorToDoor, alt: "Delivery" },
   { id: 2, title: "Ground Support", description: "We provide transport support.", image: road, alt: "Ground Support" },
];

const ImgServices = [ImgServices1, ImgServices2];

export default ImgServices;
