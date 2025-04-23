
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  coverImage: string;
  description: string;
  duration: string;
  totalLessons: number;
  progress?: number;
  category?: string;
  className?: string;
  onEnroll?: (id: string) => void;
  onContinue?: (id: string) => void;
  buttonText?: string;
  buttonAction?: (id: string) => void;
}

export function CourseCard({
  id,
  title,
  instructor,
  coverImage,
  description,
  duration,
  totalLessons,
  progress,
  category,
  className,
  onEnroll,
  onContinue,
  buttonText,
  buttonAction
}: CourseCardProps) {
  const handleButtonClick = () => {
    if (buttonAction) {
      buttonAction(id);
    } else if (progress && progress > 0) {
      onContinue && onContinue(id);
    } else {
      onEnroll && onEnroll(id);
    }
  };

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          {category && (
            <Badge variant="outline" className="bg-purple-100">
              {category}
            </Badge>
          )}
        </div>
        <CardDescription>{instructor}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-3 text-sm text-muted-foreground">
          <span>{duration}</span>
          <span>{totalLessons} lessons</span>
        </div>
        {typeof progress === 'number' && (
          <div className="mt-3">
            <div className="flex justify-between mb-1 text-xs">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-1" />
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          onClick={handleButtonClick}
        >
          {buttonText || (progress && progress > 0 ? 'Continue Learning' : 'Enroll Now')}
        </Button>
      </CardFooter>
    </Card>
  );
}
