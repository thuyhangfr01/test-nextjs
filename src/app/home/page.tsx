"use client";

import tasksApiRequest from "@/apiRequests/tasks";
import { QUERY_KEY } from "@/constants";
import { useQuery } from "react-query";

const HomePage = () => {
  const { data: dataList } = useQuery({
    queryKey: [QUERY_KEY.GET_DATA],
    queryFn: async () => {
      return await tasksApiRequest.get();
    },
  });

  console.log({ dataList });
  return (
    <div>
      <h1>Home pageee</h1>
      {dataList?.payload.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default HomePage;
