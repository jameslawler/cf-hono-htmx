import type { FC } from 'hono/jsx'
import Layout from '../components/layout'

const HomePage: FC<{ messages: string[] }> = (props: {
  messages: string[]
}) => {
  return (
    <Layout>
      <h1>Hello Hono!</h1>
      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>
        })}
      </ul>
      <button hx-get="/api/ping" hx-target="#result">
        Ping
      </button>

      <div id="result"></div>
    </Layout>
  )
}

export default HomePage