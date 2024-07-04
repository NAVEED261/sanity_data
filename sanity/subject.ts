// Sanity me defineType new content type banata hai aur defineField us type ke under specific fields define karta hai. Yeh content ko structured, consistent, aur manageable banata hai. Isse data validation aur Sanity Studio me content creation easy ho jata hai.
import { defineType, defineField } from "sanity"

// New content type 'subjects' create kar rahe hain
export let subject = defineType({
    name: "subjects", // Unique name for this type
    type: "document", // Type of the content
    title: "subjects", // Title shown in Sanity Studio
    fields: [
        // Fields inside 'subjects' type
        defineField({
            name: "subject", // Unique name for this field
            type: "string", // Type of data this field will store
            title: "enter subject" // Title shown in Sanity Studio
        })
    ]
})
