const {Kafka} = require('@confluentinc/kafka-javascript').KafkaJS;

const consumer = new Kafka().consumer({
    'bootstrap.servers': 'broker:9092',
    'group.id': 'my-consumer', // Mandatory property for a consumer - the consumer group id.
});

const run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topics: ["new_topic"] });
    consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                topic,
                partition,
                headers: message.headers,
                offset: message.offset,
                key: message.key?.toString(),
                value: message.value.toString(),
            });
        }
    });

}

run().catch(e => console.error(`Error: ${e.message}`, e))
