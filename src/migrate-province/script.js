const { Pool } = require('pg');

const devConnection = {
  host: "cgl-dev-db.ccyrpfjhgi1v.ap-southeast-1.rds.amazonaws.com",
  user: "postgres",
  password: ".9^Piv-.KlzZhZm.MU7vXZU7yE9I-4",
  database: "master_data_service",
  port: 5432,
}

const stgConnection = {
  host: "cgl-db.cj4ycxviwust.ap-southeast-1.rds.amazonaws.com",
  user: 'postgres',
  password: "7uZrE546PzCjEV^e^tKpvs43PJTnHN",
  database: 'master_data_service',
  port: 5432,
}

const productionConnection = {
  host: "cgl-db.cs7ingowcayi.ap-southeast-1.rds.amazonaws.com",
  user: "postgres",
  password: "FaOpNg13iRDxxHWR8iOmV=Mx-YHzGI",
  database: "master_data_service",
  port: 5432,
}

const updateProvinceZoneId = async () => {

  const clientProvince = new Pool(stgConnection)

  const connectProvince = await clientProvince.connect();
  const { rows: Province } = await connectProvince.query(`SELECT * FROM addr_province;`);

  console.log("PROVINCE :: ", Province)

  await connectProvince.query(`UPDATE addr_province
      SET zone_id = 2
      WHERE id = 50`);
  await connectProvince.query(`UPDATE addr_province
      SET zone_id = 2
      WHERE id = 48`);
  await connectProvince.query(`UPDATE addr_province
      SET zone_id = 2
      WHERE id = 54`);
  await connectProvince.query(`UPDATE addr_province
      SET zone_id = 2
      WHERE id = 53`);
  await connectProvince.query(`UPDATE addr_province
      SET zone_id = 2
      WHERE id = 52`);
  await connectProvince.query(`UPDATE addr_province
      SET zone_id = 2
      WHERE id = 49`);
  await connectProvince.query(`UPDATE addr_province
      SET zone_id = 2
      WHERE id = 55`);




  await connectProvince.query(`UPDATE addr_province
      SET zone_id = 1
      WHERE id = 57`);
  await connectProvince.query(`UPDATE addr_province
      SET zone_id = 1
      WHERE id = 63`);
  await connectProvince.query(`UPDATE addr_province
      SET zone_id = 1
      WHERE id = 56`);
  await connectProvince.query(`UPDATE addr_province
      SET zone_id = 1
      WHERE id = 2`);
  await connectProvince.query(`UPDATE addr_province
      SET zone_id = 1
      WHERE id = 62`);
  await connectProvince.query(`UPDATE addr_province
      SET zone_id = 2
      WHERE id = 51`);

  console.log('Finished');
  return true;

}







const main = async () => {
  try {
    // await createExtendsion()
    await updateProvinceZoneId()
    return true
  } catch (error) {
    throw error
  }
}
main()
