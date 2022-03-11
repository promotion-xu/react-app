import stores from "store";


class Tray {
    constructor() { }

    async init() {
        const trayId = store.app.trayId
        stores.subscribe(() => {
            const newState = store.app.trayId
            this.handleTrayChange(newState)
        })
    }

    handleTrayChange(id: string) {

    }

    destory() {

    }
}

export default new Tray()