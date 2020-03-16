export const AppConfig = {

  // -- configMongoDbs --
  //SIT1
  // MONGODB_URL: 'mongodb://bdmsuser:bdmsuser@172.22.17.121:27017/arcusairdb',
  //SIT3
  // MONGODB_URL: 'mongodb://bdmsuser:bdmsuser@172.22.17.132:27018/arcusairdb',
  //UAT
  // MONGODB_URL: 'mongodb://bdmsuser:bdmsuser@172.22.10.121:27017/arcusairdb',
  //GLS
  // MONGODB_URL: 'mongodb://bdmsuser:bdmsuser@172.22.10.121:27017/arcustraining',
  //MOCRUN
  // MONGODB_URL: 'mongodb://bdmsuser:bdmsuser@172.22.32.12:27017,172.22.32.121:27017,172.22.32.132:27017/arcusairdb?replicaSet=arcusapp&readPreference=secondary',
  //Kafka
  // MONGODB_URL: 'mongodb://bdmsuser:bdmsuser@172.18.73.91:27017/arcusairdb',
  //PROD
   MONGODB_URL: 'mongodb+srv://jasperreport:ZOr7SdGRApSRNkRg@prod-mongodb-atlas-qduxy.mongodb.net/arcusairdb?retryWrites=true&w=majority',
  // MONGODB_URL: 'mongodb+srv://jasperreport:ZOr7SdGRApSRNkRg@prod-mongodb-atlas-qduxy.mongodb.net/arcusairdb?replicaSet=arcusapp&readPreference=secondary',
//don't pass
  // MONGODB_URL: 'mongodb+srv://jasperreport:ZOr7SdGRApSRNkRg@prod-mongodb-atlas-qduxy.mongodb.net/arcusairdb?replicaSet=arcusapp&readPreference=secondaryPreferred',
  // MONGODB_URL: 'mongodb+srv://jasperreport:ZOr7SdGRApSRNkRg@prod-mongodb-atlas-qduxy.mongodb.net/arcusairdb?replicaSet=Prod-MongoDB-Atlas-shard-0&readPreference=secondary',
};