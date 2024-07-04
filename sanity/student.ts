export const Student = {
  name: "Student",
  type: "document",
  title: "Student Profile",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Student Name",
    },
    {
      name: "age",
      type: "number",
      title: "Student Age",
      hidden: ({ document }: any) => document.name === "Aqsa Naveed",
      readonly: ({ document }: any) => document.name === "HAFIZ NAVEED UDDIN",
    },
    {
      name: "gender",
      type: "string",
      title: "Gender",
      options: {
        list: [
          { title: "Male", value: "male" },
          { title: "Female", value: "female" },
          { title: "Transgender", value: "Transgender" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "image",
      type: "image",
      title: "Student Image",
    },
    {
      name: "Hobbey",
      type: "array",
      title: "Hobbey",
      of: [{ type: "string" }],
    },
    {
      name: "about",
      type: "array",
      title: "About",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "dob",
      type: "date",
      title: "Date of Birth",
    },
    {
      name: "documents",
      type: "file",
      title: "Upload File",
    },
    {
      name: "address",
      type: "object",
      title: "Address",
      fields: [
        { name: "street", type: "string", title: "House Number" },
        { name: "streetNo", type: "string", title: "Area Name" },
        { name: "city", type: "string", title: "City" },
      ],
    },
    {
      name: "Subject",
      type: "array",
      title: "Choose Subject",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Javascript", value: "js" },
          { title: "TypeScript", value: "Ts" },
          { title: "Next.js", value: "njs" },
          { title: "Sql", value: "sql" },
        ],
      },
    },
    {
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}]
    }
    
  ],
};
