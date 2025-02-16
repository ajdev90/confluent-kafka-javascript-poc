const {Kafka} = require('@confluentinc/kafka-javascript').KafkaJS;

const producer = new Kafka().producer({
    'bootstrap.servers': 'broker:9092',
});

const run = async () => {
    await producer.connect();
    const deliveryReports = await producer.send({
        topic: 'new_topic',
        messages: [
            { value: 'new message 10', key: 'x' },
            { value: 'new message 11', key: 'x' },
            { value: 'new message 12', key: 'x' },
        ]
    });
    console.log({ deliveryReports });
    await producer.disconnect();
}

run().catch(e => console.error(`Error: ${e.message}`, e))

