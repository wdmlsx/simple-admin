const devices = [
  {
    id: 'device:10.10.10.10',
    type: 'switch',
    status: true
  },
  {
    id: 'device:10.10.10.11',
    type: 'switch',
    status: true
  },
  {
    id: 'device:10.10.10.12',
    type: 'switch',
    status: true
  },
  {
    id: 'device:10.10.10.13',
    type: 'switch',
    status: true
  },
  {
    id: 'device:10.10.10.14',
    type: 'switch',
    status: true
  },
  {
    id: 'device:10.10.10.15',
    type: 'switch',
    status: true
  },
  {
    id: 'device:10.10.10.16',
    type: 'switch',
    status: true
  },
  {
    id: 'device:10.10.10.17',
    type: 'switch',
    status: true
  },
  {
    id: 'device:10.10.10.18',
    type: 'switch',
    status: true
  },
  {
    id: 'device:10.10.10.19',
    type: 'switch',
    status: true
  },
  {
    id: 'device:10.10.10.20',
    type: 'switch',
    status: true
  },
  {
    id: 'device:10.10.10.21',
    type: 'switch',
    status: true
  },
  {
    id: 'device:10.10.10.22',
    type: 'switch',
    status: true
  }
]

export default {
  deviceList() {
    return devices
  },
  links() {
    return [
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.10',
            port: '1'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.11',
            port: '1'
          }
        },
        type: 'wireless'
      },
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.10',
            port: '2'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.12',
            port: '1'
          }
        },
        type: 'wireless'
      },
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.10',
            port: '3'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.13',
            port: '1'
          }
        },
        type: 'wireless'
      },
      //
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.11',
            port: '2'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.14',
            port: '1'
          }
        },
        type: 'wireless'
      },
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.11',
            port: '3'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.15',
            port: '1'
          }
        },
        type: 'wireless'
      },
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.11',
            port: '4'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.16',
            port: '1'
          }
        },
        type: 'wireless'
      },
      //
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.12',
            port: '2'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.17',
            port: '1'
          }
        },
        type: 'wireless'
      },
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.12',
            port: '3'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.18',
            port: '1'
          }
        },
        type: 'wireless'
      },
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.12',
            port: '4'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.19',
            port: '1'
          }
        },
        type: 'wireless'
      },
      //
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.13',
            port: '2'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.20',
            port: '1'
          }
        },
        type: 'wireless'
      },
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.13',
            port: '3'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.21',
            port: '1'
          }
        },
        type: 'wireless'
      },
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.13',
            port: '4'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.22',
            port: '1'
          }
        },
        type: 'wireless'
      },
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.13',
            port: '5'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.22',
            port: '2'
          }
        },
        type: 'wireless'
      },
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.13',
            port: '6'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.22',
            port: '3'
          }
        },
        type: 'wireless'
      },
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.13',
            port: '7'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.22',
            port: '4'
          }
        },
        type: 'wireless'
      },
      {
        src: {
          key: {
            deviceId: 'device:10.10.10.13',
            port: '8'
          }
        },
        dst: {
          key: {
            deviceId: 'device:10.10.10.22',
            port: '5'
          }
        },
        type: 'wireless'
      }
    ]
  },
  routerList() {
    return [
      {
        key: {
          src: '10.10.10.10',
          dst: '10.10.10.19'
        },
        links: [
          {
            src: {
              key: {
                deviceId: 'device:10.10.10.10',
                port: '2'
              }
            },
            dst: {
              key: {
                deviceId: 'device:10.10.10.12',
                port: '1'
              }
            },
            type: 'wireless'
          },
          {
            src: {
              key: {
                deviceId: 'device:10.10.10.12',
                port: '4'
              }
            },
            dst: {
              key: {
                deviceId: 'device:10.10.10.19',
                port: '1'
              }
            },
            type: 'wireless'
          }
        ]
      },
      {
        key: {
          src: '10.10.10.18',
          dst: '10.10.10.22'
        },
        links: [
          {
            dst: {
              key: {
                deviceId: 'device:10.10.10.12',
                port: '3'
              }
            },
            src: {
              key: {
                deviceId: 'device:10.10.10.18',
                port: '1'
              }
            },
            type: 'wireless'
          },
          {
            dst: {
              key: {
                deviceId: 'device:10.10.10.10',
                port: '2'
              }
            },
            src: {
              key: {
                deviceId: 'device:10.10.10.12',
                port: '1'
              }
            },
            type: 'wireless'
          },
          {
            src: {
              key: {
                deviceId: 'device:10.10.10.10',
                port: '3'
              }
            },
            dst: {
              key: {
                deviceId: 'device:10.10.10.13',
                port: '1'
              }
            },
            type: 'wireless'
          },
          {
            src: {
              key: {
                deviceId: 'device:10.10.10.13',
                port: '7'
              }
            },
            dst: {
              key: {
                deviceId: 'device:10.10.10.22',
                port: '4'
              }
            },
            type: 'wireless'
          }
        ]
      },
      {
        key: {
          src: '10.10.10.15',
          dst: '10.10.10.22'
        },
        links: [
          {
            dst: {
              key: {
                deviceId: 'device:10.10.10.11',
                port: '3'
              }
            },
            src: {
              key: {
                deviceId: 'device:10.10.10.15',
                port: '1'
              }
            },
            type: 'wireless'
          },
          {
            dst: {
              key: {
                deviceId: 'device:10.10.10.10',
                port: '1'
              }
            },
            src: {
              key: {
                deviceId: 'device:10.10.10.11',
                port: '1'
              }
            },
            type: 'wireless'
          },
          {
            src: {
              key: {
                deviceId: 'device:10.10.10.10',
                port: '3'
              }
            },
            dst: {
              key: {
                deviceId: 'device:10.10.10.13',
                port: '1'
              }
            },
            type: 'wireless'
          },
          {
            src: {
              key: {
                deviceId: 'device:10.10.10.13',
                port: '6'
              }
            },
            dst: {
              key: {
                deviceId: 'device:10.10.10.22',
                port: '3'
              }
            },
            type: 'wireless'
          }
        ]
      },
      {
        key: {
          src: '10.10.10.17',
          dst: '10.10.10.21'
        },
        links: [
          {
            dst: {
              key: {
                deviceId: 'device:10.10.10.12',
                port: '2'
              }
            },
            src: {
              key: {
                deviceId: 'device:10.10.10.17',
                port: '1'
              }
            },
            type: 'wireless'
          },
          {
            dst: {
              key: {
                deviceId: 'device:10.10.10.10',
                port: '2'
              }
            },
            src: {
              key: {
                deviceId: 'device:10.10.10.12',
                port: '1'
              }
            },
            type: 'wireless'
          },
          {
            src: {
              key: {
                deviceId: 'device:10.10.10.10',
                port: '3'
              }
            },
            dst: {
              key: {
                deviceId: 'device:10.10.10.13',
                port: '1'
              }
            },
            type: 'wireless'
          },
          {
            src: {
              key: {
                deviceId: 'device:10.10.10.13',
                port: '3'
              }
            },
            dst: {
              key: {
                deviceId: 'device:10.10.10.21',
                port: '1'
              }
            },
            type: 'wireless'
          }
        ]
      }
    ]
  }
}
