
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox } from '../../../components/ui/checkbox'





const CheckBoxComp = ({ row }: any) => {
    const [isCheck, setIsCheck] = useState(false)
  







    return (
        <div className=''>


            <Checkbox
                checked={row.getIsSelected()}



                aria-label="Select row"
                className="translate-y-[2px]"
            />
        </div>
    )
}

export default CheckBoxComp




