import { CheckCircle2 } from "lucide-react";

type FormSuccessProps = {
  message?: string;
};

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15 p-[14px] rounded-md mt-4 flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircle2 className="h-4 w-4" />
      <p className="text-green-500">{message}</p>
    </div>
  );
};

export default FormSuccess;
