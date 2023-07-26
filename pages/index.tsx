import Image from "next/image";
import { Inter } from "next/font/google";
import { useContactsQuery } from "@/services/contactsApi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, error, isLoading, isSuccess, isFetching } = useContactsQuery();
  console.log(data)
  return (
    <>
      <div>
        <h1>Hello from rtk Query</h1>
        {isLoading && 
        <div>loading...</div>
        }
        {error && 
        <div>
          <h1>There is something wrong</h1>
        </div>
        }

        {
          isSuccess && (
            <div>
              {data?.map((contact)=> 
              <h1 key={contact.id}>{contact.name}</h1>
              )}
            </div>
          )
        }
      </div>
    </>
  );
}
