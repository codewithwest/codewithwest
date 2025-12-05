import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Settings } from "lucide-react";

interface SettingsCardProps {
  url: string;
  header: string;
  description: string;
}

export const SettingsCard = ({
  header,
  description,
  url,
}: SettingsCardProps) => {
  return (
    <Link href={url ?? ""}>
      <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="flex flex-row items-center gap-4">
            <Settings className="w-8 h-8 text-primary" />
            <div className="flex-1">
                <CardTitle>{header ?? ""}</CardTitle>
                <CardDescription>{description ?? ""}</CardDescription>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
        </CardHeader>
      </Card>
    </Link>
  );
};
