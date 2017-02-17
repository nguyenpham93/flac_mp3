//TODO: File này là file phối hợp giữa scanfile.js và converter.js
//TODO: File này là file phối hợp giữa scanfile.js và converter.js
const Converter = require("./converter").Converter;
const ScanFile = require("./scanfile").ScanFile;
const Promise = require('bluebird');

let srcFolder = "/home/bluevn/Desktop/flacfolder";
let desFolder = "/home/bluevn/Desktop/mp3folder";

let temp = [{
            'src' : srcFolder.concat('/a.flac'),
            'status' : 'none'
            },
            {
            'src' : srcFolder.concat('/b.flac'),
            'status' : 'none'
            },
            {
            'src' : srcFolder.concat('/c.flac'),
            'status' : 'none'
            }];

/*** 
    Func chuyển .flac files thành .mp3 files
    Giới hạn 1 files 1 lần convert
    * @param arrFiles : mảng chứa đường dẫn tới các files .flac  
*/

 async function runner(arrFiles){
    var myConvert = new Converter(srcFolder,desFolder);
    var len = arrFiles.length;
    for(var i = 0 ;i< len; i++){
        await myConvert.flacToMp3(arrFiles[i].src);
        console.log(`Convert completed ${i + 1} files`);
    }
 }

runner(temp);
