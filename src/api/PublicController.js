import fs from 'fs'
import path from 'path'

class PublicController {
  constructor() {
  }
  async getHomeResources(ctx) {
    const file = path.join(__dirname, 'mock/index.json');
    const data = fs.readFileSync(file, 'utf-8');
    ctx.body = data
  }
  async getCityResources(ctx) {
    const file = path.join(__dirname, 'mock/city.json');
    const data = fs.readFileSync(file, 'utf-8');
    ctx.body = data
  }
  async getDetailResources(ctx) {
    const file = path.join(__dirname, 'mock/detail.json');
    const data = fs.readFileSync(file, 'utf-8');
    ctx.body = data
  }
}

export  default new PublicController();
