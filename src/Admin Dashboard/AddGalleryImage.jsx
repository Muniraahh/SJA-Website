import React, { useCallback, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDropzone } from 'react-dropzone';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ImagePlus, Plus, X } from "lucide-react";
import toast from 'react-hot-toast';

const formSchema = z.object({
    title: z.string().min(2).max(100),
    description: z.string().max(500).optional(),
    image: z.instanceof(File).refine((file) => file.size !== 0, "Please upload an image"),
    tags: z.array(z.string()),
});

const AddGalleryImageForm = () => {
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            image: new File([""], "filename"),
            tags: [""],
        },
    });

    const { fields: tagFields, append: appendTag, remove: removeTag } = useFieldArray({
        control: form.control,
        name: "tags",
    });

    const onDrop = useCallback(
        (acceptedFiles) => {
            const reader = new FileReader();
            try {
                reader.onload = () => setPreview(reader.result);
                reader.readAsDataURL(acceptedFiles[0]);
                form.setValue("image", acceptedFiles[0]);
                form.clearErrors("image");
            } catch (error) {
                setPreview(null);
                form.resetField("image");
            }
        },
        [form],
    );

    const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
        onDrop,
        maxFiles: 1,
        maxSize: 10000000,
        accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });

    function onSubmit(values) {
        console.log("Gallery image data:", values);
        toast.success('Image added successfully!');
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }

    return (
        <div className="mx-4 p-8 rounded-lg my-12 shadow-[0_0_40px_-15px_rgba(0,0,0,0.3)]">
            <h1 className="text-4xl font-bold text-center mb-4">Add Gallery Image</h1>
            <Separator className="my-4" />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Image title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description (optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Image description" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Upload Image</FormLabel>
                                <FormControl>
                                    <div
                                        {...getRootProps()}
                                        className="flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border-2 border-dashed border-gray-300 p-6"
                                    >
                                        {preview ? (
                                            <img
                                                src={preview}
                                                alt="Preview"
                                                className="max-h-[300px] rounded-lg object-cover"
                                            />
                                        ) : (
                                            <ImagePlus className="h-20 w-20 text-gray-400" />
                                        )}
                                        <Input {...getInputProps()} type="file" className="hidden" />
                                        {isDragActive ? (
                                            <p>Drop the image here ...</p>
                                        ) : (
                                            <p className="text-center text-sm text-gray-600">
                                                Drag 'n' drop an image here, or click to select one
                                            </p>
                                        )}
                                    </div>
                                </FormControl>
                                <FormMessage>
                                    {fileRejections.length !== 0 && (
                                        <p className="text-sm text-red-500">
                                            Image must be less than 10MB and of type png, jpg, or jpeg
                                        </p>
                                    )}
                                </FormMessage>
                            </FormItem>
                        )}
                    />

                    <div>
                        <FormLabel>Tags</FormLabel>
                        {tagFields.map((field, index) => (
                            <FormField
                                key={field.id}
                                control={form.control}
                                name={`tags.${index}`}
                                render={({ field }) => (
                                    <FormItem className="flex items-center gap-2 mt-2">
                                        <FormControl>
                                            <Input {...field} placeholder="Enter a tag" />
                                        </FormControl>
                                        <Button type="button" variant="ghost" size="icon" onClick={() => removeTag(index)}>
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </FormItem>
                                )}
                            />
                        ))}
                        <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => appendTag("")}>
                            <Plus className="h-4 w-4 mr-2" /> Add Tag
                        </Button>
                    </div>

                    <Button type="submit" className="w-full">Add Gallery Image</Button>
                </form>
            </Form>
        </div>
    );
};

export default AddGalleryImageForm;
