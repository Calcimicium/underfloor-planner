export default class UnderfloorPlanner {
	constructor(container: HTMLElement)
	constructor(container: string)
	constructor(container: string | HTMLElement) {
		if (!container) throw new Error('Container must not be null or undefined.')

		this._container = this.getContainer(container)
		this.initComponents()
		this.initEventListeners()
	}

	private getContainer(container: string | HTMLElement) {
		if (typeof container === 'string') {
			const tempContainer = document.getElementById(container)

			if (tempContainer) return tempContainer

			throw new Error(`Container element with id "${container}" does not exist or is not loaded. Be sure the DOM is totally loaded before executing the "start()" function.`)
		}

		return container
	}

	private initCanvas() {
		this._canvas = document.createElement('canvas')
		this.resizeCanvas()
	}

	private initComponents() {
		this.initCanvas()
		this._container.append(this._canvas)
	}

	private initEventListeners() {
		window.addEventListener('resize', () => this.handleDocumentResize())
	}

	private handleDocumentResize(): void {
		this.resizeCanvas()
	}

	private resizeCanvas(): void {
		this._canvas.width = this._container.clientWidth
		this._canvas.height = this._container.clientHeight
	}

	private _canvas!: HTMLCanvasElement
	private _container: HTMLElement
}
