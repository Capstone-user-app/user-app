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
  rest.get('api/sales', (req, res, ctx) => {
    // returns a mocked list of purchases
    const sales = [
      {
        saleOrder: '001234567',
        Ecommerce: 'Lippi',
        imageEcommerce: 'https://www.lippioutdoor.com/static/version1664570782/frontend/Linets/Lippi/es_AR/images/logo.png',
        packageStatus: 7,
        products: [
          {
            productName: 'Polera roja',
            photoUrl: [
              {
                'URLIMAGEN': 'https: //via.placeholder.com/200x120.png'
              }
            ]
          },
          {
            productName: 'Polera negra',
            photoUrl: [
              {
                'URLIMAGEN': 'https: //via.placeholder.com/200x120.png'
              },
              {
                'URLIMAGEN': 'https: //via.placeholder.com/200x120.png'
              }
            ]
          },
          {
            productName: 'Polera roja',
            photoUrl: [
              {
                'URLIMAGEN': 'https: //via.placeholder.com/200x120.png'
              }
            ]
          },
          {
            productName: 'Polera roja',
            photoUrl: [
              {
                'URLIMAGEN': 'https: //via.placeholder.com/200x120.png'
              }
            ]
          }
        ],
        packageHistory: [
          {
            packageStatus: 1,
            date: '2022-03-11T02:27:35.243Z'
          },
          {
            packageStatus: 2,
            date: '2022-03-11T02:30:26.493Z'
          },
          {
            packageStatus: 3,
            date: '2022-03-11T02:31:25.020Z'
          },
          {
            packageStatus: 4,
            date: '2022-03-11T02:35:56.873Z'
          },
          {
            packageStatus: 7,
            date: '2022-03-11T02:38:37.067Z'
          }
        ]
      },
      {
        saleOrder: '001234567',
        Ecommerce: 'Lippi',
        imageEcommerce: null,
        packageStatus: 7,
        products: [
          {
            productName: 'Polera roja',
            photoUrl: [
              {
                'URLIMAGEN': 'https: //via.placeholder.com/200x120.png'
              }
            ]
          },
          {
            productName: 'Polera negra',
            photoUrl: [
              {
                'URLIMAGEN': 'https: //via.placeholder.com/200x120.png'
              },
              {
                'URLIMAGEN': 'https: //via.placeholder.com/200x120.png'
              }
            ]
          }
        ],
        packageHistory: [
          {
            packageStatus: 1,
            date: '2022-03-11T02:27:35.243Z'
          },
          {
            packageStatus: 2,
            date: '2022-03-11T02:30:26.493Z'
          },
          {
            packageStatus: 3,
            date: '2022-03-11T02:31:25.020Z'
          },
          {
            packageStatus: 4,
            date: '2022-03-11T02:35:56.873Z'
          },
          {
            packageStatus: 7,
            date: '2022-03-11T02:38:37.067Z'
          }
        ]
      }
    ]

    // return a mocked list of purchases and status 200
    return res(
      ctx.status(200),
      ctx.json(sales)
    )
  })
]
