import { FastifySchema } from "fastify";

export const getProvinceSchema: FastifySchema = {
  headers: {
    type: 'object',
    properties: {
      'accept-language': {
        type: 'string',
        enum: ['TH', 'EN']
      }
    }
  },
  querystring: {
    type: 'object',
    properties: {
      regionId: { type: 'number' },
      descending: { type: 'boolean' }
    }
  },
  response: {
    200: {
      type: 'array',
      items: {
        groupId: { type: 'number' },
        id: { type: 'number' },
        image: { type: 'string' },
        name: { type: 'string' }
      },
      additionalProperties: true
    }
  }
}

export const getZoneSchema: FastifySchema = {
  headers: {
    type: 'object',
    properties: {
      'accept-language': {
        type: 'string',
        enum: ['TH', 'EN']
      }
    }
  },
  response: {
    200: {
      type: 'array',
      items: {
        id: { type: 'number' },
        image: { type: 'string' },
        name: { type: 'string' },
      },
      additionalProperties: true
    }
  }
}

export const getProductType: FastifySchema = {
  headers: {
    type: 'object',
    properties: {
      'accept-language': {
        type: 'string',
        enum: ['TH', 'EN']
      }
    }
  },
  response: {
    200: {
      type: 'array',
      items: {
        id: { type: 'number' },
        image: { type: 'string' },
        name: { type: 'string' },
      },
      additionalProperties: true
    }
  }
}

export const getTruckType: FastifySchema = {
  headers: {
    type: 'object',
    properties: {
      'accept-language': {
        type: 'string',
        enum: ['TH', 'EN']
      }
    }
  },
  response: {
    200: {
      type: 'array',
      items: {
        id: { type: 'number' },
        image: { type: 'string' },
        name: { type: 'string' },
        groupId: { type: 'number' },
      },
      additionalProperties: true
    }
  }
}

export const getTruckTypeGroup: FastifySchema = {
  headers: {
    type: 'object',
    properties: {
      'accept-language': {
        type: 'string',
        enum: ['TH', 'EN']
      }
    }
  },
  response: {
    200: {
      type: 'array',
      items: {
        id: { type: 'number' },
        name: { type: 'string' },
      },
      additionalProperties: true
    }
  }
}

