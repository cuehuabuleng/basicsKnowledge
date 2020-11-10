class HD {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(executor) {
        this.state = HD.PENDING;
        this.value = null;
        this.callback = [];
        try {
            executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }

    }

    resolve(value) {
        if (this.state === HD.PENDING) {
            this.state = HD.FULFILLED;
            this.value = value;
            setTimeout(() => {
                this.callback.map((item) => {
                    item.onFufilled(this.value);
                })
            })
        }

    }
    reject(reason) {
        if (this.state === HD.PENDING) {
            this.state = HD.REJECTED;
            this.value = reason;
            setTimeout(() => {
                this.callback.map((item) => {
                    item.onRejected(this.value);
                })
            })
        }
    }
    then(onFufilled, onRejected) {
        if (typeof onFufilled !== 'function') {
            onFufilled = () => { }
        }
        if (typeof onRejected !== 'function') {
            onRejected = () => { }
        }

        return new HD((resolve, reject) => {
            if (this.state === HD.PENDING) {
                this.callback.push({
                    onFufilled: (value) => {
                        try {
                            let result = onFufilled(value)
                            resolve(result)
                        } catch (error) {
                            onRejected(error)
                        }
                    },
                    onRejected: (value) => {
                        try {
                            let result = onRejected(value);
                            resolve(result);
                        } catch (error) {
                            onRejected(error)
                        }
                    }
                })
            }
            if (this.state === HD.FULFILLED) {
                setTimeout(() => {
                    try {
                        let result = onFufilled(this.value)
                        resolve(result)
                    } catch (error) {
                        onRejected(error)
                    }
                })
            }
            if (this.state === HD.REJECTED) {
                setTimeout(() => {
                    try {
                        let result = onRejected(this.value)
                        resolve(result)
                    } catch (error) {
                        onRejected(error)
                    }
                })

            }
        })
    }
}