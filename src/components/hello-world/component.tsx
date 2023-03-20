import { FC, PropsWithChildren } from 'react'

export interface IHelloWorld extends PropsWithChildren {
  name: string
}

export const HelloWorld: FC<IHelloWorld> = (props: IHelloWorld) => {
  return (
    <>
      <div>Hello {props.name}</div>

      {props.children}
    </>
  )
}
