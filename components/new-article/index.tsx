import * as Yup from 'yup'

import React, { useState } from 'react';

import ArticleServices from '@/services/article.service';
import TextEditor from '../Editor';
import TextInput from '../core/text-input';
import toasts from '@/utils/toasts';
import { useFormik } from 'formik';

interface ArticleFormProps {
    data?: {
        title: string;
        description: string;
        body: string;
        tagList: string[];
        slug: string;
    }
}

const ArticleForm: React.FC<ArticleFormProps> = ({ data }) => {
    const [loading, setLoading] = useState(false)
    const { handleSubmit, ...form } = useFormik({
        initialValues: {
            title: data?.title || "",
            description: data?.description || "",
            body: data?.body || "",
            tags: data?.tagList.join(",") || ""
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Title is required'),
            description: Yup.string()
                .required('Description is required'),
            body: Yup.string()
                .required('Body is required'),
            tags: Yup.string()
                .required('Tags are required')
        }),
        onSubmit: (values) => {
            const tagsArray = values.tags.split(',').map(tag => tag.trim());
            const body = {
                ...values,
                tagList: tagsArray
            }

            setLoading(true)
            if (!data) {
                ArticleServices.createArticle(body, (err, data) => {
                    setLoading(false)
                    if (err) {
                        toasts.error("Failed", err)
                    } else {
                        form.resetForm();
                        toasts.success("Success", "Article created successfully")
                    }
                })
            } else {
                ArticleServices.updateArticle(data.slug, body, (err, data) => {
                    setLoading(false)
                    if (err) {
                        toasts.error("Failed", err)
                    } else {
                        // form.resetForm();
                        toasts.success("Success", "Article updated successfully")
                    }
                })
            }

        }
    })

    return (
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
                <TextInput
                    id='title'
                    label='Title'
                    required
                    {...form}
                />
            </div>
            <div className="mb-4">
                <TextInput
                    id='description'
                    label='Description'
                    required
                    {...form}
                />
            </div>
            <div className="mb-4">
                <TextInput
                    id='tags'
                    label='Tags (Seperate by commas)'
                    required
                    {...form}
                />
            </div>
            <div className="mb-4">
                <TextEditor id='body'
                    label='Body'
                    required
                    {...form} />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className={`bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400`}
                    type="submit"
                    disabled={loading}
                >
                    {
                        loading ? "Hang on..." : data ? "Update Article" : "Create Article"
                    }
                </button>
            </div>
        </form>
    );
};

export default ArticleForm;
