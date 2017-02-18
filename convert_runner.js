//TODO: File này là file phối hợp giữa scanfile.js và converter.js
const Converter = require("./converter").Converter;
const ScanFile = require("./scanfile").ScanFile;
const Promise = require('bluebird');

let srcFolder = "/home/bluevn/Desktop/flacfolder";
let desFolder = "/home/bluevn/Desktop/mp3folder";

var temp = [
            {
            'src' : srcFolder.concat('/a1.flac'),
            'status' : 'none'
            },
            {
            'src' : srcFolder.concat('/abc/a.flac'),
            'status' : 'none'
            },
            {
            'src' : srcFolder.concat('/abc/b.flac'),
            'status' : 'none'
            },
            {
            'src' : srcFolder.concat('/c.flac'),
            'status' : 'none'
            },
            {
            'src' : srcFolder.concat('/d.flac'),
            'status' : 'none'
          },
          {
            'src' : srcFolder.concat('/e.flac'),
            'status' : 'none'
          },
          {
            'src' : srcFolder.concat('/f.flac'),
            'status' : 'none'
          },
          ];
          

/*** 
    Func chuyển .flac files thành .mp3 files
    Giới hạn 1 files 1 lần convert
    * @param arrFiles : mảng chứa đường dẫn tới các files .flac  
*/

  var count = 0;
  var flag = 0;
  var myConvert = new Converter(srcFolder,desFolder);
 function runner(arrFiles){
    var len = arrFiles.length;
        arrFiles.forEach((file)=>{
                if(count < 2 && file.status === 'none'){
                    count++;
                    myConvert.flacToMp3(file.src).then((success)=>{
                        file.status = 'done';
                        count--;
                        console.log("count" + count);
                        runner(arrFiles);
                    });
                }   
            });
 }
 runner(temp);


