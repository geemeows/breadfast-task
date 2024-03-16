import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Eye } from "lucide-react";

const ViewPostModal = ({
  title,
  body,
  userId,
}: {
  title: string;
  body: string;
  userId: number;
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Eye className="w-5 h-5 hover:text-blue-400" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            <div className="mt-3">{body}</div>
            <div className="mt-2"><span className="font-semibold">Created by:</span> {userId}</div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ViewPostModal;