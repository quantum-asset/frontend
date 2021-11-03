export class ResponseController {
    /**
     * 
     * @param {*} status 
     * @param {*} message 
     * @param {*} data 
     * @returns 
     */
  static ok = (status, message, data) => {
    return { success: status.toLowerCase() === "ok" || status.toLowerCase() === "success", message, data };
  };
  /**
   * 
   * @param {*} message 
   * @returns 
   */
  static error = (message) => {
    return { success: false, message };
  };
}
