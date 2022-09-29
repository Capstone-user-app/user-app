// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw'

// eslint-disable-next-line import/prefer-default-export
export const handlers = [
  rest.post('api/login', (req, res, ctx) =>
    // Persist user's authentication in the session

    // sessionStorage.setItem('is-authenticated', 'true')
    // eslint-disable-next-line implicit-arrow-linebreak
    res(
      // Respond with a 200 status code
      ctx.status(200)
    )
  ),
  rest.get('user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    // eslint-disable-next-line no-inline-comments
    const isAuthenticated = true // sessionStorage.getItem('is-authenticated')
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized'
        })
      )
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin'
      })
    )
  }),
  rest.get('api/purchases', (req, res, ctx) => {
    // returns a mocked list of purchases
    const purchases = [
      {
        products: [
          {
            name: 'Product 1',
            price: 100
          },
          {
            name: 'Product 2',
            price: 200
          }
        ],
        orden_venta: '123456',
        fecha_venta: '2020-01-01',
        estado_venta: 'Pendiente',
        marca: 'Lippi',
        imagen: 'https://picsum.photos/200/300'
      },
      {
        products: [
          {
            name: 'Product 3',
            price: 300
          },
          {
            name: 'Product 4',
            price: 400
          }
        ],
        orden_venta: '123457',
        fecha_venta: '2020-01-02',
        estado_venta: 'Pendiente',
        marca: 'Lippi',
        imagen: 'https://picsum.photos/200/300'
      }
    ]

    // return a mocked list of purchases and status 200
    return res(
      ctx.status(200),
      ctx.json(purchases)
    )
  })
]
