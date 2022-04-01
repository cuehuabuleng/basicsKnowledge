function ajax(options) {
    options = options || {}
    let baseUrl = 'http://114.55.93.74:3003';
    let requestMethods = ['GET', 'POST', 'HEAD', 'PUT', 'DELETE', 'OPTIONS', 'TRSCK', 'CONNECT']
    options.type = (options.type || 'GET').toUpperCase();
    options.dataType = options.dataType || 'json';
    options.contentType = options.contentType || 'application/json'
    let params = formatParams(options.data);
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = ActiveXObject('Microsoft.XMLHTTP')
    }
    if (requestMethods.indexOf(options.type) < 0) {
        options.error && options.error('request methods error')
    } else {
        if (options.type === 'GET') {
            xhr.open('GET', baseUrl + options.url + '?' + params, true)
            xhr.send(null)
        } else if (options.type === 'POST') {
            xhr.open('POST', baseUrl + options.url, true)
            xhr.setRequestHeader('Content-type', options.contentType)
            switch (options.contentType) {
                case 'application/x-www-form-urlencoded':
                    xhr.send(params);
                    break;
                case 'application/json':
                    xhr.send(JSON.stringify(options.data));
                default:
                    break;
            }
        }
    }
    setTimeout(function () {
        if (xhr.readyState != 4) {
            xhr.abort();
        }
    }, Number(options.timeout));

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let status = xhr.status;
            if (status >= 200 && status < 300 || status === 304) {
                options.success && options.success(JSON.parse(xhr.responseText), xhr.responseXML)
            } else {
                options.error && options.error(status)
            }
        }
    }
}

// 格式化请求参数
function formatParams(data, type) {
    let arr = [];
    for (let name in data) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
    }
    // 不留缓存
    arr.push(('v=' + Math.random()).replace('.', ''))
    return arr.join('&');
}