# Ứng dụng convert flac to mp3

Demo kỹ thuật child-process, BlueBird promise</br>
<strong>Chạy thử ứng dụng</strong></br>
<pre>
git clone https://github.com/nguyenpham93/flac_mp3.git
cd flac_mp3
mp3 install
node --harmony-async-await convert_runner.js
</pre>
<strong>Các kỹ thuật sử dụng</strong>
- Dùng module ffmpeg.js để convert flac to mp3 : 
<pre>spawn('ffmpeg', ['-y', '-i', inputFile, '-ab', '320k', '-map_metadata', '0', '-id3v2_version', '3', outputFile]);</pre>
- Promise + async-await , then
- Child-process

<strong>1/ scanfile.js</strong>
<strong>- Scanner.getFile(srcFolder )</strong> : Dùng để đọc file flac trong thư mục source
<strong>- Scanner.cutPath(filepath)</strong> : Rút ngắn đường dẫn file bằng cách cắt bớt source folder 
- <strong>Scanner.addFlac(dir,check) </strong>: Gọi hàm getFile(dir) lấy toàn bộ files trong thư mục gốc,kiểm tra đuôi .flac và trả về mảng files flac (không chứa thư mục)
- Chạy <strong>listAllPath (srcFolder) </strong>: Hàm xử lý chung Scanfile
<br>

<strong>2/ convert.js</strong>
<strong>-Convert.mp3Path(arrFlac)</strong> : convert mảng flac và trả về mảng mp3 
<strong>-Convert.flacToMp3(InputFile,OutputFile)</strong> : convert mỗi file flac thành mp3

<strong>3/ convert_runner.js </strong>
<strong>- renderFile(arrFlac,arrMp3,convert)<strong> : Tiến hành convert danh sách files flac thành mp3,giới hạn số file chạy, nếu có file lỗi sẽ được xử lý riêng và log vào file log.txt
<strong>- runner(srcFolder,desFolder) </strong>: hàm xử lý chung, gọi hàm này để chạy toàn bộ chương trình
