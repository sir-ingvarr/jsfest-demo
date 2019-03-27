import CacheBoundary from '../utils/cache'

const HOUR = 3600

class Foo {
  @CacheBoundary.cached({ ttl: 2 * HOUR })
  async bar(arg1: string, arg2: number): Promise<any> {
    // await db request maybe?
    return Promise.resolve({})
  }
}

export default Foo
