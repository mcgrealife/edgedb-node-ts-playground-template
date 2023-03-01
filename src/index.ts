import { createClient } from 'edgedb'

const client = createClient()

const sayHello = (subject: string): void => {
  console.log('Hello23npm inarlasdL  ' + subject)
}

sayHello('TypeScript')
