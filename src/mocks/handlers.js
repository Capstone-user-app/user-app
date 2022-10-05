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
        packageStatus: 4,
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
  }),
  rest.get('api/purchases/:id', (req, res, ctx) => {
    // returns a mocked list of purchases
    const sales = {
      'packageId': 'de933a81-3549-47f8-a21e-3d78f6aa8764',
      'pinflagId': 'y676au',
      'saleOrder': '001234567',
      'packageStatus': 7,
      'state': 'Valparaíso',
      'stateId': 5,
      'city': 'El Tabo',
      'cityId': 5605,
      'clickAndCollect': true,
      'evidencePhoto': null,
      'height': 12,
      'width': 12,
      'length': 30,
      'position': null,
      'warehouseName': 'Bodega testing',
      'warehouseId': 15,
      'deliveryAddress': 'La direccion 1234',
      'deliveryInstructions': null,
      'clientEmail': 'diego.valdes@lippioutdoor.com',
      'clientName': 'Diego valdes ',
      'clientLastName': '',
      'clientPhone': '+56962474699',
      'products': [
        {
          'productName': 'Polera roja',
          'sku': '1111',
          'price': 1222,
          'weight': 12,
          'photoUrl': [
            {
              'URLIMAGEN': 'https://falabella.scene7.com/is/image/Falabella/gsc_112914611_458594_1?wid=800&hei=800&qlt=70'
            }
          ]
        },
        {
          'productName': 'Polera negra',
          'sku': '1112',
          'price': 1222,
          'weight': 12,
          'photoUrl': [
            {
              'URLIMAGEN': 'https://falabella.scene7.com/is/image/Falabella/gsc_113000798_489801_1?wid=1500&hei=1500&qlt=70'
            },
            {
              'URLIMAGEN': 'https://via.placeholder.com/200x120.png'
            }
          ]
        }
      ],
      'packageHistory': [
        {
          'packageStatus': 1,
          'date': '2022-03-11T02:27:35.243Z'
        },
        {
          'packageStatus': 2,
          'date': '2022-03-11T02:30:26.493Z'
        },
        {
          'packageStatus': 3,
          'date': '2022-03-11T02:31:25.020Z'
        },
        {
          'packageStatus': 4,
          'date': '2022-03-11T02:35:56.873Z'
        },
        {
          'packageStatus': 7,
          'date': '2022-03-11T02:38:37.067Z'
        }
      ],
      'trackingNumber': null,
      'courier': 'bluexpress',
      'shippingCost':
      {
        'price': 125,
        'courier': 'bluexpress',
        'delivery_time': '2-5 días hábiles'
      },
      'cost': 11111
    }

    // return a mocked list of purchases and status 200
    return res(
      ctx.status(200),
      ctx.json(sales)
    )
  }),
  rest.get('api/purchases/:id', (req, res, ctx) => {
    // returns a mocked list of purchases
    const sales = {
      'packageId': 'de933a81-3549-47f8-a21e-3d78f6aa8764',
      'pinflagId': 'y676au',
      'saleOrder': '001234567',
      'packageStatus': 7,
      'state': 'Valparaíso',
      'stateId': 5,
      'city': 'El Tabo',
      'cityId': 5605,
      'clickAndCollect': true,
      'evidencePhoto': null,
      'height': 12,
      'width': 12,
      'length': 30,
      'position': null,
      'warehouseName': 'Bodega testing',
      'warehouseId': 15,
      'deliveryAddress': 'La direccion 1234',
      'deliveryInstructions': null,
      'clientEmail': 'diego.valdes@lippioutdoor.com',
      'clientName': 'Diego valdes ',
      'clientLastName': '',
      'clientPhone': '+56962474699',
      'products': [
        {
          'productName': 'Polera roja',
          'sku': '1111',
          'price': 1222,
          'weight': 12,
          'photoUrl': [
            {
              'URLIMAGEN': 'https://falabella.scene7.com/is/image/Falabella/gsc_112914611_458594_1?wid=800&hei=800&qlt=70'
            }
          ]
        },
        {
          'productName': 'Polera negra',
          'sku': '1112',
          'price': 1222,
          'weight': 12,
          'photoUrl': [
            {
              'URLIMAGEN': 'https://falabella.scene7.com/is/image/Falabella/gsc_113000798_489801_1?wid=1500&hei=1500&qlt=70'
            },
            {
              'URLIMAGEN': 'https://via.placeholder.com/200x120.png'
            }
          ]
        }
      ],
      'packageHistory': [
        {
          'packageStatus': 1,
          'date': '2022-03-11T02:27:35.243Z'
        },
        {
          'packageStatus': 2,
          'date': '2022-03-11T02:30:26.493Z'
        },
        {
          'packageStatus': 3,
          'date': '2022-03-11T02:31:25.020Z'
        },
        {
          'packageStatus': 4,
          'date': '2022-03-11T02:35:56.873Z'
        },
        {
          'packageStatus': 7,
          'date': '2022-03-11T02:38:37.067Z'
        }
      ],
      'trackingNumber': null,
      'courier': 'bluexpress',
      'shippingCost':
      {
        'price': 125,
        'courier': 'bluexpress',
        'delivery_time': '2-5 días hábiles'
      },
      'cost': 11111
    }

    // return a mocked list of purchases and status 200
    return res(
      ctx.status(200),
      ctx.json(sales)
    )
  }),
  rest.get('api/ticket', (req, res, ctx) => {
    const ticket = [
      {
        saleOrder: '00123456700',
        ticketId: '123456789',
        Ecommerce: 'Lippi',
        imageEcommerce: null,
        ticketStatus: 6,
        ticketTipe: 4,
        fecha1:  '2022-03-11',
        fecha2:  '2022-03-11',
        fecha3:  '2022-03-11',
        fecha4:  '2022-03-11',
        fecha5:  '2022-03-11'
      },
      {
        saleOrder: '001987654',
        ticketId: '198765432',
        Ecommerce: 'WD-40',
        imageEcommerce: null,
        ticketStatus: 5,
        ticketTipe: 3,
        fecha1:  '2022-03-11',
        fecha2:  '2022-03-11',
        fecha3:  '2022-03-11',
        fecha4:  '2022-03-11',
        fecha5:  '2022-03-11'
      }]
      return res(
        ctx.status(200),
        ctx.json(ticket)
    )
  })
]

