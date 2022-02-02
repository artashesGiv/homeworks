import {Slider} from 'antd'
import React from 'react'

type SuperDoubleRangePropsType = {
   onChangeRange?: (value: [number, number]) => void
   value?: [number, number]
   min?: number
   max?: number
   disable?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
   {
      onChangeRange, value,
      min, max, disable,
   },
) => {

   return (
      <div style={{width: '300px'}}>
         {/*Slider from ant design*/}
         <Slider range defaultValue={value} onChange={onChangeRange} value={value} min={min} max={max}
                 disabled={disable}/>
      </div>
   )
}

export default SuperDoubleRange
