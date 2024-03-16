import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Trash } from "lucide-react";
import { MouseEvent } from "react";

const DeleteDrawer = ({
  title,
  onConfirmClick,
}: {
  title: string;
  onConfirmClick: () => void;
}) => {
  return (
    <Drawer>
      <DrawerTrigger
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
        }}
      >
        <Trash className="w-5 h-5 hover:text-red-600" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>
            Do you really want to delete "<b>{title}</b>"?This action cannot be
            undone.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant="destructive" onClick={onConfirmClick}>
            Yes, delete it.
          </Button>
          <DrawerClose>
            <Button variant="outline" className="block w-full">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DeleteDrawer