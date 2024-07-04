import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { PortableText } from "next-sanity";

let getdata = async () => {
  let fetchdata = await client.fetch(`*[_type == "Student"]{
  name,
  age,
  gender,
  "imageUrl": image.asset->url,
  Hobbey,
  about,
  dob,
  "documentUrl": documents.asset->url,
  address {
    street,
    streetNo,
    city
  },
  Subject,
  content
}`);
  return fetchdata;
};

export default async function Home() {
  let data = await getdata();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="max-w-5xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">
          SANITY BACKEND DATA USE FOR NEXT JS
        </h1>
        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((val: any, i: number) => (
            <li 
              key={i}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <h2 className="text-xl font-bold">{val.name}</h2>
              <p><span className="font-semibold">Age:</span> {val.age}</p>
              <p><span className="font-semibold">Gender:</span> {val.gender}</p>
              <p><span className="font-semibold">Hobbies:</span> {val.Hobbey?.join(", ")}</p>
              <p><span className="font-semibold">About:</span> {val.about?.join(", ")}</p>
              <p><span className="font-semibold">Date of Birth:</span> {val.dob}</p>
              {val.imageUrl && (
                <div className="mt-2">
                  <Image
                    src={val.imageUrl}
                    alt={val.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
              )}
              {val.documentUrl && (
                <div className="mt-2">
                  <a
                    href={val.documentUrl}
                    className="text-blue-600 hover:underline"
                    download
                  >
                    Download Document
                  </a>
                </div>
              )}
              <p className="mt-2">
                Address: {val.address?.street}, {val.address?.streetNo},{" "}
                {val.address?.city}
              </p>
              <p><span className="font-semibold">Subjects:</span> {val.Subject?.join(", ")}</p>                 
             <PortableText value={data[0].content}/>,                    
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
// this is for type block and content rendered 
// write "Presenting Portable Text"
//go to "Rendering Portable Text in React" and go to library "'@portabletext/react'" and install 
//in last rendered time "<PortableText value={data[0].content}"