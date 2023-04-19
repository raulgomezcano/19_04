export class Factura{
    private _idFactura: number = 0
    public get idFactura(): number {
        return this._idFactura
    }
    public set idFactura(value: number) {
        this._idFactura = value
    }
    private _idCliente: number = 0
    public get idCliente(): number {
        return this._idCliente
    }
    public set idCliente(value: number) {
        this._idCliente = value
    }
    private _totalFactura: number = 0
    public get totalFactura(): number {
        return this._totalFactura
    }
    public set totalFactura(value: number) {
        this._totalFactura = value
    }
    private _IVA: number = 0
    public get IVA(): number {
        return this._IVA
    }
    public set IVA(value: number) {
        this._IVA = value
    }
    constructor(idFactura:number, idCliente:number, IVA:number, totalFactura:number){
        this._idFactura=idFactura
        this._idCliente=idCliente
        this._totalFactura=totalFactura
        this._IVA=IVA
    }
}