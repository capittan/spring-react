import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ICategoryCreate } from "./types";

const CreateCategoryPage = () => {

    const [previewImage, setPreviewimage] = useState<string>("");

    const [model, setModel] = useState<ICategoryCreate>({
        name: "",
        description: "",
        file: null
    });

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setModel({ ...model, [e.target.name]: e.target.value });
        // console.log("Event data: ", e.target.name);
        // console.log("Event data: ", e.target.value);
    }

    const onFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files) {
            const file = files[0];
            setModel({ ...model, file });
            setPreviewimage(URL.createObjectURL(file));
        }
    }

    const navigator = useNavigate();
    const onFormSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:8086/api/categories", model,
                {
                    headers: { "Content-type": "multipart/form-data" }
                });
            console.log("Server result ", result);
            navigator("/");

        } catch (e: any) {
            console.log("Error sending !");
        }
    }

    return (
        <div className="p-8 rounded border border-gray-200">
            <h1 className="font-medium text-3xl text-center">Add category</h1>
            <form onSubmit={onFormSubmitHandler}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Photo</label>

                    <div className="mt-1 flex items-center">
                        <label htmlFor="selectImage" className="inline-block w-20 overflow-hidden bg-gray-100">

                            {previewImage === "" ? (
                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <img src={previewImage}></img>
                            )}

                        </label>

                        <label htmlFor="selectImage" className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-indigo-500 focus:ring-offset-2">
                            Select photo
                        </label>
                    </div>

                    <input type="file" onChange={onFileHandler} id="selectImage" className="hidden" />
                </div>

                <div className="mt-8 grid lg:grid-cols-1 gap-4">
                    <div>
                        <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Name</label>
                        <input onChange={onChangeHandler} type="text" name="name" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter name of category" />
                    </div>

                    <div>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <textarea onChange={onChangeHandler} id="description" name="description" value={model.description} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter a desctiption"></textarea>
                    </div>
                </div>

                <div className="space-x-4 mt-8 flex justify-end">
                    <Link to="/" className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</Link>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
                </div>
            </form>
        </div>
    )
}
export default CreateCategoryPage;