import { DataTable_2 } from "@/components/common/Table/data-table-style-1";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { column } from "./colums";
import { UserFormData } from "./moduls";
import { getFormValue } from "@/helpers/crud-helper/formsetValue";

const UserMain = () => {
  const [data, setData] = useState<UserFormData[]>();
  let values = getFormValue();
  useEffect(() => {
    if (Array.isArray(values) && values?.length > 0) {
      setData(values);
    } else return;
  }, []);
  const navigate = useNavigate();
  return (
    <Card className="w-full h-full flex flex-col p-4 space-y-4">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h2 className="text-base font-semibold">Users</h2>
        <Button variant="outline" onClick={() => navigate("/add-user")}>
          Add User
        </Button>
      </div>

      <div className="w-full flex-1 overflow-x-auto">
        <DataTable_2
          columns={column}
          data={data || []}
          isLoading={false}
          dataQAkey=""
          height=""
          hidePaggination={true}
          pageIndexChange={(e) => console.log(e)}
          paggination={{}}
        />
      </div>
    </Card>
  );
};

export default UserMain;
