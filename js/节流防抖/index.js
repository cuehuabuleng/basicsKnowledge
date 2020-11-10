
        function debounce(fn, delay) {
            let timer = null;
            return function () {
                let args = arguments;
                let _this = this;
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    fn.apply(_this, args);
                }, delay)
            }
        }
