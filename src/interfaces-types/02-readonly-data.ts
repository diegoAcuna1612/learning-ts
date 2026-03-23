interface Expediente{
    readonly id: number;
    readonly numeroExpediente:string
}

const exp1:Expediente={
    id:1,
    numeroExpediente:'E001'
};

exp1.id=4;
console.log(exp1)