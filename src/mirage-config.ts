import { createServer } from "miragejs";

export default function mirageConfig() {
  return createServer({
    routes() {
      this.namespace = 'api';

      this.get('/transactions', () => {
        return [
          {
            id: 1,
            title: 'Transaction 1',
            amount: 400,
            type: 'deposit',
            category: 'food',
            createdAd: new Date()
          }
        ]
      })
    }
  });
}