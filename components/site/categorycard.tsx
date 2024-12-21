import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
    icon: React.ComponentType<{ className: string }>;
    title: string;
    description: string;
}

const CategoryCard = ({ icon: Icon, title, description }: CategoryCardProps) => (
    <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
            <CardTitle className="flex items-center space-x-2">
                <Icon className="h-6 w-6 text-blue-600" />
                <span>{title}</span>
            </CardTitle>
        </CardHeader>

        <CardContent>
            <p className="text-gray-600">{description}</p>
        </CardContent>
    </Card>
);

export default CategoryCard;