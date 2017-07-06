var BaseSync = require('./base-sync')
var merge = require('./merge')

var DEFAULT_OPTIONS = {
  fixTime: true,
  timeout: 20000,
  ping: 5000
}

/**
 * Client node in synchronization pair.
 *
 * Instead of server node, it initializes synchronization
 * and sends connect message.
 *
 * @param {string} nodeId Unique current machine name.
 * @param {Log} log Logux log instance to be synchronized.
 * @param {Connection} connection Connection to remote node.
 * @param {object} [options] Synchronization options.
 * @param {object} [options.credentials] Client credentials.
 *                                       For example, access token.
 * @param {authCallback} [options.auth] Function to check server credentials.
 * @param {boolean} [options.fixTime=true] Detect difference between client
 *                                         and server and fix time
 *                                         in synchronized actions.
 * @param {number} [options.timeout=20000] Timeout in milliseconds
 *                                         to wait answer before disconnect.
 * @param {number} [options.ping=5000] Milliseconds since last message to test
 *                                     connection by sending ping.
 * @param {filter} [options.inFilter] Function to filter actions from server.
 *                                    Best place for permissions control.
 * @param {mapper} [options.inMap] Map function to change remote node’s action
 *                                 before put it to current log.
 * @param {filter} [options.outFilter] Filter function to select actions
 *                                     to synchronization.
 * @param {mapper} [options.outMap] Map function to change action
 *                                  before sending it to remote client.
 * @param {string} [options.subprotocol] Application subprotocol version
 *                                       in SemVer format.
 *
 * @example
 * import { ClientSync } from 'logux-sync'
 * const connection = new BrowserConnection(url)
 * const sync = new ClientSync(nodeId, log, connection)
 *
 * @extends BaseSync
 * @class
 */
function ClientSync (nodeId, log, connection, options) {
  options = merge(options, DEFAULT_OPTIONS)
  BaseSync.call(this, nodeId, log, connection, options)
}

ClientSync.prototype = {

  onConnect: function onConnect () {
    if (!this.connected) {
      this.connected = true
      var sync = this
      this.initializing = this.initializing.then(function () {
        if (sync.connected) sync.sendConnect()
      })
    }
  }

}

ClientSync.prototype = merge(ClientSync.prototype, BaseSync.prototype)

module.exports = ClientSync
