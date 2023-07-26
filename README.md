# 1 CreateAPi and fetchbaseUrl
```
import { Contact } from '@/models/contact.model'
import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const contactsApi = createApi({
    reducerPath : "contactsApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000/'}),
    endpoints : (builder)=> ({
        contacts: builder.query<Contact[], void>({
            query: () => '/contacts'
        }),
    })
})

export const { useContactsQuery  } = contactsApi;

```
Contact is an interface which is imported
```
export interface Contact {
    "id" : string,
    "name" : string,
    "email" : string
}
```

# 2. configure Store and export store
```
import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "@/services/contactsApi";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

```

# 3 import useQueryHook from Api and destructure 
##  const { data, error, isLoading, isSuccess, isFetching } = useContactsQuery();
