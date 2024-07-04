export const Teacher = {
  name: "Teacher",
  type: "document",
  title: "Teacher Profile",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Teacher Name",
      validation: (rule:any) => rule.required().min(10).max(80),
      // hidden: ({document}:any) => !document?.name    //origional conditonal field
    },
    {
        name: "age",
        type: "number",
        title: "Teacher age",
        validation: (rule:any)=> rule.max(50).warning('Shorter titles are usually better'),//validate
        hidden: ({document}:any) => document.name === "zia khan"//condition field
      },
      
      {
        name: "subject",    //reference
        type: "reference",
        title: "select subject",
        to:[{type:"subjects"}],
        hidden: ({document}:any) => document.age >= 30 //condition field
      },
      {
        name: "Student",     //reference
        type: "reference",
        title: "select Student",
        to:[{type:"Student"}]
      },
  ],
};
