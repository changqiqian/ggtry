
export class NetworkHttp 
{
    public HttpGet(_url: string, _success: Function, _error: Function) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', _url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                let resp = null;
                try {
                    if (xhr.responseText != '') {
                        resp = JSON.parse(xhr.responseText);
                    }
                } catch (e) {}
                _success && _success(xhr.status, resp, xhr.responseText);
            }
        };

        xhr.onerror = function (err) {
            console.log('HttpGet err ====' + err);
            console.log('HttpGet url ====' + _url);
            _error && _error();
        };
        xhr.send();
    }
}

