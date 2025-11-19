import React, { ReactElement, ReactNode } from 'react'
import { FieldProps } from '@/types/types'

const Field = ({label, children, htmlFor, error}:FieldProps) => {
    const id = htmlFor || getChildId(children)

  return (
    <div className='form-control mb-4'>
       {label && <label className='mb-1 block text-sm text-gray-700 dark:text-gray-400' htmlFor={id}>{label}</label>}
       {children}
       {!!error && <div role='alert' className='text-red-500'>{error.message}</div>}
    </div>
  )
}

function getChildId(children:ReactNode){
    const child = React.Children.only(children) as ReactElement<{id?:string}>;
    return child?.props?.id
}

export default Field