import { createServer, Model } from "miragejs";

export default function mirageConfig() {
  return createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'teste',
            type: 'deposit',
            category: 'dev',
            amount: 12,
            createdAt: new Date('2021-03-20 13:20:00')
          }
        ],
      })
    },

    routes() {
      this.namespace = 'api';

      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create('transaction', data);
      })
    }
  });
}