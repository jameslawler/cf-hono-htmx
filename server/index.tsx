import { Hono } from 'hono'
import api from './api'
import web from './web'

const app = new Hono()

app.route('/api', api);
app.route('/', web);

export default app
