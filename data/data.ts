import { Heart, Leaf, Dna, Brain } from "lucide-react";

export const stats = [
    { value: '5000+', label: 'Clients Treated' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '50+', label: 'Expert Specialists' },
];


export const services = [
    {
        icon: Brain,
        title: "Epigenetics & Longevity Intelligence",
        description:
            "Understand your biology. Redefine your future. Move beyond surface-level health with epigenetic testing, biological age insights, and truly personalised longevity strategies.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
        link: "/services#epigenetics",
    },
    {
        icon: Dna,
        title: "Anti-Aging & Regenerative",
        description: "Cutting-edge treatments that reverse the signs of aging at a cellular level. Stem cell therapies, NAD+ infusions, and personalized regenerative protocols.",
        image: "https://images.unsplash.com/photo-1728727267814-792db55ce678?q=80&w=2070&auhref=format&fit=crop",
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
