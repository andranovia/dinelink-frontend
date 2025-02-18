import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";

export function ConfirmModal({
  modalTrigger,
  onSubmit,
  buttonLabel,
  title,
  description,
  iconImage,
}: {
  modalTrigger: React.ReactNode;
  onSubmit: () => void;
  buttonLabel: string;
  title: string;
  description: string;
  iconImage: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{modalTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="space-y-4">
          <DialogTitle>{title}</DialogTitle>
          <div className="flex justify-center items-center space-x-2 w-full h-[7rem] rounded-md bg-slate-100">
            <div className="p-4 bg-slate-200 rounded-full">{iconImage}</div>
          </div>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start grid-cols-2 grid">
          <DialogClose asChild className="col-span-1">
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
          <Button
            type="submit"
            className="col-span-1"
            onClick={() => {
              onSubmit();
              setIsOpen(false);
            }}
          >
            {buttonLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
