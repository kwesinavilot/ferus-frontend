import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
    icon: React.ComponentType<{ className: string }>;
    title: string;
    description: string;
}

const CategoryCard = ({ icon: Icon, title, description }: CategoryCardProps) => (
    <Card className="shadow-none hover:shadow-lg transition-shadow">
        <CardHeader>
            <CardTitle className="flex items-center space-x-2">
                <Icon className="h-6 w-6 text-blue-600" />
                <span>{title}</span>
            </CardTitle>
        </CardHeader>

        <div className="h-0.5 w-1/4 bg-gradient-to-r from-teal-300 to-sky-300 mx-6" />

        <CardContent className="px-6 pb-6 pt-3">
            <p className="text-gray-600">{description}</p>
        </CardContent>
    </Card>
);

export default CategoryCard;