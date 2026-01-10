import { Sparkles, Heart, Leaf } from "lucide-react";

export const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '5000+', label: 'Clients Treated' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '50+', label: 'Expert Specialists' },
];


export const services = [
    {
        icon: Sparkles,
        title: "Anti-Aging & Regenerative",
        description: "Cutting-edge treatments that reverse the signs of aging at a cellular level. Stem cell therapies, NAD+ infusions, and personalized regenerative protocols.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auhref=format&fit=crop",
        link: "/services#anti-aging",
    },
    {
        icon: Heart,
        title: "Aesthetic Treatments",
        description: "Refined aesthetic procedures that enhance your natural beauty. Non-surgical facelifts, skin rejuvenation, and body contouring by expert practitioners.",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auhref=format&fit=crop",
        link: "/services#aesthetic",
    },
    {
        icon: Leaf,
        title: "Lifestyle & Prevention",
        description: "Comprehensive lifestyle optimization programs. Nutrition counseling, stress management, sleep optimization, and preventive health screenings.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auhref=format&fit=crop",
        link: "/services#lifestyle",
    },
];