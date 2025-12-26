import type { FC } from 'hono/jsx'

const Layout: FC = (props) => {
  return (
    <html>
      <body>
        <>{props.children}</>
        <script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.8/dist/htmx.min.js" integrity="sha384-/TgkGk7p307TH7EXJDuUlgG3Ce1UVolAOFopFekQkkXihi5u/6OCvVKyz1W+idaz" crossorigin="anonymous"></script>
      </body>
    </html>
  )
}

export default Layout
