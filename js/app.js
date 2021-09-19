function insert(num) {
    document.form.textView.value = 
    document.form.textView.value + num;
}

function clean() {
    document.form.textView.value = "";
}

function back() {
    let point = document.form.textView.value;
    document.form.textView.value = point.substring(0,point.length - 1);
}

function result() {
    let point = document.form.textView.value;
    if (point) {
        document.form.textView.value = eval(point);
    }
}

// console.log(document.form.textView);