/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function FormModal({
  formData,
  onSubmit,
  buttonLabel,
  modalTrigger,
  setSelectValue,
  selectValue,
  imageComponent,
  initialData,
}: {
  formData: {
    title: string;
    description: string;
    form: {
      [key: string]: string | number | { value: string; label: string }[];
    }[];
  };
  onSubmit: (values: any) => void;
  setSelectValue?: (any: any) => void;
  selectValue?: string;
  initialData?: { [key: string]: string | number };
  buttonLabel: string;
  modalTrigger: React.ReactNode;
  imageComponent?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const formSchema = () => {
    return Yup.object().shape({
      ...Object.fromEntries(
        formData.form.map((field) => [
          field.name,
          field.type === "number" ? Yup.number() : Yup.string(),
        ])
      ),
    });
  };

  console.log("option.value", selectValue);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{modalTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Formik
          initialValues={{ ...initialData }}
          validationSchema={formSchema}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            setSubmitting(false);
            setIsOpen(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <DialogHeader>
                <DialogTitle>{formData.title}</DialogTitle>
                <DialogDescription>{formData.description}</DialogDescription>
              </DialogHeader>
              {imageComponent}

              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  {formData.form.map((field, index) => (
                    <React.Fragment key={index}>
                      <Label htmlFor={field.name as string} className="">
                        {typeof field.label === "string" ||
                        typeof field.label === "number"
                          ? field.label
                          : ""}
                      </Label>

                      {field.type === "select" ? (
                        <Select>
                          <SelectTrigger className="w-full col-span-3">
                            <SelectValue placeholder={selectValue} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {Array.isArray(field.options) &&
                                field.options.map((option, index) => (
                                  <SelectItem
                                    key={index}
                                    value={option.value}
                                    onClick={() => {
                                      if (setSelectValue) {
                                        setSelectValue((prev: any) => ({
                                          ...prev,
                                          [field.name as string]: option.value,
                                        }));
                                      }
                                    }}
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      ) : (
                        <Field
                          type={field.type as string}
                          placeholder={field.placeholder as string}
                          id={field.name as string}
                          name={field.name as string}
                          className="col-span-3"
                          as={Input}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isSubmitting}>
                  {buttonLabel}
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
