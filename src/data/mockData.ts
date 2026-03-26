import { MenuItem } from '../context/CartContext';

export const menuData: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Thali',
    description: 'A wholesome meal with dal, two sabzis, rice, roti, and sweet.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1000&auto=format&fit=crop',
    category: 'Lunch',
    isBestseller: true,
    isVegetarian: true,
  },
  {
    id: '2',
    name: 'Paneer Butter Masala',
    description: 'Rich and creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.',
    price: 220,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?q=80&w=1000&auto=format&fit=crop',
    category: 'Dinner',
    isBestseller: true,
    isVegetarian: true,
  },
  {
    id: '3',
    name: 'Chicken',
    description: 'Crispy pastry filled with spiced potatoes and peas, served with mint chutney.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1000&auto=format&fit=crop',
    category: 'Breakfast',
    isBestseller: false,
    isVegetarian: false,
  },
  {
    id: '4',
    name: 'Grilled Chicken',
    description: 'Soft, melt-in-your-mouth, grilled chicken pieces marinated in a blend of traditional spices.',
    price: 80,
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=1000&auto=format&fit=crop',
    category: 'Snacks',
    isBestseller: true,
    isVegetarian: false,
  },
  {
    id: '5',
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice cooked with tender chicken pieces and a blend of traditional spices.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop',
    category: 'Dinner',
    isBestseller: true,
    isVegetarian: false,
  },
  {
    id: '6',
    name: 'Masala Dosa',
    description: 'Crispy rice and lentil crepe stuffed with a spiced potato filling, served with sambar and chutney.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?q=80&w=1000&auto=format&fit=crop',
    category: 'Breakfast',
    isBestseller: true,
    isVegetarian: true,
  },
  {
    id: '7',
    name: 'Rajma Chawal',
    description: 'A comforting dish of red kidney beans in a thick gravy with many Indian whole spices, served with steamed rice.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop',
    category: 'Lunch',
    isBestseller: false,
    isVegetarian: true,
  },
  {
    id: '8',
    name: 'Samosa',
    description: 'Crispy pastry filled with spiced potatoes and peas, served with mint chutney.',
    price: 80,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?q=80&w=1000&auto=format&fit=crop',
    category: 'Snacks',
    isBestseller: false,
    isVegetarian: true,
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    text: 'The food tastes exactly like what my grandmother used to make. Absolutely authentic and delicious!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Rahul Desai',
    text: 'Finally found a place that serves hygienic, home-style meals. The Classic Thali is my daily go-to.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Anita Verma',
    text: 'The sweets are to die for! Not too sugary, just the perfect balance of flavors and tradition.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop'
  }
];
