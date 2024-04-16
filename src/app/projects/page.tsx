"use client";

import projectApiRequest from "@/apiRequests/project";
import { DataTable } from "@/components/data-table";
import { QUERY_KEY } from "@/constants";
import { useQuery } from "react-query";
import { columns } from "./columns";

const Project = () => {
  const { data: projectsList, isLoading } = useQuery({
    queryKey: [QUERY_KEY.GET_PROJECTS],
    queryFn: async () => {
      return await projectApiRequest.getList();
    },
  });

  return (
    <section>
      <div className="container">
        <h1 className="text-3xl font-bold mb-5">All projects</h1>
        {isLoading && <p>Loading...</p>}
        {projectsList && (
          <DataTable columns={columns} data={projectsList?.payload.results} />
        )}
      </div>
    </section>
  );
};

export default Project;
