import SnowflakeId from 'snowflake-id';

class IdUtils {
  // eslint-disable-next-line class-methods-use-this
  genID(length) {
    return Number(
      Math.random()
        .toString()
        .substr(3, length) + Date.now()
    ).toString(36);
  }
  /**
   * 获取雪花算法的id
   * @returns
   */
  // eslint-disable-next-line class-methods-use-this
  getSnowId() {
    const id = new SnowflakeId();
    return id.generate();
  }
}
const idUtils = new IdUtils();
export { idUtils };
