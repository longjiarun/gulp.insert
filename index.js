var through = require('through2');

function toStream(text) {
    var stream = through();
    stream.write(text);
    return stream;
}

function insert(text,flag) {
    /**
     * flag == true 添加到文件前
     * flag ！== true 添加到文件后
     */
    if (!text) {
        return;
    }

    var stream = through.obj(function(file, enc, cb) {
        text = new Buffer(typeof text == "function" ? text(file) : text);


        var buff = [ file.contents, text];
        if (file.isBuffer()) {
            flag && (buff = [text, file.contents]);

            file.contents  = Buffer.concat(buff);


        }else if (file.isStream()) {            
            var streamer = toStream(text);

            file.contents = flag ? file.contents.pipe(streamer) : streamer.pipe(file.contents);
        }
        
        this.push(file);
        cb();
    });

    return stream;
};
module.exports = insert;