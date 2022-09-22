import { rest } from 'msw'

export const handlers = [
    rest.post('api/login', (req, rest, ctx) => {

        return res(
            ctx.status(200),
        )
    })
]