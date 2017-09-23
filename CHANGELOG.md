# Change Log
This project adheres to [Semantic Versioning](http://semver.org/).

## 0.2
* Use Logux Protocol 2.
* Use Logux Core 0.2.
* Change `nodeId`/`otherNodeId` naming to `localNodeId`/`remoteNodeId`.
* Change `protocol`/`otherProtocol` naming to `localProtocol`/`remoteProtocol`.
* Change `subprotocol`/`otherSubprotocol` naming
  to `localSubprotocol`/`remoteSubprotocol`.
* Change `synced`/`otherSynced` to `lastSent`/`lastReceived`.
* Remove `wait` state.
* Remove `BaseSync#once` method.
* Use string as subprotocol.
* Add `connect` event.
* Add messages validation (by Denis Raslov).
* Add `BaseSync#sendDebug` method and `debug` event (by Vladimir Trukhin).
* Try to connect again during `online` event (by Vladimir Borovik).
* Add `TestPair`.
* Add delay to `LocalPair`.
* Add `reason` argument to `Connection#disconnect`.
* Use `outMap` and `outFilter` and in handshake actions synchronization.
* Don’t throw error on message to disconnected connection.
* Fix docs (by Mohamad Jahani).

## 0.1.2
* Fix falling on connection error.

## 0.1.1
* Fix timeout and reconnecting.

## 0.1
* Initial release.
