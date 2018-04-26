const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs
    .options({
        a:{
            demand:true,
            alias:'address',
            describe:'Address to fetch weather for',
            string:true
        }
    })
    .help()
    .alias('help','h')
    .alias('version','v')
    .argv;

var main = async () => {
    try{
        var locationData = await geocode.geocodeAddressFunc(argv.a);
        var weatherData = await weather.weatherDetails(locationData);
        console.log(JSON.stringify(weatherData, undefined,2));
    }catch (e){
        console.log(e);
    }
};

main();

