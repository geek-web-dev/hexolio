import { TriangleAlert } from "lucide-react";

type FormErrorProps = {
  message?: string;
};

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 p-[14px] rounded-md mt-4 flex items-center gap-x-2 text-sm text-destructive">
      <TriangleAlert className="h-4 w-4" />
      <p className="text-red-500">{message}</p>
    </div>
  );
};

export default FormError;
