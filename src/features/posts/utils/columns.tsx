import { ColumnDef } from "@tanstack/react-table";
import { FilePenLine } from "lucide-react"
import { Post } from "../../../types";
import { Skeleton } from "@/components/ui/skeleton"
import DeleteDrawer from "../components/DeleteDrawer";
import axiosClient from '@/utils/axios'
import { toast } from "@/components/ui/use-toast";
import { NavigateFunction } from "react-router-dom";
import ViewPostModal from "../components/ViewPostModal";


export const getTableColumns: (
  pending: boolean,
  navigate: NavigateFunction,
  updateList: () => void
) => ColumnDef<Post>[] = (pending, navigate, updateList) => [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) =>
      pending ? (
        <Skeleton className="w-[250px] h-[10px] rounded-full" />
      ) : (
        <div className="w-[250px] truncate">{row.getValue("title")}</div>
      ),
  },
  {
    accessorKey: "body",
    header: "Post Body",
    cell: ({ row }) =>
      pending ? (
        <Skeleton className="w-[250px] h-[10px] rounded-full" />
      ) : (
        <div className="w-[250px] truncate">{row.getValue("body")}</div>
      ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const { id, title, body, userId } = row.original;
      const onDeletePost = async () => {
        try {
          await axiosClient.delete(`/posts/${id}`);
          toast({
            title: "Post Delete",
            description: "Your post is deleted successfully!",
          });
          updateList();
        } catch (err) {
          toast({
            variant: "destructive",
            title: "Post Update",
            description: "Something went wrong while deleting your post!",
          });
        }
      };

      return (
        <div className="flex gap-2">
          <ViewPostModal title={title} body={body} userId={userId} />
          <FilePenLine
            className="cursor-pointer w-5 h-5 hover:text-blue-400"
            onClick={() => {
              navigate(`/post/${id}`);
            }}
          />
          <DeleteDrawer title={title} onConfirmClick={onDeletePost} />
        </div>
      );
    },
  },
];
