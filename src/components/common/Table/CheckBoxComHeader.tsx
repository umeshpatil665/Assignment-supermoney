


import React, { useEffect, useState } from 'react';
import { Checkbox } from '../../../components/ui/checkbox';

type SelectAllState = boolean | "indeterminate";

const CheckBoxComHeader = ({ table }: any) => {
    const [selectAll, setSelectAll] = useState<SelectAllState>(false);



    return (
        <div>
            <Checkbox
                data-testid="direct-check"
                checked={selectAll === true || selectAll === "indeterminate"}
                // onCheckedChange={handleCheckedChange}
                aria-label="Select all"
                className="translate-y-[2px] border border-gray-300"
            />
        </div>
    );
};

export default CheckBoxComHeader;