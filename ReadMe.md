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

1/ scanfile.js
- Scanner.getFile(srcFolder ) : Dùng để đọc file flac trong thư mục path
- Scanner.cutPath(filepath) : Rút ngắn path bằng cách cắt bớt source folder 
- Scanner.addFlac() : Trả về một mảng chứa các Files Flac 
- Chạy listAllPath (srcFolder)
2/ convert
