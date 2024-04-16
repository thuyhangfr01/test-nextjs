import { TProjectResponse } from "@/common";
import { LOCAL_STORAGE } from "@/constants";
import http from "@/lib/http"; 
import { getItemLocalStorage } from "@/lib/utils";

const accessToken: string | null = getItemLocalStorage(LOCAL_STORAGE.ACCESS_TOKEN);

const projectApiRequest = {
    getList: () => http.get<TProjectResponse>('/projects', {
        cache: 'no-store',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
    })
}

export default projectApiRequest;