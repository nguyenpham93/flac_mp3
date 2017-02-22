-Demo kỹ thuật child-process, BlueBird promise, Async-Await, Then</br>
 <h3>Yêu cầu :</h3>
 - Convert file định dạng flac sang mp3
 - Trả về thư mục file mp3 có cấu trúc giống thư mục flac  
 - Khi convert những files nào bị lỗi hoặc không đúng định dạng sẽ được xữ lý riêng và log vào log.txt
 - Những files nào đã convert thì sẽ không convert lại
 - Convert xong sẽ hiển thị execute time, tối ưu chương trình
 <h3>Chạy thử ứng dụng</h3></br>
 <pre>
 git clone https://github.com/nguyenpham93/flac_mp3.git
 cd flac_mp3
 mp3 install
 node --harmony-async-await convert_runner.js
 </pre>
 <h3>Các kỹ thuật sử dụng</h3>
 - Dùng module ffmpeg.js để convert flac to mp3 : 
 <pre>spawn('ffmpeg', ['-y', '-i', inputFile, '-ab', '320k', '-map_metadata', '0', '-id3v2_version', '3', outputFile]);</pre>
 - Promise + async-await , then()
 - Child-process 
 - Module shelljs : Dùng tạo subfolder 
 <h3>1/ scanfile.js</h3>
 - Scanner.getFile(srcFolder ) : Dùng để đọc file flac trong thư mục source
 - Scanner.cutPath(filepath) : Rút ngắn đường dẫn file bằng cách cắt bớt source folder 
 - Scanner.addFlac(dir,check): Gọi hàm getFile(dir) lấy toàn bộ files trong thư mục gốc,kiểm tra đuôi .flac và trả về mảng files flac (không chứa thư mục)
 - Scanner.checkFlac(file) : kiểm tra file định dạng flac và return true/false 
 - Chạy listAllPath (srcFolder) : Hàm xử lý chung Scanfile
 </br>
 
 <h3>2/ converter.js</h3>
 - Convert.mp3Path(arrFlac) : convert mảng flac và trả về mảng mp3 
 - Convert.flacToMp3(InputFile,OutputFile) : convert mỗi file flac thành mp3
 - Convert.checkFileExist(file) : Kiểm tra xem file đã tồn tại chưa, nếu tồn tại rồi thì không convert file n
 -<h3>3/ convert_runner.js</h3> 
 - renderFile(arrFlac,arrMp3,convert) : Tiến hành convert danh sách files flac thành mp3,giới hạn số file chạy, nếu có file lỗi sẽ được xử lý riêng và log vào file log.txt 
 - runner(srcFolder,desFolder): hàm xử lý chung, gọi hàm này để chạy toàn bộ chương trình
 +Demo kỹ thuật child-process, BlueBird promise
