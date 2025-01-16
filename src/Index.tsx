import{
ShoppingCart,
Home,
Smartphone,
Monitor,
Tv,
Shirt,
Gamepad2,
Baby,
Dumbbell,
Flower,
PackageCheck,
Truck,
Gift,
Store,
ShoppingBag,
Heart,
Package,
} from "lucide-react";

export const categories = [
    {
      name: "Supermarket",
      icon: <ShoppingCart className="w-5 h-5" />,
    },
    {
      name: "Health & Beauty",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      name: "Home & Office",
      icon: <Home className="w-5 h-5" />,
    },
    {
      name: "Phones & Tablets",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      name: "Computing",
      icon: <Monitor className="w-5 h-5" />,
    },
    {
      name: "Electronics",
      icon: <Tv className="w-5 h-5" />,
    },
    {
      name: "Fashion",
      icon: <Shirt className="w-5 h-5" />,
    },
    {
      name: "Gaming",
      icon: <Gamepad2 className="w-5 h-5" />,
    },
    {
      name: "Baby Products",
      icon: <Baby className="w-5 h-5" />,
    },
    {
      name: "Sporting Goods",
      icon: <Dumbbell className="w-5 h-5" />,
    },
    {
      name: "Garden & Outdoors",
      icon: <Flower className="w-5 h-5" />,
    },
  ];
  
  export const services = [
    {
      name: "Sell on ShopHub",
      icon: <Store className="w-5 h-5" />,
    },
    {
      name: "ShopHub Prime",
      icon: <ShoppingBag className="w-5 h-5" />,
    },
    {
      name: "Track Your Order",
      icon: <Package className="w-5 h-5" />,
    },
    {
      name: "Bulk Purchase",
      icon: <PackageCheck className="w-5 h-5" />,
    },
    {
      name: "ShopHub Express Delivery",
      icon: <Truck className="w-5 h-5" />,
    },
    {
      name: "Gift Cards",
      icon: <Gift className="w-5 h-5" />,
    },
  ];