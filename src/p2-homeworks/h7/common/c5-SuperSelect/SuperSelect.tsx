import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
   options?: any[]
   onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
   {
      options,
      onChange, onChangeOption,
      ...restProps
   },
) => {
   const mappedOptions = options?.map((o, i) => <option key={o + '-' + i}>{o}</option>)

   const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange && onChange(e)
      onChangeOption && onChangeOption(e.currentTarget.value)
   }

   return (
      <select onChange={onChangeCallback} {...restProps}>
         {mappedOptions}
      </select>
   )
}

export default SuperSelect
