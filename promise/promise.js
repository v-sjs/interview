class Promise {
    constructor(executor) {
        this.status = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onFulfilledFn = []
        this.onRejectedFn = []
        let resolve = (data) => {
            if (this.status === 'pending') {
                this.value = data;
                this.status = 'resolved'
                console.log(this.onFulfilledFn);
                this.onFulfilledFn.forEach(fn => fn())
            }
        }
        let reject = (err) => {
            if (this.status === 'pending') {
                this.reason = err;
                this.status = 'rejected'
                this.onRejectedFn.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onFulfilled, onRejected) {
        if (this.status === 'resolved') {
            onFulfilled(this.value)
        }
        if (this.status === 'rejected') {
            onRejected(this.reason)
        }
        if (this.status === 'pending') {
            this.onFulfilledFn.push(() => { onFulfilled(this.value) })
            this.onRejectedFn.push(() => { onRejected(this.reason) })
        }
    }
}
module.exports = Promise