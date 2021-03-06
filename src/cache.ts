class CacheHandler {
    // Map correlating dojot's device ID and AMQP device routing key
    dojot_to_device_amqp_routing_key: {
      [id: string]: string
    }

    // Map correlating AMQP device routing key and dojot's device ID
    device_amqp_routing_key_to_dojot: {
      [id: string]: string
    }

    constructor() {
      this.dojot_to_device_amqp_routing_key = {};
      this.device_amqp_routing_key_to_dojot = {};
    }

    correlate_dojot_and_device_amqp_routing_key(dojot_device_id: string, device_amqp_routing_key: string) {
      this.dojot_to_device_amqp_routing_key[dojot_device_id] = device_amqp_routing_key;
      this.device_amqp_routing_key_to_dojot[device_amqp_routing_key] = dojot_device_id;

      console.log("Adding correlation dojot [%s] <-> [%s] amqp routing key", dojot_device_id, device_amqp_routing_key);
    }

    remove_correlation_dojot_and_device_amqp_routing_key(dojot_device_id: string, device_amqp_routing_key: string) {
      delete this.dojot_to_device_amqp_routing_key[dojot_device_id];
      delete this.device_amqp_routing_key_to_dojot[device_amqp_routing_key];

      console.log("Removing correlation dojot [%s] <-> [%s] amqp routing key", dojot_device_id, device_amqp_routing_key);
    }

    get_dojot_device_id(device_amqp_routing_key: string): string {
      return this.device_amqp_routing_key_to_dojot[device_amqp_routing_key];
    }

    get_device_amqp_routing_key(dojot_device_id: string) : string {
        return this.dojot_to_device_amqp_routing_key[dojot_device_id];
    }
  }

  export {CacheHandler};
